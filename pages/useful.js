import { join } from 'path'
import { promises } from 'fs'
import useData from '@lib/use-data'
import Page from '@components/page'
import Entry from '@components/entry/text'

const Useful = ({ data }) => {
  const { items } = useData(data)

  return (
    <Page
      title="Foydali"
      description="Guruh qatnashchilari tomonidan yig'ilgan foydali materiallar."
    >
      <article>
        <ul>
          {items.map((entry) => {
            return (
              <Entry
                key={entry.title}
                title={entry.title}
                image={entry.image}
                href={entry.url}
                type={entry.key}
                comment={entry.comment}
                description={entry.description}
              />
            )
          })}
        </ul>
      </article>
    </Page>
  )
}

export const getStaticProps = async () => {
  const file = await promises.readFile(join('./data', 'useful.json'), {
    encoding: 'utf8',
  })
  const parsed = JSON.parse(file)

  return {
    props: { data: parsed.data },
  }
}

export default Useful
