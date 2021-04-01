import React from "react"
// import { Link } from "gatsby"

import { Container } from 'react-bootstrap'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../css/background.css'

import Layout from "../components/layout"
import Seo from "../components/seo"

import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';

const BackgroundPage = () => (
  <Layout>
    <Seo title="Work History and Education" />

    <div className="background-body">

    <Container>
      <h1 className="text-center" style={{ marginBottom: `1.5rem`, paddingTop: `1.5rem` }}>Background</h1>

      <VerticalTimeline className="vertical-timeline vertical-timeline-custom-line">

        {/* LEARN */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Feb 2021 - Present"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
          >
          <h3 className="vertical-timeline-element-title">LEARN Academy</h3>
          <h4 className="vertical-timeline-element-subtitle">Full-Stack Developer Bootcamp</h4>
          <p>
            Languages and Technologies: <br />JavaScript, HTML, CSS, React, Ruby, Ruby on Rails, PostgreSQL, Git, Jest, RSpec
          </p>
        </VerticalTimelineElement>

        {/* Solar Turbines */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
          >
          <h3 className="vertical-timeline-element-title">Senior Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Solar Turbines (via Volt)</h4>
          <p>
            Group: NPI Combustion Mechanical Design
          </p>
        </VerticalTimelineElement>

        {/* Mikroscan */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015 - 2017"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
          >
          <h3 className="vertical-timeline-element-title">Mechanical Design Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Mikroscan Technologies, Inc.</h4>
          <p>
            Technology: Digital Pathology and Live Telemicroscopy
          </p>
        </VerticalTimelineElement>

        {/* SDSU */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012 - 2015"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
          >
          <h3 className="vertical-timeline-element-title">San Diego State University</h3>
          <h4 className="vertical-timeline-element-subtitle">MS Mechanical Engineering</h4>
          <p>
            Thesis Project: 3DOF Robotic Arm Exoskeleton
          </p>
        </VerticalTimelineElement>

        {/* UTC Aerospace Systems */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2012 - 2015"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
          >
          <h3 className="vertical-timeline-element-title">Manufacturing Engineer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">UTC Aerospace Systems</h4>
          <p>
            Product: Ventilation Fans
          </p>
        </VerticalTimelineElement>

        {/* UCSD */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2007 - 2012"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
          >
          <h3 className="vertical-timeline-element-title">UC San Diego</h3>
          <h4 className="vertical-timeline-element-subtitle">BS Mechanical Engineering</h4>
          <p>
            Minor: Sociology
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
          />
      </VerticalTimeline>
    </Container>

    <br />

    </div>

  </Layout>
)

export default BackgroundPage
