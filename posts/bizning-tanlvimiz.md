---
title: 'Bizning tanlovimiz'
description: 'Bizning jamoamiz muhitini yaratishda qilgan tanlov va qarorlarimiz haqida texnik tushuntirish.'
slug: bizning-tanlovimiz
date: July 5, 2025
---

Raqamlashtirish faoliyati boshlanar ekan, har doim biz biron loyihani yo’qlikdan borliqga chiqarish uchun, o’zimiz uchun kerakli bo’lgan ham qulay, ham to’g’ri uskuna-asboblar bilan jihozlanib olamiz. Dasturchilik yo’nalishida bu narsalar ko’proq boshqa katta-yu kichik dasturlarga borib taqaladi. Masalan, biz ishlatadigan dasturlash tillari ham bu bir sehr emas, balkim bir yoki bir necha dasturlardan tashkil topgan bir umumiy maqsad uchun xizmat qiluvchi dasturlar to’plami.

Xo’sh, asboblar qanaqa dasturlar ekanini bilib oldik, endi aynan qaysi dasturlar bizga kerak bo’lishi mumkin ekan? Ushbu savolga javob olish uchun odatda har bir dasturchi o’ziga har xil savollar bera boshlaydi. Jumladan:

- Mening uskunalarim nima ishlar qila olishi kerak?
- Mening uskunalarim mening komfort zonamdami?
- Mening uskunalarimni ishlatishda nima yomon va yaxshi taraflari bor?

va bu savollar to’plamini yanada davom ettirishimiz mumkin. Ammo, biz uchun hozircha eng muhim bo’lgan savollar mana shu keltirilgan uchtasidir. Xo’sh, keling unda birma-bir savollarga javob berish orqali biz o’zimizning tanlovimizni tushuntirib beramishga harakat qilamiz.

## Mening uskunalarim nima ishlar qila olishi kerak?

Ushbu savolga javob berishni boshlashimizdan ham avval, biz ko’proq "Aslida o’zi biz nima ishlar qilamiz?" degan savolga javob berib ko’rishimiz ko’proq maqsadga muvofiq bo’ladi. Bizning umumiy yo’nalishimiz aslida olib qaraydigan bo’lsak "Open Source" deb ataladi va shundan kelib chiqib yuzaki taxmin qilinsa, atama yoki nom ma’nosidan biz istalgan dasturlash tiliyu, istagan asbob-uskunalar bilan ishlab ketishimiz nazarda tutiladi. Bunda bir taraflama haqiqat bor, biz chindan ham kerak bo’lganda biron loyiha va topshiriqlarga moslashuvchan bo’lishimiz darkor. Ammo, baribir shunday bo’lsada, o’zimiz uchun biron anniq asbob-uskunalar to’plami qilib qo’yishimiz zarur. Agar biz loyihalarda istagancha o’zimizga yoqgan yoki sinab ko’rmoqchi bo’lgan dasturlash tillarini ishlatib ketadigan bo’lsak, kelajakda bu loyihalar davomiyligiga juda qattiq ta’sir qilishi tabiiy hol, chunki loyihalar keyinchalik biron boshqa infratuzilma bilan biriktirish yoki chuqur optimizatsiyalar qilishda katta muammolar yoki ortiqcha majburiy refaktoringlar keltirib chiqarishi mumkin. Hamda, shuni ham aytib o’tish joizki, biron dasturlash tilidan boshqa dasturlash tiliga o’tayotganda kishiga o’zgargan dasturlash tili monan ko’nikib olishiga ham anchagina vaqt o’ldirishiga to’g’ri keladi.

Loyihalar haqida gapiradigan bo’lsak, hozirgi vaqtda bizning qo’limizda 1 ta ochiq va asosiy, hamda yana 1 ta open-source, ammo fork sifat loyihamiz mavjud. Asosiy loyihamiz bu operatsion tizimdir, to’g’rirog’i linuks distributiv. Distributimiz NixOS ga asoslangan bo’lib, unda biz anniq oldindan belgilab olgan muhit to’plami bilan ishlashga bel bog’laganmiz. Ikkinchi loyihamiz esa bu Matrix protokoli ustida qurilgan Element messendjer to’plamidir. Biz tarafdan ko’proq diqqat, to’plamni NixOS da ishlatilishini yanada oson, ergonomik va qayta-ishlata oluvchanlik oshirib berishga qaratilgan. Bu orqali 2 qatorgina nix konfiguratsiyasi yordamida butun boshlik to’plab ishga tushurib boshqara olishlik nazarda tutiladi.

