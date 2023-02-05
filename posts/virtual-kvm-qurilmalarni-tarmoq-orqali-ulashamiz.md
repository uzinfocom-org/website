---
title: 'Virtual KVM (Qurilmalarni tarmoq orqali ulashamiz)'
description: 'Bir nechta kompyuterni birgina sichqoncha va klaviatura orqali boshqaramiz'
slug: virtual-kvm-qurilmalarni-tarmoq-orqali-ulashamiz
date: January 15, 2023
---

Agarda siz crossplatform dasturchi bo'lsangiz bir vaqtning o'zida bir necha kompyuter bilan ishlashingiz tabiiy holat. Har bir kompyuterni alohida qurilmalar bilan boshqarish esa ba'zan shunchaki odamni ezadi...

Ish stoli uchun ham bu jarayon noqulaylik tug'ridagi. Birdaniga 2 klaviatura va sichqoncha bilan ishlash kimga ham yoqadi deysiz :)

Ushbu muammoni hal qilish uchun aslini olsa turli qurilmalar allaqachon ishlab chiqilgan. Ularni odatda "**KVM switch**" deb nomalashadi. Lekin bu matahni O'zbekistonda topish xuddi ta'lim tizimimizga o'xshaydi (Muammoning o'zginasi). Topgan taqdirda ham arzon turmaydi.

Shunday ekan eng yaxshi yechim biz uchun tarmoq orqali bo'lishish hisoblanadi. Hozirda qurilmalar orasida tarmoq hosil qilish muammo emas. Deyarli barchamizning uyimiz yoki ish stansiyamizda simli va simsiz mashuritizatorlar bor (**LAN, WLAN**).

Opensource dasturlar orasida esa bu uchun yetarlicha yechimlar ham qilingan. Masalan ulardan biri biz hozir aynan foydalanib ko'radigan "[**Barrier**](https://github.com/debauchee/barrier)" dasturi hisoblanadi.

Ushbu dastur foydalanuvchilar qulaylik sifatida sichqoncha va klaviaturani local tarmoq orqali ulashish imkonini beradi. Shuningdek crossplatform, ya'ni bir vaqtning o'zida Linux, Windows va MacOS kabi operatsion tizimlarda muammosiz ishlay olasiz.

Demak ishni dasturni o'rnatishdan boshlasak:

**Windows** va **MacOS** uchun dasturni o'rnatish unchalik ham muammo emas. Hal holda ularda tayyor arxivlangan fayl beriladi. **Linux** uchun esa turli-xildagi distributivlarga qarab repositoriyalar belgilangan (Source code'dan o'rnatish ancha samarali).

**MacOS**: [https://github.com/debauchee/barrier/releases/download/v2.4.0/Barrier-2.4.0-release.dmg](https://github.com/debauchee/barrier/releases/download/v2.4.0/Barrier-2.4.0-release.dmg)

**Windows:** [https://github.com/debauchee/barrier/releases/download/v2.4.0/BarrierSetup-2.4.0-release.exe](https://github.com/debauchee/barrier/releases/download/v2.4.0/BarrierSetup-2.4.0-release.exe)

**Linux debian/ubuntu(22.04):**

```bash
sudo apt install barrier
```

**Linux arch:**

```bash
sudo pacman -S barrier
```

**Linux fedora**

```bash
sudo dnf install barrier
```

**Linux source code orqali o'rnatish:**

```bash
sudo apt update && sudo apt upgrade
sudo apt install git cmake make xorg-dev g++ libcurl4-openssl-dev libavahi-compat-libdnssd-dev libssl-dev libx11-dev libqt4-dev qtbase5-dev
cd /tmp
git clone https://github.com/debauchee/barrier.git
cd barrier
git submodule update --init --recursive
./clean_build.sh
cd build
sudo make install
```

**Dasturni sozlash:**

Dasturni sozlash sizga unchalik ham muammo tug'dirmaydi. Buning uchun dasturning ish rejimi tanlanadi, so'ngra kerakli qurilmalar ulab chiqiladi.

Dastur ish vazifasiga ko'ra ikki turdagi rejimni o'z ichiga olgan.

- Server - Asosiy sizdagi klaviatura va sichqonchani ulashuvchi qurilma
- Client - Siz qo'shimcha boshqarishni xohlaydigan qurilma

Agarda dastur server sifatida belgilansa qurilma o'zida **24800** porti asosida virtual server yaratadi. So'ng boshqa qurilmalar ushbu port va server ip manzili orqali ulanishlari mumkin bo'ladi.

Shuningdek eslatib o'tish kerakki local tarmoqda foydalanish vaqtida SSL'ni o'chirib qo'ygan maqul (ikki tomondagi qurilmada ham). Qolaversa har bir qurilma uchun takrorlamas alohida "**screen name**" berish ham maqsadga muvofiq hisoblanadi. Ushbu nom orqali keyinchalik tarmoq hosil bo'ladi.

![](https://telegra.ph/file/d78e9e256df20f45e7cf8.png)

Dasturning asosiy oynasi

**SSL'ni o'chirish va screen name'ni sozlash (mijoz kompyuterida screen name boshqa nomda bo'lishi lozim):**

![](https://telegra.ph/file/5a04b17ab02e79688c22e.png)

Sozlamalar oynasi. F4 tugmasi orqali ochiladi!

**Client'larni sozlash:**

Bu uchun server kompyuterdagi dasturning asosiy oynasidan **"Configure server"** oynasi ochiladi, so'ngra mozayka shaklida o'zingizga moslab kompyuterlarni qo'shasiz. Yangi **client** qo'shish uchun yuqori burchakdagi kompyuter ikonasi sichqoncha orqali mozaykaga tortib yuboriladi.

![](https://telegra.ph/file/5b3179cd25dd65a962add.png)

Server configuration oynasi

Mozaykaga kerakli kompyuter oynasi qo'yilgach ikona ustiga sichqoncha bilan ikki marotaba bosiladi so'ngra **client** kompyuterdagi **screen name** kiritiladi.

![](https://telegra.ph/file/477deec8910bbdc8df771.png)

Screen settings oynasi

**Client qismini sozlash:**

Client qismn sozlash anchagina oson. Bu uchun shunchaki server kompyuterinig ip manzili kiritiladi xolos.

![](https://telegra.ph/file/2688dc488a3a678681ae2.png)

Client dasturi oynasi

**Dasturni ishga tushirish:**

Ikki qismdagi dasturlar ham to'liq sozlangach avval **server** dasturida so'ng **client** dasturida "**start**" tugmasini bosish kifoya. Shundan so'ng dastur ishga tushadi va qurilmalar bir biri bilan ulanadi.
