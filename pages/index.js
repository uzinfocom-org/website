import Page from '@components/page'
import Link from '@components/link'
import Spotify from '@components/spotify/now-listening'

const Index = () => {
  return (
    <Page description="Hi, I'm Yuri. Senior Dorito Enjoyer, Linux enthusiast, practicing minimalist, and electronic lover in search of good dota team without aggressive russian kids.">
      <article>
        <h1 className="hero">Uzinfocom Open Source</h1>

        <p>
          <Link underline href="https://uzinfocom.uz/uz/" external>
            Uzinfocom
          </Link>{' '}
          Organizatsiyasi tomonidan tashkil topgan va O'zbek Open Source ini
          rivojlantirishga qaratilgan tashkilot. Bizda har xil katta va kichik
          loyihalar mavjud. Bizning{' '}
          <Link underline href="/blog">
            blogimiz
          </Link>{' '}
          kuzatib borishingiz mumkin.
        </p>

        <p align="center">
          Sehr yuz berishi uchun <code>⌘ + K</code> yoki <code>Alt + K</code>{' '}
          tugmalarini bosing. Agar ishlamasa tepadagi ⌘ tugmachani bosing...
        </p>

        <Spotify />
      </article>
    </Page>
  )
}

export default Index
