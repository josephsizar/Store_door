import {motion} from "framer-motion"
// import {faUser} from "react-icons/fa"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale } from '@fortawesome/free-solid-svg-icons';




const MainP = ()=> {

  return (
    <div className="flex bg-neutral-950 flex-col w-full px-4 pt-12 h-full">
    
    <p className="font-mono text-md text-gray-400 "> Software Developer  </p> 

    <h1 className="font-mono font-bold text-white tracking-wider mb-2  text-4xl"> 
     Hello I'm
    </h1>

 <h1 className="font-mono font-bold  tracking-wider text-emerald-400  text-4xl mb-20"> 
    AB  ESSOLAYMANY
    </h1>

    <div className="w-full justify-center items-center" >
    <div 
className="p-8 w-[260px] h-[260px] rounded-full border border-[10px] border-emerald-400 border-solid ml-16 flex flex-col justify-center items-center"
    >
    <FontAwesomeIcon className="text-[200px] text-emerald-400"  icon={faMale}  />
   </div>
    </div>


    </div>
  )
}

export default MainP
