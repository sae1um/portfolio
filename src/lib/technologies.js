import {
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiPython,
    SiMysql,
    SiMongodb,
    SiArduino,
    SiTypescript,
    SiExpress,
    SiPostgresql,
    SiFigma,
    SiAdobephotoshop,
    SiNetlify,
    SiVercel,
    SiRender,
    SiGit,
    SiGithub,
    SiPostman,
} from "react-icons/si";
import { TbBrandOffice } from "react-icons/tb";

import { TbBrandCSharp } from "react-icons/tb";
import { AiOutlineApi } from "react-icons/ai";
import { VscAzure,VscVscode } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";

export const technologies = [
    { name: "JavaScript", color: "#F7DF1E", Icon: SiJavascript },
    { name: "HTML", color: "#E34F26", Icon: SiHtml5 },
    { name: "CSS", color: "#1572B6", Icon: SiCss3 },
    { name: "Tailwind", color: "#38B2AC", Icon: SiTailwindcss },
    { name: "React", color: "#61DAFB", Icon: SiReact },
    { name: "Next.js", color: "#3b393a", Icon: SiNextdotjs },
    { name: "Node.js", color: "#339933", Icon: SiNodedotjs },
    { name: "Python", color: "#3776AB", Icon: SiPython },
    { name: "C#", color: "#5632d4", Icon: TbBrandCSharp },
    { name: "MySQL", color: "#4479A1", Icon: SiMysql },
    { name: "MongoDB", color: "#47A248", Icon: SiMongodb },
    { name: "Arduino C++", color: "#00979D", Icon: SiArduino },
];

export const technologiesByCategory = {
    frontend: [
        { name: "JavaScript", colour: "#F7DF1E", icon: SiJavascript, id: 0 },
        { name: "TypeScript", colour: "#3178C6", icon: SiTypescript, id: 1 },
        { name: "React", colour: "#61DAFB", icon: SiReact, id: 2 },
        { name: "Next.js", colour: "#FFFFF", icon: SiNextdotjs, id: 3 },
        { name: "HTML", colour: "#E34F26", icon: SiHtml5, id: 4 },
        { name: "CSS", colour: "#1572B6", icon: SiCss3, id: 5 },
        { name: "Tailwind CSS", colour: "#38B2AC", icon: SiTailwindcss, id: 6 },
    ],
    backend: [
        { name: "Node.js", colour: "#339933", icon: SiNodedotjs, id: 7 },
        { name: "Express", colour: "#FFFFF", icon: SiExpress, id: 8 },
        { name: "Python", colour: "#3776AB", icon: SiPython, id: 9 },
        { name: "C#", colour: "#5632d4", icon: TbBrandCSharp, id: 10 },
        { name: "REST", colour: "#FF6C37", icon: AiOutlineApi, id: 11 }, 
    ],
    database: [
        { name: "MongoDB", colour: "#47A248", icon: SiMongodb, id: 12 },
        { name: "MySQL", colour: "#4479A1", icon: SiMysql, id: 13 },
        { name: "PostgreSQL", colour: "#336791", icon: SiPostgresql, id: 14 },
    ],
    design: [
        { name: "Figma", colour: "#a55eff", icon: SiFigma, id: 16 },
        { name: "Photoshop", colour: "#31A8FF", icon: SiAdobephotoshop, id: 17 },
    ],
    services: [
        { name: "AWS", colour: "#FF9900", icon: FaAws, id: 18 },
        { name: "Azure", colour: "#0078D4", icon: VscAzure, id: 19 },
        { name: "Netlify", colour: "#00C7B7", icon: SiNetlify, id: 20 },
        { name: "Vercel", colour: "#FFFFF", icon: SiVercel, id: 21 },
        { name: "Render", colour: "#46E3B7", icon: SiRender, id: 22 },
        { name: "Postman", colour: "#FF6C37", icon: SiPostman, id: 23 }, 
    ],
    tools: [
        { name: "Git", colour: "#F05032", icon: SiGit, id: 24 },
        { name: "GitHub", colour: "#474545", icon: SiGithub, id: 25 },
        { name: "VS Code", colour: "#007ACC", icon: VscVscode, id: 26 },
        { name: "Arduino", colour: "#00979D", icon: SiArduino, id: 27 },
        { name: "MS Office", colour: "#e43a00", icon: TbBrandOffice, id: 28 },
    ],
    languages: [
        { name: "JavaScript", colour: "#F7DF1E", icon: SiJavascript, id: 29 },
        { name: "TypeScript", colour: "#3178C6", icon: SiTypescript, id: 30 },
        { name: "Python", colour: "#3776AB", icon: SiPython, id: 31 },
        { name: "C#", colour: "#5632d4", icon: TbBrandCSharp, id: 32 },
    ]
};
