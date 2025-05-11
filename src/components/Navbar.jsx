import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa6";
import { BsSend } from "react-icons/bs";
import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Twirl as Hamburger } from 'hamburger-react'
import { AnimatePresence, motion } from "framer-motion";
import "../App.css"

export default function Navbar() {
  const location = useLocation();
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("godswillerh@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="Text fixed w-full backdrop-blur-lg shadow-lg z-50">
      <div className="px-4 sm:px-10 lg:px-20">
        <div className="flex justify-between items-center py-5">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="flex items-center transition duration-200 hover:text-slate-300 gap-2"
          >
            <span className="LogoText text-3xl bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] transition-all duration-600">
              Godswill
              <br className="" />
              Erhunmwunse
            </span>
          </a>

          {/* Center: Social Media Icons (Hidden on Mobile) */}
          <div className="hidden lg:flex lg:flex-row lg:gap-6 text-3xl">
            <a
              href="https://www.linkedin.com/in/godswill-godwin-erhunmwunse-10b3a825a/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-200 hover:text-slate-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/sae1um"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-200 hover:text-slate-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/sae.gg_/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-200 hover:text-slate-300"
            >
              <FaInstagram />
            </a>
            <Popover>
              <PopoverTrigger asChild>
                <button className="transition duration-200 hover:text-slate-300">
                  <MdEmail />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-fit bg-gray-500 bg-opacity-30 backdrop-blur-md border border-gray-700 text-white shadow-lg rounded-lg flex flex-col items-center justify-center z-50" disablePortal>
                <motion.div
                  className="flex flex-col items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex flex-row items-center gap-4">
                    Copy to clipboard?
                    <TooltipProvider>
                      <Tooltip open={copied}>
                        <TooltipTrigger asChild>
                          <button
                            onClick={handleCopy}
                            className="hover:text-sky-400 outline-none"
                          >
                            <FaRegCopy />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <motion.span
                            className="text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            Copied!
                          </motion.span>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    Send email?
                    <a href="mailto:godswillerh@gmail.com">
                      <button className="hover:text-sky-400 outline-none">
                        <BsSend />
                      </button>
                    </a>
                  </div>
                </motion.div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Right: Navigation Links */}
          <div className="hidden lg:flex lg:items-center">
            <ul className="flex gap-6 text-xl font-medium">
              {[
                { name: "About Me", path: "#about", id: "about" },
                { name: "Projects", path: "#projects", id: "projects" },
                { name: "Contact", path: "/contact", id: "contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path}
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className={`transition duration-300 hover:text-slate-300 relative ${location.pathname === item.path
                      ? "text-sky-400 after:w-full"
                      : "after:w-0"
                      } after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-sky-300 after:transition-all after:duration-300`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <Hamburger toggled={isOpen} direction="right" size={24} duration={0.5} />
              ) : (
                <Hamburger toggled={isOpen} direction="right" size={24} duration={0.5} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md bg-gray-900"
              variants={menuVariants}
              initial="hidden"
              exit="exit"
              animate="visible"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {/* Navigation Links */}
                {[
                  { name: "About", path: "#about", id: "about" },
                  { name: "Projects", path: "#projects", id: "projects" },
                  { name: "Contact", path: "#contact", id: "contact" },
                ].map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                      toggleMenu();
                    }}
                    // onClick={toggleMenu}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === item.path
                      ? "text-sky-400"
                      : "text-white hover:text-sky-400"
                      }`}
                  >
                    {item.name}
                  </a>
                ))}
                {/* Social Media Icons */}
                <div className="flex items-center justify-center space-x-6 pt-4 text-2xl">
                  <a
                    href="https://www.linkedin.com/in/godswill-godwin-erhunmwunse-10b3a825a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition duration-200 hover:text-slate-300"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/sae1um"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition duration-200 hover:text-slate-300"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.instagram.com/sae.gg_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition duration-200 hover:text-slate-300"
                  >
                    <FaInstagram />
                  </a>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="transition duration-200 hover:text-slate-300">
                        <MdEmail />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-fit bg-gray-900 bg-opacity-30 backdrop-blur-md border border-gray-700 text-white shadow-lg rounded-xl flex flex-col items-center justify-center z-10" disablePortal>
                      <motion.div
                        className="flex flex-col items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="flex flex-row items-center gap-4">
                          Copy to clipboard?
                          <TooltipProvider>
                            <Tooltip open={copied}>
                              <TooltipTrigger asChild>
                                <button
                                  onClick={handleCopy}
                                  className="hover:text-sky-400 outline-none"
                                >
                                  <FaRegCopy />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <motion.span
                                  className="text-white"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                >
                                  Copied!
                                </motion.span>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                          Send email?
                          <a href="mailto:godswillerh@gmail.com">
                            <BsSend />
                          </a>
                        </div>
                      </motion.div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </motion.div>)}
        </AnimatePresence>
      )}
    </nav>
  );
}