Endi esa, loyiha talablari haqida gaplashidan bo’lsak...

"Biz injinerlarmiz, arzon ishchi kuchi emas." Shu sababdan biz uchun loyihalarning davomiyligi o’ta muhim talablarimizdan biridir. Biz uchun biron yozilgan implementatsiya toki butun infra-tuzilma o’zgarmaguncha yoki majburiyat bo’lmagunchaa qaytib tegmaydigan, lekin shubhasiz ishonchli darajada ishlab berishi kerak. Buni aytish bilan, biz biron qism, ya’ni komponent uzoq-uzoq vaqt hech qanday tegirishlarsiz hech qanday shikoyatlarsiz ishlab berish talabini oldinga surmoqchimiz. Bu narsaga erishish esa avvalambor o’ta-o’ta qiyin va uzoq vaqt, hamda katta tajriba talab qiladi. Biz yozgan dasturlar ba’zan operatsion tizimda eng pastki qatlamlar bilan ko’proq ishlagani va tezlik ham biz uchun o’ta muhim faktorlardan biri bo’lgani, bir necha o’nlab, yoki yuzlab dasturlash tillarini kandidaturadan chiqarib tashlaydi. Jumladan:

- Python
- Javascript
- TypeScript
- Go
- Perl

Shunda bizda pastki darajali dasturlash tillari qoladi. Masalan: C, C++, Rust, Zig va hokazo. Ushbu keltirilgan tillar muammoni tez, lekin turli xil yo’l va metodologiyalar bilan yechishga harakat qiladi. Ushbu maqolada har birini yoritib chiqish uchun har bil keltirilgan tillar uchun o’zini maqolasini yozib chiqishga to’g’ri keladi, ammo bu safar maqolada biz o’zimiz holatimizni tariflash orqali tanlov qilib uni asoslab berishga harakat qilamiz.

Biz ishonamizki, odamzot har doim xato qilishga tamoyil va xato qilish orqaligina biz hozirgi daraja va holatimizga erisha oldik. Ammo biz ko’pincha "qayerda" xato qilishimiz borasida o’ylamaymiz va natijada bu boshqa joy, aytaylik harakat yoki ishchi holatda xatolar qilinishiga olib keladi. Oddiy analogik misol sifatida aytaylik, moshinani yig’ayotganda yoki terayotganda xato qilish kechirimli, chunki o’sha payt o’zidayoq bu narsalarni to’g’irlab ketsa bo’ladi. Ammo moshina qo’zg’alib turgan payt tizim yoki biron qurilma xato qilishi hech qachon na oqlab, na kechirib bo’ladi. Aslida, qo’zgaluvchan holatda kelib chiqgan xatolik, yig’ayotgan paytda odam qilib ketilgan xatoliklarni payqamaganidan kelib chiqgan emasmi?

Keltirilgan misoldan xulosalaydigan bo’lsak, ba’zi joylarda xato qilish mumkin, ba’zi joylarda esa bu o’ta katastrofik oqibatga olib kelishi juda katta ehtimoli mavjud. Shu sababdan, biz uchun hamma bo’lishi mumkin bo’lgan xatoni aynan dasturlash jarayonida qilishni tanladik. Buning uchun esa, biz tanlagan dasturlash tili kompilyatsiya paytida chuqur tiplar borasida analiz va imtihonlar (tests) qila olishi o’ta muhim. Biz uchun pars qilish muhimroq, validatsiya emas. Shu sababdan bizning kandidaturamizdan yana bir necha tillar bilan hayrlashishimizga to’g’ri keladi. Qo’shimchasiga, biz uchun til yoki to’plam jamiyatlar orasida keng tarqalgan va yetarlicha darajada mashhur bo’lishi ham o’ta muhim talablardan hisoblanadi. Buning sababi esa, biron bor praktika yoki yechimlar orqali har xil xato va tajribalarga nazar solish yordamida o’zimiz uchun eng to’g’ri yechim qabul qila olish oson va tezlashtirishdir. Shunda bizning ro’xyatimizda atiga shu tillar qolishi mumkin:

