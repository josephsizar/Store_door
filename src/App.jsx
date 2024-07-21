import Nav from "./components/Nav"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Main from "./pages/Main"
import About from "./pages/About"
import Home from "./pages/Home"
import Store from "./pages/Store"

const App = ()=>{

  return (
    <BrowserRouter>
    <div className="relative w-full h-screen flex flex-col items-center bg-indigo-200 justify-start">

    <Nav />
    <Routes>
    <Route path="/home" element={<Home />} />
     <Route path="/" element={<Home />} />
    
    <Route  path="/about" element={<About />} />
    <Route path="/main" element={<Main />} />

    <Route path="/store" element={<Store />} />

    </Routes>    
    </div>

    </BrowserRouter>
  )
}

export default App
