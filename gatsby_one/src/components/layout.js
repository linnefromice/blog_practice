import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Sidebar from "./sidebar"

const RootContainer = styled.div`
  background: linear-gradient(135deg, #A1FFCE 0%, #FAFFD1 100%);
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-rows: 60px 1fr;
  grid-template-columns: 1fr 7fr;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  overflow-y: hidden;
`
const GlobalLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const LogoLetter = styled.span`
  font-size: 4em;
  color: #8BFFAA;
  font-weight: bold;
  text-align: center;
  text-shadow: 4px 4px 4px gray;
`
const GlobalHeader = styled.div`
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 4px gray;
`
const Title = styled.div`
  display: inline-block;
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  text-shadow: 4px 4px 4px gray;
`
const GlobalDrawer = styled.div`
  background-color: white;
  border-radius: 5px;
  display: flex;
  box-shadow: 4px 4px 4px gray;
`
const ContentArea = styled.div`
  overflow-y: scroll;
  margin: 0 10px;
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/` // "/"
  const logoLetter = (location.pathname === rootPath) ? <LogoLetter>T</LogoLetter>
    : <Link to={rootPath}><LogoLetter>T</LogoLetter></Link>

  return (
    <RootContainer>
      <GlobalLogo>
        {logoLetter}
      </GlobalLogo>
      <GlobalHeader>
        <Title>{title}</Title>
      </GlobalHeader>
      <GlobalDrawer>
        <Sidebar/>
      </GlobalDrawer>
      <ContentArea>{children}</ContentArea>
    </RootContainer>
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

/*
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

  const header = (location.pathname === rootPath) ? <RootHeader title={title} /> : <CommonHeader title={title} />
    <RootContainer>
      <GlobalHeader><h3>Tonberry's Diary</h3></GlobalHeader>
      <GridContainer>
        <Drawer>
          
        </Drawer>
        <div>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </GridContainer>
    </RootContainer>
*/