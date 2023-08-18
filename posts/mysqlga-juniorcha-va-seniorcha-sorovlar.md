---
title: "Mysqlga juniorcha va seniorcha so'rovlar"
description: "Ma'lumotlar bazasiga amalga oshiriladigan so'rovlarni optimizatsiya qilish uchun kichik misol..."
slug: mysqlga-juniorcha-va-seniorcha-sorovlar
date: August 18, 2023
---

Tasavvur qilaylik bizda sotilgan mahsulotlar ma'lumotlari saqlanadigan jadval bor. Unda mahsulot nomi, idenfikatori va vaqti kabi ma'lumotlar saqlanadi. Bizdan talab etiladigani esa buyurtmachiga statistika chiqarib berishim lozim. Odatda statistikalar haftalik yoki oylik ko'rinishda beriladi.

## Junior bu holatda nima qiladi?

Albatta oylar yoki haftadagi kunlarning har biri bilan ma'lum shartlar asosida qayta qayta so'rov amalga oshiradi. Bu holatda esa ma'lumotlar ombori uchun so'rovlar soni oshib yuklamalar keltirib chiqaradi.

Psevdo kod misolida:

```
for loop {
	date = getDate()
	query = "select query"
}
```

## Seniorcha yechim:

Yuqoridagi muammoni mysqlning o'zidagi tayyor funksiyalardan foydalanib birgina so'rov asosida chiqarish imkoni mavjud.

- COALESCE() - Ro'yxatdagi NULL bo'lmagan birinchi qiymatni qaytaradi
- YEARWEEK() - Berilgan vaqtga nisbatan yil va haftani qaytaradi
- NOW() - Real vaqtni qaytaradi

Demak yuqoridagilarga asoslanib ushbu haftada sotilgan maxsulotlarni kunlik sonini chiqaramiz:

```sql
SELECT
	COALESCE( COUNT( id ), 0 ) AS count,
	DAYNAME( datetime ) as dayname
FROM sales
WHERE YEARWEEK( datetime ) = YEARWEEK( NOW() )
GROUP BY datetime;
```

Yoki unix timestamp saqlanadigan holat uchun:

```sql
SELECT
	COALESCE( COUNT( id ), 0 ) AS count,
	DAYNAME( FROM_UNIXTIME( datetime ) ) as dayname
FROM sales
WHERE
	YEARWEEK( FROM_UNIXTIME( datetime ) ) = YEARWEEK( NOW() )
GROUP BY FROM_UNIXTIME( datetime );
```

YEARWEEK( NOW() ) qiymatini YEARWEEK( 'yyyy-mm-dd' ) ko'rinishida berib xohlagan sanaga moslab ma'lumotlarni chiqarish ham mumkin.

Oylar bo'yicha statistika:

```sql
SELECT
	COALESCE( COUNT( id ), 0 ) AS count,
	MONTHNAME( datetime ) as monthname,
	EXTRACT(YEAR_MONTH FROM datetime ) as month
FROM sales
GROUP BY EXTRACT(YEAR_MONTH FROM datetime);
```

Oylar bo'yicha statistika (unix timestamp uchun):

```sql
SELECT
	COALESCE( COUNT( id ), 0 ) AS count,
	MONTHNAME( FROM_UNIXTIME( datetime ) ) as monthname,
	EXTRACT(YEAR_MONTH FROM FROM_UNIXTIME( datetime ) ) as month
FROM sales
GROUP BY EXTRACT(YEAR_MONTH FROM FROM_UNIXTIME( datetime ) );
```

Yuqorida keltirilgan birgina so'rov asosida mysql mahsulotlarning sotilgan sonini hafta yoki oy nomlari asosida qaytaradi. Tayyor ma'lumot olingach, uni o'zingiz bilgan tilda manipulatsiya qilish qiyinchilik tug'dirmaydi.

## Bonus

Tasavvurimizni yana bir ishga tushirsakda sotilgan mahsulotlarni foizlardagi nisbatini ham chiqarsak. Bunda albatta so'rov natijasini yana qayta ishlashga ehtiyoj sezilmaydi.

```sql
SELECT id, COUNT(*) AS count, 100 * COUNT(*)/s.total_sum AS percentage
FROM sales 
CROSS JOIN (
	SELECT COUNT(*) AS total_sum 
    FROM sales
) AS s
GROUP BY id;
```

```
id	count	percentage
1 	218022	15.9904
2 	533122	39.1009
3 	574475 	42.1339
4 	37833	2.7748
```

Endi yuqoridagi so'rovlarni birlashtirish orqali sotilgan maxsulotlar sonini oylarga nisbatini ham olish mumkin bo'ladi

```sql
SELECT
	id,
	MONTHNAME( datetime ) as month,
	EXTRACT(YEAR_MONTH FROM datetime ) as date,
	COUNT( id ) AS count,
	CONCAT(ROUND( (100 * COUNT( id )/s.total_sum), 2 ), '%') as percentage
FROM sales
CROSS JOIN (
	SELECT COUNT( id ) AS total_sum FROM sales
) AS s
GROUP BY EXTRACT( YEAR_MONTH FROM datetime )
ORDER BY count DESC
```

```
id 	month		date 	count	percentage
1 	November	202211	10739	8.17%
2 	October		202210	8970	6.82%
3 	September	202209	8672	6.59%
4 	July		202207	8623	6.56%
```

## Xulosa

Albatta bu birgina so'rovlar orqali amalga oshirish mumkin bo'lgan ishlar uchun kichik misol xolos, ammo sizning optimizatsiya masalasidagi qarashlaringizga oz bo'lsada tasir ko'rsata oladi degan umiddaman.