import React from 'react'
import "../App.css"
import MyModel from '../components/model'

// SECTIONS
import Hero from '../components/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'

export default function Home() {
  return (
    <div  className='Text flex flex-col justify-center items-center'>
      <section id='home' className='flex min-h-screen flex-col md:flex-row md:gap-10 lg:gap-10 justify-center items-center w-full px-10 mt-20 md:mt-0 lg:mt-0'>
        <Hero />
        <MyModel />
      </section>
      <section id='about' className='pt-32 '>
        <About />
      </section>
      <section id='projects' className='pt-16 max-w-full'>
        <Projects />
      </section>
    </div>
  )
}
