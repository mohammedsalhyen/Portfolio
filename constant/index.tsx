import landing from "../public/animation/Landing.json";
import Project from "../public/animation/Project.json";
import eCommerce from "../public/animation/eCommerce.json";
export const navbar_links = [
    { name: "Home", href: "#Hero", key: "1" },
    { name: "About me", href: "#About", key: "2" },
    { name: "Specializing in", href: "#Specialize", key: "3" },
    { name: "My Projects", href: "#Project", key: "4" },
    { name: "Skill Sit", href: "#Skill", key: "5" },
    { name: "My Experience", href: "#Experience", key: "6" }
]

export const Specialization = [
    { 
        name: "Landing Pages",
        desc: "I specialize in crafting landing pages that don't just attract attention but captivate audiences. Each design is meticulously tailored to drive engagement, conversions, and leave a lasting impression.",
        animation: landing 
    },
    { 
        name: "E-commerce",
        desc: "In the realm of e-commerce, I orchestrate digital experiences that seamlessly merge functionality with aesthetics. From intuitive user interfaces to streamlined checkout processes.",
        animation: eCommerce 
    },
    { 
        name: "Front-end projects",
        desc: "Front-end development isn't just about code; it's art and expertise. That's why I'm interested in creating large projects with attractive designs and outstanding performance.",
        animation: Project 
    },
]
