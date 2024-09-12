
import React from "react";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Specialize from "./Specialize";
import Timeline from "./Timeline";
import Project from "./Project";
import Skill from "./Skill";


const Index=() =>{

    return (
        <div>
            <div className=' relative  '>
                <Navbar />
                <Hero />
                <About />
                <Specialize />
                <Project />
                <Skill />
                <Timeline />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}
export default Index

