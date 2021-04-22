import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements.js'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Mónica Zúñiga
                        </SocialLogo>
                        <WebsiteRights>{new Date().getFullYear()} ® All rights reserverd.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/mozuniga308/" target="_blank" arial-label="Facebook"><FaFacebook /></SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/mónicazúñiga" target="_blank" arial-label="Linkedin"><FaLinkedin /></SocialIconLink>
                            <SocialIconLink href="https://github.com/mozuniga93" target="_blank" arial-label="GitHub"><AiFillGithub /></SocialIconLink>
                            <SocialIconLink href="https://twitter.com/MonicaZunigaDev" target="_blank" arial-label="Twitter"><FaTwitter /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
