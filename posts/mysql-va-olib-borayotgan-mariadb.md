---
title: 'MySQL va o‘lib borayotgan MariaDB'
description: 'Shaxiy kompyuterlar erasining boshlanish davrida, yaʼni 1979-yilda TcX kompaniyasi tomonidan maʼlumotlarni boshqarish...'
slug: mysql-va-olib-borayotgan-mariadb
date: April 14, 2023
---

Kompyuterlar va dasturlar tarixi har qanday holatda ham maʼlumotlar jamlashga olib boradi. Bu o‘rinda esa barcha uchun birdek tanish bo‘lgan MySQLni alohida tilga olmaslik imkoni yo‘q. MySQL va MariaDB maʼlumotlar bazasini bemalol raqamli dunyoning muhim ustunlaridan biri deyish mumkin. Millionlab veb saytlar va dasturlar o‘zlarining muhim maʼlumotlarini aynan shu texnologiya asosida boshqarishadi.

Shaxiy kompyuterlar erasining boshlanish davrida, yaʼni 1979-yilda TcX kompaniyasi tomonidan maʼlumotlarni boshqarish uchun UNIREG nomli dasturiy mahsulot ishlab chiqildi. Keyinchalik 1994-yilda internet tarmoqlar uchun ilovalar ommalashishni boshladi va TcX kompaniyasi bu safar UNIREG asosida alohida dasturiy mahsulot ishlab chiqishga qaror qilishdi. Ammo UNIREG‘ning imkoniyatlari veb sahifalarni dinamik generatsiya qilish uchun yetmasdi. O‘z navbatida TxC ushbu muammoni hal etish uchun mSQL asoschisi Devid Xyuzga murojaat qiladi. Bundan maqsad B+ ISAM va mSQLʼni UNIREG uchun birlashtirish edi.

TcX kompaniyasini mSQL imkoniyatlari qoniqtirmadi va shu sababli SQL interfeysini qaytadan yozishga qaror qilindi. Yangi interfeys uchun mSQL apisi asos qilib olindi. Shu tartibda MySQLʼning birinchi versiyasi 1995-yilda relizga chiqarildi. Keyinchalik 2008-yilda Sun Microsystems tomonidan sotib olindi va MySQL AB tomonidan qo‘llab quvvatlandi. 2010-yilga kelib Oracle tomonidan Sun Microsystems va unga tegishli MySQL AB sotib olindi. Shundan so‘ng MySQL Oraclening maʼlumotlarni boshqarish tizimlari doirasiga kirdi.

MySQL logosidagi delfin surati 2001-yilda kompaniya CEOsi Maykl Videnius tomonidan ishlab chiqilgan. Bunga ko‘ra muallif “Men delfinlarni yaxshi ko‘raman. Ular tez, aqlli va mehribon.” deya izohlagan. Delfinga “Name the Dolphin” tanloviga asoslanib “Sakila” deb nom qo‘yilgan. Shuningdek eslatib o‘tish kerakki MySQLʼdagi “My” qismi “Mening” maʼnosini anglatmaydi. Ushbu qo‘shimcha Maykl Videnius qizining ismi sharafiga qo‘yilgan.

**MariaDB - MySQL vorisi:**

Struktura jihatdan MySQL va MariaDB bir xil. Aniqroq aytganda MariaDB 2010-yilda MySQLʼning 5.5 versiyasi kodlariga asoslanib ishlab chiqilgan. Bundan maqsad yangicha xususiyatlarni ham joriy qilish edi. Bunga ko‘ra Monty Program AB tomonidan Maykl Videniusʼning ikkinchi qizi ismi (Maria) sharafiga nom berildi. Mazmun jihatdan Maria “Area” (Maydon) sifatida yuritiladi. Har ikki dasturiy mahsulot ham bir xil tartibda fayllarni qayta ishlaydi. Asosiy farqlar esa ishlab chiqish jarayonida xolos.

Litsenziya: MySQL o‘z kodlarini GPL ostida ochiq manba sifatida taqdim etadi, shuningdek, MySQL Enterprise ko‘rinishida GPL shartlarisiz dasturiy taʼminotni tijoriy tarqatish imkoniyatini beradi. Holbuki, MariaDB faqat GPL dan foydalanishi kerak, chunki ularning ishi ushbu litsenziya shartlariga muvofiq MySQL manba kodidan olingan.

Qo‘llab quvvatlash: Oracle MySQLʼdan foydalanadigan mijozlar uchun turli maslahatlar, texnik yordamlar va sertifikatsiyalashni taklif etadi. MariaDBʼda ham o‘z qo‘llab-quvvatlash xizmatlari mavjud. Bunga ko‘ra MariaDB asosan kichik bizneslarni qo‘llab quvvatlashga ko‘proq eʼtibor qaratadi.

Hamjamiyat: MySQLdan farqli o‘laroq MariaDB Oracleʼdan ko‘ra ko‘proq hamjamiyat asosida rivojlanadi. Bunga ko‘ra yangilanishlar ortiqcha hujjashlashtirishsiz odatiy kechadi.

