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
        { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
        { name: "TypeScript", color: "#3178C6", icon: SiTypescript },
        { name: "React", color: "#61DAFB", icon: SiReact },
        { name: "Next.js", color: "#000000", icon: SiNextdotjs },
        { name: "HTML", color: "#E34F26", icon: SiHtml5 },
        { name: "CSS", color: "#1572B6", icon: SiCss3 },
        { name: "Tailwind CSS", color: "#38B2AC", icon: SiTailwindcss },
    ],
    backend: [
        { name: "Node.js", color: "#339933", icon: SiNodedotjs },
        { name: "Express", color: "#000000", icon: SiExpress },
        { name: "Python", color: "#3776AB", icon: SiPython },
        { name: "C#", color: "#5632d4", icon: TbBrandCSharp },
        { name: "REST", color: "#FF6C37", icon: AiOutlineApi }, // No specific icon available
    ],
    database: [
        { name: "MongoDB", color: "#47A248", icon: SiMongodb },
        { name: "MySQL", color: "#4479A1", icon: SiMysql },
        { name: "PostgreSQL", color: "#336791", icon: SiPostgresql },
    ],
    design: [
        { name: "Figma", color: "#F24E1E", icon: SiFigma },
        { name: "Photoshop", color: "#31A8FF", icon: SiAdobephotoshop },
    ],
    services: [
        { name: "AWS", color: "#FF9900", icon: FaAws },
        { name: "Azure", color: "#0078D4", icon: VscAzure },
        { name: "Netlify", color: "#00C7B7", icon: SiNetlify },
        { name: "Vercel", color: "#000000", icon: SiVercel },
        { name: "Render", color: "#46E3B7", icon: SiRender },
        { name: "Postman", color: "#FF6C37", icon: SiPostman }, // No specific icon available
    ],
    tools: [
        { name: "Git", color: "#F05032", icon: SiGit },
        { name: "GitHub", color: "#181717", icon: SiGithub },
        { name: "VS Code", color: "#007ACC", icon: VscVscode },
        { name: "Arduino", color: "#00979D", icon: SiArduino },
    ],
};
