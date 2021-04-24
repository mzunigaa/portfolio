import React,  { useEffect } from 'react';
import MZCV from '../../docs/MZCV.pdf'
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
    BtnWrap, 
    ImgWrap, 
    Img,
    ButtonDownload
} from './AboutMeElements';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMeSection = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description,
    description2, 
    buttonLabel, 
    img, 
    alt,
    primary, 
    dark,
    dark2
}) => {

    useEffect(() => {
        AOS.init({
          // duration : 5000
        });
      }, []);

    const downloadFile = () => {
        return {
            mime: MZCV,
            filename: 'myexportedfile.txt',
            contents: 'all of the exports',
           }
      }

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <Subtitle darkText={darkText}>{description2}</Subtitle>
                                <BtnWrap>
                                <a href={MZCV} download="CV_Monica_Zuniga">
                                    <ButtonDownload href={MZCV} onClick={downloadFile}>
                                        Download resume
                                    </ButtonDownload>
                                </a>
                                   
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            <div data-aos="fade-up" data-aos-duration="3000">
                                <Img src={img} alt={alt}/>
                            </div>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default AboutMeSection
