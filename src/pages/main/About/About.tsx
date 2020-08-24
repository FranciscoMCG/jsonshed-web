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
          p: [5, 6, 7],
        }}
      >
        <div>
          <h2
            sx={{
              variant: 'styles.h2',
              fontSize: [2, 3, 4],
            }}
          >
            What is JSONSHED?
          </h2>
          <p
            sx={{
              variant: 'text.body',
              fontSize: [1, 2, 3],
              mt: [1],
            }}
          >
            JSONSHED is a REST api and it was built to help web developers
            testing and prototyping.
          </p>
        </div>
        <div>
          <h2
            sx={{
              variant: 'styles.h2',
              fontSize: [2, 3, 4],
              mt: 3,
            }}
          >
            Why have you built it Francisco?
          </h2>
          <p
            sx={{
              variant: 'text.body',
              fontSize: [1, 2, 3],
              mt: [1],
            }}
          >
            Because I want to contribute to the open source web development
            community.
          </p>
        </div>
        <div>
          <h2
            sx={{
              variant: 'styles.h2',
              fontSize: [2, 3, 4],
              mt: 3,
            }}
          >
            How did you build it?
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
            using simple JSON files as data, which has been generated using{' '}
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
              href="https://firebase.google.com/"
              target="_blank"
              rel="noreferrer"
              sx={{ variant: 'styles.link' }}
            >
              Firebase
            </a>{' '}
            and the website was built with{' '}
            <a
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noreferrer"
              sx={{ variant: 'styles.link' }}
            >
              Gatsby.
            </a>
          </p>
        </div>
      </Card>
    </section>
  )
}
