---
title: "rm (remove) uchun qo'lbola alternativ"
description: "Fayllarni o'chirish uchun qo'lbola kod yozamiz..."
slug: rm-remove-uchun-qolbola-alternativ
date: January 10, 2023
---

Linuxda fayllarni o'chirish uchun juda ko'plab alternativ buyruqlar mavjud. Agarda siz kam hajmdagi fayllar bilan ishlasangiz ushbu utilitalarning o'zi yetib
ortadi. Lekin kattaroq hajm uchun alohida yechim talab qilinishi aniq.

Amaliyot bo'yicha tushuntiradigan bo'lsam men texnik xizmat ko'rsatadigan loyihalarning birida auditoriya soni anchagina katta. Shu sababli serverga tushadigan
so'rovlarni optimizatsiya qilish uchun bir necha turdagi keshlash prinsiplaridan foydalanganman. Masalan ulardan veb sahifadagi yarim dinamik qismlar va
ma'lumotlar bazasidan keladigan select so'rovlar javobini maxsus binary fayllarga yozish hisoblanadi. Lekin, lekin... Kesh fayllar hajmi oshgani sayin ularni
tozalash ham o'ziga yarasha muammolar tug'diradi. Masalan mendagi holatda bir kunlik kesh fayllar hajmi 40 gigabaytga teng. Ya'ni maksimal 50 kilobayt
fayllardan tashkil topgan millionga yaqin fayllar.

Odatda fayllarni rekursiv shaklda o'chirish uchun linuxda rm va va find utilitalari ishlatiladi.

Misol:

```bash
rm -R /cache/*
find /cache -type f -delete
```

Lekin yuqoridagi har ikki usul avvalo fayllarni rekursiv shaklda tekshirib chiqqani va har bir faylning joylashuvini stdoutga yo'naltirgani sababli o'chirish
jarayoni juda ham cho'ziladi. Medagi holatda find uchun bir daqiqadan ko'proq. Rm utilita esa bunday katta hajmdagi fayllani o'chira olmaydi (stdin uchun max
128kb).

Yechim:

Yechim oddiy, C dasturlash tilida streamga yo'naltirilmaydigan qilib kichik utilita yozish. Shuningdek readdir() funksiyasidan foydalanish. Readdir
qulayliklaridan biri ro'yxatni xotiraga ko'chirmaydi, bu esa sizda vaqtdan yanada yurish imkonini berishadi.

Ishni feyk fayllardan boshlasak. Jarayonni kuzatish uchun bizga albatta katta hajmdagi fayllarni kerak bo'ladi. Bu uchun esa linuxdagi dd utilitasi orqali
/dev/random yordamida feyk fayllar generatsiya qilamiz.

```bash
#!/bin/bash
for (( i=0; i <= 1000; ++i ))
do
 tmpfile=$(mktemp /tmp/fake/abc-script.XXXXXXXXXXXXXXXXXXXXXXXXXX)
 dd if=/dev/urandom of=$tmpfile bs=1M count=$(expr 1 + $RANDOM % 3)
done
```

Keyingi navbat asosiy o'chirish mexanizmiga:

```C
int main(const int argc, char *argv[]) {
    if (argc != 2) {
        fprintf(stderr, "Papka kiritilmadi!\n");
        return -1;
    }

    int all_files = remove_dir_contents( argv[1], false );
    printf("O'chirilgan fayllar: %d\n", all_files);
    return(0);
}
```

Yuqoridagi koddan ko'radigan bo'lsak utilitamiz uchun argument sifatida kerakli papkla berilmoqda. Shundan so'ng remove_dir_contents()funksiyasiga murojaat
qilib fayllar o'chirilmoqda. Funksiya esa javob sifatida o'chirilgan fayllar sonini qaytaradi.

Rekursiv jarayonda yana bir holatni hisobga olishimizga to'g'ri keladi. Kiritilgan papka ichida papkalar va fayllar joylashgan bo'lishi mumkin. Agarda sikl
ichida fayl kelsa uni shunchaki o'chirish uchun belgilaymiz. Papka holatida esa foydalanuvchi tomonidan berilgan birinchi papka va siklda kelgan papka nomini
birlashtirib remove_dir_contents()funskiyasiga qayta argument bilan murojaat qilish lozim. C tezkor dasturlash tili bo'lgani bilan juda ham aqlli emas :) Shu
sababli bizga qo'shimcha ikkita matnni bir biriga qo'shib oluvchi funksiya ham kerak bo'ladi .

```C
char *concat(const char *a, const char *b) {
    int lena = strlen(a);
    int lenb = strlen(b);
    char *con = malloc(lena+lenb+1);
    memcpy(con,a,lena);
    memcpy(con+lena,b,lenb+1);
    return con;
}
```

Qolgani esa oddiy. Readdir orqali papkani o'qiymiz, sikl orqali kerakli amalni bajaramiz.

```C
int remove_dir_contents(char* path, bool selfd){
  DIR *d;
  struct dirent *dir;
  d = opendir( path );

  int x = 0;

  if ( d ) {
    while ( ( dir = readdir( d ) ) != NULL) {
      if ( dir->d_name[0] == '.' || dir->d_type == DT_CHR ) {
        continue;
      }else {
        char* fullpath = concat("/", dir->d_name);
        fullpath = concat(path, fullpath);
        if ( dir->d_type == DT_DIR ) {
          x = x + remove_dir_contents( fullpath, true );
          if ( rmdir( fullpath ) != 0){
            printf( "Papkani o'chirishda xatolik:  %s\n", fullpath );
          }else{
            x++;
          }
        }else{
          if ( unlink( fullpath ) != 0){
            printf( "Faylni o'chirishda xatolik:  %s\n", fullpath );
          }else{
            x++;
          }
        }
        free(fullpath);
      }
    }
    closedir(d);
  }

  return x;
}
```

Oldimizda faylni kompiliyatsiya qilish va ishga tushirish sharti qoldi xolos.

```bash
gcc -std=c99 -g remover.c -o remover
// Feyk fayllarni generatsiya qilish olish
bash fake.sh
// Feyk fayllarni o'chirish
./remover /tmp/fake
```

Natija: ![natija](https://telegra.ph/file/d2cb60d0340ad5f2ddfec.png)

Kodlarni to'liq holatda ko'chirib olish:

https://gist.github.com/yetimdasturchi/e173faa252b765852eaa6460a27d43cf
