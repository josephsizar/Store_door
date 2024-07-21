import {useState} from "react"
import Card from "./parts/Card"
import {BsLayoutTextSidebar,BsLayoutSplit} from "react-icons/bs"

const Store = ()=>{

const [isOne,setIsOne] = useState(false)

  return (
    <div className="w-full overflow-scroll h-[95%] bg-white  z-2 ">

    <div className="flex w-full h-10 border border-0 border-b-2 border-gray-900 mt-3 flex-row px-4 items-center justify-between">
    <h1> one </h1>
    <div>
    {
    isOne ?
    <BsLayoutTextSidebar className="text-2xl" onClick={()=> setIsOne(false)} />
      :
    <BsLayoutSplit className="text-2xl" onClick={ ()=> setIsOne(true) } />

    }

    </div>
    </div>


    <div className={isOne? "w-full flex flex-col justify-center items-center p-4 gap-4 "  : "grid grid-cols-2 gap-4 p-4 gap-y-4 w-full" } >
     
    <Card one={isOne} id={1} />

    <Card   one={isOne} id={2} />

    <Card one={isOne}  id={3} />

    <Card  one={isOne} id={4} />

    <Card  one={isOne} id={5} />


    </div>

    </div>
  )
}

export default Store
