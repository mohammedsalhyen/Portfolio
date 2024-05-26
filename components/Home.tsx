"use client"
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Specialize from "./Specialize";
import Timeline from "./Timeline";
import Loading from "@/helper/Loading";
import { client } from "@/lib/client";
const Project = dynamic(() => import("./Project"));
const Skill = dynamic(() => import("./Skill"));

const Index=() =>{
    const [isLoading, setIsLoading] = useState(true);
    const [cvUrl, setCVUrl] = useState('');
    useEffect(() => {
        const timeoutId = setTimeout(() => setIsLoading(false), 3000);
        const fetchCVData = async () => {
            try {
                const cvData = await client.fetch(`*[_type == "cv"][0]`);
                setCVUrl(cvData.cv.asset._ref.split("-")[1]);
            } catch (error) {
                console.error('Error fetching CV data:', error);
            }
        };
        fetchCVData();
        return () => clearTimeout(timeoutId); // Cleanup to prevent memory leaks
    }, []);
    return (
        <div>
            {isLoading ? <Loading /> : <div className=' relative  '>
                <Navbar cvUrl={cvUrl} />
                <Hero cvUrl={cvUrl}/>
                <About cvUrl={cvUrl}/>
                <Specialize />
                <Project />
                <Skill />
                <Timeline />
                <Contact />
                <Footer />
            </div>}
        </div>
    );
}
export default Index

