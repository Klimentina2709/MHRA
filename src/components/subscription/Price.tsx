import React from "react";

interface Price {
  firstPrice: number;
  secondPrice: number;
  firstText: string;
  secondText: string;
}

const Price = ({ firstPrice, secondPrice, firstText, secondText }: Price) => {
  return (
    <>
      <div className="flex w-full">
        <div className="font-medium flex-1 text-center rounded-tl-3xl border border-b-0 border-gray-300 ">
          <span className="p-5 block text-3xl">{firstText}</span>
        </div>
        <div className="font-medium flex-1 text-center rounded-tr-3xl border border-b-0 border-gray-300">
          <span className="p-5 block text-3xl">{secondText}</span>
        </div>
      </div>
      <div className="flex">
        <div className="font-medium flex-1 text-center ">
          <span className="p-5 block text-3xl">{firstPrice} МКД</span>
        </div>
        <div className="font-medium flex-1 text-center">
          <span className="p-5 block text-3xl">{secondPrice} МКД</span>
        </div>
      </div>
    </>
  );
};

export default Price;
