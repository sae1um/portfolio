import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import SpaceBackground from "./components/Background"
import NavbarTest from "./components/Navbar copy"

function App({children}) {

  return (
    <div className="min-h-screen min-w-full bg-black text-white overflow-hidden relative z-0 flex flex-col">
      <SpaceBackground />
      <NavbarTest />
        <div className="relative z-10 w-full overflow-hidden mt-40">
          <Outlet />
        </div>
    </div>
  )
}

export default App
