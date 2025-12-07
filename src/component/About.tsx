import React from "react";
import { ArrowRight } from "lucide-react";

const About = () => {
    return (
        <div
            id="About"
            className="bg-opacity-30 mx-0 items-center overflow-hidden rounded-lg bg-black p-12 text-white shadow-xl md:mx-20 md:flex md:flex-wrap md:justify-start"
        >
            <div className="w-full">
                <h2 className="text-2xl font-bold md:text-4xl">About</h2>
                <div className="flex-col flex-wrap items-center md:flex md:flex-row md:justify-center md:gap-40">
                    <img
                        className="md:h-80"
                        src="./about.png"
                        alt="About img"
                    />

                    <ul>
                        <div className="flex gap-3 py-4">
                            <ArrowRight size={30} className="mt-1" />
                            <span className="w-96">
                                <h1 className="text-xl leading-normal font-semibold md:text-2xl">
                                    Cloud & DevOps Specialist
                                </h1>
                                <p className="md:text-md text-sm leading-tight">
                                    I have hands-on experience deploying,
                                    managing, and securing applications on AWS.
                                    I focus on designing scalable architectures,
                                    optimizing cloud costs, and implementing
                                    CI/CD pipelines. I work with core AWS
                                    services and follow best practices for cloud
                                    reliability and automation.
                                </p>
                                <hr className="my-2" />
                                <p>
                                    Skills: AWS EC2, S3, CloudFront, RDS,
                                    Lambda, API Gateway, IAM, VPC, CloudWatch,
                                    ECS/ECR, Route53 Terraform
                                    (beginner/learning), Docker, GitHub Actions,
                                    CI/CD pipelines.
                                </p>
                                <hr className="my-2" />
                                <p>
                                    Strong Areas: Scalable architecture,
                                    automation, containerization, monitoring,
                                    cost optimization.
                                </p>
                            </span>
                        </div>
                        <div className="flex gap-3 py-4">
                            <ArrowRight size={30} className="mt-1" />

                            <span className="w-96">
                                <h1 className="text-xl leading-normal font-semibold md:text-2xl">
                                    Backend development
                                </h1>
                                <p className="md:text-md text-sm leading-tight">
                                    I build robust and scalable backend systems
                                    using Node.js, Express.js, and Golang. I
                                    focus on writing clean, secure, and
                                    high-performance server-side logic. I’ve
                                    developed RESTful APIs, authentication
                                    systems, background workers, and
                                    microservices used in production apps,
                                    including food delivery and ride-sharing
                                    style platforms.
                                </p>
                                <hr className="my-2" />
                                <p>
                                    Skills: FastAPI, ExpressJS, Golang,
                                    PostgreSQL, MongoDB, Redis, Kafka.
                                </p>
                                <hr className="my-2" />
                                <p>
                                    Strong Areas: API design, authentication
                                    (JWT/OAuth), background jobs, system
                                    scalability, microservices, Design Pattern.
                                </p>
                            </span>
                        </div>
                        <div className="flex gap-3 py-4">
                            <ArrowRight size={30} className="mt-1" />

                            <span className="w-96">
                                <h1 className="text-xl leading-normal font-semibold md:text-2xl">
                                    Frontend development
                                </h1>
                                <p className="md:text-md text-sm leading-tight">
                                    I am focus on performance optimization,
                                    clean UI design, and creating smooth user
                                    experiences. I’ve worked on dashboards,
                                    admin panels, and real-time applications
                                    where frontend performance and scalability
                                    were essential.
                                    <br />I have experience in building
                                    responsive, user-friendly interfaces.
                                </p>
                                <hr className="my-2" />
                                <p>
                                    Skills: React.js, Next.js, Tailwind CSS,
                                    Redux, RTK-Query.
                                </p>
                            </span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
