import { schoolList } from "../../lib/educationList";
import EducationCard from "../EducationCard";
import { motion } from "framer-motion";
export default function EducationSection() {
    return (
        <div className="flex flex-col items-center relative py-20 mx-auto ">
            <div className="flex flex-col items-center justify-center pb-8">
                <h2 className="mb-4 text-4xl font-bold tracking-tight text-white">
                    Education & Learning
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-gray-400">
                    My academic journey and continuous learning path in tech and
                    computing.
                </p>
            </div>
            {/* 
                Reverses the list of schools, 
                to make it easier for me to modify the list 
            */}
            <div className="container relative z-10 mx-auto ">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className=" mb-12"
                >
                    {schoolList
                        .slice()
                        .reverse()
                        .map((school) => (
                            <EducationCard school={school} key={school.key} />
                        ))}
                </motion.div>
            </div>
        </div>
    );
}
