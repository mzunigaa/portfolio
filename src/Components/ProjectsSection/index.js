import React from 'react'
import Icon1 from '../../images/project2/logo-c.JPG'
import Icon2 from '../../images/componentsProject/logo-b.JPG'
import Icon3 from '../../images//patternsProject/logo-a.png'
import Image1_1 from '../../images/project2/c-1.JPG' 
import Image1_2 from '../../images/project2/c-2.JPG'
import Image1_3 from '../../images/project2/c-3.JPG'
import Image1_4 from '../../images/project2/c-4.JPG'
import Image2_1 from '../../images/componentsProject/c-1.JPG' 
import Image2_2 from '../../images/componentsProject/c-2.JPG'
import Image2_3 from '../../images/componentsProject/c-3.JPG' 
import Image2_4 from '../../images/componentsProject/c-4.JPG'
import Image3_1 from '../../images/patternsProject/a-1.png' 
import Image3_2 from '../../images/patternsProject/a-2.png' 
import Image3_3 from '../../images/patternsProject/a-3.png' 
import Image3_4 from '../../images/patternsProject/a-4.png' 
import ProjectCard from './ProjectCard'

import {
    ProjectsContainer, 
    ProjectsH1, 
    ProjectsWrapper, 
} from './ProjectsSectionElements'

const ProjectsSection = () => {

    return (
        <ProjectsContainer id="projects">
           <ProjectsH1>Projects</ProjectsH1> 
           <ProjectsWrapper>
               <ProjectCard 
               src={Icon1} 
               alt="Fondo"
               title=".NET | Jquery"
               subtitle="Full .NET web application: food delivery"
               description="Final project of the Project 2 course at Cenfotec University. Application for the sale and delivery of food."
               image1={Image1_1}
               image2={Image1_2}
               image3={Image1_3}
               image4={Image1_4}
               />
                <ProjectCard 
               src={Icon2} 
               alt="Fondo"
               title="Flask | C# | Vue JS"
               subtitle="Flask web application: food orders"
               description="Final project of the course “Componentes” (Components) in Universidad Cenfotec The languages and technologies were used: Flask web framework, C #, docker, Cosmos database, Azure pipelines and Vue JS."
               image1={Image2_1}
               image2={Image2_2}
               image3={Image2_3}
               image4={Image2_4}
               />
               <ProjectCard 
               src={Icon3} 
               alt="Fondo"
               title="Spring boot | Boostrap"
               subtitle="Spring boot web application: human resources management"
               description="Final project of the course “Programación con Patrones” (Programming with Patterns) in Universidad Cenfotec. It was an application for the management of human resources of a company."
               image1={Image3_1}
               image2={Image3_2}
               image3={Image3_3}
               image4={Image3_4}
               />
           </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default ProjectsSection
