import styled from 'styled-components'

export const SkillsContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;

    @media screen and (max-width: 768px){
        height: 1400px;
        padding-top: 120px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const SkillsWrapper = styled.div`
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0px;
        grid-gap: 0px;
    }
`


export const SkillsCard = styled.div`
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;

    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const SkillsIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const SkillsH1 = styled.p`
    font-size: 2.5rem;
    color: #313131;
    margin-bottom: 10px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
        margin-bottom: 10px;

    }
`

export const SkillsH2 = styled.h1`
    font-size: 20px;
    color: #313131;
    margin-bottom: 40px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const SkillsP = styled.p`
    font-size: 1rem;
    text-align: center;

`