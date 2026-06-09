import Page from '@components/page'
import Entry from '@components/entry'

const Projects = () => {
  return (
    <Page title="Loyihalar" description="Qilingan barcha loyihalar ro'yxati.">
      <article>
        <Entry
          title="Xinux Uzbekistan"
          description="Linux ga oid O'zbek hamjamiyati va distributivi."
          image="https://oss.uzinfocom.uz/favicons/ogs/xinux.png"
          href="https://git.oss.uzinfocom.uz/xinux"
        />
        <Entry
          title="Uchar"
          description="Matrix protokoli ustida qurilgan xavfsiz muloqot."
          image="https://oss.uzinfocom.uz/favicons/ogs/uchar.png"
          href="https://git.oss.uzinfocom.uz/uchar"
        />
        <Entry
          title="Gartenziya"
          description="Korporativ portal endi tez, qulay va xavfsiz!"
          image="https://oss.uzinfocom.uz/favicons/ogs/bleur.png"
          href="https://git.oss.uzinfocom.uz/gartensia"
        />
        <Entry
          title="Bleur"
          description="Har xil yo'nalishlarga qaratilgan loyihalar maketi."
          image="https://oss.uzinfocom.uz/favicons/ogs/bleur.png"
          href="https://git.oss.uzinfocom.uz/bleur"
        />
      </article>
    </Page>
  )
}

export default Projects
