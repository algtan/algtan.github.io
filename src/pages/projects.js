import React from "react";
import { Container, CardColumns } from 'react-bootstrap'

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectCard from "../components/projectcard"
import '../css/projects.css'

// import astronaut from "../images/gatsby-astronaut.png"

const ProjectsPage = () => {
  return (
    <>
      <Layout>
        <Seo title="Projects" />
        <h1 className="text-center" style={{ marginTop: `1.5rem` }}>Projects</h1>

        <Container style={{ marginBottom: `2rem` }}>

          <CardColumns>
          
            {/* Edge Snack Bar */}
            <ProjectCard
              cardImg={`/edge_snack_bar_01.png`}
              projectTitle="Edge Snack Bar"
              cardText="Web application that generates a QR code for multiple cryptocurrency options for those in the Edge office that would like to purchase a snack."
              tools={['TypeScript', 'React']}
              buttonInfo={[
                {link: "https://github.com/EdgeApp/edge-snack-bar-app", ghIcon: true, text: ' Repo'},
                {link: "https://edgeapp.github.io/edge-snack-bar-app/", ghIcon: false, text: 'Live Site'}
              ]}
              carouselImgs={[
                `/edge_snack_bar_01.png`,
                `/edge_snack_bar_02.png`,
                `/edge_snack_bar_03.png`
              ]}
              />

            {/* Pokedeck */}
            <ProjectCard
              cardImg={`/pokedeck_01.png`}
              projectTitle="Pokedeck"
              cardText="Pokemon Trading Card Game where users compete to have the most valuable collection."
              tools={['Ruby on Rails', 'React']}
              buttonInfo={[
                {link: "https://github.com/squirtlesquad2021a/pokedeck_capstone_app", ghIcon: true, text: ' Repo'},
                {link: "https://pokedeck-game.herokuapp.com/", ghIcon: false, text: 'Live Site'}
              ]}
              carouselImgs={[
                `/pokedeck_01.png`,
                `/pokedeck_02.png`,
                `/pokedeck_03.png`,
                `/pokedeck_04.png`
              ]}
              />

            {/* Pokedex */}
            <ProjectCard
              cardImg={`/pokedex_01.png`}
              projectTitle="Pokedex"
              cardText="Android application that parses JSON data from a RESTful API to provide information on the original 151 Pokemon."
              tools={['Java', 'Android']}
              buttonInfo={[
                {link: "https://github.com/algtan/CS50x-pokedex", ghIcon: true, text: ' Repo'}
              ]}
              carouselImgs={[
                `/pokedex_01.png`,
                `/pokedex_02.png`,
                `/pokedex_03.png`,
                `/pokedex_04.png`
              ]}
              />

              
            {/* Mortgage Calculator */}
            <ProjectCard
              cardImg={`/mortgage_calc_01.png`}
              projectTitle="Mortgage Calculator"
              cardText="Web application that helps users make informed decisions on purchasing a home."
              tools={['Python', 'Flask']}
              buttonInfo={[
                {link: "https://github.com/algtan/CS50x-final", ghIcon: true, text: ' Repo'}
              ]}
              carouselImgs={[
                `/mortgage_calc_01.png`,
                `/mortgage_calc_02.png`,
                `/mortgage_calc_03.png`,
                `/mortgage_calc_04.png`,
              ]}
              />

            {/* Robotic Arm */}
            <ProjectCard
              cardImg={`/robotic_arm_01.png`}
              projectTitle="3DOF Robotic Arm"
              cardText="Master's thesis project on a robotic arm exoskeleton, whose purpose is to amplify upper-limb movements of wheelchair users who have lost functionality in their right arm."
              tools={['MATLAB']}
              buttonInfo={[
                {link: `/allen_tan-thesis_presentation.pdf`, ghIcon: false, text: 'Thesis Presentation'},
                {link: 'https://digitallibrary.sdsu.edu/islandora/object/sdsu%3A2333', ghIcon: false, text: 'Thesis Paper'}
              ]}
              carouselImgs={[
                `/robotic_arm_01.png`,
                `/robotic_arm_02.png`,
                `/robotic_arm_03.png`,
                `/robotic_arm_04.png`,
                `/robotic_arm_05.png`
              ]}
              />

          </CardColumns>

        </Container>

      </Layout>
    </>
  );
};

export default ProjectsPage