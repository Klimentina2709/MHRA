import { NextPage } from "next";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Newest = ({ children }: Props) => {
  return (
    <div className="absolute bg-white rounded-lg left-[20%] top-[30%] p-5 shadow-lg max-w-[40%]">
      {children}
    </div>
  );
};

export default Newest;
