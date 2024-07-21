
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faTimes, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
import { motion } from "framer-motion"

const Lnk = ({link,name,dl})=>{

  return (
      <motion.li 
    initial={{x: "-200%"}}
    animate={{x: 0}}
    transition={{duration: 0.5,delay: dl}}


    className="flex justify-center items-center flex-row gap-2 "> <Link className="text-indigo-500 text-2xl flex flex-row gap-4 justify-center items-center text-bold w-40 rounded-md py-2 border border-indigo-300 border-solid border-2 hover:text-indigo-100 hover:bg-indigo-500" to={link}> <span>{name}</span>
  <FontAwesomeIcon icon={faArrowAltCircleRight} className="" /> </Link>
      </motion.li>
  )
}

export default Lnk
