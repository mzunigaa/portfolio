import React from 'react'
import Icon1 from '../../images/skills/react.png'
import Icon2 from '../../images/skills/javalogo.png'
import Icon3 from '../../images/skills/node.png'
import Icon4 from '../../images/skills/python.png'

import {
    SkillsContainer, 
    SkillsH1, 
    SkillsH2,
    SkillsWrapper, 
    SkillsCard, 
    SkillsIcon
} from './SkillsSectionElements'

const SkillsSection = () => {
    return (
        <SkillsContainer id="skills">
           <SkillsH1>Technical skills</SkillsH1> 
           <SkillsWrapper>
               <SkillsCard>
                   <SkillsIcon src={Icon1}/>
                   <SkillsH2>React JS</SkillsH2>
               </SkillsCard>
               <SkillsCard>
                   <SkillsIcon src={Icon2}/>
                   <SkillsH2>Java SE</SkillsH2>
               </SkillsCard>
               <SkillsCard>
                   <SkillsIcon src={Icon3}/>
                   <SkillsH2>Node JS</SkillsH2>
               </SkillsCard>
               <SkillsCard>
                   <SkillsIcon src={Icon4}/>
                   <SkillsH2>Python</SkillsH2>
               </SkillsCard>
           </SkillsWrapper>
           
        </SkillsContainer>
    )
}

export default SkillsSection
