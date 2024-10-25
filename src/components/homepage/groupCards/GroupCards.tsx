import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CardsOfTwo from "./CardsOfTwo";
import Text from "./Text";
import { SingleImage } from "./SingleImage";

const GroupCards = () => {
  const cardsControls = useAnimation();
  const textControls = useAnimation();
  const imageControls = useAnimation();

  const { ref: cardsRef, inView: cardsInView } = useInView();
  const { ref: textRef, inView: textInView } = useInView();
  const { ref: imageRef, inView: imageInView } = useInView();

  useEffect(() => {
    if (cardsInView) {
      cardsControls.start({ x: 0, opacity: 1 });
    }
  }, [cardsInView, cardsControls]);

  useEffect(() => {
    if (textInView) {
      textControls.start({ x: 0, opacity: 1 });
    }
  }, [textInView, textControls]);

  useEffect(() => {
    if (imageInView) {
      imageControls.start({ x: 0, opacity: 1 });
    }
  }, [imageInView, imageControls]);

  return (
    <div className="flex relative max-w-[80%] mx-auto mt-40">
      <motion.div
        ref={cardsRef}
        initial={{ x: -100, opacity: 0 }}
        animate={cardsControls}
        transition={{ duration: 0.8 }}
      >
        <CardsOfTwo />
      </motion.div>

      <div className="absolute right-64 top-10">
        <motion.div
          ref={textRef}
          initial={{ x: 100, opacity: 0 }}
          animate={textControls}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Text />
        </motion.div>
        <div className="absolute -right-36 top-60">
          <motion.div
            ref={imageRef}
            initial={{ x: 100, opacity: 0 }}
            animate={imageControls}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <SingleImage />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GroupCards;
