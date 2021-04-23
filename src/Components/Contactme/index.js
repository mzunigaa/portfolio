import React from 'react';
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaTelegram, FaPhone} from "react-icons/fa";
import FormContactMe from './FormContactMe'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp} from "@fortawesome/free-brands-svg-icons"

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
    description3, 
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
                                <a href="https://walink.co/87cfd3" class="whatsapp" target="blank">
                                     <FontAwesomeIcon icon={faWhatsapp} />
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
