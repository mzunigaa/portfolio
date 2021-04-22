import React from 'react';
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaTelegram, FaPhone } from "react-icons/fa";

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
    ImgWrap, 
    Img 
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
    buttonLabel, 
    img, 
    alt,
    primary, 
    dark,
    dark2
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
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default ContactMeSection
