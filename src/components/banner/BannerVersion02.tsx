import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import SocialMedia from "./SocialMedia";

interface BannerType {
  theme: string;
  heading: string;
  info: string;
}

const Banner02 = ({ theme, heading, info }: BannerType) => {
  return (
    <div className="relative sm:h-[60vh] md:h-[70vh] lg:h-[85vh] overflow-hidden mt-20">
      <div className="absolute inset-0">
        <Image
          src="/img/banner/bannerBackground1.png"
          fill
          alt="Background"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 top-0 bottom-0 left-5 right-5 ">
        <Image
          src="/img/banner/banner02.png"
          fill
          alt="Top Image 2"
          className=" rounded-l-full  rounded-r-full"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-start justify-center left-52 text-white">
        <span className="text-gray-100">{theme}</span>
        <h4 className="text-4xl font-bold">{heading}</h4>
        <span className="text-gray-100 mt-5">{info}</span>
      </div>

      <SocialMedia />
    </div>
  );
};

export default Banner02;
