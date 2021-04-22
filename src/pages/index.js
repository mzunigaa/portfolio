import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import Footer from '../Components/Footer';
import AboutMeSection from '../Components/AboutMeSection';
import ContactMeSection from '../Components/Contactme';
import { homeObjOne } from '../Components/AboutMeSection/Data';
import { homeObjTwo } from '../Components/Contactme/ContactData';
import SkillsSection from '../Components/SkillsSection';
import ProjectsSection from '../Components/ProjectsSection';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <AboutMeSection {...homeObjOne}/>
            <ProjectsSection />
            <SkillsSection />
            <ContactMeSection {...homeObjTwo}/>
            <Footer />
        </>
    )
}

export default Home
