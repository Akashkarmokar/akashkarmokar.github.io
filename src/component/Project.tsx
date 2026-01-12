import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div id="Projects" className="p-10 text-white md:p-24">
            <h1 className="text-2xl font-bold text-white md:text-4xl">
                Projects
            </h1>
            <div className="flex flex-wrap justify-center gap-5 px-8 py-12">
                <ProjectCard
                    title="The Cloud Resume Challenge - AWS"
                    main="Successfully completed the Cloud Resume Challenge – a full-stack, cloud-based project designed to demonstrate real-world experience with modern DevOps and cloud technologies."
                    image_path={"./multicloud-bundle.gif"}
                    more_details_link="https://cloudresumechallenge.dev/"
                    source_code_link="https://github.com/Akashkarmokar/Cloud-Resume-Challenge"
                />
                <ProjectCard
                    title="OT-Labeler"
                    main="Custom github action to change the label of pull request on your repository."
                    image_path={"./github-action.webp"}
                    more_details_link="https://github.com/features/actions"
                    source_code_link="https://github.com/Akashkarmokar/OT-Labeler"
                />
                <ProjectCard
                    title="URL Shortener "
                    main="A web application that converts long URLs into short, shareable links. Users should be able to create shortened URLs, track their performance, and manage their links through a dashboard."
                    image_path={"./url-shortener.png"}
                    more_details_link=""
                    source_code_link="https://github.com/Akashkarmokar/URL_Shortner_FullStack"
                />
            </div>
        </div>
    );
};

export default Projects;
