import FPALogo from "../assets/logos/Firth-Park-Academy-Logo.png";
import UTCLogo from "../assets/logos/UTC-Sheffield-Olympic-Legacy-Park-544x300-removebg-preview.png";
import ADALogo from "../assets/logos/Ada-Logo.webp"

export const schoolList = [
    {
        key: 1,
        name: "Firth Park Academy",
        degree: "GCSE",
        field: "",
        duration: "2017-2022",
        location: "Sheffield, UK",
        description: "",
        achievements: "",
        coursework: [],
        projects: [{}],
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
        achievements: "",
        coursework: [],
        projects: [{}],
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
        description: "",
        achievements: "",
        coursework: [],
        projects: [{}],
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
