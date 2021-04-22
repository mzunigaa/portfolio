import React from 'react';
import Modal from './Modal';
import CarouselProject from './Carousel'
import {InformationContent, CarouselContent, ModalSubtitle, ModalDescription, ModalCloseButton, ModalBtnSection} from './ProjectsSectionElements'

function ModalProject (props){
    return <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalBtnSection>
             <ModalCloseButton onClick={props.onClose} >X</ModalCloseButton>
        </ModalBtnSection>
        <CarouselContent>
            <CarouselProject image1={props.image1} image2={props.image2} image3={props.image3} image4={props.image4}/>
        </CarouselContent>
        <InformationContent>
            <ModalSubtitle>{props.subtitle}</ModalSubtitle>
            <ModalDescription>{props.description}</ModalDescription>
        </InformationContent>
       
    </Modal>;
}

export default ModalProject;