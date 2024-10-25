import React, { useState } from "react";
import Speakers from "./Speakers";

const GuestsSpeakers = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };
  return (
    <div className="w-full max-w-[80%] mx-auto mt-32">
      <h3 className="text-3xl font-bold mb-10 text-center">Специјални гости</h3>
      <p className="text-center text-gray-600 mb-6">
        Ова се луѓе од кои дефинитивно има што да се научи. Нивните достигнувања
        се огромни и со нивна помош секторот на HR успеа да достигне нови
        височини. Не пропуштајте ја оваа прилика да ги слушнете, а и да научите
        нешто од нивната мудрост.
      </p>
      <div className="grid grid-cols-2 gap-16">
        <div className="flex justify-center">
          <Speakers
            profession={"CO на “Спинак”"}
            name={"Оливиа Оил"}
            verticalPosition={"bottom-16"}
            horizontalPosition={"-right-28"}
            classRounded={"rounded-t-full"}
          />
        </div>
        <div className="flex justify-center">
          <Speakers
            profession={"HR менаџер"}
            name={"Марија Јовановска"}
            verticalPosition={"top-10"}
            horizontalPosition={"-left-48"}
            classRounded={"rounded-t-full"}
          />
        </div>
        <div className="flex justify-center">
          <Speakers
            profession={"Консултант"}
            name={"Џејмс Суливан"}
            verticalPosition={"top-5"}
            horizontalPosition={"-right-32"}
            classRounded={"rounded-b-full"}
          />
        </div>
        <div className="flex justify-center">
          <Speakers
            profession={"Консултант за развој"}
            name={"Елена Тодорова"}
            verticalPosition={"top-5"}
            horizontalPosition={"-left-48"}
            classRounded={"rounded-b-full"}
          />
        </div>

        {showAll && (
          <>
            <div className="flex justify-center">
              <Speakers
                profession={"Аналитичар"}
                name={"Милан Стојановски"}
                verticalPosition={"top-5"}
                horizontalPosition={"-right-44"}
                classRounded={"rounded-t-full"}
              />
            </div>
            <div className="flex justify-center">
              <Speakers
                profession={"Психолог и тренер"}
                name={"Елена Тодорова"}
                verticalPosition={"top-10"}
                horizontalPosition={"-left-48"}
                classRounded={"rounded-t-full"}
              />
            </div>
          </>
        )}
      </div>

      <button
        onClick={handleShowMore}
        className="mt-20 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none transition duration-200 mx-auto block"
      >
        {showAll ? "Сокриј ги" : "Види ги сите"}
      </button>
    </div>
  );
};

export default GuestsSpeakers;
