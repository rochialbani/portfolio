import { projects } from "../data";
import { useEffect, useState } from "react";

function Modal({ visible, onClose }) {
    const [filterProjects, setFilterProjects] = useState(null);
    console.log(filterProjects)
 
    useEffect(() => {
        setFilterProjects(projects);
    }, []);


    const handleOnClose = (e) => {
        if(e.target.id === 'container') onClose();
    };

    if(!visible) return null;

   

  return (
    <>
    <div id='container' onClick={handleOnClose} className='w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.4)] backdrop-blur-sm flex p-40px pt-[70px] items-center justify-center'>
        <div className='w-[300px] h-[300px] relative bg-white border-r-4 p-20px' >
            { filterProjects && filterProjects.filter(info => info.id === 1)
            .map(info => (
                <option key={info.id} value={info.id}>{info.title}</option>))
            }
            { filterProjects && filterProjects.filter(info => info.id === 2)
            .map(info => (
                <option key={info.id} value={info.id}>{info.title}</option>))
            }
            { filterProjects && filterProjects.filter(info => info.id === 3)
            .map(info => (
                <option key={info.id} value={info.id}>{info.title}</option>))
            }
        </div>
    </div>
    </>
  )
}

export default Modal