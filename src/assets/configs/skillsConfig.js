import {
    SiPython,
    SiC,
    SiGithub,
    SiGooglecolab,
    SiOpencv,
    SiFigma,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiNumpy,
    SiPandas,
    SiJupyter,
    SiWindows,
    SiDocker,
    SiReact,
    SiFirebase
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { GrHadoop } from "react-icons/gr";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50} />,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiC size={50} />,
            text: "C"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <FaGitAlt size={50} />,
            text: "Git"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiGooglecolab size={50} />,
            text: "Google Colab"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiGithub size={50} />,
            text: "Github"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiDocker size={50} />,
            text: "Docker"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiReact size={50} />,
            text: "ReactJS"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiFirebase size={50} />,
            text: "Firebase"
        }
    ],
    complementarySkills: [
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiFigma size={50} />,
            text: "Figma"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <GrHadoop size={50} />,
            text: "Hadoop"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiHtml5 size={50} />,
            text: "HTML"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiCss3 size={50} />,
            text: "CSS"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiJavascript size={50} />,
            text: "JavaScript"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <SiOpencv size={50} />,
            text: "OpenCV"
        },
        {
            id: "skills-14",
            className: "skill-icon",
            icon: <SiNumpy size={50} />,
            text: "Numpy"
        },
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <SiJupyter size={50} />,
            text: "Matplotlib (Jupyter)"
        },
        {
            id: "skills-16",
            className: "skill-icon",
            icon: <SiPandas size={50} />,
            text: "Pandas"
        },
        {
            id: "skills-17",
            className: "skill-icon",
            icon: <SiWindows size={50} />,
            text: "Tkinter (Windows)"
        }
    ]
}

export default skillsConfig;
