import floraFlowImg from "../assets/projectImages/floraflowImg.png"
import ttkit from "../assets/projectImages/ttkit.png"
import { Linkedin } from 'lucide-react';

export const projects = [
    {
        id: 1,
        title: "FloraFlow Dashboard",
        description:
            "FloraFlow is a modern, data-driven dashboard designed to monitor and optimise greenhouse environments in real time. Built to provide seamless plant management, FloraFlow helps users track key environmental metrics, ensuring optimal growth conditions for plants.",
        technologies: ["React", "Node.js", "Express", "MySQL", "Axios", "Tailwind CSS"],
        github: {disabled: false, url: "https://github.com/sae1um/floraflow-dashboard-main"},
        live: {disabled: false, url: "https://floraflow.netlify.app"},
        imageUrl: floraFlowImg,
        v2Url: "https://floraflow2.netlify.app",

    },
    {
        id: 2,
        title: "Teacher Toolkit",
        description:
            "The Teacher Toolkit++ is an advanced software designed to enhance modern teaching by streamlining lesson management, boosting student engagement, and simplifying classroom tasks. It offers a user-friendly, versatile platform to improve productivity and adapt to diverse educational needs.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
        github: {disabled: false, url: "https://github.com/sae1um/TeacherToolkit-CS-Project"},
        live: {disabled: false, url: "https://ttkit.netlify.app"},
        imageUrl: ttkit,
    },
    {
        id: 3,
        title: "Wishly",
        description:
            "The Wishlist App is a cross-platform solution designed to help users create, manage, and share wishlists seamlessly across mobile, web, and desktop. Whether you're tracking personal goals, saving gift ideas, or collaborating on group wishlists, this app ensures your lists are always organised and accessible.",
        technologies: ["TBD"],
        github: {disabled: true, url: ""},
        live: {disabled: true, url: ""},
        imageUrl: "",
    },
    {
        id: 4,
        title: "DIY Macropad",
        description:
            "A DIY macro pad powered by an Arduino Pro Micro, featuring mechanical switches, and a rotary encoder. Built to explore hardware development and expand beyond software.",
        technologies: ["C++", "Arduino", "QMK", "EasyEDA"],
        github: {disabled: false, url: "https://github.com/sae1um/Macropad"},
        live: {disabled: true, url: ""},
        misc: {name: "LinkedIn Post", icon: Linkedin, link: "https://www.linkedin.com/feed/update/urn:li:activity:7320925292636594178/"},
        imageUrl: "https://media.licdn.com/dms/image/v2/D4D22AQF0gCja_2POfw/feedshare-shrink_2048_1536/B4DZZkmwVRGwAs-/0/1745444604187?e=1749686400&v=beta&t=lZedJ4JqFa4cY9GC1D2Ma1mRXLaenJ8PSuLaDUQoquQ",
    }
]