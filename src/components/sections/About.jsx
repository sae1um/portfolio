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

            <div className="container relative z-10 mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-white">About Me</h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-400">
                        I'm a passionate Full Stack Developer with a love for creating elegant solutions to complex problems. My
                        journey in tech has equipped me with a diverse skill set and a keen eye for detail.
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
                        Currently, I'm focused on building accessible, human-centered products that make a real difference. I
                        believe in continuous learning and staying up-to-date with the latest technologies and best practices.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

