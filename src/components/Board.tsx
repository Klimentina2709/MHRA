import { BoardType } from "@/types/types";
import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Board = ({ image, name, profession }: BoardType) => {
  return (
    <div className="flex flex-col items-center justify-between rounded-b-5xl shadow-lg py-6 min-h-[350px] ">
      <div>
        <Image
          src={image}
          alt={name}
          width={150}
          height={200}
          className="rounded-b-full mb-3"
        />
      </div>
      <div className="text-center mb-3">
        <span className="font-bold px-4 text-orange-500">{name}</span>
        <p className=" text-gray-600 mt-2 px-4">{profession}</p>
      </div>
      <div className="flex my-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size={20} className="mr-2 text-blue-950" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={20} className="mr-2 text-blue-950" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={20} className="mr-2 text-blue-950" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={20} className="text-blue-950" />
        </a>
      </div>
    </div>
  );
};

export default Board;
