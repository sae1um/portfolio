import { Link, useLocation } from "react-router-dom"
import Logo from "../assets/Logo.svg"
import "../App.css"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {Popover, PopoverTrigger, PopoverContent} from "../components/ui/popover"
import { FaRegCopy } from "react-icons/fa6";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BsSend  } from "react-icons/bs";
import {motion} from "motion/react"



export default function Navbar() {
  const location = useLocation(); // Get current route
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("godswillerh@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <nav 
      className="fixed w-[100%] md:w-[100%] lg:w-[100%]
                backdrop-blur-lg  shadow-lg
                rounded-b-xl flex justify-between items-center self-center gap-6 z-50 px-10 py-5">
      <Link to={"/"} className="flex flex-row justify-center items-center ml-5 transition duration-200 hover:text-slate-300 gap-2">
          <span className="LogoText text-2xl bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Godswill <br /> Erhunmwunse</span>
      </Link>
      <div className="flex flex-row gap-8 text-3xl ">
        <Link to={"https://www.linkedin.com/in/godswill-godwin-erhunmwunse-10b3a825a/"} target="_blank" className="transition duration-200 hover:text-slate-300"><FaLinkedin /></Link>
        <Link to={"https://github.com/sae1um"} target="_blank" className="transition duration-200 hover:text-slate-300"><FaGithub /></Link>
        <Link to={"https://www.instagram.com/sae.gg_/"} target="_blank" className="transition duration-200 hover:text-slate-300"><FaInstagram /></Link>
        <Popover>
          <PopoverTrigger asChild>
            <MdEmail className="transition duration-200 hover:text-slate-300 hover:cursor-pointer" />
          </PopoverTrigger>
          <PopoverContent className="w-fit bg-gray-900 border border-gray-700 text-white shadow-lg rounded-xl flex flex-col items-center justify-center">
            <motion.div
              className="flex flex-col items-center justify-center"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
            >
              <div className="flex flex-row items-center gap-4">
                Copy to clipboard?
                <TooltipProvider>
                  <Tooltip open={copied}>
                    <TooltipTrigger asChild>
                      <button onClick={handleCopy} className="hover:text-sky-400 outline-none">
                        <FaRegCopy />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <motion.span
                        className="text-white"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                      >
                        Copied!
                        </motion.span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex flex-row items-center gap-4">
                Send email?
                <Link to={"mailto:godswillerh@gmail.com"}><BsSend  /> </Link>
              </div>
            </motion.div>
          </PopoverContent>
        </Popover>
      </div>
      <ul className="flex gap-6 text-xl font-medium pr-8">
        {[
          { name: "About", path: "/about" },
          { name: "Projects", path: "/projects" },
          { name: "Contact", path: "/contact" }
        ].map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`transition duration-300 hover:text-slate-300 relative
                            ${location.pathname === item.path ? "text-sky-400 after:w-full" : "after:w-0"}
                            after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-sky-300 after:transition-all after:duration-300`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

