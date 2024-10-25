import Image from "next/image";
import React from "react";
import ShowCard from "../ShowCard";
import { FaPaperclip } from "react-icons/fa";

const CardSection = () => {
  return (
    <div>
      <div className="relative h-96">
        <Image
          src="/img/banner/image20.png"
          fill
          alt="background"
          className="object-cover rounded-l-full rounded-r-full"
        />

        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 ">
          <ShowCard
            text={"Купи карта"}
            secondaryText={"https://example.com"}
            icon={FaPaperclip}
          />
        </div>

        <button className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 py-2 px-5 bg-orange-500 rounded-l-full rounded-r-full text-white font-medium">
          Предложи на пријател
        </button>
      </div>
    </div>
  );
};

export default CardSection;
