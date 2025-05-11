import { motion } from "framer-motion"
import { Stars } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Rocket, MapPin, GraduationCap, Sparkles } from 'lucide-react';
import pfpimg from "../../assets/projectImages/pfpimg.jpg"
import { interests, currentWork } from "../../lib/interests";
import Technologies from "../technologies"

export default function About() {
    return (
        <section className="relative min-h-screen w-fullpy-20">
            {/* Star background */}
            <div className="absolute inset-0 overflow-hidden">
                <Stars className="h-full w-full opacity-[0.04]" />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-white">About Me</h2>
                </motion.div>

                <div className="grid gap-8 mb-4 md:grid-cols-12">
                    <motion.div
                        className="col-span-5 flex self-center items-center justify-center"
                        // variants={item}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="flex flex-col gap-2 group relative overflow-hidden border-gray-800 bg-black/50 p-6 backdrop-blur-sm transition-all">
                            <div className="mb-4 flex items-center gap-5">
                                <div class="relative h-20 w-20 overflow-hidden rounded-full border-2 border-[#64B5F6]">
                                    <div class="flex h-full w-full items-center justify-center text-3xl">
                                        <img src={pfpimg} alt="Profile" className="object-cover rounded-full" />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">Hey, I'm Godswill 👋</h2>
                                    <p className="text-lg text-gray-400">Full-Stack Developer</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 mb-4">
                                <div className="flex flex-row items-center gap-4">
                                    <MapPin className="h-5 w-5 text-[#64B5F6]" />
                                    <span className="text-gray-200">Based in Sheffield, England</span>
                                </div>
                                <div className="flex flex-row items-center gap-4">
                                    <GraduationCap className="h-5 w-5 text-[#64B5F6]" />
                                    <span className="text-gray-200">Studying Computer Science, Maths and IT @ <a href="https://www.utcsheffield.org.uk/olp/" target="_blank" className="underline font-semibold">UTC Sheffield OLP</a></span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <p>I'm a curious developer who loves turning ideas into reality through code. When I'm not building websites or tinkering with hardware, you'll find me exploring listening to podcasts or gaming.</p>
                                <p>My journey started with simple HTML websites, but I quickly fell down the rabbit hole of what's possible with modern web technologies. Now I'm all about creating experiences that are both functional and delightful to use.</p>
                            </div>
                        </Card>
                    </motion.div>
                    <div className="col-span-7 flex flex-col gap-4">
                        <motion.div
                            class
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card className="group relative overflow-hidden border-gray-800 bg-black/50 p-6 backdrop-blur-sm transition-all">
                                <h3 className="mb-4 flex items-center justify-center gap-4 text-xl font-semibold text-white">
                                    <Sparkles className="h-5 w-5 text-[#64B5F6]" />
                                    What I'm Into
                                </h3>
                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                    {interests.map((interest) => (
                                        <motion.div
                                            key={interest.label}
                                            // variants={item}
                                            className="flex flex-col items-center justify-center rounded-xl border border-gray-800 bg-black/30 p-4 text-center transition-all duration-300 hover:border-[#64B5F6] hover:bg-black/50"
                                        >
                                            <div className="mb-2 text-2xl">{interest.emoji}</div>
                                            <div className="text-sm font-medium text-gray-300">{interest.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card className="grid grid-cols-3 gap-2 group relative overflow-hidden border-gray-800 bg-black/50 p-6 backdrop-blur-sm transition-all">
                                <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-white">
                                    <Rocket className="h-5 w-5 text-[#64B5F6]" />
                                    What I'm Working On
                                </h3>
                                {currentWork.map((work) => (
                                    <motion.div
                                        key={work.name}
                                        className="rounded-xl border border-gray-800 bg-black/30 p-4 transition-all duration-300 hover:border-[#64B5F6] hover:bg-black/50"
                                    >
                                        <div className="mb-2 flex items-center gap-3">
                                            <div className="text-2xl">{work.emoji}</div>
                                            <h4 className="text-lg font-medium text-white">{work.name}</h4>
                                        </div>
                                        <p className="text-gray-400">{work.description}</p>
                                    </motion.div>
                                ))}
                            </Card>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="my-8 text-center"
                >
                    <h3 className="mb-4 text-center text-2xl font-semibold text-slate-300">Technologies I Work With</h3>
                    <Technologies />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mx-auto mt-16 max-w-2xl text-center"
                >
                    <p className="text-lg text-gray-400">
                        I'm gaining hands-on experience through industry projects, focusing on full-stack development, AI/ML, and system architecture.
                        Long-term, I aim to work with leading tech companies, developing scalable solutions before creating my own digital products or startup, solving technical challenges, and optimising performance.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

