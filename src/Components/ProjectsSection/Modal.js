import React from 'react';
import ReactDOM from 'react-dom';
import {
    ModalS,
    ModalContainer,
    ModalCloseButton,
    ModalBtnSection,
    ModalContent
} from './ProjectsSectionElements'


function Modal(props){
    if (!props.isOpen){
        return null;
    }
   return ReactDOM.createPortal(
       <ModalS>
           <ModalContainer>
                   {props.children} 
           </ModalContainer>
       </ModalS>, 
    document.getElementById('modal')
   );
}

export default Modal;