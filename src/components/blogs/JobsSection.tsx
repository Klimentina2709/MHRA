import { JobsType } from "@/types/types";
import Image from "next/image";
import React from "react";

interface Props {
  jobs: JobsType[];
}

const JobsSection = ({ jobs }: Props) => {
  return (
    <div className="relative w-80 rounded-b-full overflow-hidden h-auto">
      <Image
        src={"/img/about/image1.png"}
        fill
        alt="Jobs"
        className="object-cover brightness-50"
      />
      <div className="absolute inset-0 flex flex-col justify-evenly px-3 text-white">
        {jobs &&
          jobs.map((job, index) => (
            <div key={index}>
              <div>{job.position}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default JobsSection;
