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
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 space-y-8"
        >
            <Card className="relative overflow-hidden border-gray-800 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:border-[#64B5F6] hover:bg-black/60 ">
                <div className={`h-1 bg-gradient-to-r ${school.colour}`} />
                {/* Main School Information */}
                <div className="flex justify-between gap-6 pt-6 px-6">
                    <div className="flex flex-row gap-12">
                        <img
                            className="h-16 w-16 rounded-xl  bg-gray-200 object-contain"
                            src={school.logo}
                        />
                        <div className="flex flex-col">
                            <span className="text-left mb-1 text-2xl font-bold text-white">
                                {school.degree}
                            </span>
                            <span className="text-lg text-gray-300">
                                {school.field}
                            </span>
                            <div className="flex gap-4 items-center">
                                <span className="text-xl font-semibold text-[#64B5F6]">
                                    {school.name}
                                </span>
                                <Link to={school.website} target="_blank">
                                    <ExternalLink className="h-4 w-4" />
                                </Link>
                            </div>
                            <div className="flex gap-8 items-center text-gray-400 py-1">
                                <span className="flex justtify-center items-center gap-2">
                                    <Calendar className="h-4 w-4" />{" "}
                                    {school.duration}
                                </span>
                                <span className="flex  justify-center items-center gap-2">
                                    <MapPin className="h-4 w-4" />{" "}
                                    {school.location}
                                </span>
                            </div>
                        </div>
                    </div>
                    {school.current && (
                        <div className="flex items-center pr-6 gap-2 text-green-400 self-baseline">
                            <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                            <span>Current</span>
                        </div>
                    )}
                </div>
                {/* Description of the education */}
                <div className="px-12 py-4">{school.description}</div>
                <div className="grid gap-4 lg:grid-cols-2 pr-2 pl-6 ">
                    <div className="mb-4">
                        <span className="flex gap-4 items-center ">
                            <Trophy className="h-5 w-5 text-[#64B5F6]" />
                            <h4 className="flex items-center gap-2 text-lg font-semibold text-white">
                                Achievements
                            </h4>
                        </span>
                        <div>
                            {/* List of achievements */}
                            <ul className="ml-8 space-y-2">
                                {school.achievements.map((achievement, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-3"
                                    >
                                        {achievement.link ? (
                                            <a
                                                className="flex gap-3 "
                                                href={achievement.link}
                                                target="_blank"
                                            >
                                                <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#64B5F6]"></div>
                                                <span className="text-sm text-gray-300">
                                                    {achievement.text}
                                                </span>
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        ) : (
                                            <>
                                                <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#64B5F6]"></div>
                                                <span className="text-sm text-gray-300">
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
                        <span className="flex gap-4 items-center pb-2">
                            <Book className="h-5 w-5 text-[#64B5F6]" />{" "}
                            <h4 className="flex items-center gap-2 text-lg font-semibold text-white">
                                Key Coursework
                            </h4>
                        </span>
                        <div className="flex flex-row flex-wrap gap-x-4 gap-y-2">
                            {school.coursework.map((work, idx) => (
                                // <EducationChip key={idx}/>
                                <Badge
                                    className="bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 rounded-full "
                                    key={idx}
                                >
                                    {work}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="px-6">
                    <span className="flex gap-4 items-center ">
                        <GraduationCap className="h-5 w-5 text-[#64B5F6]" />
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-white">
                            Notable Projects
                        </h4>
                    </span>
                    <div className="grid gap-4 sm:grid-cols-2 mb-4 mt-2">
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
    // console.log(project)
    if (Object.keys(project).length === 0) {
        return (
            <div className="rounded-[4px]  border border-gray-800 bg-black/30 p-4">
                <h5 className="mb-2 font-semibold text-white">
                    Coming Soon...
                </h5>
            </div>
        );
    }
    return (
        <div className="rounded-[4px] border border-gray-800 bg-black/30 p-4">
            <h5 className="mb-2 font-semibold text-white">{project.name}</h5>
            <p className="mb-3 text-sm text-gray-400">{project.description}</p>
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
