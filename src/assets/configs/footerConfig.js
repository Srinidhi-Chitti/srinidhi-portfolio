import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiHashnode } from "react-icons/si"; // Changed from BsMedium to SiHashnode
import React from "react";

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "https://github.com/Srinidhi-Chitti",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={50} />
        },
        {
            id: "footer-1",
            url: "https://www.linkedin.com/in/srinidhichitti/",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={50} />
        },
        {
            id: "footer-2",
            url: "https://sri123.hashnode.dev/",
            className: "social-icon",
            target: "_blank",
            icon: <SiHashnode size={50} /> // Updated to Hashnode icon
        }
    ]
}

export default footerConfig;
