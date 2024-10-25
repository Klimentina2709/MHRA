import { NextPage } from "next";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Section: NextPage<Props> = ({ children }) => {
  return <div className="flex">{children}</div>;
};

export default Section;
