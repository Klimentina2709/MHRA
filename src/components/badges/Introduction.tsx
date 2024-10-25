import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <div className="flex max-w-[80%] mx-auto mt-40">
      <div className="relative mr-10">
        <Image
          src={"/img/about/image2.png"}
          alt="something"
          width={800}
          height={650}
          className="rounded-t-full"
          style={{ zIndex: 10, position: "relative" }}
        />

        <Image
          src={"/img/banner/back03.png"}
          width={80}
          height={80}
          alt="back"
          className="absolute -bottom-8 -right-8"
          style={{ zIndex: 1 }}
        />
      </div>

      <div className="flex flex-col justify-between">
        <p className="text-4xl font-medium">
          Биди <span className="text-orange-500">активен/на</span>, споделувај
          настани на социјаните медиуми, собирај поени, добивај значки и рамки,
          кани пријатели на настани и освојувај попусти за следната купена карта
        </p>
        <span className="text-gray-600">
          Доколку овој месец си најактивен/а во форумот добиваш награди за да го
          направиш твојот профил уникатен, а ако каниш пријатели и тие купат
          карта преку твојот линк за покана добиваш попуст на следната купена
          карта за настан.
        </span>
      </div>
    </div>
  );
};

export default Introduction;
