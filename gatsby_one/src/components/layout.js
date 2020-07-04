import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import styled from "styled-components"
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  padding: 0 ${rhythm(3 / 4)};
`
const Drawer = styled.div`
  background-color: #DDFFDD;
  height: 100vh;
`

const RootHeader = ({title}) => (
  <h1
    style={{
      ...scale(1.5),
      marginBottom: rhythm(1.5),
      marginTop: 0,
    }}
  >
    <Link
      style={{
        boxShadow: `none`,
        color: `inherit`,
      }}
      to={`/`}
    >
      {title}
    </Link>
  </h1>
)

const CommonHeader = ({title}) => (
  <h3
    style={{
      fontFamily: `Montserrat, sans-serif`,
      marginTop: 0,
    }}
  >
    <Link
      style={{
        boxShadow: `none`,
        color: `inherit`,
      }}
      to={`/`}
    >
      {title}
    </Link>
  </h3>
)

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const header = (location.pathname === rootPath) ? <RootHeader title={title} /> : <CommonHeader title={title} />

  return (
    <GridContainer>
      <div>
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
      <Drawer>
        
      </Drawer>
    </GridContainer>
  )
}

export default Layout

/*
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        height: `100vh`,
        backgroundColor: `#DDFFDD`
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
*/