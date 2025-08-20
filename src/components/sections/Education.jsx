import { schoolList } from "../../lib/educationList";
import EducationCard from "../EducationCard";

export default function EducationSection() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center pb-8">
                <h2 className="mb-4 text-4xl font-bold tracking-tight text-white">
                    Education & Learning
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-gray-400">
                    My academic journey and continuous learning path in tech and computing.
                </p>
            </div>
            {schoolList.map(school => (
                <EducationCard school={school} key={school.key}/>
            ))

            }
        </div>
    );
}
