import React from "react";
import { Container, CardColumns } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/projectcard"
import '../css/projects.css'

// import astronaut from "../images/gatsby-astronaut.png"

const ProjectsPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Projects" />
        <h1 className="text-center" style={{ marginTop: `1.5rem` }}>Projects</h1>

        <Container>

          <CardColumns>
          
            {/* Card 1 */}
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

              
            {/* Card 2 */}
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

            {/* Card 3 */}
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