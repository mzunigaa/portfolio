import React from "react";
import PropTypes from "prop-types";
import { Carousel } from 'antd';
import { Tag } from 'antd';
import 'antd/dist/antd.css';
import './styles.css'

const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const ModalContent = ({ onCancelClose, values } ) => {
 console.log("valores ",values)
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
             <img src={photo} width="100%" height="100%" position= "fixed"/>
          </div>
         ))}
        </Carousel>
      </div>
      </>
  );
};

ModalContent.propTypes = {
  onCancelClose: PropTypes.func.isRequired,
};

export default ModalContent;
