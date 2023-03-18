import React  from "react";
import {skills} from "../data";


const Skills = () => {
    
    return(
        <div>
            <div className="container mx-auto">
                <div className="grid xl:grid-cols-9 md:grid-cols-3">
                    {skills.map((skill, index) => {
                        return(
                            <div className="flex items-center justify-center" key={index}>
                                <div className="flex flex-col items-center font-bold ">
                                <img src={skill.image} alt="skill" />
                                <p className="mt-1">{skill.name}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default Skills;