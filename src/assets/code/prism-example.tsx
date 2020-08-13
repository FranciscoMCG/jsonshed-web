import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Layout } from '../../components/layout'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/code.md/" } }) {
        nodes {
          html
        }
      }
    }
  `)

  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexFlow: 'column nowrap',
          margin: '6px 10px',
          maxWidth: '800px',
        }}
      >
        <h2>
          Using Prism to style <code>code blocks</code> in Gatsby
        </h2>
        <div
          className="code-container"
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.nodes[0].html,
          }}
        ></div>
      </div>
    </Layout>
  )
}

export default IndexPage
