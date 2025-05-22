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
        { name: "JavaScript", colour: "#F7DF1E", icon: SiJavascript },
        { name: "TypeScript", colour: "#3178C6", icon: SiTypescript },
        { name: "React", colour: "#61DAFB", icon: SiReact },
        { name: "Next.js", colour: "#FFFFF", icon: SiNextdotjs },
        { name: "HTML", colour: "#E34F26", icon: SiHtml5 },
        { name: "CSS", colour: "#1572B6", icon: SiCss3 },
        { name: "Tailwind CSS", colour: "#38B2AC", icon: SiTailwindcss },
    ],
    backend: [
        { name: "Node.js", colour: "#339933", icon: SiNodedotjs },
        { name: "Express", colour: "#FFFFF", icon: SiExpress },
        { name: "Python", colour: "#3776AB", icon: SiPython },
        { name: "C#", colour: "#5632d4", icon: TbBrandCSharp },
        { name: "REST", colour: "#FF6C37", icon: AiOutlineApi }, 
    ],
    database: [
        { name: "MongoDB", colour: "#47A248", icon: SiMongodb },
        { name: "MySQL", colour: "#4479A1", icon: SiMysql },
        { name: "PostgreSQL", colour: "#336791", icon: SiPostgresql },
    ],
    design: [
        { name: "Figma", colour: "#a55eff", icon: SiFigma },
        { name: "Photoshop", colour: "#31A8FF", icon: SiAdobephotoshop },
    ],
    services: [
        { name: "AWS", colour: "#FF9900", icon: FaAws },
        { name: "Azure", colour: "#0078D4", icon: VscAzure },
        { name: "Netlify", colour: "#00C7B7", icon: SiNetlify },
        { name: "Vercel", colour: "#FFFFF", icon: SiVercel },
        { name: "Render", colour: "#46E3B7", icon: SiRender },
        { name: "Postman", colour: "#FF6C37", icon: SiPostman }, 
    ],
    tools: [
        { name: "Git", colour: "#F05032", icon: SiGit },
        { name: "GitHub", colour: "#474545", icon: SiGithub },
        { name: "VS Code", colour: "#007ACC", icon: VscVscode },
        { name: "Arduino", colour: "#00979D", icon: SiArduino },
        { name: "MS Office", colour: "#e43a00", icon: TbBrandOffice },
    ],
    languages: [
        { name: "JavaScript", colour: "#F7DF1E", icon: SiJavascript },
        { name: "TypeScript", colour: "#3178C6", icon: SiTypescript },
        { name: "Python", colour: "#3776AB", icon: SiPython },
        { name: "C#", colour: "#5632d4", icon: TbBrandCSharp },
    ]
};
