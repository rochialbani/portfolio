import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';

const Main = () => {
    return (
        <div id='main' className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-[#9e8d75]">LET'S BUILD SOMETHING TOGETHER</p>
                    <h1 className="py-4 text-[#010203]">Hi, I'm <spam className="text-[#f8c270]">Rocío</spam></h1>
                    <h1 className="py-1 text-[#010203]">A Front-End Web Developer</h1>
                    <p className="py-4 text-[#464039] max-w-[70%] m-auto">I'm a Full Stack Developer focused on Front-End, I have a great capacity to adapt to 
                        different work environments and enjoy teamwork.</p>
                        <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <a href="https://www.linkedin.com/in/roc%C3%ADo-albani/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <a href="https://github.com/rochialbani" target="_blank" rel="noreferrer"><FaGithub /></a>
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"><AiOutlineMail /></div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"><BsFillPersonLinesFill /></div>
                        </div>
                </div>
            </div>
        </div>
    )
};

export default Main;