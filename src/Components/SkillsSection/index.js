import React, { useEffect } from 'react'
import Icon1 from '../../images/skills/react.png'
import Icon2 from '../../images/skills/javalogo.png'
import Icon4 from '../../images/skills/python.png'
import Icon5 from '../../images/skills/pBI.webp'

import {
    SkillsContainer, 
    SkillsH1, 
    SkillsH2,
    SkillsWrapper, 
    SkillsCard, 
    SkillsIcon
} from './SkillsSectionElements'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillsSection = () => {

    useEffect(() => {
        AOS.init({
          // duration : 5000
        });
      }, []);

    return (
        <SkillsContainer id="skills">
           <SkillsH1>Technical skills</SkillsH1> 
           <SkillsH2>Let me show some technologies that I know.</SkillsH2> 
           <SkillsWrapper>
               <div data-aos="fade-up" data-aos-duration="3000">
                    <SkillsCard>
                        <SkillsIcon src={Icon1}/>
                        <SkillsH2>React JS</SkillsH2>
                    </SkillsCard>
               </div>
               <div data-aos="fade-up" data-aos-duration="2000">
               <SkillsCard>
                   
                   <SkillsIcon src={Icon2}/>
                   <SkillsH2>Java SE</SkillsH2>
               </SkillsCard>
               </div>
               <div data-aos="fade-up" data-aos-duration="1000">
               <SkillsCard>
                   <SkillsIcon src={Icon4}/>
                   <SkillsH2>Python</SkillsH2>
               </SkillsCard>
               </div>
               <div data-aos="fade-up" data-aos-duration="500">
               <SkillsCard>
                   <SkillsIcon src={Icon5}/>
                   <SkillsH2>PowerBI</SkillsH2>
               </SkillsCard>
               </div>
           </SkillsWrapper>
           
        </SkillsContainer>
    )
}

export default SkillsSection
