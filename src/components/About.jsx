import React from "react";

const About = () => {
    return (
        <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#9e8d75]">About</p>
                    <h2 className=" py-4 font-[Raleway]">Who Am I?</h2>
                    <p className="py-2 text-[#464039]"> 
                        My name is Rocío Albani I graduated from Henry as a Full Stack Developer but 
                        since I started my journey as a web developer I quicly fell in love with the area 
                        of Front-End and desing. 
                        </p>
                        <p className="py-2 text-[#464039]">  
                        Prior to that, I graduated as a Sports Broadcaster at IESERH and worked for a couple of years 
                        in the communications industry. This journey taught me especially how to work in team to
                        accomplish what you propose the best way possible and I applied that to my experience as a developer. 
                        </p>
                    <p className="py-2 text-[#464039]"> 
                        As a wed developer, I've met and collaborated with so many talented people to created amazing
                        projects and become a quick learner of new tech stacks as needed.</p>
                        <p className="py-2 text-[#464039]"> Languages: English and Spanish.</p>
                        <p className="py-2 text-[#464039]">
                        Skills: JavaScript, HTML5, CSS, TypeScript, React.js,React Native, Redux, Redux Toolkit, Sass, Express,
                        Git, PostgreSQL, Sequelize, Node.js, Next.js, Framer Motion, GitHub.</p>
                </div>
                <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <img className="rounded-xl" src="assets/profile/imgperfil.jpg" alt="profile"/>
                </div>
            </div>
        </div>
    )
};

export default About;