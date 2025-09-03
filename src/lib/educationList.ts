import FPALogo from "../assets/logos/Firth-Park-Academy-Logo.png";
import UTCLogo from "../assets/logos/UTC-Sheffield-Olympic-Legacy-Park-544x300-removebg-preview.png";
import ADALogo from "../assets/logos/Ada-Logo.webp";
import { School } from "@/types";

export const schoolList: School[] = [
    {
        key: 1,
        name: "Firth Park Academy",
        degree: "GCSE",
        field: "",
        duration: "2017-2022",
        location: "Sheffield, UK",
        description:
            "Comprehensive secondary education with strong focus on STEM subjects. Developed foundational knowledge in mathematics, sciences, and began programming journey.",
        achievements: [
            { text: "Achieved 8 GCSEs at grade 7-9 (A*-A equivalent)" },
            { text: "Grade 7 in Mathematics and D2 in IT" },
            { text: "Captain of the school's basketball club" },
            { text: "School's 'Gold Student' badge & award" },
        ],
        coursework: [
            "Mathematics (Higher)",
            "English Language & Literature",
            "MS Excel Database Management",
            "Sciences",
            "Spanish",
            "MS Access Database",
            "Basic Programming",
            "Mechanical Engineering Principles",
        ],
        projects: [
            {
                name: "Hotel Database Management System",
                description:
                    "Created a hotel management system using Microsoft Excel and Access to handle bookings, guest information, and reporting.",
                technologies: ["MS Excel", "MS Access"],
            },
            {
                name: "DT Lamp Project",
                description:
                    "Designed and built a custom lamp in Design & Technology, focusing on practical skills, design process, and product prototyping.",
                technologies: ["DT Tools", "Woodwork", "Circuit Design"],
            },
        ],
        logo: FPALogo,
        website:
            "https://sites.google.com/aetinet.org/firth-park-academy/home?authuser=0",
        colour: "from-green-700 to-emerald-200",
        current: false,
    },
    {
        key: 2,
        name: "UTC Sheffield Olympic Legacy Park",
        degree: "A-Levels",
        field: "L3 IT, Computer Science, and Mathematics",
        duration: "2023-2025",
        location: "Sheffield, UK",
        description:
            "Specialised technical education focusing on computer science fundamentals, advanced mathematics and practical IT skills",
        achievements: [
            {
                text: "Awarded IET 'Student of Excellence' Award",
                link: "https://www.linkedin.com/posts/godswill-godwin-erhunmwunse-10b3a825a_sometimes-the-scariest-emails-turn-out-to-activity-7354805107667914752-LivG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_GJJsB1uttLkrvvHHBhelrnj3-QpVjsFI",
            },
            {
                text: "Took part in Young advisors NHS pogramme",
                link: "https://www.sheffieldchildrens.nhs.uk/news/national-centre-for-child-health-technology-developing-at-pace-to-transform-healthcare-delivery-for-children-and-young-people/",
            },
            { text: "Completed A-level studies with high grades" },
            { text: "Delivered technical presentations to peers and teachers" },
        ],
        coursework: [
            "Systems Analysis, Design & Testing",
            "Web Development",
            "Cyber Security Analysis",
            "Database Design & SQL",
            "Mathematical Modelling & Problem Solving",
            "Project Life Cycle",
            "Networking Fundamentals",
            "Data Structures & Algorithms",
        ],
        projects: [
            {
                name: "Eyam Quester",
                description:
                    "A historical exploration game designed to teach players about the Eyam plague village through interactive storytelling and puzzles.",
                technologies: ["Unity Engine", "C#", "AR", "HTML", "CSS", "JS"],
            },
            {
                name: "Teacher Toolkit",
                description:
                    "A web application to support teachers with student management, lesson planning, and classroom resources.",
                technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
            },
            {
                name: "FloraFlow IoT Device",
                description:
                    "A smart greenhouse monitoring system tracking water levels, CO₂, humidity, and temperature, with a connected web dashboard.",
                technologies: ["ESP32", "IoT", "React", "MySQL", "Arduino"],
            },
            {
                name: "DIY Macropad",
                description:
                    "A custom-built macropad powered by an Arduino Pro Micro, featuring mechanical switches and a rotary encoder. Designed to explore hardware development, circuit design, and microcontroller programming.",
                technologies: ["Arduino", "C++", "Circuit Design", "Soldering"],
            },
        ],
        logo: UTCLogo,
        website: "https://www.utcsheffield.org.uk/olp/",
        colour: "from-blue-600 to-cyan-200",
        current: false,
    },
    {
        key: 3,
        name: "Ada National College for Digital Skills",
        degree: "Undergraduate (BSc)",
        field: "Digital Technology Solutions (Software Engineer)",
        duration: "2025-2028",
        location: "Manchester, UK",
        description:
            "Starting a Level 6 Digital Technology Solutions Degree Apprenticeship at Ada, combining academic learning with real-world industry experience in software engineering and digital innovation.",
        achievements: [{ text: "Coming Soon..." }],
        coursework: ["Comming Soon..."],
        projects:[{}],
        logo: ADALogo,
        website: "https://www.ada.ac.uk/",
        colour: "from-purple-700 to-pink-300",
        current: true,
    },
];

// TEMPLATE
/*
    key: 4, 
    name: "",
    degree: "",
    field: "",
    duration: "", 
    location: "",
    description: "",
    achievements: "", 
    coursework: [],
    projects: [{}],
    logo: "/",
    website: "",
    colour: "from-{}-500 to-{}-400",
    current: false

*/
