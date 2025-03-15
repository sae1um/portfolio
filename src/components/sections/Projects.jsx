import React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Stars } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "../../lib/projectsList"
import placeholder from "../../assets/projectImages/placeholder.jpg"
import "../../App.css"
export default function Projects() {
    return (
        <div className="relative min-h-screen py-20">
            <div className="container relative z-10 ">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-white">Projects</h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-400 px-4">
                        Here are some of my recent projects. Each one represents a unique challenge and learning opportunity.
                    </p>
                </motion.div>

                <div className="grid max-w-full gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function ProjectCard({ project, index }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="px-4 md:px-0 lg:px-0"
        >
            <Card
                className="group relative overflow-hidden border-gray-800 bg-black/50 backdrop-blur-sm transition-all hover:border-[#64B5F6] hover:bg-black/60"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative aspect-video w-full overflow-hidden">
                    {project.imageUrl ?
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        : <img src={placeholder} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        
                    }
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>

                    <div className="mb-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <Badge key={tech} className="bg-[#64B5F6]/20 text-[#64B5F6] hover:bg-[#64B5F6]/30">
                                {tech}
                            </Badge>
                        ))}
                    </div>

                    <div className="relative mb-6">
                        <p
                            className={`text-gray-400 transition-all ease-in  duration-300 line-clamp-2 hover:line-clamp-none`}
                        >
                            {project.description}
                        </p>

                        {!isHovered && (
                            <div className={`absolute bottom-0 left-0 h-8 w-full bg-gradient-to-t from-black/50 to-transparent`} />
                            )}
                    </div>

                    <div className="flex gap-4 flex-wrap">
                        <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-2 border-gray-700 bg-black/30 text-white hover:border-[#64B5F6] hover:bg-black/50 hover:text-[#64B5F6]"
                            disabled={project.disabled}
                            asChild
                        >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                                <span>Code</span>
                            </a>
                        </Button>
                        <Button 
                            className="flex items-center flex-row gap-2 bg-[#64B5F6] text-black hover:bg-[#81D4FA]" 
                            size="sm" 
                            asChild
                        >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                                <span>Live Demo</span>
                            </a>
                        </Button>
                        {project.v2Url && (
                            <Button size="sm" className="flex items-center gap-2 bg-[#64B5F6] text-black hover:bg-[#81D4FA]" asChild>
                                <a href={project.v2Url} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-4 w-4" />
                                    <span>V2/Refactor Live Demo</span>
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </Card>
        </motion.div>
    )
}

