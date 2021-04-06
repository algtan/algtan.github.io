import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Card } from 'react-bootstrap'

import Layout from "../components/layout"
import Seo from "../components/seo"
import profile_photo from "../images/profile_photo.jpg"


import "../css/index.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div className='hero-image'>
      <div className='overlay overlay-padding'>
        <h2 className="hero-intro-text">My name is</h2>
        <h1 className="display-2 hero-title"><strong>ALLEN TAN</strong></h1>
        <h1>
          <span className="line font-weight-light hero-desc-text">Full-Stack&nbsp;</span>
          <span className="line font-weight-light hero-desc-text">Developer&nbsp;</span>
          <span className="line font-weight-light hero-desc-text">in San Diego</span>
        </h1>
      </div>
    </div>

    <Container style={{ marginTop: `1.5rem` }}>
      <h2 className="text-center font-weight-light">About me</h2>
      <h5 className="text-center font-weight-light">A small introduction</h5>
      <Row className="mx-auto align-items-center justify-content-md-center">
        <Col md={8}>
          <h3 className="font-weight-light intro-heading">Allen Tan</h3>
          <h5 className="font-weight-light intro-heading">Developer. Engineer. Problem Solver.</h5>
          <span style={{ display: `block`, marginBottom: `1em` }}></span>
          <p>
          I am currently a student at LEARN Academy, where I am cultivating my skills in JavaScript, React, and Ruby on Rails.
          <br /><br />
          My background is in Mechanical Engineering, where the last four years I was working in the gas turbine industry as a design engineer. As a design engineer, it’s important to consider three things: form, fit, and function. I find programming has similar analogues, and I apply similar engineering principles when I code. That’s because a programmer needs to think about what the expected output is (the form), if the additional code breaks functionality (the fit), and how to get from the input to the output (the function). Engineering, whether it is mechanical or software, is ultimately about finding solutions to build something. The fun part is trying to put together the puzzle when you don’t have all the pieces; and sometimes that requires making those pieces yourself.
          </p>
        </Col>
        <Col md={4} className="order-first order-md-0 text-center">
          <img src={profile_photo} width="300" style={{ borderRadius: `20px`}} alt="profile"></img>
        </Col>
      </Row>
    </Container>

    <Container>
      <Row className="justify-content-md-center">
        <Col md={11}>
          <hr />
        </Col>
      </Row>
    </Container>

    <Container>
      <h2 className="text-center font-weight-light">Skills</h2>
      <Row className="justify-content-center">

        <Col md={1}></Col>

        <Col>
          <Container>
            <Row className="justify-content-around">

              <Col xs={8} md={6} lg={5} xl={true} className="d-flex">
                <Card style={{ marginBottom: `1rem` }} className="flex-fill">
                  <Card.Header className="text-center"><h5 className="font-weight-normal skill-title">Languages</h5></Card.Header>
                  {/* <Card.Text> */}
                    <ul style={{ paddingTop: `0.5rem` }}>
                      <li className="mx-auto skill-li">JavaScript</li>
                      <li className="mx-auto skill-li">Ruby</li>
                      <li className="mx-auto skill-li">C</li>
                      <li className="mx-auto skill-li">Python</li>
                      <li className="mx-auto skill-li">Java</li>
                    </ul>
                  {/* </Card.Text> */}
                </Card>
              </Col>

              <Col xs={8} md={6} lg={5} xl={true} className="d-flex">
                <Card style={{ marginBottom: `1rem` }} className="flex-fill">
                  <Card.Header className="text-center"><h5 className="font-weight-normal skill-title">Front End</h5></Card.Header>
                  {/* <Card.Text> */}
                    <ul style={{ paddingTop: `0.5rem` }}>
                      <li className="mx-auto skill-li">React</li>
                      <li className="mx-auto skill-li">Flask</li>
                      <li className="mx-auto skill-li">HTML</li>
                      <li className="mx-auto skill-li">CSS</li>
                      <li className="mx-auto skill-li">Bootstrap</li>
                    </ul>
                  {/* </Card.Text> */}
                </Card>
              </Col>

              <Col xs={8} md={6} lg={5} xl={true} className="d-flex">
                <Card style={{ marginBottom: `1rem` }} className="flex-fill">
                  <Card.Header className="text-center"><h5 className="font-weight-normal skill-title">Back End</h5></Card.Header>
                  {/* <Card.Text> */}
                    <ul style={{ paddingTop: `0.5rem` }}>
                      <li className="mx-auto skill-li">Ruby on Rails</li>
                      <li className="mx-auto skill-li">PostgresQL</li>
                      <li className="mx-auto skill-li">RESTful API</li>
                    </ul>
                  {/* </Card.Text> */}
                </Card>
              </Col>

              <Col xs={8} md={6} lg={5} xl={true} className="d-flex">
                <Card style={{ marginBottom: `1rem` }} className="flex-fill">
                  <Card.Header className="text-center"><h5 className="font-weight-normal skill-title">Others</h5></Card.Header>
                  {/* <Card.Text> */}
                    <ul style={{ paddingTop: `0.5rem` }}>
                      <li className="mx-auto skill-li">Git</li>
                      <li className="mx-auto skill-li">Github</li>
                      <li className="mx-auto skill-li">Jest</li>
                      <li className="mx-auto skill-li">Rspec</li>
                      <li className="mx-auto skill-li">Android</li>
                    </ul>
                  {/* </Card.Text> */}
                </Card>
              </Col>

            </Row>
          </Container>
        </Col>

        <Col md={1}></Col>

      </Row>
    </Container>

    <Container>
      <Row>
        <Col className="text-center">
          <br />
          <Link className="btn btn-dark btn-lg" to="/contact">
            Get in touch with Allen
          </Link>
        </Col>
      </Row>
    </Container>

  </Layout>
)

export default IndexPage
