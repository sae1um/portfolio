import { motion } from "framer-motion";
import { Calendar, ExternalLink, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

export default function EducationCard({ school }) {
    const Colours = {
        grey: {
            background: "#ffffff",
            text: "#32a852",
        },
        blue: {
            background: "",
            text: "",
        },
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full px-8 mb-12 text-center "
        >
            <Card className="relative overflow-hidden border-gray-800 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:border-[#64B5F6] hover:bg-black/60 ">
                <div className={`h-1 bg-gradient-to-r ${school.colour}`} />
                <div className="flex justify-between gap-6 pt-6 px-6">
                    <div className="flex flex-row gap-12">
                        <img
                            className="h-16 w-16 rounded-xl bg-gray-200 object-contain"
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
                        <div className="h-1 flex items-center gap-2 text-green-400 self-baseline">
                            <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                            <span>Current</span>
                        </div>
                    )}
                </div>

                <div>
                    {/* <EducationChip text={"Hloo"} colour={Colours.grey} /> */}
                </div>
            </Card>
        </motion.div>
    );
}

function EducationChip({ text, colour }) {
    return (
        <div className={`bg-[${colour.background}] py-2`}>
            <span>{text}</span>
        </div>
    );
}
