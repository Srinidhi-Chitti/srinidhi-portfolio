import React from 'react'
import {DiCodeigniter} from "react-icons/di";
import { BiRocket } from "react-icons/bi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            ✨ Hey there! I’m <strong className="main-name"> Srinidhi Chitti</strong>
        </h1>,
    titles: [
        "Developer",
        "Student",
        "Entrepreneur"
    ],
    about: {
        start: "I look forward to creating meaningful, tech-driven experiences."+
            "From launching social-impact startups like Heal-O-Matic to building projects inspired by fantasy, I bring innovation to life through empathy, curiosity, and code."
            ,
        exit: "I'm well-versed with Python, SQL databases, CN, OS, OOPS and more, " +
            "with a deep interest in softwares."
    },
    workTimeline: [
    {
        id: "work-4",
        title: "Full stack web developer",
        company: "Aegion dynamic solutions",
        description: "Working to building projects using react, next, docker, firebase, much more",
        date: "May 2025-Present",
        icon: <BiRocket/>,
        tags: ["react", "docker", "python", "firebase", "frontend development", "backend development"]
    },
    {
        id: "work-3",
        title: "Student Intern",
        company: "INS Kalinga in association with CAS-GITAM",
        description: "I developed an offline GPS Tracking System using PyQt5, featuring real-time map rendering, GSM-based communication, SQLite data logging, and geospatial analytics." +
            "This project was completed under the guidance of Prof. P. Bharani Chandra Kumar (GITAM, ECE hod) and Commander Shiv Kumar (INS Kalinga, Indian Navy, Visakhapatnam).",
        date: "Dec 2024 - May 2025",
        icon: <DiCodeigniter/>,
        tags: ["python", "pyqt5", "gps", "gsm", "sqlite", "geospatial", "real-time", "mapping", "ui"]
    }
]

}


export default homeConfig