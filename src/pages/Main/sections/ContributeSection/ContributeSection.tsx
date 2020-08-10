/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import { Card } from '../../../../components/surfaces'

const heading = {
  variant: 'text.heading',
  fontSize: [1, 2, 3],
}

const text = {}

export default function AboutSection() {
  return (
    <section
      id="contribute"
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
          variant: 'cards.charlie',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '1000%',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        <Card
          sx={{
            variant: 'cards.primary',
            mt: ['15vh', '20vh', '20vh'],
            display: 'flex',
            flexDirection: 'column',
            height: ['80%', '70%', '70%'],
            width: ['80%', '70%', '80%'],
            textAlign: 'center',
          }}
        >
          <div>
            <h2
              sx={{
                variant: 'text.heading',
                fontSize: [3, 3, 4],
              }}
            >
              # How do I contribute?
            </h2>
          </div>
          <div sx={{ marginTop: [2, 3, 3], height: '80%' }}>
            <ul
              sx={{
                listStyle: 'disc outside none',
                variant: 'text.body',
                fontSize: [1, 2, 3],
                mt: [3, 2, 3],
                ml: [2, 3, 4],
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                height: '100%',
              }}
            >
              <div>
                <li>
                  <h3 sx={heading}>STEP 1</h3>
                  <ul>
                    <li>
                      Option 1: Fork the repo{' '}
                      <a
                        href="https://github.com/FranciscoMCG/jsonshed.git"
                        target="_blank"
                        sx={{
                          textDecoration: 'none',
                          color: 'text',
                          fontWeight: 'bold',
                        }}
                      >
                        here!
                      </a>
                    </li>
                    <li>
                      Option 2: Clone the repo{' '}
                      <a
                        href="https://github.com/FranciscoMCG/jsonshed.git"
                        target="_blank"
                        sx={{
                          textDecoration: 'none',
                          color: 'text',
                          fontWeight: 'bold',
                        }}
                      >
                        here!
                      </a>
                    </li>
                  </ul>
                </li>
              </div>
              <div>
                <li>
                  <h3 sx={heading}>STEP 2</h3>
                  Write code you feel is going to add something to the project
                </li>
              </div>
              <div>
                <li>
                  <h3 sx={heading}>STEP 3</h3> Create a new pull request using
                  this{' '}
                  <a
                    href="https://github.com/FranciscoMCG/jsonshed/compare"
                    target="_blank"
                    sx={{
                      textDecoration: 'none',
                      color: 'text',
                      fontWeight: 'bold',
                    }}
                  >
                    link
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </Card>
      </Card>
    </section>
  )
}
