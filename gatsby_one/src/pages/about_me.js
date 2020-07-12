import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import TagCloud from "react-tag-cloud"

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
`

const MainContents = ({ data }) => {
  const { title, author } = data.site.siteMetadata

  return (
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
      <div>
        <span style={{ fontWeight: 'bold', fontSize: '1.5em' }}>{author.name}</span>
      </div>
      <ul>
        <li>{author.summary}</li>
        <li>Experienced from leading in to O&M / from player to manager.</li>
        <li>Also Experienced Mentor for 150 new graduates / Dev lead (having 30 members) New development of hybrid application & back system in leading</li>
      </ul>
    </FlexContainer>
  )
}

const SkillSetCloud = () => {
  return (
    <TagCloud
      style={{
        fontFamily: 'sans-serif',
        fontSize: 30,
        padding: 5,
        height: "50vh",
        width: "80%",
      }}
    >
      <div style={{ color: 'green', fontSize: '20'}}>Flutter</div>
      <div style={{ color: 'green', fontSize: '20'}}>Spring Boot</div>
      <div style={{ color: 'lime', fontSize: '10'}}>React</div>
      <div style={{ color: 'lime', fontSize: '10'}}>Nodejs</div>
      <div style={{ color: 'lime', fontSize: '10'}}>Ruby</div>
      <div style={{ color: 'lime', fontSize: '10'}}>HTML/CSS</div>
      <div style={{ color: 'lime', fontSize: '10'}}>Docker</div>
      <div style={{ color: 'lime', fontSize: '10'}}>Firebase</div>
      <div style={{ color: 'palegreen', fontSize: '5'}}>Vue</div>
      <div style={{ color: 'palegreen', fontSize: '5'}}>ReactNative</div>
      <div style={{ color: 'palegreen', fontSize: '5'}}>Go</div>
      <div style={{ color: 'palegreen', fontSize: '5'}}>Kotlin</div>
    </TagCloud>
  ) 
}

const AboutMe = ({ data, location }) => {
  const { title, author } = data.site.siteMetadata

  return(
    <Layout location={location} title={title}>
      <SEO title="About me" />
      <FlexContainer>
        <MainContents data={data}/>
        <SkillSetCloud/>
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