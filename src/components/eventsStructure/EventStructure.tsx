import Image from "next/image";
import React from "react";

interface Props {
  arr: string[];
}

const EventStructure = ({ arr }: Props) => {
  return (
    <div className="flex items-baseline">
      <div className="flex items-center mr-20">
        <Image
          src="/img/banner/image2.png"
          alt="image"
          width={350}
          height={600}
          className=" rounded-t-full"
        />

        <div className="ml-20">
          <h3>Настанот ќе вклучува:</h3>
          <ul className="list-disc pl-5">
            {arr.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <Image
        src="/img/banner/image2.png"
        alt="image"
        width={300}
        height={400}
        className=" rounded-t-full"
      />
    </div>
  );
};

export default EventStructure;
