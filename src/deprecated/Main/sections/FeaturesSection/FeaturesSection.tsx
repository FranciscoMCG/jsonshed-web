/** @jsx jsx */
import { useState } from 'react'
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { SEO } from '../../../../components/config'
import { Card } from '../../../../components/surfaces'

const USERS = 'users'
const TODOS = 'todos'
const POSTS = 'posts'
const snippets = [USERS, TODOS, POSTS]

interface SnippetProps {
  data: any
  snippet: string
}

function Snippet({ data, snippet }: SnippetProps) {
  return (
    <div sx={{ variant: 'styles.snippet' }}>
      {snippet === USERS && (
        <Img
          fluid={data.users.childImageSharp.fluid}
          alt="users code snippet"
        />
      )}
      {snippet === TODOS && (
        <Img
          fluid={data.todos.childImageSharp.fluid}
          alt="todos code snippet"
        />
      )}
      {snippet === POSTS && (
        <Img
          fluid={data.posts.childImageSharp.fluid}
          alt="posts code snippet"
        />
      )}
    </div>
  )
}

export default function FeaturesSection() {
  const [snippet, setSnippet] = useState('users')
  const data = useStaticQuery(graphql`
    query {
      users: file(relativePath: { eq: "users.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      todos: file(relativePath: { eq: "todos.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      posts: file(relativePath: { eq: "posts.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section
      id="features"
      sx={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <SEO title="Features" />
      <Card
        sx={{
          variant: 'cards.diagonal',
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Card
          sx={{
            variant: 'cards.primary',
            mt: '10vh',
            display: 'flex',
            flexDirection: 'column',
            height: ['80%', '80%', '90%'],
            width: ['90%', '80%', '80%'],
            textAlign: 'center',
          }}
        >
          <div
            sx={{
              display: 'flex',
              mt: [3, 4, 3],
              variant: 'text.heading',
              fontSize: [2, 3, 4],
              justifyContent: 'space-evenly',
            }}
          >
            {snippets.map((snippet: string) => (
              <button
                key={snippet}
                sx={{ variant: 'buttons.styleNone' }}
                onClick={() => setSnippet(snippet)}
              >
                <h2 sx={{ p: 1, variant: 'styles.link' }}>{snippet}</h2>
              </button>
            ))}
          </div>
          <Snippet data={data} snippet={snippet} />
        </Card>
      </Card>
    </section>
  )
}
