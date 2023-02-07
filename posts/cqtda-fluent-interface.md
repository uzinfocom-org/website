---
title: "C++(QT)'da fluent interface"
description: 'Obyektning bunday qobiliyati bilan ishlashni php, javascript, java dasturchilar juda yaxshi bilishadi. Asosan javascriptda...'
slug: cqtda-fluent-interface
date: February 7, 2023
---

Fluent interface'ni O'zbek tiliga "Ravon interfeys" deb tarjima qilgan maqulmikin bilmadim. Odatdagidek o'quvchilar uchun allambalo bo'lib ketmasin deb o'z holicha qoldirgan maqul menimcha.

Obyektning bunday qobiliyati bilan ishlashni php, javascript, java dasturchilar juda yaxshi bilishadi. Asosan javascriptda juda keng miqyosda qo'llaniladi.

Bilmaganlar uchun esa Fluent interface'ni obyektni qurish vaqtida o'z-o'ziga murojaatini ta'minlab berish deb tushunish mumkin.

Misol uchun oddiy tuzuilgan obyektni olaylik. Undagi har bir metodlarga alohida nusxa asosida murojaat qilishimiz kerak. Bu esa o'z navbatida kodning rasvo darajaga kelib qolishiga sabab bo'lishi mumkin. Kichikroq loyihalardan bilinmaydi, lekin kattaroq loyihalarda bu sezilarli muammolarni keltirib chiqarishi mumkin.

```c++
class Uy {
	public:
	    void mushuk(QString ismi){
	        o_ismi = ismi;
	    };

	    void azolar(int soni){
	        o_soni = soni;
	    }

		void malumot(){
	        qDebug() << "Mushuk nomi:" << o_ismi;
            qDebug() << "Oila a'zolar:" << o_soni;
	    }
	private:
		QString o_ismi;
		int o_soni;
};

int main(int argc, char** argv) {
	Uy uy;
    uy.mushuk("Dangasa");
    uy.azolar(2);
}
```

Yuqoridagi kodni fluent interface variantini ko'radigan bo'lsak:

```c++
class Uy {
    public:
        Uy& mushuk(QString ismi){
            o_ismi = ismi;
            return *this;
        };

        Uy& azolar(int soni){
            o_soni = soni;
            return *this;
        }

        Uy& malumot() {
            qDebug() << "Mushuk nomi:" << o_ismi;
            qDebug() << "Oila a'zolar:" << o_soni;
            return *this;
        }

    private:
        QString o_ismi;
        int o_soni;
};

int main(int argc, char** argv) {
	Uy uy;
    uy.mushuk("Dangasa").azolar(2).malumot();
}
```

E'tibor berganingizdek ikkinchi variantda obyektning tuzilishi ozgina murakkablashdi. Lekin keyinchalik undagi metodlarga qilinadigan murojaatlar soddalashdi. Bu esa minglab qatorlarga ega loyihalarda kodni o'qish jarayonini yanada soddalashtirib beradi. Shuningdek minglab qatorlarni qisqartirishga ham yodam beradi.

Fluent Interface aslida bundanda ko'proq imkoniyatlarga ega, bu haqida albatta ko'proq izlanib topasiz. Agarda sizga kod qatorlariga qarab haq to'lashmasa bu imkoniyatlardan ko'proq foydalaning. Zero o'zingiz va o'zgalar vaqtini ham tejaysiz bu bilan.
