import React, { useEffect, useState } from 'react'
import MainHero from '../components/sections/MainHero'
import TypewriterComponent from 'typewriter-effect'
import "../App.css"
import MyModel from '../components/model'

function Home() {
  return (
    <div className='flex flex-col items-center min-w-max'>
      <div className='flex flex-row justify-evenly items-center w-full'>
        <div className='flex flex-col items-center gap-3 px-8 min-w-[300px]'>
          <span className='text-4xl text-white font-bold'>Hello World,</span>
          <div
            className='whitespace-nowrap text-7xl text-white font-bold min-w-[511px] text-center'
            >
            <TypewriterComponent
              onInit={(tw) => {
                tw.typeString("Im Godswill!").start()
              }}
              />
          </div>
          <p className='text-3xl opacity-85'>Full Stack Developer</p>
        </div>
        <div className=''>
          <MyModel />
        </div>
      </div>
      <MainHero />
    </div>
  )
}

export default Home