import React from "react";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import ShowCard from "../ShowCard";
import Image from "next/image";
import { FaPaperclip } from "react-icons/fa6";

const IntroductionLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[80%] mx-auto my-40">
      <div className="flex-1">
        <h2 className="text-5xl font-bold mb-10">
          13та меѓународна МАЧР конференција
        </h2>

        <div className="flex mb-5">
          <div className="flex items-center mr-4">
            <FaClock className="mr-2 text-gray-500" />
            <span className="text-gray-500">24-25 Декември, 2024</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-gray-500" />
            <span className="text-gray-500">Хотел Континентал, Скопје</span>
          </div>
        </div>

        <p className="mb-10">
          Годишната меѓународна HR конференција, организирана од страна на
          Македонска асоцијација за човечки ресурси, има за цел да ги истражи и
          презентира најновите трендови и практики во областа на човечките
          ресурси кои ќе им помогнат на организациите да станат "future fit".
          Оваа конференција ќе ги собере најдобрите умови и лидери во HR за да
          дискутираат и разменат идеи за проактивни стратегии кои можат да ја
          трансформираат работната сила и да ја унапредат организациската
          ефикасност.
        </p>

        <div className="inline-flex">
          <ShowCard
            text={"Kупи карта"}
            secondaryText={"https://example.com"}
            icon={FaPaperclip}
          />
        </div>
      </div>

      <div className="relative flex-1">
        <div className="relative w-full h-full max-w-[300px] mx-auto">
          {/* Main Image */}
          <Image
            src={"/img/about/image2.png"}
            fill
            alt="image"
            className="rounded-t-full object-cover"
          />

          {/* Decoration */}
          <div className="absolute -left-16 top-10">
            <Image
              src={"/img/background/back08.png"}
              width={100}
              height={100}
              alt="decoration dots"
            />
          </div>

          {/* Top Floating Image  */}
          <div className="absolute top-5 -right-5">
            <div className="relative">
              <div className="absolute -inset-10 w-[200px] h-[200px] rounded-full border border-gray-400"></div>
              <Image
                src={"/img/about/image2.png"}
                width={100}
                height={100}
                alt="Circled image top"
                className="rounded-full object-cover"
              />
            </div>
          </div>

          {/* Bottom Floating Image*/}
          <div className="absolute -bottom-5 -left-5">
            <div className="relative">
              <div className="absolute -inset-6 w-[150px] h-[150px] rounded-full border border-gray-400"></div>
              <Image
                src={"/img/about/image2.png"}
                width={100}
                height={100}
                alt="Circled image bottom"
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionLayout;
