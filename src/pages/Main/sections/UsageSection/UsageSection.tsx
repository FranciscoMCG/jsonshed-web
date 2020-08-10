/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import useViewport from '../../../../hooks/useViewport'
import { Card } from '../../../../components/surfaces'

export default function UsageSection() {
  const { width } = useViewport()

  const data = useStaticQuery(graphql`
    query {
      users: file(relativePath: { eq: "users.png" }) {
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
      id="usage"
      sx={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{
          variant: 'cards.dotted',

          maxWidth: ['100%', '90%', '90%'],
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Card
          sx={{
            variant: 'cards.primary',
            mt: ['20vh', '20vh', '20vh'],
            display: 'flex',
            flexDirection: 'column',
            height: ['50%', '50%', '60%'],
            width: ['100%', '90%', '90%'],
            textAlign: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <div>
            <h2
              sx={{
                variant: 'text.heading',
                fontSize: [2, 3, 4],
              }}
            >
              Usage
            </h2>
            <p
              sx={{
                variant: 'text.body',
                fontSize: [1, 2, 3],
                mt: [3, 4, 4],
              }}
            >
              JSONSHED has 3 main features and can be used using one of the
              endpoints below:
            </p>
          </div>
          <div
            sx={{
              variant: 'text.body',
              fontSize: [1, 2, 4],
            }}
          >
            {' '}
            {width < 365 && (
              <div
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <p>https://www.jsonshed.com</p>
                <p>/api/users</p>
                <p>/api/posts</p>
                <p>/api/todos</p>
              </div>
            )}
            {width >= 365 && (
              <React.Fragment>
                <p>https://www.jsonshed.com/api/users</p>
                <p>https://www.jsonshed.com/api/posts</p>
                <p>https://www.jsonshed.com/api/todos</p>
              </React.Fragment>
            )}
          </div>
          {/* <Img fluid={data.users.childImageSharp.fluid} alt="asdjasd" /> */}
        </Card>
      </Card>
    </section>
  )
}
