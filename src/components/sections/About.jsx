import { motion } from "framer-motion";
import { Stars } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Rocket, MapPin, GraduationCap, Sparkles } from "lucide-react";
import pfpimg from "../../assets/projectImages/pfpImg.jpg";
import { interests, currentWork } from "../../lib/interests";
import Technologies from "../Technologies";

export default function About() {
    return (
        <section className="relative min-h-screen">
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
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-white">
                        About Me
                    </h2>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-12 md:gap-8">
                    {/* Profile Card - Full width on mobile, 5 columns on desktop */}
                    <motion.div
                        className="self-center md:col-span-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="flex flex-col gap-2 border-gray-800 bg-black/50 p-4 backdrop-blur-sm transition-all md:p-6">
                            <div className="mb-4 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-5">
                                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-[#64B5F6] sm:h-20 sm:w-20">
                                    <div className="flex h-full w-full items-center justify-center text-3xl">
                                        <img
                                            src={pfpimg}
                                            alt="Profile"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-center flex-col text-center sm:text-left">
                                    <h2 className="text-xl font-bold text-white sm:text-2xl">
                                        Hey, I'm Godswill 👋
                                    </h2>
                                    <p className="text-base text-gray-400 sm:text-lg">
                                        Full-Stack Developer
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 mb-4">
                                <div className="flex flex-row items-center gap-3">
                                    <MapPin className="h-4 w-4 text-[#64B5F6] sm:h-5 sm:w-5" />
                                    <span className="text-sm text-gray-200 sm:text-base">
                                        Based in Sheffield, England
                                    </span>
                                </div>
                                <div className="flex flex-row items-center gap-3">
                                    <GraduationCap className="h-4 w-4 text-[#64B5F6] sm:h-5 sm:w-5" />
                                    <span className="text-sm text-gray-200 sm:text-base">
                                        BSc DTSP {"(Software Engineering)"}{" "}
                                        Apprenticeship
                                        <br></br>
                                        <a
                                            href="https://www.ada.ac.uk/apprentices/how-the-programme-works/degree-apprenticeship-digital-and-technology-solutions/"
                                            target="_blank"
                                            className="underline font-semibold"
                                        >
                                            Ada National College for Digital
                                            Skills
                                        </a>{" "}
                                        &{" "}
                                        <a
                                            href="https://www.royallondon.com/"
                                            target="_blank"
                                            className="underline font-semibold"
                                        >
                                            Royal London
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 text-sm text-gray-300 sm:text-base">
                                <p>
                                    I'm a curious developer who loves turning
                                    ideas into reality through code. When I'm
                                    not building websites or tinkering with
                                    hardware, you'll find me exploring listening
                                    to podcasts or gaming.
                                </p>
                                <p>
                                    My journey started with simple HTML
                                    websites, but I quickly fell down the rabbit
                                    hole of what's possible with modern web
                                    technologies. Now I'm all about creating
                                    experiences that are both functional and
                                    delightful to use.
                                </p>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Right Column - Interests and Current Work */}
                    <div className="flex flex-col gap-6 md:col-span-7">
                        {/* Interests Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card className="border-gray-800 bg-black/50 p-4 backdrop-blur-sm transition-all md:p-6">
                                <h3 className="mb-4 flex items-center justify-center gap-2 text-lg font-semibold text-white sm:text-xl">
                                    <Sparkles className="h-4 w-4 text-[#64B5F6] sm:h-5 sm:w-5" />
                                    What I'm Into
                                </h3>
                                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
                                    {interests.map((interest) => (
                                        <motion.div
                                            key={interest.label}
                                            className="flex flex-col items-center justify-center rounded-xl border border-gray-800 bg-black/30 p-3 text-center transition-all duration-300 hover:border-[#64B5F6] hover:bg-black/50 sm:p-4"
                                        >
                                            <div className="mb-1 text-xl sm:mb-2 sm:text-2xl">
                                                {interest.emoji}
                                            </div>
                                            <div className="text-xs font-medium text-gray-300 sm:text-sm">
                                                {interest.label}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>

                        {/* Current Work Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card className="border-gray-800 bg-black/50 p-4 backdrop-blur-sm transition-all md:p-6">
                                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white sm:text-xl">
                                    <Rocket className="h-4 w-4 text-[#64B5F6] sm:h-5 sm:w-5" />
                                    What I'm Working On
                                </h3>
                                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                    {currentWork.map((work) => (
                                        <motion.div
                                            key={work.name}
                                            className="rounded-xl border border-gray-800 bg-black/30 p-3 transition-all duration-300 hover:border-[#64B5F6] hover:bg-black/50 sm:p-4"
                                        >
                                            <div className="mb-2 flex items-center gap-2 sm:gap-3">
                                                <div className="text-xl sm:text-2xl">
                                                    {work.emoji}
                                                </div>
                                                <h4 className="text-base font-medium text-white sm:text-lg">
                                                    {work.name}
                                                </h4>
                                            </div>
                                            <p className="text-xs text-gray-400 sm:text-sm">
                                                {work.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
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
                    <h3 className="mb-4 text-center text-2xl font-semibold text-slate-300">
                        Technologies I Work With
                    </h3>
                    <Technologies />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mx-auto mt-16 max-w-2xl text-center"
                >
                    <p className="text-lg text-gray-400">
                        I'm gaining hands-on experience through industry
                        projects, focusing on full-stack development, AI/ML, and
                        system architecture. Long-term, I aim to work with
                        leading tech companies, developing scalable solutions
                        before creating my own digital products or startup,
                        solving technical challenges, and optimising
                        performance.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
