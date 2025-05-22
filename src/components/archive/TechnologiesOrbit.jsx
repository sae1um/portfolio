import { motion } from "framer-motion"
import { technologies } from "../lib/technologies"
import { useState } from "react"
import { Globe } from "lucide-react"

export default function TechnologiesOrbit() {
    const [hoveredTech, setIsTechHovered] = useState(null) //String or null

    return (
        <div className="relative mx-auto h-[500px] max-w-4xl">
            <style jsx global>{`
                @keyframes orbit1 {
                    0% { transform: rotate(0deg) translateX(125px) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(125px) rotate(-180deg); }
                }
                
                @keyframes orbit2 {
                    0% { transform: rotate(0deg) translateX(175px) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(175px) rotate(-360deg); }
                }
                
                @keyframes orbit3 {
                    0% { transform: rotate(0deg) translateX(225px) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(225px) rotate(-360deg); }
                }
                
                .tech-orbit-1 {
                    animation: orbit1 20s linear infinite;
                }
                
                .tech-orbit-2 {
                    animation: orbit2 30s linear infinite;
                }
                
                .tech-orbit-3 {
                    animation: orbit3 40s linear infinite;
                }
                
                .tech-orbit-1:hover, .tech-orbit-2:hover, .tech-orbit-3:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <CentralGlobe isTechHovered />
            <OrbitalRings />
            {/* Technologies orbiting */}
            <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2">
                {technologies.map((tech, index) => {
                    const orbitRing = index % 3; //Can be 0, 1, or 2 for different orbit rings
                    const orbitClass = `tech-orbit-${orbitRing + 1}`; // tech-orbit-1, tech-orbit-2, or tech-orbit-3
                    const isHovered = hoveredTech === tech.name; // Check if the current tech is hovered
                    
                    const totalTechsInOrbit = technologies.filter((_, i) => i % 3 === orbitRing).length
                    const techIndexInOrbit = Math.floor(index / 3)
                    const initialAngle = (techIndexInOrbit / totalTechsInOrbit) * 360
                    
                    return (
                        <TechnologyCard
                            name={tech.name}
                            Icon={tech.Icon}
                            colour={tech.color}
                            angle={initialAngle}
                            isHovered={isHovered}
                            orbitClass={orbitClass}
                            setIsTechHovered={setIsTechHovered} // Pass the setter function to the card
                        />
                    )
                })}
            </div>
        </div>
    )
}

const TechnologyCard = ({name, Icon, colour, angle, isHovered, orbitClass, setIsTechHovered}) => {

    return (
        <div
            // key={key}
            className={`absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 ${orbitClass}`}
            style={{
                transformOrigin: "center",
                rotate: `${angle}deg`,
            }}
            onMouseEnter={() => setIsTechHovered(name)}
            onMouseLeave={() => setIsTechHovered(null)}
        >
            <motion.div
                className="flex cursor-pointer flex-col items-center"
                animate={{
                    scale: isHovered ? 1.2 : 1,
                    zIndex: isHovered ? 30 : 20,
                    filter: isHovered ? `drop-shadow(0 0 4px ${colour})` : "none",
                }}
                transition={{ duration: 0.2 }}
            >
                <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-300 ${isHovered ? `border-[${colour}] bg-black/80` : "border-gray-700 bg-black/50"}`}
                    style={{
                        boxShadow: isHovered ? `0 0 15px ${colour}80` : "none",
                    }}
                >
                    <span
                        className={`text-lg font-bold transition-all duration-300 ${isHovered ? "text-[#64B5F6]" : "text-gray-300"}`}
                    >
                        {Icon ? <Icon className="h-6 w-6" /> : name.substring(0, 2)}
                    </span>
                </div>
                <motion.span
                    className="mt-2 rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white"
                    animate={{
                        opacity: isHovered ? 1 : 0.7,
                        y: isHovered ? 0 : 5,
                    }}
                    transition={{ duration: 0.2 }}
                >
                    {name}
                </motion.span>
            </motion.div>
        </div>
    )
}

const CentralGlobe = (isTechHovered) => {
    return (
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <motion.div
                className="flex h-32 w-32 items-center justify-center rounded-full bg-[#64B5F6]/10 backdrop-blur-md"
                animate={{
                    boxShadow: isTechHovered ? "0 0 40px rgba(100, 181, 246, 0.3)" : "0 0 20px rgba(100, 181, 246, 0.2)",
                }}
                transition={{ duration: 0.5 }}
            >
                <Globe className="h-16 w-16 text-[#64B5F6]/70" />
            </motion.div>
        </div>
    )
}

const OrbitalRings = () => {
    return (
        <>
            <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-800/60"></div>
            <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-800/40"></div>
            <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-800/20"></div>
        </>
    )
}