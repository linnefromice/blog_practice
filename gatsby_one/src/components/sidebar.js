import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

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
  console.log(group)
  return (
    <div>
      {group.map((node) => {
        console.log(node)
        return (
          <Chip>{node.tag}</Chip>
        )
      })}
    </div>
  )
}

export default Sidebar