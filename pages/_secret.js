import Page from '@components/page'
import Link from '@components/link'

const Index = () => {
  return (
    <Page description="Tsss... Bu sirli joy.">
      <article>
        <p>
          <blockquote cite="http://uzinfocom.uz">
            <p>
              Сколько достойных по дороге полегло?
              Вместе до конца? Да ты пытаешься мне парить гон
              Ведь когда Эмил ака ударит в гонг
              Даже детская площадка превратится в силикон, boy!
            </p>

            <p>
              Не пытайся достать нас, мы так высоко, сюда тебе нельзя (у!)
              Будто на паузе мир - истребители в небе висят
              Не пытайся догнать нас, мы так далеко, сюда тебе нельзя (у!)
              В небе висят... Узи-Узинфо… УЗИНФОКОМ!
            </p>

            <footer>
              — Uzinfocom Open Source,{' '}
              <Link external href="https://t.me/uzinfocom_oss">
                <cite>Blackbird</cite>
              </Link>
            </footer>
          </blockquote>
        </p>
      </article>
    </Page>
  )
}

export default Index
