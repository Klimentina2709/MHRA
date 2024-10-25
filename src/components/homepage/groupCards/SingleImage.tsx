import Image from "next/image";
import React from "react";

export const SingleImage = () => {
  return (
    <>
      <Image
        src={"/img/banner/image2.png"}
        width={350}
        height={200}
        alt="image"
        className="rounded-t-full"
      />
    </>
  );
};
