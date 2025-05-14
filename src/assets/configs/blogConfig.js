import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { SiHashnode } from "react-icons/si";

// Importing local images
import cloudImg from '../images/c-dustin-K-Iog-Bqf8E-unsplash.jpg';
import nodeMcuImg from '../images/fahim-muntashir-M02I8Ab_TT4-unsplash.jpg';
import roboticsImg from '../images/jelleke-vanooteghem-6NUlOHM40w8-unsplash.jpg';
import iotImg from '../images/robin-glauser-zP7X_B86xOg-unsplash.jpg';
import devicesSenseImg from '../images/willian-justen-de-vasconcellos-PwcJ-IwWPI0-unsplash.jpg';

const blogConfig = [
    {
        id: "blog-8",
        title: "Putting Data on Cloud",
        links: [
            {
                name: "article",
                url: "https://sri123.hashnode.dev/putting-data-on-cloud-9",
                icon: <SiHashnode />
            }
        ],
        image: cloudImg,
        description: "Exploring how to efficiently manage and store data in the cloud.",
        target: "_blank"
    },
    {
        id: "blog-7",
        title: "Let the Devices Sense",
        links: [
            {
                name: "article",
                url: "https://sri123.hashnode.dev/let-the-devices-sense",
                icon: <SiHashnode />
            }
        ],
        image: devicesSenseImg,
        description: "Delving into the realm of IoT devices and how they can sense and communicate.",
        target: "_blank"
    },
    {
        id: "blog-6",
        title: "NodeMCU Nods at WiFi",
        links: [
            {
                name: "article",
                url: "https://sri123.hashnode.dev/nodemcu-nods-at-wifi",
                icon: <SiHashnode />
            }
        ],
        image: nodeMcuImg,
        description: "Exploring the capabilities of NodeMCU in IoT applications with WiFi connectivity.",
        target: "_blank"
    },
    {
        id: "blog-5",
        title: "Diving into IoT with Tinkercad",
        links: [
            {
                name: "article",
                url: "https://sri123.hashnode.dev/diving-into-iot-with-tinkercad",
                icon: <SiHashnode />
            }
        ],
        image: iotImg,
        description: "A beginner’s guide to IoT prototyping using Tinkercad and its applications.",
        target: "_blank"
    },
    {
        id: "blog-4",
        title: "Meet Robotics in Space",
        links: [
            {
                name: "article",
                url: "https://sri123.hashnode.dev/meet-robotics-in-space",
                icon: <SiHashnode />
            }
        ],
        image: roboticsImg,
        description: "How robotics are revolutionizing space exploration and the role they play.",
        target: "_blank"
    }
];

export default blogConfig;
