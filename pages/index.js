import Page from '@components/page'
import Link from '@components/link'

const Index = () => {
  return (
    <Page description="Salom! Biz Uzinfocom Open Source miz va biz o'zbek open source jamiyati o'sishiga o'z hissamizni qo'shamiz.">
      <article>
        <h1 className="hero">Uzinfocom Open Source</h1>

        <p>
          <Link underline href="https://uzinfocom.uz/uz/" external>
            Uzinfocom
          </Link>{' '}
          tashkiloti tomonidan tashkil topgan va O'zbek Ochiq Manbali
          dasturlarni rivojlantirishga qaratilgan departament. Bizda har xil
          katta va kichik loyihalar mavjud va xalqaro loyihalarda faol ishtirok
          etishda harakat qilamiz. Bizning{' '}
          <Link underline href="/blog">
            blogimiz
          </Link>{' '}
          kuzatib borishingiz mumkin.
        </p>

        <p align="center">
          Sehr yuz berishi uchun <code>⌘ + K</code> yoki <code>Alt + K</code>{' '}
          tugmalarini bosing. Agarda ushbu usul ish bermasa, yuqoridagi ⌘
          tugmasi orqali harakatni davom ettirishingiz mumkin...
        </p>
      </article>
    </Page>
  )
}

export default Index
