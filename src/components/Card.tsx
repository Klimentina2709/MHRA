import React from "react";
import Image from "next/image";
import Link from "next/link";
import { truncateText } from "@/utils/utils";

interface Props {
  id: string;
  image: string;
  mainTitle: string;
  textDescription: string;
  type: string;
}

const Card = ({ image, mainTitle, textDescription, id, type }: Props) => {
  return (
    <div className="group flex bg-white shadow-xl relative overflow-hidden rounded-b-5xl h-[300px] hover:text-center hover:ml-0">
      {/* Image */}
      <div className="flex-[4] transform group-hover:-translate-x-40 group-hover:-translate-y-40 group-hover:scale-50 group-hover:opacity-0 transition-all duration-500 ease-in-out">
        <Image
          src={image}
          alt="First Image"
          fill
          className="transition-opacity duration-500 ease-in-out object-cover rounded-bl-5xl"
        />
      </div>
      {/* Content */}
      <div className="flex-[6] flex flex-col justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-[-35%] ml-5">
        {/* Title */}
        <h5 className="text-lg font-bold mb-4">{mainTitle}</h5>

        {/* Description */}
        <p className="text-gray-600 mb-4 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
          {truncateText(textDescription, 20)}
        </p>

        {/* Link */}
        <Link href={`/${type}/${id}`} passHref>
          <span className="text-orange-500 underline cursor-pointer">
            Прочитај повеќе
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
