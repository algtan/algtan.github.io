import React, { useState } from "react";
import { Card, Button, Modal, Carousel } from 'react-bootstrap'

import '../css/projects.css'

import githubIcon from "../images/social-networking-icons/githubIcon.svg"

const ProjectCard = props => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

  return (
    <>
        <Card className="card-margins">
            <Card.Img
            className="card-img"
            onClick={handleShow}
            variant="top"
            src={props.cardImg}
            style={{ height: `30vh`, objectFit: `cover`, objectPosition: `top`, cursor: `pointer`}} />
            <Card.Body>
            <h5>{props.projectTitle}</h5>
            <div style={{ paddingBottom: `6px`}}>
                { props.tools && props.tools.map((value, index) => {
                    return (
                      <div className="tag" key={index}>{value}</div>
                    )
                  })
                }
            </div>
            <Card.Text>
                {props.cardText}
            </Card.Text>
              { props.buttonInfo && props.buttonInfo.map((value, index) => {
                  return (
                    <a href={value.link} target="_blank" rel="noreferrer" className="btn btn-dark" key={index} style={{ margin: `2px` }}>
                      { value.ghIcon && <img src={githubIcon} style={{ filter: `invert(1)`, verticalAlign: `-.25em` }} height="20px" alt="Github icon"></img> }{value.text}
                    </a>
                  )
                })
              }
            </Card.Body>
        </Card>
            
      <Modal
        show={show}
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.projectTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            { props.carouselImgs && props.carouselImgs.map((value, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                    className="d-block w-100"
                    src={value}
                    alt="project screenshot {index + 1}"
                    />
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectCard