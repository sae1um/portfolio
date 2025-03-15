import { motion } from "framer-motion"
import { Stars } from "lucide-react"
import { Card } from "@/components/ui/card"
import { skills } from "../../lib/skillsList"

export default function About() {
    console.log(skills)
    return (
        <section className="relative min-h-screen w-fullpy-20">
            {/* Star background */}
            <div className="absolute inset-0 overflow-hidden">
                <Stars className="h-full w-full opacity-[0.04]" />
            </div>

            <div className="containerrelative z-10 mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-white">About Me</h2>
                    <p className="mx-auto max-w-3xl text-lg text-gray-400">
                    I'm a software developer interested in <span className="Semi-bold text-slate-400">internet technologies, software engineering, and full-stack development. </span>
                    I build efficient, scalable software that enhances user experiences. With a practical, detail-oriented approach, 
                    I focus on creating real-world solutions that are both <span className="Semi-bold text-slate-400">functional and maintainable.</span>
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="group relative overflow-hidden border-gray-800 bg-black/50 p-6 backdrop-blur-sm transition-all hover:border-[#64B5F6] hover:bg-black/60">
                                <div className="mb-4 flex items-center gap-4">
                                    <div className="rounded-full border border-gray-800 bg-black/50 p-2">
                                        <skill.icon className="h-6 w-6 text-[#64B5F6]" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                                </div>
                                <p className="text-gray-400">{skill.desc}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

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

