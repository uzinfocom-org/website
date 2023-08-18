---
title: "Nginxda ichki redireksiya yoxud katta stream servisda havolalarni tekshirish qanday amalga oshirilgan edi?"
description: "Odatda statik fayllarni uzatish uchun nginx server ko'targanda indeksatsiyadan himoyalash ancha muammoga aylanadi..."
slug: nginxda-ichki-redireksiya-yoxud-katta-stream-servisda-havolalarni-tekshirish-qanday-amalga-oshirilgan-edi
date: July 27, 2023
---

Uzmovi.com menga real foydalanuvchilar doirasida juda ko'p tajribalar qilish imkonini yaratib bergan platformalardan biri hisoblanadi. Katta oqimdagi foydalanuvchilar optimizatsiya va himoya tizimlaridagi turlicha metodlarni ishlab chiqish uchun yaxshi sabab bo'la oladi. Masalan bulardan biri bugun men sizlarga aytib bermoqchi bo'lgan ichki redireksiya hisoblanadi.

Odatda statik fayllarni uzatish uchun nginx server ko'targanda indeksatsiyadan himoyalash ancha muammoga aylanadi. Garchand nginxni o'zida juda ko'plab imkoniyatlar bo'lsada ulardan har doim ham maqsadli foydalanish imkoni mavjud emas. Yoki lua dasturlash tilini olaylik yaqin yillargacha nginxda qo'lbola funksiyalarni yozish uchun yaxshi metod edi. Lekin ubuntu 20.04dan boshlab Ubuntu server jamoasi ushbu moduldan quyidagi sabablarga ko'ra voz kechishdi.

- Lua modulining eskirishi
- Luaning eski versiyalari uchun liblua-dev qo'llash imkoni mavjud emas
- Luani yangi darajaga olib chiqish uchun qayta modullar yozish talabi

Aynan shu sababli nginx ham yangi versiyalardan luani qo'llab quvvatlashni to'xtatdi. Ammo umidni uzishga shoshilmang. Siz uchun nginxning ko'pchilik bexabar boshqa qismi ham bor.

Menimcha barcha dasturchilar http 301 redireksiyasidan xabardor bo'lsalar kerak.

```http
HTTP/1.1 301 Moved Permanently 
Location: http://www.example.org/another_page
```
Bu metod odatda foydalanuvchi brauzerini bir sahifadan boshqasiga yo'naltirish uchun ishlatiladi. Lekin biz buni tashqi redireksiya deb ataymiz. Chunki foydalanuvchi o'zgargan sahifadan xabardor bo'ladi.

Xuddi shu tartibda ishlaydigan ichki redireksiya ham mavjud, unda foydalanuvchi http://www.example.org/mypage sahifasiga murojaat qilsa redireksiya backend qismni o'zida amalga oshiriladi va foydalanuvchiga u murojaat qilgan havolani o'zidayoq ma'lumotlarni olib qolish imkoni mavjud bo'ladi.

Ho'sh bu qanday imkoniyatlar beradi?

Tasavvur qiling sizda ikkita server mavjud, birida sizning asosiy saytingiz, ikkinchisida esa yuklash uchun beriladigan statik fayllar joylashgan. Lekin siz static faylni yuklash ruxsatini faqatgina ro'yxatdan o'tgan foydalanuvchigagina berishingiz kerak. Yoki yana bir holatda sizda /download.php fali bor deylik unga siz ?file_id=123 so'rovini berganingizda 123 idenfikatorga asoslanib fayl joylashuvini topadi va  binary faylni uzatishi kerak. 

Odatda ko'pchilik o'zi foydalanadigan backend texnologiyada header orqali transfer qilish metodini qiladi. Masalan phpda:

```php
$file_url = '/home/user/file.exe';
header('Content-Type: application/octet-stream');
header("Content-Transfer-Encoding: Binary"); 
header("Content-disposition: attachment; filename=\"" . basename($file_url) . "\""); 
readfile($file_url); 
```
Ammo bu metodda siz ishlatayotgan texnologiya reader va proxy vazifasini bajarib serverdagi butun resursni band qilishga urinadi. Ya'ni oddiyroq aytganda download.php fayli 10Mb hajmga ega faylni uzatish uchun operativ xotiradan yana 10Mb joy egallashga majbur bo'ladi. Katta fayllar haqidaku bunday metodda o'ylamagan ham maqul.

