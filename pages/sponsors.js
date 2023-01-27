import Page from '@components/page'
import Entry from '@components/entry/index'

// Data
import client from '@lib/apollo'
import { gql } from '@apollo/client'

const Reading = ({ sponsors }) => {
  console.log(sponsors)
  return (
    <Page title="Yordam" description="Biz qo'llab quvvatlayotgan dasturchilar!">
      <article>
        <h1 align="center">Biz qo'llab quvvatlayotgan dasturchilar!</h1>

        {sponsors.map((entry) => {
          return (
            <Entry
              key={entry.id}
              title={entry.name}
              image={entry.avatarUrl}
              href={entry.url}
              description={entry.bio}
            />
          )
        })}
      </article>
    </Page>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Sponsors {
        organization(login: "uzinfocom-org") {
          sponsoring(first: 100) {
            nodes {
              ... on User {
                id
                name
                avatarUrl
                bio
                url
              }
            }
          }
        }
      }
    `,
  })

  console.log(data)

  return {
    props: {
      sponsors: data.organization.sponsoring.nodes,
    },
  }
}

export default Reading
