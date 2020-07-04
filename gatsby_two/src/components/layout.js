import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import { AppBar, Toolbar, Typography, Button } from "@material-ui/core"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
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
  } else {
    header = (
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
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography>
            MegaRed's Room
          </Typography>
          <Button
            onClick={() => window.open("https://linnefromice-portfolio.web.app/")}
          >
            Portfolio
          </Button>
          <Button
            onClick={() => window.open("https://github.com/linnefromice")}
          >
            Github
          </Button>
        </Toolbar>
      </AppBar>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
