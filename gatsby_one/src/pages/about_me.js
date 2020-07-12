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
        <li style={{ fontSize: '0.75rem' }}>{author.summary}</li>
        <li style={{ fontSize: '0.75rem' }}>Experienced from leading in to O&M / from player to manager.</li>
        <li style={{ fontSize: '0.75rem' }}>Also Experienced Mentor for 150 new graduates / Dev lead (having 30 members) New development of hybrid application & back system in leading</li>
      </ul>
    </FlexContainer>
  )
}

const SkillSetCloud = () => {
  return (
    <TagCloud
      style={{
        padding: 5,
        height: "50vh",
        width: "80%",
      }}
      rotate={() => Math.round(Math.random() * 1) * 90}
    >
      <div style={{ color: 'springgreen', fontSize: '10', textShadow: '2px 2px 2px gray', fontFamily: 'Arial Black' }}>Flutter</div>
      <div style={{ color: 'springgreen', fontSize: '10', textShadow: '2px 2px 2px gray', fontFamily: 'Arial Black' }}>SpringBoot</div>
      <div style={{ color: 'springgreen', fontSize: '10', textShadow: '2px 2px 2px gray', fontFamily: 'Arial Black' }}>React</div>
      <div style={{ color: 'mediumspringgreen', fontSize: '5', textShadow: '2px 2px 2px gray', fontFamily: 'Arial Black' }}>Nodejs</div>
      <div style={{ color: 'mediumspringgreen', fontSize: '5', textShadow: '2px 2px 2px gray', fontFamily: 'Arial Black' }}>Ruby</div>
      <div style={{ color: 'mediumspringgreen', fontSize: '5', textShadow: '2px 2px 2px gray', fontFamily: 'Arial Black' }}>HTML/CSS</div>
      <div style={{ color: 'mediumspringgreen', fontSize: '5', textShadow: '2px 2px 2px gray', fontFamily: 'Arial Black' }}>Docker</div>
      <div style={{ color: 'mediumspringgreen', fontSize: '5', textShadow: '2px 2px 2px gray', fontFamily: 'Arial Black' }}>Firebase</div>
      <div style={{ color: 'palegreen', fontSize: '3', textShadow: '2px 2px 2px gray', fontFamily: 'Arial Black' }}>Vue</div>
      <div style={{ color: 'palegreen', fontSize: '3', textShadow: '2px 2px 2px gray', fontFamily: 'Arial Black' }}>ReactNative</div>
      <div style={{ color: 'palegreen', fontSize: '3', textShadow: '2px 2px 2px gray', fontFamily: 'Arial Black' }}>Go</div>
      <div style={{ color: 'palegreen', fontSize: '3', textShadow: '2px 2px 2px gray', fontFamily: 'Arial Black' }}>Kotlin</div>
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