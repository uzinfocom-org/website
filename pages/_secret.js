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
              <br />
              Вместе до конца? Да ты пытаешься мне парить гон
              <br />
              Ведь когда Эмил ака ударит в гонг
              <br />
              Даже детская площадка превратится в силикон, boy!
              <br />
            </p>

            <p>
              Не пытайся достать нас, мы так высоко, сюда тебе нельзя (у!)
              <br />
              Будто на паузе мир - истребители в небе висят
              <br />
              Не пытайся догнать нас, мы так далеко, сюда тебе нельзя (у!)
              <br />
              В небе висят... Узи-Узинфо… УЗИНФОКОМ!
              <br />
            </p>

            <footer>
              <Link external href="https://t.me/uzinfocom_oss">
                — Uzinfocom Open Source, <cite>The Blackbirds</cite>
              </Link>
            </footer>
          </blockquote>
        </p>
      </article>
    </Page>
  )
}

export default Index
