import React from "react";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
  first: boolean;
}

const Benefits = ({ children, first }: Props) => {
  return (
    <>
      {first ? (
        <div className="flex justify-between">
          <div>
            <Image
              src="/img/banner/image1.png"
              width={600}
              height={300}
              alt="picture"
              className="rounded-t-full"
            />
          </div>
          <div>{children}</div>
        </div>
      ) : (
        <div className="flex justify-between">
          <div>{children}</div>
          <div>
            <Image
              src="/img/banner/image1.png"
              width={600}
              height={300}
              alt="picture"
              className="rounded-b-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Benefits;
