import Image from "next/image";
import React from "react";

const Confessions = () => {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-[80%] mx-auto mt-40">
      <div className="relative flex items-center justify-center mb-6 md:mb-0 md:mr-6">
        {/* Floating Circle */}
        <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-gray-400"></div>

        {/* Main Image */}
        <Image
          src={"/img/about/image2.png"}
          width={800}
          height={800}
          alt="image"
          className="rounded-full"
        />

        <div className="absolute top-3 -left-12">
          <Image
            src={"/img/icons/dots.png"}
            width={100}
            height={100}
            alt="The image decoration"
          />
        </div>

        {/* Decoration */}
        <div className="absolute -left-16 top-32">
          <Image
            src={"/img/background/back08.png"}
            width={80}
            height={80}
            alt="decoration dots"
          />
        </div>
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-orange-500 text-3xl font-bold">Mајк Вазауски</h3>
        <span className="text-gray-500">CEO на “Монстер Инк”</span>
        <p className="text-gray-600 mt-4">
          Придружете се на нас за оваа исклучителна прилика да бидете дел од
          глобалната HR заедница и да придонесете за создавање на организации
          кои се подготвени за иднината преку проактивни HR стратегии.
          Конференцијата е дизајнирана да обезбеди инспирација, знаење и мрежни
          можности кои ќе им помогнат на HR професионалците да бидат подготвени
          за иднината.
        </p>
      </div>
    </div>
  );
};

export default Confessions;
