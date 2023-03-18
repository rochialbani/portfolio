import React from "react";
import {skills} from "../data";

const Skills = () => {
    return(
        <div>
            <div className="container mx-auto">
                <div className="grid grid-cols-9 md:grid-flow-row">
                    {skills.map((skill, index) => {
                        return(
                            <div className="flex items-center justify-center" key={index}>
                                <div className="flex flex-col items-center">
                                <img src={skill.image} alt="skill" />
                                <p>{skill.name}</p>
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