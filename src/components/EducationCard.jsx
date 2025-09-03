import { motion } from "framer-motion";
import { Calendar, ExternalLink, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Trophy, Book, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function EducationCard({ school }) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    // Detect mobile screen
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8 sm:mb-12 space-y-6"
        >
            <Card className="relative pb-4 overflow-hidden border-gray-800 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:border-[#64B5F6] hover:bg-black/60 w-full max-w-full">
                <div className={`h-1 bg-gradient-to-r ${school.colour}`} />
                {/* Main School Information */}
                <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6 pt-4 md:pt-6 px-4 md:px-6 w-full">
                    <div className="flex flex-row gap-4 md:gap-12 w-full">
                        <img
                            className="h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gray-200 object-contain flex-shrink-0"
                            src={school.logo}
                            alt={`${school.name} logo`}
                            loading="lazy"
                        />
                        <div className="flex flex-col w-full min-w-0">
                            <span className="text-left mb-1 text-lg md:text-2xl font-bold text-white break-words">
                                {school.degree}
                            </span>
                            <span className="text-base md:text-lg text-gray-300 break-words">
                                {school.field}
                            </span>
                            <div className="flex gap-2 md:gap-4 items-center flex-wrap">
                                <span className="text-base md:text-xl font-semibold text-[#64B5F6] break-words">
                                    {school.name}
                                </span>
                                <Link
                                    to={school.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="School Website"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                </Link>
                            </div>
                            <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-start md:items-center text-gray-400 py-1">
                                <span className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />{" "}
                                    {school.duration}
                                </span>
                                <span className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4" />{" "}
                                    {school.location}
                                </span>
                            </div>
                        </div>
                    </div>
                    {school.current && (
                        <div className="flex items-center pr-0 md:pr-6 gap-2 text-green-400 self-baseline">
                            <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                            <span className="text-xs md:text-base">
                                Current
                            </span>
                        </div>
                    )}
                </div>
                {/* Description of the education */}
                <div className="px-4 md:px-12 py-2 md:py-4 text-sm md:text-base break-words w-full">
                    {school.description}
                </div>
                <div className="grid gap-4 md:gap-4 lg:grid-cols-2 pr-2 pl-4 md:pl-6 w-full">
                    <div className="mb-4">
                        <span className="flex gap-2 md:gap-4 items-center">
                            <Trophy className="h-5 w-5 text-[#64B5F6]" />
                            <h4 className="flex items-center gap-2 text-base md:text-lg font-semibold text-white break-words">
                                Achievements
                            </h4>
                        </span>
                        <div>
                            {/* List of achievements */}
                            <ul className="ml-2 md:ml-8 space-y-2">
                                {school.achievements.map((achievement, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-2 md:gap-3"
                                    >
                                        {achievement.link ? (
                                            <a
                                                className="flex gap-2 md:gap-3"
                                                href={achievement.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#64B5F6]"></div>
                                                <span className="text-xs md:text-sm text-gray-300 break-words">
                                                    {achievement.text}
                                                </span>
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        ) : (
                                            <>
                                                <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#64B5F6]"></div>
                                                <span className="text-xs md:text-sm text-gray-300 break-words">
                                                    {achievement.text}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <span className="flex gap-2 md:gap-4 items-center pb-2">
                            <Book className="h-5 w-5 text-[#64B5F6]" />
                            <h4 className="flex items-center gap-2 text-base md:text-lg font-semibold text-white break-words">
                                Key Coursework
                            </h4>
                        </span>
                        <div className="flex flex-row flex-wrap gap-x-2 md:gap-x-4 gap-y-2">
                            {(isMobile
                                ? school.coursework.slice(0, 4)
                                : school.coursework
                            ).map((work, idx) => (
                                <Badge
                                    className="bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 rounded-full text-xs md:text-sm"
                                    key={idx}
                                >
                                    {work}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Notable Projects: hidden on mobile, visible on md+ */}
                <div className="px-4 md:px-6 hidden md:block w-full">
                    <span className="flex gap-2 md:gap-4 items-center">
                        <GraduationCap className="h-5 w-5 text-[#64B5F6]" />
                        <h4 className="flex items-center gap-2 text-base md:text-lg font-semibold text-white break-words">
                            Notable Projects
                        </h4>
                    </span>
                    <div className="grid gap-2 md:gap-4 sm:grid-cols-1 md:grid-cols-2 mb-4 mt-2">
                        {school.projects.map((project, idx) => (
                            <ProjectCard project={project} key={idx} />
                        ))}
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}

function ProjectCard({ project }) {
    if (Object.keys(project).length === 0) {
        return (
            <div className="rounded-[4px] border border-gray-800 bg-black/30 p-4">
                <h5 className="mb-2 font-semibold text-white break-words">
                    Coming Soon...
                </h5>
            </div>
        );
    }
    return (
        <div className="rounded-[4px] border border-gray-800 bg-black/30 p-4">
            <h5 className="mb-2 font-semibold text-white break-words">
                {project.name}
            </h5>
            <p className="mb-3 text-sm text-gray-400 break-words">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                    <Badge
                        key={tech}
                        className="bg-[#64B5F6]/20 text-[#64B5F6] text-xs"
                    >
                        {tech}
                    </Badge>
                ))}
            </div>
        </div>
    );
}