Ichki redireksiyada barchasi boshqacha ishlaydi. Siz avvalo kerakli texnologiyangiz bilan (menda php) foydalanuvchi barcha shartlarni bajarayonganini tekshirasiz, keyin esa xuddi 301 kabi uni boshqa ichki locationga yo'naltirasiz.

PHP kod:

```php
$file_id = $_GET['file_id'];
$row = $db->query( "SELECT id, filename, file_path FROM files WHERE id = {$file_id}" )->fetch();

header('Content-Type: application/octet-stream');
header("Content-Transfer-Encoding: Binary");
header('Content-Disposition: attachment; filename="'.$row["filename"].'"');
header("Content-Length: ".filesize( "/home/user/files/{$row["file_path"]}" ));

$location = "/internal_download/{$row["file_path"]}";
header("X-Accel-Redirect: " . $location);
```

Nginx konfiguratsiya:

```
server {
        listen 80 default_server;
        listen [::]:80 default_server;

        root /var/www/html;
        server_name _;

        types {
                image/jpeg jpg;
                video/mp4 mp4;
                audio/mpeg mp3;
        }

        location / {
                try_files $uri $uri/ = 404;
        }

        location ~ ^/internal_download/(?<filename>.*)$ {
                sendfile        on;
                sendfile_max_chunk 512;
                tcp_nopush      on;
                tcp_nodelay     on;
                include mime.types;
                alias /home/user/files/$filename;
                internal;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        }
}
```

Yuqoridagi misoldan tushunishingiz mumkinki "X-Accel-Redirect" orqali phpdan ichki redireksiya berilmoqda, nginxda esa internel seksiyasi orqali ichki redireksiya qabul qilib olinyapti. Bu usulning yana bir yaxshi tomoni borki foydalanuvchi internal blokga (Mendagi misolda: internal_download) murojaat qilgan vaqtda server uchun 404 xatoligini qaytaraveradi, ya'ni bu blok faqatgina server ichki qismidan ishlaydi xolos.

Shuningdek php fayl o'z ishini bajarib bo'lgach nginx fpm protsesdan murojaat qilingan php faylni o'chiradi, bu esa foydalanuvchi yuklab olguncha fpm protsess kuzatib turmasligini ta'minlab beradi. 

Nginx orqali katta hajmdagi fayllarni uzatishni ko'zda tutganlar uchun qo'shimcha bonus ham qilishni maqul ko'rdim va quyidagi konfiguratsiyalarni /etc/nginx/nginx.conf fayliga qo'shishni yoki ularni quyidagicha o'zgartirishni unutmang.

Bunda:

- worker_rlimit_nofile linuxdagi bitta protses uchun oldindan belgilangan maksimal fayllarni ochish sonini oshirib beradi.
- worker_connections nginx bir vaqtni o'zida maksimal qancha ulanishni qabul qila olishini belgilaydi
- multi_accept ichki protsess bir vaqtda bir necha fayllarga ulanish imkonini beradi

Agarda sizda fayllar hajmi 100Mbdan oshsa:

- tcp_nodelay paket hajmidan qat'iy nazar ma'lumotlarni buferga yuborishni ta'minlaydi
- tcp_nopush uzatilgan ma'lumotlar miqdorini optimallashtiradi
- keepalive_timeout bo'sh qolgan aloqa yopilish vaqti, ya'ni foydalanuvchi o'z ishini bajarib bo'lsa uni odatdagidek 75 soniya kutilmaydi. Balkim aloqa o'z o'rnida uziladi.


```
worker_rlimit_nofile 65535;
events {
        worker_connections 20000;
        multi_accept on;
}
http{
	tcp_nopush on;
	tcp_nodelay on;
	keepalive_timeout 0;
}
```