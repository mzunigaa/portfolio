import React, { useState } from 'react';
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, ImgWrap, Img } from './HeroElements';
import { Button } from '../ButtonElement'
import image1 from '../../images/background.jpg'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer img={"red"}>
                <HeroContent>
                    <HeroH1>Hello, I'm Mónica Zúñiga.</HeroH1>
                    <HeroP>
                        I'm a web developer.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button 
                        to="aboutme" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        smooth={true} 
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >View my work {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                    </HeroBtnWrapper>
                </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
