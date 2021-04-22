import React, { useState } from 'react'
import {
    ProjectsCardContainer, 
    ProjectsIcon,
    ProjectsH2,
    ProjectBtn 
} from './ProjectsSectionElements'
import ModalProject from './ModalProject'

function ProjectCard (props) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(prev => !prev);
    };

    return (
        <ProjectsCardContainer>
            <ProjectsIcon src={props.src}/>
            <ProjectsH2>{props.title}</ProjectsH2>
            <ProjectBtn onClick={openModal}>Show more</ProjectBtn>
            <ModalProject 
                      isOpen={showModal}  
                      onClose={openModal} 
                      description={props.description}
                      subtitle={props.subtitle}
                      image1={props.image1}
                      image2={props.image2}
                      image3={props.image3}
                      image4={props.image4}
            />
        </ProjectsCardContainer>
    )
}

export default ProjectCard;
