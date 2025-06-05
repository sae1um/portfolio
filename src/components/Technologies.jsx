import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
    Code,
    Server,
    Database,
    Palette,
    Wrench,
    Layers,
    Cloud,
    ChevronLeft,
    ChevronRight,
    FileCode2 
} from "lucide-react";
import { technologiesByCategory } from "../lib/technologies";
import { directPointLight } from "three/tsl";

export default function Technologies() {
    const [activeTab, setActiveTab] = useState("all");
    const [showLeftScroll, setShowLeftScroll] = useState(false);
    const [showRightScroll, setShowRightScroll] = useState(false);
    const scrollContainerRef = useRef(null);

    const categories = [
        { id: "all", name: "All", icon: Layers },
        { id: "frontend", name: "Frontend", icon: Code },
        { id: "languages", name: "Languages", icon: FileCode2 },
        { id: "backend", name: "Backend", icon: Server },
        { id: "database", name: "Database", icon: Database },
        { id: "design", name: "Design", icon: Palette },
        { id: "services", name: "Services", icon: Cloud },
        { id: "tools", name: "Tools", icon: Wrench },
    ];
    const allTechnologies = Object.values(technologiesByCategory).flat(); // Flatten the array of technologies
    const technologies =
        activeTab === "all"
            ? allTechnologies
            : technologiesByCategory[activeTab]; // Get technologies based on active tab

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
                scrollContainerRef.current;
            setShowLeftScroll(scrollLeft > 0); // Show left scroll button if scrolled
            setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { clientWidth } = scrollContainerRef.current;
            const scrollAmount = clientWidth * 0.8; // Scroll 80% of the visible width

            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, [activeTab]); // Check scroll on tab change
    return (
        <section>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <p className="mx-auto max-w-2xl text-lg text-gray-400">
                    Here are the technologies, frameworks, and tools I work with
                    to bring ideas to life.
                </p>
            </motion.div>
            {/* Category tabs */}
            <div className="mx-auto mb-5 flex max-w-4xl flex-wrap justify-center gap-2 sm:gap-4">
                {categories.map((category) => {
                    const isActive = activeTab === category.id; // Checks if current category is active
                    const Icon = category.icon; // Get the icon component

                    return (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            key={category.id}
                            onClick={() => setActiveTab(category.id)} //Click to set active tab#
                            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all sm:px-6 sm:py-3 sm:text-base ${
                                isActive
                                    ? "border-[#64B5F6] bg-[#64B5F6]/10 text-[#64B5F6]"
                                    : "border-gray-800 bg-black/30 text-gray-400 hover:border-gray-700 hover:bg-black/40 hover:text-gray-300"
                            }`} //Condtional styling for active tab
                        >
                            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                            <span>{category.name}</span>
                        </motion.button>
                    );
                })}
            </div>
            {/* Technologies Grid */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative mx-auto max-w-5xl"
            >
                
                {/* Scrolling Buttons */}
                {activeTab === "all" && (
                    <>
                        {showLeftScroll && (
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-800 bg-black/70 text-gray-400 backdrop-blur-sm transition-colors hover:border-[#64B5F6] hover:text-[#64B5F6] md:-left-6"
                                onClick={() => scroll("left")}
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </motion.button>
                        )}
                        {showRightScroll && (
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-800 bg-black/70 text-gray-400 backdrop-blur-sm transition-colors hover:border-[#64B5F6] hover:text-[#64B5F6] md:-right-6"
                                onClick={() => scroll("right")}
                            >
                                <ChevronRight className="h-6 w-6" />
                            </motion.button>
                        )}
                    </>
                )}
                
                {/* Container for "All" view */}
                <div
                    ref={scrollContainerRef}
                    className={`${
                        activeTab === "all"
                            ? "grid-rows-2 overflow-x-hidden pb-4"
                            : "grid-rows-none overflow-visible scrollbar-hide"
                    }`}
                    onScroll={activeTab === "all" ? checkScroll : undefined}
                >
                    <div
                        className={`grid ${
                            activeTab === "all"
                                ? "gap-4 grid-flow-col grid-rows-2 auto-cols-max"
                                : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
                        }`}
                    >
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay:
                                        index * 0.05 > 0.5 ? 0.5 : index * 0.05,
                                }} // Cap the delay at 0.5 second
                                className="group flex flex-col items-center"
                            >
                                <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-xl border border-gray-800 bg-black/30 p-2 transition-all duration-300 group-hover:border-[#64B5F6] group-hover:shadow-glow">
                                    {tech.icon && (
                                        <tech.icon className={`w-20 h-10`} style={{ color: tech.colour }} />
                                    )}
                                </div>
                                <span className="text-center text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
                {activeTab === "all" && showRightScroll && (
                        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black to-transparent"></div>
                )}
                
            </motion.div>
        </section>
    );
}
