import Image from "next/image";
import React from "react";

interface Props {
  text: string;
}

const SingleEventStructure = ({ text }: Props) => {
  return (
    <div className="flex items-center mr-28">
      <div className="mr-10">{text}</div>
      <Image
        src="/img/banner/image2.png"
        alt="image"
        width={400}
        height={600}
        className=" rounded-b-full"
      />
    </div>
  );
};

export default SingleEventStructure;
