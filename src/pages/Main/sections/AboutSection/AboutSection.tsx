/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

import { Card } from '../../../../components/surfaces'

export default function AboutSection() {
  return (
    <section
      id="about"
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
          variant: 'cards.primary',
          mt: ['15vh', '20vh', '20vh'],
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          height: ['80%', '70%', '70%'],
          width: ['80%', '70%', '80%'],
          textAlign: 'center',
        }}
      >
        <div>
          <h2
            sx={{
              variant: 'text.heading',
              fontSize: [2, 3, 4],
            }}
          >
            # What are we witnessing?
          </h2>
          <p
            sx={{
              variant: 'text.body',
              fontSize: [1, 2, 3],
              mt: [1],
            }}
          >
            JSONSHED is a REST api and it was built to help web developers
            testing and prototyping
          </p>
        </div>
        <div>
          <h2
            sx={{
              variant: 'text.heading',
              fontSize: [2, 3, 4],
            }}
          >
            # Why have you built it Francisco?
          </h2>
          <p
            sx={{
              variant: 'text.body',
              fontSize: [1, 2, 3],
              mt: [1],
            }}
          >
            Because I wanted to contribute to the web development open source
            community
          </p>
        </div>
        <div>
          <h2
            sx={{
              variant: 'text.heading',
              fontSize: [2, 3, 4],
            }}
          >
            # How?
          </h2>
          <p
            sx={{
              variant: 'text.body',
              fontSize: [1, 2, 3],
              mt: [1],
            }}
          >
            It was built in{' '}
            <a
              href="https://nodejs.org/en/"
              target="_blank"
              sx={{ textDecoration: 'none', color: 'text', fontWeight: 'bold' }}
            >
              Node.JS
            </a>{' '}
            using a plain simple JSON file as data which has been generated
            using{' '}
            <a
              href="https://github.com/marak/Faker.js/"
              target="_blank"
              sx={{ textDecoration: 'none', color: 'text', fontWeight: 'bold' }}
            >
              Faker
            </a>
            . It&#39;s hosted on{' '}
            <a
              href="https://www.netlify.com/"
              target="_blank"
              sx={{ textDecoration: 'none', color: 'text', fontWeight: 'bold' }}
            >
              Netlify
            </a>{' '}
            and the website was built with{' '}
            <a
              href="https://www.gatsbyjs.org/"
              target="_blank"
              sx={{ textDecoration: 'none', color: 'text', fontWeight: 'bold' }}
            >
              Gatsby
            </a>
          </p>
        </div>
      </Card>
    </section>
  )
}
