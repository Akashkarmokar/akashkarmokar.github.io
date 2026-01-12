import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
    title = "",
    main = "",
    image_path = "",
    more_details_link = "",
    demo_link = "",
    source_code_link = "",
}) => {
    return (
        <div className="flex w-80 flex-col items-center justify-between rounded-2xl bg-[#0c0e19] p-3 shadow-xl shadow-slate-900 md:p-6">
            <Image
                className="min-h-[200px] p-4"
                src={image_path ? image_path : "/photo-C8q0KQHG.webp"}
                alt=""
                width={320}
                height={180}
            />
            <h3 className="px-4 text-xl leading-normal font-bold md:text-2xl">
                {title}
            </h3>
            <p className="md:text-md px-4 py-2 text-sm leading-tight">{main}</p>
            {more_details_link && (
                <Link
                    href={more_details_link}
                    target="_blank"
                    className="md:text-md px-4 py-2 text-sm leading-tight text-blue-500 underline"
                >
                    {" "}
                    Details About Project&apos;s Base
                </Link>
            )}
            <div className="mt-2 flex gap-2 p-2 md:gap-4 md:p-4">
                {demo_link && (
                    <button className="rounded-3xl bg-[#465697] px-3 py-2 text-sm font-semibold text-white duration-300 hover:scale-105 hover:opacity-85 md:mt-10 md:px-4 md:py-2 md:text-lg">
                        Demo
                    </button>
                )}
                {source_code_link && (
                    <Link href={source_code_link} target="_blank">
                        <button className="rounded-3xl bg-[#465697] px-3 py-2 text-sm font-semibold text-white duration-300 hover:scale-105 hover:opacity-85 md:mt-10 md:px-4 md:py-2 md:text-lg">
                            Source Code
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
