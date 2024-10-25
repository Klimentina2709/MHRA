import Image from "next/image";
import React from "react";

const Points = () => {
  return (
    <div className="rounded-3xl shadow-lg p-5">
      <h5 className="font-semibold text-xl mb-4">Поени до следна рамка</h5>
      <div className="flex justify-evenly">
        <Image
          src={"/img/dashboard/badge1.png"}
          width={100}
          height={100}
          alt="Badge for the user"
        />
        <Image
          src={"/img/dashboard/badge2.png"}
          width={100}
          height={100}
          alt="Badge for the user"
        />
        <Image
          src={"/img/dashboard/badge3.png"}
          width={100}
          height={100}
          alt="Badge for the user"
        />
      </div>
    </div>
  );
};

export default Points;
