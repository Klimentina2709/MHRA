import Image from "next/image";
import React from "react";
import ShowCard from "../ShowCard";
import { FaLinkedin } from "react-icons/fa";

interface SpeakersProps {
  classRounded: string;
  profession: string;
  name: string;
  horizontalPosition: string;
  verticalPosition: string;
}

const Speakers = ({
  classRounded,
  name,
  profession,
  horizontalPosition,
  verticalPosition,
}: SpeakersProps) => {
  return (
    <div className="relative w-[300px] h-[300px]">
      <Image
        src={"/img/about/image4.png"}
        fill
        alt="image"
        className={`${classRounded} object-cover`}
      />

      <div className={`absolute ${verticalPosition} ${horizontalPosition}`}>
        <ShowCard text={name} secondaryText={profession} icon={FaLinkedin} />
      </div>
    </div>
  );
};

export default Speakers;
