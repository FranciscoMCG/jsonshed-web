/** @jsx jsx */
import { jsx } from 'theme-ui'

import { SEO } from '../../../components/config'
import { Card } from '../../../components/surfaces'

export default function About() {
  return (
    <section
      id="about"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <SEO title="About" />
      <Card
        sx={{
          variant: 'cards.primary',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          textAlign: 'center',
          alignItems: 'center',
          p: 5,
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
              mt: 3,
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
              mt: 3,
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
              rel="noreferrer"
              sx={{ variant: 'styles.link' }}
            >
              Node.JS
            </a>{' '}
            using a plain simple JSON file as data which has been generated
            using{' '}
            <a
              href="https://github.com/marak/Faker.js/"
              target="_blank"
              rel="noreferrer"
              sx={{ variant: 'styles.link' }}
            >
              Faker
            </a>
            . It&#39;s hosted on{' '}
            <a
              href="https://www.netlify.com/"
              target="_blank"
              rel="noreferrer"
              sx={{ variant: 'styles.link' }}
            >
              Netlify
            </a>{' '}
            and the website was built with{' '}
            <a
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noreferrer"
              sx={{ variant: 'styles.link' }}
            >
              Gatsby
            </a>
          </p>
        </div>
      </Card>
    </section>
  )
}
