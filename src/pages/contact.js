import React from "react"
// import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/contact.css"

import EmailIcon from '@material-ui/icons/Email'
import linkedinIcon from "../images/social-networking-icons/linkedinIcon.svg"
import githubIcon from "../images/social-networking-icons/githubIcon.svg"
import DescriptionIcon from '@material-ui/icons/Description'
import GetAppIcon from '@material-ui/icons/GetApp'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />

    <Container>
      <Row className="justify-content-center">
        <Col>
          <h1 className="text-center" style={{ marginTop: `1.5rem` }}>Contact Me</h1>
          <table style={{ margin: `auto`}}>
            <tr>
              <td className="text-center"><EmailIcon fontSize="large"/></td>
              <td>Email:</td>
              <td>
                <a href="mailto:algtan.dev@gmail.com">algtan.dev@gmail.com</a>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <img src={githubIcon} height="30px" alt="Github icon"></img>
              </td>
              <td>Github:</td>
              <td>
                <a href="https://github.com/algtan" target="_blank" rel="noreferrer">github.com/algtan</a>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <img src={linkedinIcon} height="29px" alt="LinkedIn icon"></img>
              </td>
              <td>LinkedIn:</td>
              <td>
                <a href="https://linkedin.com/in/allen-tan" target="_blank" rel="noreferrer">linkedin.com/in/allen-tan</a>
              </td>
            </tr>
            <tr>
              <td className="text-center"><DescriptionIcon fontSize="large"/></td>
              <td>Resume:</td>
              <td>
                <a href={`/Allen_Tan-resume.pdf`} class="btn btn-dark btn-sm" target="_blank" rel="noreferrer"><GetAppIcon /> Download</a>
              </td>
            </tr>
          </table>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ContactPage
