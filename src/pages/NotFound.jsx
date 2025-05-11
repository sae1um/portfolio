import SpaceBackground from "../components/Background"
import Navbar from "../components/Navbar"
import CustomCursor from "../components/CustomCursor"

export default function NotFound() {
    return (
        <div className="min-h-screen min-w-screen bg-black text-white overflow-hidden relative z-0 flex flex-col">
            <SpaceBackground />
            <Navbar />
            <CustomCursor />
            <div className="relative h-full my-auto z-10 w-full overflow-hidden">
                <div className='flex flex-col justify-center items-center'>
                    <span>404</span>
                    Page Not Found
                </div>
            </div>
        </div>
    )
}

