import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";  
import {
    CarouselImg
} from './ProjectsSectionElements'

const CarouselProject = (props) => {
    return (
        <AliceCarousel autoPlay autoPlayInterval="3000">
            <CarouselImg src={props.image1}/>
            <CarouselImg src={props.image2}/>
            <CarouselImg src={props.image3}/>
            <CarouselImg src={props.image4}/>
        </AliceCarousel>
    )
}

export default CarouselProject
