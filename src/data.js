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
import tictactoe1 from './assets/projects/tictactoe1.png'
import moviesearch1 from './assets/projects/moviesearch1.png'


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
        image: moviesearch1,
        value: "web design",
        link: "https://movies-search-two.vercel.app/",
        githublink: "https://github.com/rochialbani/movies-search",
        title: "MOVIES SEARCH ",
        skills: "[JavaScript, React, Talwind Css]",

    },
    {
        id: 2,
        image: tictactoe1,
        value: "web & movile",
        link: "https://tic-tac-toe-rochialbani.vercel.app/",
        githublink: "https://github.com/rochialbani/Tic-Tac-Toe",
        title: "TIC TAC TOE ",
        skills: "[JavaScript, React, CSS]"
    },
    {
        id: 3,
        image: pidogs1,
        value: "web design",
        //link: "https://pi-dogs-theta-beige.vercel.app/",
        githublink: "https://github.com/rochialbani/PI-Dogs",
        title: "DOGS API ",
        skills: "[Javascript, React, Redux, Css, Express, PostgreSQL, Sequelize, Node.js]",

    },
    {
        id: 4,
        image: mangacoffee1,
        value: "web & movile",
        //link: "https://manga-coffee.vercel.app/",
        githublink: "https://github.com/rochialbani/MANGA-COFFEE",
        title: "MANGA COFFEE ",
        skills: "[Typescript, React, Redux Toolkit, Sass]"
    },
    {
        id: 5,
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