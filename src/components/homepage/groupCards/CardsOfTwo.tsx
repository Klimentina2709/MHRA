import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import NotificationLink from "../../NotificationLink";

const CardsOfTwo: NextPage = () => {
  return (
    <div className="relative">
      {/* First Image */}
      <div>
        <Image
          src={"/img/banner/image2.png"}
          height={150}
          width={300}
          alt="image"
          className="rounded-t-full"
        />
      </div>

      <div className="absolute text-center z-10 top-72 left-40 bg-white rounded-md">
        <NotificationLink
          text={"Упати се уште сега кон"}
          buttonText={"Нашиот Блог"}
        />
      </div>

      {/* Second Image */}
      <div>
        <Image
          src={"/img/banner/image2.png"}
          height={100}
          width={450}
          alt="image"
          className="rounded-b-full ml-72"
        />
      </div>
    </div>
  );
};

export default CardsOfTwo;
