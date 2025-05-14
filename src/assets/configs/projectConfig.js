import React from 'react';
import { AiFillGithub, AiFillEye } from 'react-icons/ai';

// Correct relative paths from 'configs' to 'images'
import healOMaticImg from '../images/marco-antonio-casique-reyes-1ql9Ut8JoUI-unsplash.jpg';
import harryPotterImg from '../images/tuyen-vo-tS-jh0M6JoA-unsplash.jpg';

const projectConfig = [
    {
        id: "project-5",
        title: "Harry Potter Marauders Map",
        links: [
            {
                name: "repo",
                url: "https://github.com/Srinidhi-Chitti/Marauders-Map",
                icon: <AiFillGithub />,
            },
        ],
        image: harryPotterImg,
        description:
            "Developed an interactive desktop application to visualize 11 pathfinding algorithms on a Harry Potter-themed map of London using Folium and QWebEngineView for dynamic map visualization, character tracking using HP-API and Implemented heuristic-based algorithms like A*, Hill Climbing, and Greedy Best-First Search for optimized pathfinding.",
        target: "_blank",
    },
    {
        id: "project-3",
        title: "Heal-O-Matic - Postpartum care solution",
        links: [
            {
                name: "repo",
                url: "https://github.com/Srinidhi-Chitti/Heal-O-Matic-Postpartum-Care",
                icon: <AiFillGithub />,
            },
            {
                name: "subscription",
                url: "https://heal-o-matic-postpartum-care-website.vercel.app/",
                icon: <AiFillEye />,
            },
        ],
        image: healOMaticImg,
        description:
            "Building a tech-driven postpartum care platform to solve the 18 lakhs gap in the market with a kit generator, peer support chatbox, and recovery resources—designed based on insights from first time new moms.",
        target: "_blank",
    },
    {
        id: "project-2",
        title: "Placement and Internship Portal",
        links: [
            {
                name: "repo",
                url: "https://github.com/Srinidhi-Chitti/shetalkstech",
                icon: <AiFillGithub />,
            },
        ],
        image: "https://miro.medium.com/max/1400/1*UDnhOFK35IbAPx15wkMgVg.jpeg",
        description:
            "Bridging the gap between student skills and job market demands by developing using Python, React.js, NLP, integrating ATS resume analysis, content-based filtering, real-time collaboration, and automated internship/placement recommendations.",
        target: "_blank",
    },
];

export default projectConfig;
