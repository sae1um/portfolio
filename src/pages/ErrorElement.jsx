import SpaceBackground from "../components/Background"
import Navbar from "../components/Navbar"
import CustomCursor from "../components/CustomCursor"
import NotFound from "../components/NotFound"

export default function ErrorElement() {
    return (
        <div className="min-h-screen min-w-screen bg-black text-white overflow-hidden relative z-0 flex flex-col">
            <SpaceBackground />
            <Navbar />
            <CustomCursor />
            <div className="relative h-full my-auto z-10 w-full overflow-hidden">
                <NotFound />
            </div>
        </div>
    )
}

