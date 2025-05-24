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
          href="https://xinux.uz/"
        />
      </article>
    </Page>
  )
}

export default Projects
