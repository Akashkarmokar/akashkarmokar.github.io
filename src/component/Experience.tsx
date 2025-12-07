"use client";
import { useState } from "react";
import { FaJs, FaReact, FaPython, FaAws } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import {
    SiMongodb,
    SiRedis,
    SiFastapi,
    SiExpress,
    SiApachekafka,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
const Experience = () => {
    const [experience] = useState([
        {
            id: 1,
            company: "VALT",
            role: "Software Developer",
            duration: "Oct 2023 - Present",
            details: ["Work as software developer"],
            img_file: "./valt-logo.jpeg",
        },
        {
            id: 2,
            company: "Gain Solutions",
            role: "Software Engineer",
            duration: "Aug 2022 - Sep 2023",
            details: ["Work as software developer."],
            img_file: "./gain-logo.jpeg",
        },
    ]);
    return (
        <div id="Experience" className="p-10 md:p-24">
            <h1 className="text-2xl font-bold text-white md:text-4xl">
                Experience
            </h1>
            <div className="flex flex-wrap items-center justify-around">
                <div className="flex flex-wrap gap-8 py-10 md:w-[50%] md:p-12">
                    <span className="flex items-center rounded-2xl bg-zinc-950 p-3">
                        <SiFastapi color="#399486" size={50} />
                    </span>
                    <span className="flex items-center rounded-2xl bg-zinc-950 p-3">
                        <SiExpress color="#399486" size={50} />
                    </span>
                    <span className="flex items-center rounded-2xl bg-zinc-950 p-3">
                        <FaJs color="#F7DF1E" size={50} />
                    </span>
                    <span className="flex items-center rounded-2xl bg-zinc-950 p-3">
                        <FaPython color="#F7DF1E" size={50} />
                    </span>
                    <span className="flex items-center rounded-2xl bg-zinc-950 p-3">
                        <FaGolang color="#399486" size={50} />
                    </span>

                    <span className="flex items-center rounded-2xl bg-zinc-950 p-3">
                        <BiLogoPostgresql color="#336791" size={50} />
                    </span>
                    <span className="flex items-center rounded-2xl bg-zinc-950 p-3">
                        <SiMongodb color="#47A248" size={50} />
                    </span>
                    <span className="flex items-center rounded-2xl bg-zinc-950 p-3">
                        <SiRedis color="#FF4438" size={50} />
                    </span>
                    <span className="flex items-center rounded-2xl bg-zinc-950 p-3">
                        <SiApachekafka color="#ffffff" size={50} />
                    </span>
                    <span className="flex items-center rounded-2xl bg-zinc-950 p-3">
                        <FaAws color="#ffffff" size={50} />
                    </span>
                    <span className="flex items-center rounded-2xl bg-zinc-950 p-3">
                        <FaReact color="#61DAFB" size={50} />
                    </span>
                    <span className="flex items-center rounded-2xl bg-zinc-950 p-3">
                        <RiNextjsFill color="#dce7eb" size={50} />
                    </span>
                </div>
                <div className="md:w-[50%]">
                    {experience.map((exp, index) => (
                        <div
                            key={index}
                            className="bg-opacity-45 mt-4 flex items-center gap-10 rounded-lg bg-slate-950 p-4"
                        >
                            {/* <RiNetflixFill color="#E50914" size={50} /> */}
                            <Image
                                src={exp.img_file}
                                alt="VALT Logo"
                                width={50}
                                height={50}
                            />
                            <span className="text-white">
                                <h2 className="leading-tight">
                                    {exp.role}, {exp.company}
                                </h2>
                                <p className="text-sm leading-tight font-thin">
                                    {exp.duration}
                                </p>
                                {/* <ul className="p-2 text-sm">
                                <li>- Work as software developer.</li>
                                <li>- Senior SDE-developer</li>
                            </ul> */}
                                <Link
                                    href="https://www.linkedin.com/in/akashcsemu/"
                                    target="_blank"
                                    className="text-sm text-blue-500 underline"
                                >
                                    More Details
                                </Link>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
