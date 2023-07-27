import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Contact = (props) => {
    const { register, trigger, reset, formState: { errors },} = useForm({
        defaultValues:{ 
            name: "",
            email: "",
            message: ""}
        });

    const onSubmit = (e) => {
        const isValid = trigger();
        if (!isValid) {
            e.preventDefault();
            
        } 
    };

    


    return (
        <div id='contact' className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div className="col-span-2  bottom-0 left-0 right-0 top-72  ">
                    <h1 className=" py-4 font-[Raleway]  leading-[120%] tracking-[-0.05em] mb-2">Contact me</h1>
                    <form 
                        className='flex flex-col gap-y-4'
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/5dc61485421bae7ab262258aef492285"
                        method="POST"
                    >
                        <div className='flex gap-x-10'>
                            <input
                            className=' outline-none border-b  border-b-black h-[100px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                            type='text'
                            placeholder='Your name'
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                            />
                            {errors.name && (
                                <p className="text-[#a72626] mt-1">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" && "Max length is 100 char."}
                                </p>
                            )}
                            <input
                            className='outline-none border-b border-b-black h-[100px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                            type='text'
                            placeholder='Your email address'
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                            />
                            {errors.email && (
                                <p className="text-red mt-1">
                                    {errors.email.type === "required" && "This field is required."}
                                    {errors.email.type === "pattern" && "Invalid email address."}
                                </p>
                            )}
                        </div>
                            <textarea
                            className='outline-none border-b border-b-black h-[100px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                            type='text'
                            rows='10'
                            placeholder='Your message'
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                            />
                            {errors.message && (
                                <p className="text-red mt-1">
                                    {errors.message.type === "required" && "This field is required."}
                                    {errors.message.type === "maxLength" && "Max length is 2000 char."}
                                </p>
                            )}
                        <button type="submit" className='btn mb-[1px] mx-auto lg:mx-0  h-[80px] uppercase text-xl tracking-widest text-[#464039] flex justify-center items-center'>
                        Send it
                        </button>
                    </form>
                    <div className="flex items-center justify-between max-w-[300px] m-auto ">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                                <a href="https://www.linkedin.com/in/rocio-albani/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                                <a href="https://github.com/rochialbani" target="_blank" rel="noreferrer"><FaGithub /></a>
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 font-bold">
                            <a href="./CV-Rocío-Albani.pdf" download>CV</a>
                            </div>
                        </div>
                </div>
                
            </div>
        </div>
        
    )

    
};
export default Contact;