import Page from '@components/page'
import Entry from '@components/entry'

const Projects = () => {
  return (
    <Page title="Loyihalar" description="Qilingan barcha loyihalar ro'yxati.">
      <article>
        <Entry
          title="Xinux Uzbekistan"
          description="Linux ga oid O'zbek hamjamiyati va distributivi"
          image="https://oss.uzinfocom.uz/favicons/ogs/xinux.png"
          href="https://github.com/xinux-org"
        />
        <Entry
          title="Bleur"
          description="Har xil yo'nalishlarga qaratilgan loyihalar maketi"
          image="https://oss.uzinfocom.uz/favicons/ogs/bleur.png"
          href="https://github.com/bleur-org"
        />

      </article>
    </Page>
  )
}

export default Projects
