import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#0098A6')};

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 600px;
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
    margin-bottom: 65px;
    padding: 0 55px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 50px 0px 10px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px){
        padding: 0px;
        margin-top: 100px;
    }
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
    font-size: 48px;
    line-height: 1;
    font-weight: 300;

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

export const ImgWrap = styled.div`
    max-width: 400px;
    height: 600px;
    margin-top: 50px;
    @media screen and (max-width: 768px){
        margin-top: -100px;
    }
`;
export const Img = styled.img`
    width: 120px;
    margin: 0 0 0 100px;
    align: center;
`;

export const FormContainer = styled.div`
    width: 360px;
    background-color: white;
    margin: auto;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    padding: 10px;
    border-radius: 10px;
`;
  
export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 10px;
  `;
  
  export const SuccessMessage = styled.p`
    font-family: "Montserrat", sans-serif;
    background-color: #3f89f8;
    padding: 15px;
    color: white;
`;
  
export const FormField = styled.input` 
    margin: 10px 0 10px 0;
    padding: 15px;
    font-size: 16px;
    border: 0;
    font-family: "Montserrat", sans-serif;
    background: #f2f2f2;
  `;
  
  export const BtnWrap = styled.button` 
    color: white;
    cursor: pointer;
    border: none;
    background: white;
  `;

  export const WAImg = styled.img`
    width: 100px;
    margin: 0 0 0 0;
    align: center;
`;

  
