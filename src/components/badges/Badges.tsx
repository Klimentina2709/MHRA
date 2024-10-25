import { NextPage } from "next";
import Image from "next/image";
import React from "react";

interface BadgesProps {
  badge: string;
  badgeDescription: string;
}

const Badges = ({ badge, badgeDescription }: BadgesProps) => {
  return (
    <div className="border rounded-md border-gray-600 flex items-center mb-3">
      <Image
        src={badge}
        width={100}
        height={100}
        alt="badges for the user achievements "
        className="p-2"
      />

      <p className="text-gray-600">{badgeDescription}</p>
    </div>
  );
};

export default Badges;
