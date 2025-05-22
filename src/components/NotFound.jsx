import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Home, Stars, Rocket, AlertCircle, ChevronsLeft  } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export default function NotFound() {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  // Floating animation for the astronaut/planet
  const floatingAnimation = {
    y: [0, -15, 0],
    rotate: [0, 5, 0, -5, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }


  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-4 py-20">
      {/* Star effect background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div>
          <Stars className="h-full w-full opacity-10 text-slate-400" />
        </motion.div>
      </div>

      {/* Animated cosmic rays */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 transform">
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#64B5F6]/5 to-purple-500/5 opacity-50 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 404 Text */}
          <motion.div variants={itemVariants} className="mb-6 flex items-center">
            <AlertCircle className="mr-3 h-8 w-8 text-red-700 md:h-10 md:w-10" />
            <h1 className="text-5xl font-bold text-white md:text-7xl">404</h1>
          </motion.div>

          {/* Floating astronaut/planet illustration */}
          <motion.div
            variants={itemVariants}
            animate={floatingAnimation}
            className="relative mb-8 flex h-40 w-40 items-center justify-center md:h-48 md:w-48"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#64B5F6]/20 to-purple-500/20 blur-md" />
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-black md:h-40 md:w-40">
              <Rocket className="h-16 w-16 rotate-45 text-[#64B5F6] md:h-20 md:w-20" />
            </div>
            <div className="absolute -right-4 -top-4 h-12 w-12 rounded-full bg-gradient-to-r from-[#64B5F6]/30 to-purple-500/30 blur-sm" />
            <div className="absolute -bottom-2 -left-2 h-8 w-8 rounded-full bg-gradient-to-r from-purple-500/30 to-[#64B5F6]/30 blur-sm" />
          </motion.div>

          {/* Message */}
          <motion.h2 variants={itemVariants} className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Seems like this page doesn't exist!
          </motion.h2>

          <motion.p variants={itemVariants} className="mb-2 max-w-md text-gray-400 md:text-lg">
            The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
          </motion.p>

          <motion.p variants={itemVariants} className="mb-8 max-w-md text-gray-400 md:text-lg">
            Please check the URL or return to the homepage.
          </motion.p>
          {/* Back to home button */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-6 sm:flex-row"
          >
            <Button
              asChild
              variant="outline"
              className="group flex items-center gap-2 bg-black/50 text-[#64B5F6] hover:bg-[#81D4FA]"
              size="lg"
            >
              <Link
                onClick={() => navigate(-1)}
              >
                <ChevronsLeft className="h-4 w-4 transition-transform" />
                <span>Previous Page</span>
              </Link>
            </Button>
            <Button
              asChild
              className="group flex items-center gap-2 bg-[#64B5F6] text-black hover:bg-[#81D4FA]"
              size="lg"
            >
              <Link to="/">
                <Home className="h-4 w-4 transition-transform" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </motion.div>

          {/* Additional message */}
          <motion.p
            variants={itemVariants}
            className="mt-12 max-w-md text-center text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            If you believe this is a mistake, please contact me at{" "}
            <a href="mailto:godswillerh@gmail.com" className="text-[#64B5F6] hover:text-[#81D4FA]">
              godswillerh@gmail.com
            </a>
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
