import React from "react";
import Background from "./Background";
import Newest from "./Newest";
import { motion } from "framer-motion";

interface Props {
  theme?: string;
  title: string;
  paragraph: string;
  author?: string;
  showFirstStructure: boolean;
  buttonText?: string;
  date?: string;
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const Banner = ({
  theme,
  title,
  paragraph,
  author,
  showFirstStructure,
  buttonText = "Прочитај повеќе",
  date,
}: Props) => {
  return (
    <div className="mt-20">
      <Background />
      {showFirstStructure ? (
        <Newest>
          <motion.div
            className="relative"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <span className="text-gray-900 block">{theme}</span>
            <h3 className="text-4xl font-bold">{title}</h3>
            <p className="mt-4 pb-4">{paragraph}</p>
            <span>{author}</span>
            <span>{date}</span>
            <motion.button
              className="absolute bottom-[-35px] right-1 bg-orange-500 text-white rounded-full px-4 py-2"
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
            >
              {buttonText}
            </motion.button>
          </motion.div>
        </Newest>
      ) : (
        <Newest>
          <motion.div
            className="relative"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <h1 className="font-bold text-4xl mb-4">{theme}</h1>
            <h3>{title}</h3>
            <div className="absolute bottom-[-90px] right-1">
              <motion.div
                className="shadow-lg py-1 px-4 rounded-full bg-white flex items-center"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {paragraph}
                <motion.button
                  className="bg-orange-500 text-white rounded-full px-4 py-3 ml-2 shadow-lg"
                  initial="hidden"
                  animate="visible"
                  variants={buttonVariants}
                >
                  {buttonText}
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </Newest>
      )}
    </div>
  );
};

export default Banner;
