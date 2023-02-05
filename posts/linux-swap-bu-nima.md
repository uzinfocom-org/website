---
title: Linux swap bu nima?
description: Linux swap haqida siz bilmagan ma'lumotlar
slug: linux-swap-bu-nima
date: January 6, 2023
---

Har qanday linux os foydalanuvchisini swap qiziqtirgan bo'lishi tabiiy. Linux o'rnatish paytida har doim xotiradan alohida swap uchun joy ajratib ketiladi.
Lekin buning nima ekanligidan ko'pchilik boxabar bo'lmasa kerak.

## Swap o'zi nima?

Operatsion tizim turli vazifalar va dasturlarni ishga tushirgan paytda tabiiyki RAM (random access memory) dan foydalanadi. Eski yoki bugungi kunda ham odatiy
bo'lgan qurilmalarda yetarlicha tasodifiy xotira mavjud emas. Ya'nikim sizda ish jarayonidagi dasturlar hajmi bu bilan cheklanib qoladi. Siz faqatgina xotira
hajmiga mos dasturlarni ishga tushira olasiz xolos. Chegaradan o'tish uchun esa sizga swap yordamga keladi.

Operatsion tizim ish jarayonidagi dasturlar hajmini kuzatib boradi. Agarda dasturlar muammosiz ishlashi uchun RAM yetarlicha bo'lmasa qattiq diskdan
foydalanishni boshlaydi. Ya'nikim dasturlarning ma'lum qismi RAMga emas balkim odatiy xotira diski orqali ishlay boshlaydi. Bu bilan esa ish jarayonidagi
dasturlarning ishdan chiqishi oldi olinadi. Shuningdek vaqtinchalik foydalanilmayotgan dasturlar ham resurs tejash uchun swap bo'limga o'tkazib turiladi.

## Ish jarayoni

Swap har doim ham kutilgandek natijani bera olmaydi. Tasodifiy xotiradagi ma'lumotlar odatda nanosoniyalar ichida almashadi, biz ko'p holatda tezkor deb bilgan
SSD xotirada millisekundlar kerak bu uchun. Misol siz 1GB xotira hajmiga ehtiyojli dasturni RAM va SWAP orqali ishlashini kuzatadigan bo'lsangiz oradagi tezlik
1000 marotaba farq qiladi. Agarda sizda SSD o'rnida HDD bo'lsa farq 100 000 ga yetishi mumkin.

Buni yanada oddiyroq misolda ko'radigan bo'lsak: dastur biror vazifani bajarish uchun 1 soniya vaqt sarflasa, swap orqali bir necha daqiqalarga cho'zilishi
mumkin. Chunki sektorlardan ma'lumotlarni o'qish tezligi farq qiladi.

## Swap qaydan holatlarda kerakli?

Agarda sizda RAM hajmi 4GB dan kam bo'lsa swap siz uchun as qotadi. Chunki sizdagi turli ilovalar bunday resurs uchun cho't emasdek bo'lishi mumkin. Kattaroq
dasturlardan kutish rejimida foydalanganda. Masalan video tahrirlovchi yoki shunga o'xshash kattaroq ma'lumotlarni qayta ishlovchi dasturlarda kerak. Dasturdagi
turli xatoliklar sabab katta miqdorda RAM dan foydalanish kuzatilganda. Agarda qurilmada keraklicha RAM bo'lsa swap kerakmi?

Hozirda kompyuter foydalanuvchilari uchun 32GB yoki 64GB tezkor xotiralar odatiy holatga aylanib qoldi. Qachonlardir qattiq disklar ham bunday hajmda bo'lmagan.
Lekin zamon va texnologiya rivojlanib bormoqda.

Albatta agarda sizda 64GB RAM bo'lsa siz unda doim ham to'liq foydalana olmasligingiz mumkin. Lekin tizimning barqarorligi uchun SWAP sizga hech qachon zarar
qilmaydi.

## Linux swapsiz ham ishlay oladimi?

Albatta linux hech qanday so'roq javoblarsiz swapsiz ham foydalana oladi. SWAP yuqorida aytilganidek tizim barqarorligini ta'minlash uchun o'ylab topilgan
xolos. Agarda sizga barqarorlik muhim bo'lsa SWAPdan har doim foydalaning.

## Menda operatsion tizim swapdan foydalanmayapti?

Odatda RAM to'lib borgach keyingina swapdan foydalanish boshlanadi. Lekin ma'lum bir distrolarda swapdan foydalanish RAM hajmiga mos ravishda ham belgilangan.
Ya'ni sizda 1GB RAM mavjud bo'lsa 1GB hajmdagi swap bo'lsagina foydalanishni boshlaydi. Albatta bu ma'lum bir distrolarda kuzatiladi xolos.

## SWAP boshqa operatsion tizimlarda ham mavjudmi?

Albata, swap unix oilasidagi barcha operatsion tizimlarda foydalaniladi. Jumladan macos, FreeBSD ham bundan xoli emas. Qo'shimcha sifatida aytib o'tish kerakki
windows operatsion tizimida ham swap prinsipidan foydalanish mumkin. Bu borada internetda turli qo'llanmalar ham mavjud.
