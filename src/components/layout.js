/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Header from "./header"
import PageTransition from 'gatsby-plugin-page-transitions';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/layout.css'
import linkedinIcon from "../images/social-networking-icons/linkedinIcon.svg"
import githubIcon from "../images/social-networking-icons/githubIcon.svg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="body-content">
      <Header siteTitle={data.site.siteMetadata.title} />

      <PageTransition>
        <main>{children}</main>
      </PageTransition>
      </div>
      <footer className="text-white bg-dark">
        <Container>
          <Row className="justify-content-center" style={{ paddingTop: `10px` }}>
            <Col md={2} className="text-center">
              <Link to="/" className="footer-link">About Me</Link>
            </Col>
            <Col md={2} className="text-center">
              <Link to="/background" className="footer-link">Background</Link>
            </Col>
            <Col md={2} className="text-center">
              <Link to="/projects" className="footer-link">Projects</Link>
            </Col>
            <Col md={2} className="text-center">
              <Link to="/contact" className="footer-link">Contact</Link>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <a href="https://github.com/algtan" target="_blank" rel="noreferrer">
              <img src={githubIcon} className="social-icon" alt="Github account" style={{ margin: `10px`}}></img>
            </a>
            <a href="https://linkedin.com/in/allen-tan" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} className="social-icon" alt="LinkedIn account" style={{ margin: `10px`}}></img>
            </a>
          </Row>
          <div style={{ textAlign: `center`}}>
            © {new Date().getFullYear()} Allen Tan
          </div>
        </Container>
      </footer>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
