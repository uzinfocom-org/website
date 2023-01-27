import Page from '@components/page'
import getMarkdown from '@lib/get-markdown'

const Quotes = ({ html }) => {
  return (
    <Page
      title="Mashhur so'zlar"
      description="Ushbu guruh qatnashchilari tomonidan aytilgan esda qoluvchi so'zlar."
    >
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
  )
}

export const getStaticProps = async () => {
  const md = await getMarkdown('data/quotes.md')

  return {
    props: {
      html: md,
    },
  }
}

export default Quotes
