import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShowCard from "../ShowCard";
import { FaPaperclip } from "react-icons/fa";
import { motion } from "framer-motion";

const variantsLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const variantsRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const HomepageAbout = () => {
  return (
    <div className="flex justify-between overflow-x-hidden max-w-[80%] mx-auto mt-40">
      {/* Left Column */}
      <motion.div
        className="flex flex-col justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={variantsLeft}
        transition={{ duration: 0.8 }}
      >
        <div>
          <div className="relative w-[350px] h-[450px]">
            {/* Main Image */}
            <Image
              src={"/img/about/image2.png"}
              fill
              alt="image"
              className="rounded-t-full object-cover"
            />

            <p className="w-64 absolute top-24 right-[-140px] p-5 bg-gray-500 text-white rounded-t-lg rounded-br-lg">
              Сакаш да бидеш во тек со нас и најновите содржини што ги
              споделуваме?
            </p>
          </div>
          <h3 className="text-5xl mt-4 w-[600px] mb-8">
            Дознај повеќе за нас и нашите цели и задачи!
          </h3>
          <p className="w-[600px]">
            Нашиот огранок за коучинг е формиран 22 април 2019 година и е првата
            мрежа за професионални ментори во земјава.
          </p>
          <Link href={"/about"}>
            <button className="font-semibold bg-orange-500 text-white px-4 py-2 mt-4 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none transition duration-200">
              Повеќе за нас
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Right Column */}
      <motion.div
        className="flex justify-center relative mt-52"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={variantsRight}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-[350px] h-[450px]">
          <Image
            src={"/img/about/image1.png"}
            fill
            alt="image"
            className="rounded-b-full object-cover"
          />
          <p className="w-80 absolute top-12 left-[-200px] bg-orange-500 text-white p-5 rounded-lg">
            Претплати се на нашиот информативен билтен и никогаш повеќе не
            пропуштај важни настани и известувања
          </p>

          <div className="absolute bottom-5 left-[-100px]">
            <ShowCard
              icon={FaPaperclip}
              text={"Купи карта"}
              secondaryText={"https://example.com"}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomepageAbout;
