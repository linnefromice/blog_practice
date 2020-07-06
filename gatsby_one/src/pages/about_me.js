import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
`

const AboutMe = ({ data, location }) => {
  const { title, author } = data.site.siteMetadata

  return(
    <Layout location={location} title={title}>
      <SEO title="About me" />
      <FlexContainer>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <h4>{author.name}</h4>
        <span>{author.summary}</span>
      </FlexContainer>
    </Layout>
  )
}

export default AboutMe

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/pic_tonberry.jpeg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        author {
          name
          summary
        }
      }
    }
  }
`