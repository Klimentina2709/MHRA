import React from "react";

interface PacksProps {
  title: string;
  price: number;
  children: React.ReactNode;
}

const Packs = ({ title, price, children }: PacksProps) => {
  return (
    <div className="rounded-t-5xl rounded-b-5xl shadow-xl inline-flex flex-col items-center h-[450px] w-[250px] py-10 px-16">
      <h3 className="text-2xl text-orange-500 mb-2 font-bold">{title}</h3>
      <span className="text-xl font-semibold mb-10">
        {price}
        {""} ден
      </span>

      <ul className="list-disc flex-grow">{children}</ul>

      <button className="mb-10 mt-auto whitespace-nowrap bg-orange-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none transition duration-200">
        Купи карта
      </button>
    </div>
  );
};

export default Packs;
