import React, {useState, useEffect}from "react";
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () =>{
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ffebc2');
    const [linkColor, setLinkColor] = useState('#1f2937');

    const handleNav = () => {
        setNav(!nav)
    };

    useEffect(()=>{
        const handleShadow = () => {
            if(window.scrollY >= 90){
                setShadow(true);
            }else{
                setShadow(false);
            }
                
        };
        window.addEventListener('scroll', handleShadow)
    },[])
    return(
        <div style={{ backgroundColor: `${navBg}` }} className={shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20 z-[100]"}>
            <div className="flex justify-between items-center w-full px-2 2xl:px-16 mt-5">
            <h4 className="font-playfair text-3xl font-bold"><a href="/#main">RA</a></h4>
            <div>
                <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
                    <li className='ml-10 text-sm uppercase hover:border-b border-b-black'>
                    <a href="/#main">Home</a>
                    </li>
                    <li className='ml-10 text-sm uppercase hover:border-b border-b-black'>
                        <a href="/#about">About</a>
                    </li>
                    <li className='ml-10 text-sm uppercase hover:border-b border-b-black'>
                    <a href="/#projects">Projects</a>
                    </li>
                    <li className='ml-10 text-sm uppercase hover:border-b border-b-black'>
                    <a href="/#contact">Contact</a>
                    </li>
                </ul>
                <div style={{ color: `${linkColor}` }} onClick={handleNav} className='md:hidden cursor-pointer'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
            </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav
                                ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ffebc2] p-10 ease-in duration-500'
                                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                                }>
                    <div className="flex w-full items-center justify-between">
                    <h4 className="font-playfair text-3xl font-bold">RA</h4>
                    <div onClick={handleNav} className="cursor-pointer rounded-full shadow-lg shadow-gray-400 p-3">
                        <AiOutlineClose/>
                    </div>
                    </div>
                        <div className="py-4 flex flex-col">
                            <ul className="uppercase">
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                <a href="/#main">Home</a>
                                </li>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                <a href="/#about">About</a>
                                </li>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                <a href="/#projects">Projects</a>
                                </li>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                <a href="/#contact">Contact</a>
                                </li>
                            </ul>
                            <div className="pt-40">
                                <p className="uppercase tracking-widest text-[#9e8d75]">Let's Connect</p>
                                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <a href="https://www.linkedin.com/in/roc%C3%ADo-albani/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <a href="https://github.com/rochialbani" target="_blank" rel="noreferrer"><FaGithub /></a>
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"><BsFillPersonLinesFill /></div>
                                </div>
                            </div>
                        </div>
                </div>
        </div>
        </div>
    )
};

export default Navbar;