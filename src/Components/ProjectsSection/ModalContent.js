import React from "react";
import { Carousel } from 'antd';
import { Tag } from 'antd';
import 'antd/dist/antd.css';
import './styles.css'

const ModalContent = ({ values } ) => {
  return (
      <>  
      <div>
        <p>{values?.description}</p>
        {values.tags.map((tag) => (
               <Tag color="#0098A6">{tag}</Tag>
          ))}
      </div>
      <div><p></p></div>
      <div>
        <Carousel autoplay>
        {values.photos.map((photo) => (
          <div>
             <img src={photo} width="100%" height="100%" position= "fixed" alt={photo}/>
          </div>
         ))}
        </Carousel>
      </div>
      </>
  );
};

export default ModalContent;
