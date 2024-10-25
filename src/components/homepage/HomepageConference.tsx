import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import ShowCard from "../ShowCard";
import { FaFacebook } from "react-icons/fa";

const variantsLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const variantsRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const HomepageConference = () => {
  return (
    <div className="flex h-[600px] overflow-x-hidden  max-w-[80%] mx-auto mt-40">
      {/* Left column */}
      <motion.div
        className="flex-1 flex flex-col justify-between p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={variantsLeft}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h3 className="font-semibold text-5xl text-gray-700 mb-10">
            Најголемиот HR настан на нашите простори - Годишната HR конференција
            на МАЧР
          </h3>
          <p className="text-gray-600 mb-5">
            Меѓународна размена на искуства во полето на човечки ресурси и
            константно движење во чекор со светските трендови.
          </p>
        </div>
        <div className="flex items-center relative">
          <Image
            src={"/img/about/board/img1.png"}
            width={50}
            height={50}
            alt="Author"
            className="rounded-full mr-5"
          />
          <div className="flex flex-col">
            <span className="font-medium">м-р Дарко Петровски</span>
            <span className="text-gray-600 text-sm">Претседател на МАЧР</span>
          </div>
        </div>
      </motion.div>

      {/* Right column*/}
      <motion.div
        className="flex-1 flex items-center justify-center relative p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={variantsRight}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full h-full max-w-[300px]">
          {/* Main Image */}
          <Image
            src={"/img/about/image1.png"}
            fill
            alt="image"
            className="rounded-t-5xl rounded-b-5xl object-cover w-full h-full"
          />
          <div className="absolute top-10 -left-12">
            <div className="absolute -inset-8 w-[170px] h-[170px] rounded-full border border-gray-400"></div>
            <Image
              src={"/img/about/image2.png"}
              width={100}
              height={100}
              alt="small image"
              className="rounded-full object-cover"
            />
          </div>

          <div className="absolute bottom-10 -right-20">
            <ShowCard
              icon={FaFacebook}
              text={"Купи карта"}
              secondaryText={"линк"}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomepageConference;
