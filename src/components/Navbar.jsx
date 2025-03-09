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
import { motion } from "framer-motion";
import "../App.css"

export default function Navbar() {
  const location = useLocation();
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

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
      className="fixed w-full backdrop-blur-lg shadow-lg rounded-b-xl z-50">
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center py-5">
          {/* Left: Name */}
          <Link
            to="/"
            className="flex items-center transition duration-200 hover:text-slate-300 gap-2"
          >
            <span className="LogoText text-3xl bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Godswill
              <br className="" />
              Erhunmwunse
            </span>
          </Link>

          {/* Center: Social Media Icons (Hidden on Mobile) */}
          <div className="hidden md:flex md:flex-row md:gap-6 text-3xl">
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
              <PopoverContent className="w-fit bg-gray-900 border border-gray-700 text-white shadow-lg rounded-xl flex flex-col items-center justify-center">
                <motion.div
                  className="flex flex-col items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{opacity: 0}}
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
          <div className="hidden md:flex md:items-center">
            <ul className="flex gap-6 text-xl font-medium">
              {[
                { name: "About", path: "/about" },
                { name: "Projects", path: "/projects" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`transition duration-300 hover:text-slate-300 relative ${
                      location.pathname === item.path
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
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white hover:text-sky-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586 14.293 4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414 5.707 15.707a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Navigation Links */}
            {[
              { name: "About", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={toggleMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? "text-sky-400"
                    : "text-white hover:text-sky-400"
                }`}
              >
                {item.name}
              </Link>
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
                <PopoverContent className="w-fit bg-gray-900 border border-gray-700 text-white shadow-lg rounded-xl flex flex-col items-center justify-center">
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
        </div>
      )}
    </nav>
  );
}
