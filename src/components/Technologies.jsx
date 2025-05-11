import { useState } from 'react'
import { motion } from "framer-motion"
import { Code, Server, Database, Palette, Wrench, Layers, Cloud, ChevronLeft, ChevronRight } from "lucide-react"
import { technologiesByCategory } from "../lib/technologies"

export default function Technologies() {
    const [activeTab, setActiveTab] = useState("all");
    const categories = [
        { id: "all", name: "All", icon: Layers },
        { id: "frontend", name: "Frontend", icon: Code },
        { id: "backend", name: "Backend", icon: Server },
        { id: "database", name: "Database", icon: Database },
        { id: "design", name: "Design", icon: Palette },
        { id: "services", name: "Services", icon: Cloud },
        { id: "tools", name: "Tools", icon: Wrench },
    ]

    return (
        <section>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <p className="mx-auto max-w-2xl text-lg text-gray-400">
                    Here are the technologies, frameworks, and tools I work with to bring ideas to life.
                </p>
            </motion.div>
            {/* Category tabs */}
            <div className='mx-auto flex max-w-4xl flex-wrap justify-center gap-2 sm:gap-4'>
                {categories.map((category) => {
                    const isActive = activeTab === category.id; // Checks if current category is active
                    const Icon = category.icon; // Get the icon component

                    return (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            key={category.id}
                            onClick={() => setActiveTab(category.id)} //Click to set active tab#
                            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all sm:px-6 sm:py-3 sm:text-base ${isActive
                                    ? "border-[#64B5F6] bg-[#64B5F6]/10 text-[#64B5F6]"
                                    : "border-gray-800 bg-black/30 text-gray-400 hover:border-gray-700 hover:bg-black/40 hover:text-gray-300"
                                }`} //Condtional styling for active tab
                        >
                            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                            <span>{category.name}</span>
                        </motion.button>
                    )
                })}
            </div>
            {/* Technologies Grid */}
        </section>
    )
}
