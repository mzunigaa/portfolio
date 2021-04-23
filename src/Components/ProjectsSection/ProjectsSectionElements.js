import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, rgba(0,152,166,1) 0%, rgba(48,180,193,1) 52%, rgba(127,199,205,1) 100%);

    @media screen and (max-width: 768px){
        height: 1400px;
    }

    @media screen and (max-width: 480px){
        height: 2000px;
    }
`

export const ProjectsWrapper = styled.div`
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 10px;
    padding: 0;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`


export const ProjectsCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 340px;
    height: 340px;
    width: 280px;
    border-radius: 10px;
    margin: 10px;
    box-shadow: 0 3px 4px rgba(0,0,0,0.2);
    border: solid;

    transition: all 0.2s ease-in-out;

`

export const ProjectsIcon = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 10px;
    opacity: 0.9;
    border: solid;
`

export const ProjectsH1 = styled.p`
    font-size: 40px;
    color: #fff;
    margin-bottom: 10px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`


export const ProjectsH2 = styled.p`
    font-size: 20px;
    color: #fff;
    margin-bottom: 40px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ProjectsP = styled.p`
    font-size: 1rem;
    text-align: center;
`

export const ProjectBtn = styled.button`
    border-radius: 50px;
    background: #ffab40;
    white-space: nowrap;
    margin-bottom: 10px;
    padding: 5px 20px;
    color: #010606;
    font-size: 12px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #010606;
        font-color: #000;
        transform: scale(1.09);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ModalS = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ModalContainer = styled.div`
    border-radius: 10px;    
    position: relative;
    top: 10rem;
    background-color: #ffffff;
    padding: 1rem;
    width: 800px;
`

export const ModalBtnSection = styled.div`
    background-color: red;
`

export const ModalCloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    border: 0;
    background-color: #F5F5F5;
    padding: 0.5rem 1rem;
    margin-bottom: 20px;
    border-radius: 10px;
`

export const CarouselImg = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`

export const CarouselContent = styled.div`
    background-color: #fff;  
    margin-top:30px;

`

export const InformationContent = styled.div`
    background-color: #fff;
`

export const ModalSubtitle = styled.h1`
    font-size: 1rem;
    color: #000;    
    margin-bottom: 10px;
    margin-top: 10px;
`

export const ModalDescription = styled.p`
    font-size: 1rem;
    text-align: center;
`

export const CarouselContainer = styled.div`
    width: 900px;
    height: 90%;
`

export const contentStyle = styled.h3`
    height: '160px';
    color: '#fff';
    lineHeight: '160px';
    textAlign: 'center';
    background: '#364d79';
`

export const TextContainer = styled.div`
    background: red;
    border: solid;
    margin-bottom: 20px;
    height: 150px;
    background: rgba(0, 0, 0, 0.90);
    align-items: center;
    width: fix;
    border: solid;
    border-radius: 10px;
`

