import React, { useEffect, useState } from "react";
import { btns, projects } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLink } from 'react-icons/fa';

const Projects = () => {
    const [filterImages, setFilterImages] = useState(null);

    useEffect(() => {
        setFilterImages(projects);
    }, []);

    const handleClick = (e) => {
        let btnType = e.target.value;
        const newFilterImages = projects.filter(
        (project) => project.value === btnType
        );
        btnType !== "all"
        ? setFilterImages(newFilterImages)
        : setFilterImages(projects);
    };

    //"grid sm:grid-cols-2 md:grid-cols-3 mt-12 gap-3 justify-center"

    return (
        <div id="projects" className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
            <div className="col-span-2">
                <p className="uppercase text-xl tracking-widest text-[#9e8d75]">Projects</p>
                <h2 className=" py-4 font-[Raleway]">What I Build?</h2>
            
                <div className="mt-4 flex font-bold text-[#464039] gap-8 justify-center">
                    {btns.map((btn) => {
                        return (
                        <button key={btn.id} value={btn.value} onClick={handleClick}>
                            {btn.name}
                        </button>
                        );
                    })}
                </div>
            <AnimatePresence>
                
                <motion.div className='grid md:grid-cols-2 gap-8 mt-12'>
                    {filterImages && filterImages.map((filterImage) => {
                        return (
                            <motion.div
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                                key={filterImage.id}
                            >
                                <motion.img src={filterImage.image} alt="" />
                                <motion.div className="mt-4 flex font-bold  gap-8 justify-center">
                                    
                                <a href={filterImage.link}  target="_blank" rel="noopener noreferrer">    
                                    <FaLink />
                                </a>
                                <a href={filterImage.githublink}  target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </AnimatePresence>
            </div>
            </div>
        </div>
    );
};

export default Projects;