**Texnik farqlar:**

1.  Tezlik: MariaDBʼning MySQLʼga nisbatan eng muhim afzalligi uning tezligi va ishlashidir. Replikatsiya va so‘rovlarni bajarish haqida gap ketganda, MariaDB MySQLʼga qaraganda tezroq. Bundan tashqari MariaDB bir vaqtda juda ko‘plab ulanishlarni qo‘llay oladi.
2.  Xavfsizlik: MySQL parol xavfsizligini tekshirish va oshirish uchun ishlatiladigan validate_password komponenti bilan birga keladi. MariaDB, o‘z navbatida, foydalanuvchilarga maʼlumotlar bazasini boshqarishda ko‘proq xavfsizlikni taʼminlaydigan turli xil parolni tekshirish plaginlarini taklif qiladi.
3.  Shifrlash: MySQL vaqtinchalik jadvallarni va ikkilik sanoq tizimiga asoslangan loglarni shifrlamaydi. Boshqa tomondan, MariaDB ikkilik loglarni shifrlash va vaqtinchalik jadval shifrlashni qo‘llab-quvvatlaydi.
4.  Maʼlumotlarni saqlash mexanizmlari: MariaDB Blackhole, CSV, XtraDB, Aria, InnoDB, Archive, MariaDB ColumnStore, Connect, Cassandra Storage Engine va boshqalar ko‘plab mexanizmlarni qo‘llab-quvvatlaydi. MySQLʼda qo‘llab-quvvatlanadigan saqlash mexanizmlari esa MyISAM, Merge, Federated, InnoDB, Archive, Memory, CSV, Blackhole va Example hisoblanadi.

Ochiq mabalar: MariaDB to‘liq paketni taqdim etadi, MySQL esa maʼlum cheklovlar bilan birga keladi.

**O‘lib borayotgan MariaDB:**

Dasturchilar orasida MariaDBga nisbatan aslida MySQL allaqachon o‘lib bo‘lgan. Lekin yovvoyi biznesda barchasi boshqacha. Oraclening hujjatlarni yuritishdagi ustamonligi sababli hozirgacha MySQL yashab kelmoqda. Lekin yangi biznes egalari buning qanchalik xavfli bomba ekanini juda yaxshi bilsihadi va shu sababli ham MySQLdan foydalanuvchilar soni kun sayin pasayib bormoqda.

So‘nggi bir necha yillarda MySQL&MariaDB asosichi Maykl Videnius va MariaDB CEOsi Maykl Xovard o‘rtasidagi munosabatlar yomonlashishni boshladi. Ko‘plab kelishmovchiliklar sababli 2022-yilda Maykl Videnius boshqaruv kengashidan chetlatildi va Videniusʼning jamoasi ham kompaniyani tark etishdi. Shu bilan birgalikda boshqaruv kengashida bo‘lgan JP Morgan va Goldman Sachslar ham javobgarlikdan qochib vakillikdan voz kechishdi. O‘z navbatida esa AngelPondning dastlabki investorlari (SPAC) kompaniya sifatida faoliyat yuritish qobiliyati va bahoning noto‘g‘ri ko‘rsatilishi sababli sudga daʼvo qo‘zg‘atishgan. Sud natijalariga ko‘ra investitsiyalarni qaytarib olish sharti belgilangan. MariaDB ning moliyaviy ahvoli haqidagi haqiqat o‘tgan yil oxirida SECga taqdim etilgan, hisobotga asosan kompaniya holati juda ham yomon ekanini sezish mumkin edi. Hisobotda 99% investorlar atiga 2,6 million dollardan tashqari pullarini (266,3 million dollar) qaytarib olishgani ko’rsatilgan.

Bularning barchasi 28-mart holatiga ko‘ra aksiyalarning 10 dollardan 1.13 dollargacha keskin pasayishiga olib keldi. Hisobotlarga ko‘ra MariaDBda 4,8 million dollar miqdorida mablag‘ qolgan. Invertorlar kompaniyadan voz kechgunga qadar MariaDB 672 million dollarga baholangan edi. Bugungi kunda esa baholash bu summaning faqat bir qismini tashkil etadi.

MariaDB ayni damda o‘zgarish qila oladigan moliyaga ega emas. Ular hattoki 7 oydan buyon moliya direktorisiz faoliyat olib borishmoqda. Shunigdek o‘z xodimlariga ham allaqachon boshqa kompaniyalarga ishga o‘tishlarini talab qilishni boshlashgan. Maykl Xovardning butun boshqaruvni egallash rejasi katta bir loyihani jarlikka itardi.

Yo‘qotishlar: MariaDBning yo‘qotilishi kompaniya investorlari tortib olgan sarmoyadan ko‘ra kattaroq zarar keltiradi. Maʼlumotlar markazi (DC), Hostinglar, ochiq manbalar, millionlab veb saytlar va turli dasturlar uchun o‘z taʼsirni o‘tkazadi.

_Qachonlardir Apple ( 1984 - 1997 ) va Nokia ham shu tarzda kasod bo‘lgan edi…_