- Rust
- Haskell

Haskell biz uchun "juda to’g’ri" tanlov, ammo bizdagi gtk va butun infrastrukturamizdagi dasturlarni yaratish va turlar yordamida ifodalanilgan chuqur arxitektural dasturlar qurishda haskell bilan bo’lgan tajribamiz oqsoqroqdir. Shu sababdan biz haskell taraflarga orzu va maqsad bilan qaragan holda, boshlang’ich qadamlarimizni hozircha Rust bilan qo’yib boshlashga qaror qildik. Toza va butunlay haskellda boshlash, va shu maromda olib ketish, bu juda katta hashamat, hammaga ham emas bu narsa. Lekin bizlar, o’z ustimizda to’xtovsiz ishlovchan va intiluvchan departament sifatida shu taraflarda o’z izlanishlarimizni qilishda davom etamiz va yaqin kelajakda haskell da infratuzilmalar ko’tarish niyatida davom etamiz.

## Mening uskunalarim mening komfort zonamdami?

Avvalambor, shuni tan olishimiz joizki, "menga yoqadi" bu o’ta subyektiv chegara hisoblanadi va bu chegarada biron narsani bir necha turli xil yo’nalish va fikrlovchi guruh ichida belgilab olish o’ta mashaqqatlidir. Shu sababdan bu masala borasida biron bor kriteriya bilan oxirgi qarorga kelish deyarli ilojsiz. Lekin, shuni ham ta’kidlab o’tish joizki, komfort zona bu biron joyda qotib qolgan yoki ba’tamom o’zgarmas narsa emas, balkim moslashuvchandir. Bu narsaga davomiy ishlash va tajriba qilish yordamida kelish mumkin, ammo bu ham o’ziga yarasha ko’p resurs talab qiladi. Aytaylik, ushbu maqolani yozayotgan muallif sifatida, o’zim uchun bir paytlar Objective-C yoki C++ dasturlash tillari komfort zona bo’lgan, ammo 2018 yilda Rust dasturlash tilini uchratgach, ushbu til eko-muhiti menga qattiq yoqib qolgani sabab, yillar davomida ishlatish orqali o’zimning komfort zonamni shu til ustiga olib kelganman. Bizning asosiy maqsadimiz ham, qandaydir vaqt oralig’ida qilgan tanlovimiz hisoblanmish, Rust dasturlash tiliga o’zimizni guruh darjasida moslashtirish va o’zimizning komfort zonamiz shu til muhiti ustida qurish.

"O’zi komfort zona bizga nimaga kerak?" degan savol paydo bo’lishi ham oddiy holat. Avvalambor, komfort zona tushunchasi abstrak hisoblanib, uning o’ziga juda ko’plab boshqa tushunchalar ichiga oladi. Misol uchun ataylik, "fikrlash doirasi". Har bir dasturlash tilida biron dasturni yozish davomida, ushbu til dasturchilarni o’zgacha fikrlashga chorlaydi. Dasturlash tillari esa o’zining tuzilishi, yozilishi, undagi qoida va intizomlari bilan bir-biridan ajralib, dasturchilarni shu muhitga mos arixtektura qilishga yondaydi. Dasturchi esa qandaydir vaqt oralig’ida biron dasturlash tilini ishlatish orqali, o’zining fikrlash doirasini shu tilga mos ravishda olib boradi va qarabsizlarki, dasturchi biron dasturni tuzib chiqish davrida aynan asos shu tilga mos bo’lib tuzilib boradi.

Xo’sh, komfort zona masalasi ham anniq bo’ldi, endi keling shu savolimiz bilan bog’liq yana boshqa savolga o’tamiz!

## Mening uskunalarimni ishlatishda nima yomon va yaxshi taraflari bor?

Rust dasturlash tili bu ideal yechim emas albatta, uning ham o’ziga yarasha kamchiliklari mavjud.

