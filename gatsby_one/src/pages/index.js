import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

// import indexStyles from "./index.module.css"
import styled from "styled-components"
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const ChipArea = styled.div`
  display: flex;
  flex-direction: row;
`
const Chip = styled.div`
  border-radius: 25px;
  background-color: #f1f1f1;
  padding: 0 0.25rem;
  margin: 0 0.25rem;
`

const TagChips = ({tags}) => (
  <ChipArea>
    {tags.map((tag) => {
      return(
        <Chip>
          <small>{tag}</small>
        </Chip>
      )
    })}
  </ChipArea>
)

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <GridContainer>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <div>
                  <small>{node.frontmatter.date}</small>
                </div>
                <TagChips tags={node.frontmatter.tags}/>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </GridContainer>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
