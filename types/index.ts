export interface Project {
    name: string;
    description: string;
    img: string; 
    skills:string[]
    Link: string; 
    githubLink: string; 
  }

   export interface SkillType { 
    name: string;
    img: string; 
  }
  export interface Experience {
    jobTitle:string;
    start:string;
    end:string;
    workedFor:string;
    responsibleFor:string;
  }