Agar ozgina chuqur kiradigan bo’lsak, Rust dasturlash tili o’zi ildizan C++ dagi RAII pattern dan kelib chiqgan va agar ushbu patternaga C++ til doirasida qattiq amal qilinsa, C++ dan turib ham Rust berayotgan narsalarga erishish mumkin, ammo… to’liq emas! Sababi, Rust RAII patternani potensialini kompilyator darajasida to’laqonlik cho’qqiga olib chiqgan, buning uchun esa ko’plab kompilyator tadqiqotchilari shu masala doirasida bir necha izlanishlar qilishgan va izlanishlar rustc kompilyatoriga amalda kiritilgan. Rust da osonlik bilan erishilgan narsani, C++ da katta mashaqqat bilan erishishga to’g’ri keladi.

Hamda, C/C++ da bugungi kunda biron xatolik va xotira bilan bog’liq muammo keltirib chiqaruvchi kodlar segmentini analiz qilish uchun ko’plab kompaniyalar juda katta review bosqichlar o’ylab chiqishgan, masalan: bosqichlik kod review, valgrind va massif, sanitayzerlar, profayler, debag va deleaker lar. Bularga bir nazar solishda osongina "kult" deyish ham mumkin. Agar chuqurroq o’ylab ko’radigan bo’lsak, bizda ko’plab yana savollar paydo bo’ladi:

- Nimaga bu narsalar shunchalar qiyin va toliqtiradigan bo’lishi kerak?
- Nimaga bu narsalar kompilyator darajasida bajarilishi kerak emas?
- Nimaga bu narsalar uchun aslida alohida bosqichlar bo’lishi kerak?

Rostan ham, bu narsalar borligini o’zi allaqachon til eskilik sarqitiga yo’liqganidan darak bermaydi emasmi? Shunday bo’lsada, o’zining oldiga qo’yilgan ishini bajaradi, ammo uning zamonaviy alternativlariga nisbatan juda ko’p vaqt, kuch, iteratsiya va sog’liq sarflashga to’g’ri keladi.

Bu narsalar aytishdan maqsadimiz, hamma narsani Rust yoki shunga o’xshash tillarda qayta yozib chiqilishini ta’kidlash emas, balkim yangi endi boshlangan loyihalar C/C++ va shunga o’xshash tillar bilan boshlashdan ma’no yo’qligida.

Tajribamizdan kelib chiqgan holda ta’kidlaydigan bo’lsak, ko’proq bizlarda Rust ni adoptatsiya qilish qiyinroq kechdi. Ya’ni uning o’rganish yo’li boshqa tillarga nisbatan qiyinroq bo’lgani bizning jamoadagi ko’plab boshqa dasturlash tillaridan kelgan dasturchilarimizga ko’nikish va har bir qulaylik nimaga bunday ekanligini tushunish qiyin bo’ldi, bu esa sizlar ham tushunib turganlaringizday, bizni ko’proq vaqt sarflashga chorladi.

Hamda, Rust dasturlash tilida to’plam (toolchain) sozlashda C/C++ larga nisbatan kamroq muammolar bo’ldi-yu, ammo Rust dasturlash tili eko-muhitida C/C++ tillarida yozilgan kutubxonalar ishlatilishi odatiy hol va C/C++ to’plam (toolchain) Rust niki bilan kelishtirish ozgina bosh og’riqroq holat bo’ldi. Bu muammoni barataf etish uchun, biz boshqa muhitiy dastur hisoblanmish, Nix paket menejerini ishlatdik. Hozirda Nix va NixOS uchun alohida maqola yozilmoqda va bizni ko’proq texnik sarguzashtlarimizni blogimizda kuzatib boring! Hozircha esa shu notada maqolamizni yakunlagan bo’lar edik.

Maqolamiz ko’proq o’zimizning jamoamiz va o’zimiz boshimizdan o’tkazgan tajribalarimizga asoslangan hisoblanib, "hamma uchun" yoki "umumiy praktika" lardan holis hisoblanadi. Maqolada biz nimaga bu dasturiy muhit ga kelganimiz tushuntirib berishga harakat qildik, savollaringiz bo’lsa kommentariyada yozib qoldirishingiz iltimos qilgan bo’lardik. Keyingi maqolagacha, hammangizga muvaffaqiyatli kompilyatsiyalar do’slatim!
