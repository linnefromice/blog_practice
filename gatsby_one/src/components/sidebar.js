import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  align-content: flex-start;
  flex-direction: column;
`
const TitleContext = styled.span`
  font-size: 1em;
  font-weight: bold;
`
const Chip = styled.div`
  border-radius: 25px;
  background-color: #b3ffb7;
  padding: 0.1rem 0.1rem;
  margin: 0.1rem 0.1rem;
`

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query SidebarQuery {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `)

  const group = data.allMarkdownRemark.group
  return (
    <Container>
      <TitleContext>Menu</TitleContext>
      <Link
        style={{ boxShadow: `none` }}
        to={`/about_me`}
      >
        <span>About Me</span>
      </Link>
      <TitleContext>Tags</TitleContext>
      <Link
        style={{ boxShadow: `none` }}
        to={`/`}
      >
        <span>ALL</span>
      </Link>
      {group.map((node) => {
        return (
          <Link
            style={{ boxShadow: `none` }}
            to={`/`}
            state={{ tag: `${node.tag}`}}
          >
            <Chip>{node.tag}</Chip>
          </Link>
        )
      })}
    </Container>
  )
}

export default Sidebar