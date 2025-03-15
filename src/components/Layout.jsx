import React from 'react'
// import Navbar from './Navbar'
import SpaceBackground from './Background'
import { Outlet } from 'react-router-dom'

function PageLayout({children}) {
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden relative">
            {/* <SpaceBackground/> */}
            <main className='relative z-10'>{children}</main>
        </div>
    )
}

export default PageLayout