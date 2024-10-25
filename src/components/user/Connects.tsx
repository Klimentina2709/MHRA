import Image from "next/image";
import React from "react";

interface ConnectsProps {
  userImg: string;
  userName: string;
}

const Connects = ({ userImg, userName }: ConnectsProps) => {
  return (
    <div className="flex flex-col items-center ">
      <Image
        src={userImg}
        width={100}
        height={100}
        alt="Connects that the user has "
        className="p-2"
      />

      <p className="text-gray-600">{userName}</p>
    </div>
  );
};

export default Connects;
