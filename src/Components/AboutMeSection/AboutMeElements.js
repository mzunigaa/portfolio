import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#0098A6')};

    @media screen and (max-width: 768px){
        padding: 90px 0;
        height: 1050px;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 700px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => 
        imgStart ? `'col2 col1'` : `'col1
        col2'`};

@media screen and (max-width: 768px){
    grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col1' 'col2'` : `'col1
    col1'  'col2 col2'`};
}
`;

export const Column1 = styled.div`
    margin-bottom: 10px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 50px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.p`
    color: #000;
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 200;

    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#313131')}; 

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440 px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#313131')}; 
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 400px;
    height: 600px;
    margin-left: 100;
`;
export const Img = styled.img`
    width: 100%;
    margin: 0 0 20px 0;
    padding-right: 0px;
    border-radius: 10px;
    box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.15);
`;

export const ButtonDownload = styled.button`
    border-radius: 50px;
    background: #313131;
    white-space: nowrap;
    padding: 12px 30px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ffab40;
    }
`;

