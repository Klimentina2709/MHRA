import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const variantsLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const variantsRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const SubscriptionDeals = () => {
  return (
    <div className="flex overflow-x-hidden  max-w-[80%] mx-auto mt-40">
      <motion.div
        className="mr-4 p-5 flex-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={variantsLeft}
        transition={{ duration: 0.8 }}
      >
        <div className="py-10 border-b border-gray-500 flex">
          <span className="text-2xl text-gray-500 font-semibold px-5">01</span>
          <div className="flex flex-col">
            <h3 className="text-3xl text-gray-700 font-semibold mb-5">
              Едукативни настани
            </h3>
            <Link href={"/events"}>
              <span className="underline text-gray-500 block mb-2">
                Прочитај повеќе
              </span>
            </Link>
          </div>
        </div>

        <div className="py-10 border-b border-gray-500 flex">
          <span className="text-2xl text-gray-500 font-semibold px-5">02</span>
          <div className="flex flex-col">
            <h3 className="text-3xl text-gray-700 font-semibold mb-5">
              {" "}
              Најнови информации и случувања
            </h3>
            <Link href={"/blogs"}>
              <span className="underline text-gray-500 block mb-2">
                Прочитај повеќе
              </span>
            </Link>
          </div>
        </div>

        <div className="py-10 border-b border-gray-500 flex">
          <span className="text-2xl text-gray-500 font-semibold px-5">03</span>
          <div className="flex flex-col">
            <h3 className="text-3xl text-gray-700 font-semibold mb-5">
              Ширење на мрежата на контакти
            </h3>
            <Link href={"/about"}>
              <span className="underline text-gray-500 block mb-2">
                Прочитај повеќе
              </span>
            </Link>
          </div>
        </div>

        <div className="py-10 border-b border-gray-500 flex">
          <span className="text-2xl text-gray-500 font-semibold px-5">04</span>
          <div>
            <h3 className="text-3xl text-gray-700 font-semibold mb-5">
              Вклучување во работењето на МАЧР
            </h3>
          </div>
        </div>

        <div className="py-10 border-b border-gray-500 flex">
          <span className="text-2xl text-gray-500 font-semibold px-5">03</span>
          <div>
            <h3 className="text-3xl text-gray-700 font-semibold mb-5">
              HR Огласи
            </h3>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="ml-4 p-5 flex-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={variantsRight}
        transition={{ duration: 0.8 }}
      >
        <h3 className="font-semibold text-5xl text-gray-700 mb-5">
          Бенефити од зачленување во МАЧР
        </h3>
        <p className="text-gray-600">
          Македонската асоцијација за човечки ресурси - МАЧР како невладино,
          непрофитно и непартиско здружение на граѓани, продолжува со
          остварување на својата мисија за промоција и унапредување на
          професијата управување со човечките ресурси, како и создавање и
          имплементирање на највисоките професионални стандарди и развој на
          човечкиот капитал во Република Македонија како единствен ентитет од
          овој вид во земјава.
        </p>
      </motion.div>
    </div>
  );
};

export default SubscriptionDeals;
