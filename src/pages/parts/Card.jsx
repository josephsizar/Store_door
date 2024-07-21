
import {Link} from "react-router-dom"
import img1 from "../../assets/bg-1.png"

const Card = ({id,one})=> {

  return (
    <Link to={"/product/"+id} className={"bg-white  h-[140px] rounded-md p-0  py-0 shadow-xl hover:border border-solid border-gray-950 border-2 hover:border-indigo-300 relative z-0 flex flex-col overflow-hidden  " + one ? "w-[80%]" : "min-w-[50%]" } >

   <img className=" object-fit w-[70%] h-[70%] " src={img1}  />

    <div className="w-full flex flex-row items-center border border-2 border-top-indigo-300 justify-between h-[30%]">

    <h1 className="text-xl pl-2 font-mono font-bold"> socks </h1>

    <span className="text-green-500 pr-2">
     300$ {one ? "true":"false"} hi
    </span>

    </div>


    </Link>
  )
}

export default Card 
