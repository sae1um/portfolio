import React from 'react'
import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <div
            className="relative flex items-center justify-center overflow-hidden"
        >

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    <div className="relative inline-block">
                        <span className="text-xl font-light tracking-widest text-gray-400">
                            <span className="mr-2 text-[#64B5F6]">&lt;</span>
                            Hello World
                            <span className="ml-2 text-[#64B5F6]">/&gt;</span>
                        </span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative mb-4 text-center text-6xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl"
                >
                    <span className="relative inline-block">
                        <span className="relative z-10">I'm</span>
                        <motion.span
                            className="absolute -bottom-2 left-0 h-3  bg-[#64B5F6]/30 md:-bottom-3 md:h-4"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.8, delay: 1 }}
                        />
                    </span>{" "}
                    <span className="relative">
                        <span className="relative z-10 bg-gradient-to-r from-[#64B5F6] to-[#81D4FA] bg-clip-text text-transparent">
                            Godswill
                        </span>
                        <motion.div
                            className="absolute -right-4 -top-4 text-[#64B5F6]"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                        >
                            <Sparkles className="h-8 w-8 animate-pulse" />
                        </motion.div>
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative mx-auto mb-8 max-w-lg"
                >
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-700"></div>
                        <p className="text-xl font-light text-gray-400">Full Stack Developer</p>
                        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-700"></div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex justify-center pb-2"
                >
                    <motion.a
                        href="#about"
                        onClick={(e) => {
                            e.preventDefault()
                            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                        }}
                        whileHover={{ y: 5 }}
                        className="group flex flex-col items-center gap-2 text-gray-400 transition-colors hover:text-[#64B5F6]"
                    >
                        <span className="text-lg">Learn More</span>
                        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-transform duration-300 group-hover:scale-125"
                            >
                                <path d="M12 5v14" />
                                <path d="m19 12-7 7-7-7" />
                            </svg>
                        </motion.div>
                    </motion.a>
                </motion.div>

                {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden rounded-full border border-[#64B5F6] bg-transparent px-8 py-3 text-[#64B5F6] transition-all hover:text-white"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute bottom-0 left-0 h-0 w-full bg-[#64B5F6] transition-all duration-300 group-hover:h-full"></span>
            </motion.button>
  
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-gray-700 bg-transparent px-8 py-3 text-white transition-all hover:border-white"
            >
              Contact Me
            </motion.button>
          </motion.div> */}
            </div>
        </div>
    )
}

