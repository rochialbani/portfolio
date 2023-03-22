// skills images
import SkillImg1 from './assets/skills/html5.png';
import SkillImg2 from './assets/skills/css3.png';
import SkillImg3 from './assets/skills/js.png';
import SkillImg4 from './assets/skills/typescript.png';
import SkillImg5 from './assets/skills/reactjs.png';
import SkillImg6 from './assets/skills/redux.png';
import SkillImg7 from './assets/skills/tailwind.png';
import SkillImg8 from './assets/skills/git.png';
import SkillImg9 from './assets/skills/github1.png';

import pidogs1 from './assets/projects/pidogs1.png';
import mangacoffee1 from './assets/projects/mangacoffee1.png';
import portfolio1 from './assets/projects/portfolio1.png'




export const skills = [
    {
        image: SkillImg1,
        name: "HTML",
    },
    {
        image: SkillImg2,
        name: "CSS",
    },
    {
        image: SkillImg3,
        name: "JavaScript"
    },
    {
        image: SkillImg4,
        name: "TypeScript",
    },
    {
        image: SkillImg5,
        name: "React.js",
    },
    {
        image: SkillImg6,
        name: "Redux",
    },
    {
        image: SkillImg7,
        name: "Tailwind Css",
    },
    {
        image: SkillImg8,
        name: "Git",
    },
    {
        image: SkillImg9,
        name: "GitHub",
    },
   
];


export const btns = [
    { id: 1, name: "All", value: "all" },
    { id: 2, name: "Web Design", value: "web design" },
    { id: 3, name: "Web & Movile", value: "web & movile" },
];

export const projects = [
    {
        id: 1,
        image: pidogs1,
        value: "web design",
        link: "https://pi-dogs-theta-beige.vercel.app/",
        githublink: "https://github.com/rochialbani/PI-Dogs",
        title: "DOGS API ",
        skills: "[Javascript, React, Css, Express, PostgreSQL, Sequelize, Node.js]",

    },
    {
        id: 2,
        image: mangacoffee1,
        value: "web & movile",
        link: "https://manga-coffee.vercel.app/",
        githublink: "https://github.com/rochialbani/MANGA-COFFEE",
        title: "MANGA COFFEE ",
        skills: "[Typescript, React, Redux Toolkit, Sass]"
    },
    {
        id: 3,
        image: portfolio1,
        value: "web & movile",
        link: "https://portfolio-rochialbani.vercel.app/",
        githublink: "https://github.com/rochialbani/portfolio",
        title: "PORTFOLIO ",
        skills: "[Javascript, React, Tailwind Css, Framer Motion]"
    },
    
];

export const transition1 = {
    duration: 1.4,
    ease: [0.6, 0.01, -0.05, 0.9],
    // ease: [0.43, 0.13, 0.23, 0.96],
  };