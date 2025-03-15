import { Outlet } from "react-router-dom"
import SpaceBackground from "./components/Background"
import Navbar from "./components/Navbar"
import CustomCursor from "./components/CustomCursor"

function App({children}) {
  return (
    <div className="min-h-screen min-w-full bg-black text-white overflow-hidden relative z-0 flex flex-col">
      <SpaceBackground />
      <Navbar/>
      <CustomCursor />
      <div className="relative z-10 w-full overflow-hidden">
        <Outlet />
      </div>
    </div>
  )
}

export default App
