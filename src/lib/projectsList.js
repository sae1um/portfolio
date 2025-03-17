import floraFlowImg from "../assets/projectImages/floraflowImg.png"
import ttkit from "../assets/projectImages/ttkit.png"

export const projects = [
    {
        id: 1,
        title: "FloraFlow Dashboard",
        description:
            "FloraFlow is a modern, data-driven dashboard designed to monitor and optimise greenhouse environments in real time. Built to provide seamless plant management, FloraFlow helps users track key environmental metrics, ensuring optimal growth conditions for plants.",
        technologies: ["React", "Node.js", "Express", "MySQL", "Axios", "Tailwind CSS"],
        githubUrl: "https://github.com/sae1um/floraflow-dashboard-main",
        liveUrl: "https://floraflow.netlify.app",
        imageUrl: floraFlowImg,
        v2Url: "https://floraflow2.netlify.app",
        disabled: false,

    },
    {
        id: 2,
        title: "Teacher Toolkit",
        description:
            "The Teacher Toolkit++ is an advanced software designed to enhance modern teaching by streamlining lesson management, boosting student engagement, and simplifying classroom tasks. It offers a user-friendly, versatile platform to improve productivity and adapt to diverse educational needs.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
        githubUrl: "https://github.com/sae1um/TeacherToolkit-CS-Project",
        liveUrl: "https://ttkit.netlify.app",
        imageUrl: ttkit,
        disabled: false,
    },
    {
        id: 3,
        title: "Wishly",
        description:
            "The Wishlist App is a cross-platform solution designed to help users create, manage, and share wishlists seamlessly across mobile, web, and desktop. Whether you're tracking personal goals, saving gift ideas, or collaborating on group wishlists, this app ensures your lists are always organised and accessible.",
        technologies: ["TBD"],
        githubUrl: "",
        liveUrl: "",
        imageUrl: "",
        disabled: true,
    },
    {
        id: 4,
        title: "",
        description:
            "",
        technologies: ["TBD"],
        githubUrl: "",
        liveUrl: "",
        imageUrl: "",
        disabled: true,
    },
]