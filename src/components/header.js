import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav } from 'react-bootstrap';
import linkedinIcon from "../images/social-networking-icons/linkedinIcon.svg"
import githubIcon from "../images/social-networking-icons/githubIcon.svg"
import '../css/header.css'

const Header = ({ siteTitle }) => (
  <header className="bg-dark">
    <Container>
      <Navbar expand="md" variant="dark">
        <Navbar.Brand href="/"><h2>{siteTitle}</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li">
              <Link to="/" className="nav-link" activeClassName="active">About Me</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/background" className="nav-link" activeClassName="active">Background</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/projects" className="nav-link" activeClassName="active">Projects</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/contact" className="nav-link" activeClassName="active">Contact</Link>
            </Nav.Item>
            <span style={{ display: `flex` }}>
              <Nav.Item as="li" className="social-nav-item">
                <a href="https://github.com/algtan" target="_blank" rel="noreferrer">
                  <img src={githubIcon} className="social-icon" alt="Github account"></img>
                </a>
              </Nav.Item>
            </span>
            <span style={{ display: `flex` }}>
              <Nav.Item as="li" className="social-nav-item">
                <a href="https://linkedin.com/in/allen-tan" target="_blank" rel="noreferrer">
                  <img src={linkedinIcon} className="social-icon" alt="LinkedIn account"></img>
                </a>
              </Nav.Item>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
