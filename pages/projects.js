import Page from '@components/page'
import Entry from '@components/entry'

const Projects = () => {
  return (
    <Page title="Loyihalar" description="Qilingan barcha loyihalar ro'yxati.">
      <article>
        <Entry
          title="Xinux Uzbekistan"
          description="Linux community created in Uzbekistan to develop Linux"
          image="https://github.com/uzinfocom-org/wallpapers/raw/main/images/xinux-nochr.png"
          href="https://xinux.uz/"
        />

        <Entry
          title="Osmon"
          description="A programming language created for Uzbek audience"
          image="https://www.osmon.dev/og.png"
          href="https://osmon.dev"
        />
      </article>
    </Page>
  )
}

export default Projects
