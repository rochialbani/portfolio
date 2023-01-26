import React from "react";
import { motion } from 'framer-motion';
import { transition1 } from '../data';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';

const Contact = () => {
    return (
        <div id='contact' className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div className="col-span-2  bottom-0 left-0 right-0 top-72 -z-10 ">
                    <h1 className=" py-4 font-[Raleway]  leading-[120%] tracking-[-0.05em] mb-2">Contact me</h1>
                    
                    <form className='flex flex-col gap-y-4'>
                        <div className='flex gap-x-10'>
                            <input
                            className='outline-none border-b  border-b-black h-[100px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                            type='text'
                            placeholder='Your name'
                            />
                            <input
                            className='outline-none border-b border-b-black h-[100px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                            type='text'
                            placeholder='Your email address'
                            />
                        </div>
                            <input
                            className='outline-none border-b border-b-black h-[100px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                            type='text'
                            placeholder='Your message'
                            />
                        <button className='btn mb-[1px] mx-auto lg:mx-0  h-[80px] uppercase text-xl tracking-widest  text-[#464039] flex justify-center items-center'>
                        Send it
                        </button>
                    </form>
                    <div className="flex items-center justify-between max-w-[300px] m-auto ">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                                <a href="https://www.linkedin.com/in/roc%C3%ADo-albani/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                                <a href="https://github.com/rochialbani" target="_blank" rel="noreferrer"><FaGithub /></a>
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300"><AiOutlineMail /></div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300"><BsFillPersonLinesFill /></div>
                        </div>
                </div>
                
            </div>
        </div>
        
    )

    
};
export default Contact;