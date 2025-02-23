import React, { useEffect, useState } from 'react'
import MainHero from '../components/sections/MainHero'
import TypewriterComponent from 'typewriter-effect'
import "../App.css"


function Home() {
  return (
    <div className='flex flex-col items-center min-w-max'>
      <div className='flex flex-row justify-evenly w-full'>
        <MainHero />
        <div className='flex flex-col items-center'>
          <span className='text-3xl text-white font-bold'>Hello World,</span>
          <div
            className='whitespace-nowrap text-5xl text-white font-bold min-w-[300px] text-center'
            >
            <TypewriterComponent
              onInit={(tw) => {
                tw.typeString("Im Godswill!").start()
              }}
              />
          </div>
          <p className='text-2xl opacity-85'>Full Stack Developer</p>
        </div>
      </div>
    </div>
  )
}

export default Home