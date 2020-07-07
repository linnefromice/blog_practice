import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  width: 100%
`
const TitleContext = styled.div`
  font-size: 1em;
  font-weight: bold;
  margin: 0 5%;
`
const Chip = styled.div`
  border-radius: 25px;
  background-color: #b3ffb7;
  padding: 0.1rem 0;
  margin: 0.5rem 5%;
  text-align: center;
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
      <div>
        <TitleContext>Menu</TitleContext>
        <Link
          style={{ boxShadow: `none`, textAlign: `center` }}
          to={`/about_me`}
        >
          <div>About Me</div>
        </Link>
      </div>
      <div>
        <TitleContext>Tags</TitleContext>
        <Link
          style={{ boxShadow: `none`, textAlign: `center` }}
          to={`/`}
        >
          <div>ALL</div>
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
      </div>
    </Container>
  )
}

export default Sidebar