import { NextPage } from "next";
import Image from "next/image";
import React from "react";

export const Double: NextPage = () => {
  return (
    <div>
      <div>
        <Image
          src={"/img/banner/image2.png"}
          height={100}
          width={300}
          alt="image"
          className="rounded-t-full ml-60"
        />
      </div>

      <div>
        <Image
          src={"/img/banner/image2.png"}
          height={100}
          width={400}
          alt="image"
          className="rounded-b-full"
        />
      </div>
    </div>
  );
};
