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


export const skills = [
    {
        image: SkillImg1,
    },
    {
        image: SkillImg2,
    },
    {
        image: SkillImg3,
    },
    {
        image: SkillImg4,
    },
    {
        image: SkillImg5,
    },
    {
        image: SkillImg6,
    },
    {
        image: SkillImg7,
    },
    {
        image: SkillImg8,
    },
    {
        image: SkillImg9,
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
    },
    {
        id: 2,
        image: mangacoffee1,
        value: "web & movile",
        link: "https://manga-coffee.vercel.app/",
        githublink: "https://github.com/rochialbani/MANGA-COFFEE",

    },
    
];

export const transition1 = {
    duration: 1.4,
    ease: [0.6, 0.01, -0.05, 0.9],
    // ease: [0.43, 0.13, 0.23, 0.96],
  };