
import {useState,useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faTimes, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import Lnk from "./Lnk"
import {useLocation} from "react-router-dom"
import { motion } from "framer-motion"

const Nav = ()=>{
 
const [menu,setMenu]= useState(false)
const location = useLocation()

useEffect(()=>{
  setMenu(false)
},[location])

const variants ={
  open: {y:0,opacity:1},
  closed: {y:"-100%",opacity:0}
}

  return (<>
    <nav
       className="w-full  py-2 px-4 border border-2 border-indigo-500 border-solid  text-indigo-500 flex flex-row justify-between z-50">

    <div className="font-bold text-xl tracking-wider "> Logo </div>

    {menu && <motion.ul 
    initial="closed"
    animate={menu? "open" : "closed"}
    variants={variants}
    transition={{ duration: 0.5 }}

      className="absolute top-0 left-0 w-full bg-indigo-100 h-screen flex flex-col justify-start pt-20 px-4 items-center gap-8"> 

      <Lnk  link={"/home"} name="Home" dl={0.5} />
      <Lnk  link={"/about"} name="About" dl={0.8} />
      <Lnk  link={"/main"} name="Main" dl={1.1} />

      <Lnk link="/store" name="Store" dl={1.4} />

      <FontAwesomeIcon  className="absolute right-10 bottom-20 w-6 h-6 px-2 py-2 rounded-md  bg-indigo-600 text-indigo-100 hover-opacity-60" icon={faTimes} onClick={()=> setMenu(false)} />
    </motion.ul>
    ||
    <FontAwesomeIcon className="flex flex-col justify-between items-center mt-1" icon={faBars}  onClick={()=> setMenu(true)}/>}
 
    </nav></>)
}

export default Nav
