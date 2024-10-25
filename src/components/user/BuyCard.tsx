import { BuyCardType } from "@/types/types";
import Image from "next/image";
import React from "react";

const BuyCard = ({ cardDescription }: BuyCardType) => {
  return (
    <div className="shadow-lg rounded-md flex items-center mb-3">
      <Image
        src={"/img/dashboard/card.png"}
        width={100}
        height={100}
        alt="badges for the user achievements "
        className="p-2"
      />

      <div className="flex flex-col ml-5">
        <p className="text-gray-800">{cardDescription}</p>
        <p className="text-gray-600">Вашата купена карта</p>
      </div>
    </div>
  );
};

export default BuyCard;
