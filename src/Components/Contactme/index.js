import React from 'react';
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaTelegram, FaPhone} from "react-icons/fa";
import FormContactMe from './FormContactMe'
import WA from '../../images/WA.png'

import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    WAImg
} from './ContactMeElements';

const ContactMeSection = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description,
    description2,
    description3
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}><BsFillEnvelopeFill />{description}</Subtitle>
                                <Subtitle darkText={darkText}><FaPhone />{description2}</Subtitle>
                                <Subtitle darkText={darkText}><FaTelegram />{description3}</Subtitle>
                                <a href="https://walink.co/4841f4" className="whatsapp" target="blank">
                                     <WAImg src={WA} alt="Logo" />
                                </a>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <FormContactMe/>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default ContactMeSection
