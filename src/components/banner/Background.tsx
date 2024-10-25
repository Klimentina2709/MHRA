import Image from "next/image";
import SocialMedia from "./SocialMedia";
import { motion } from "framer-motion";

const slideVariants = {
  hidden: { x: "20vw", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

const Background = () => {
  return (
    <div className="relative sm:h-[60vh] md:h-[70vh] lg:h-[85vh] overflow-hidden">
      <div className="absolute inset-0 ">
        <Image
          src="/img/banner/bannerBackground1.png"
          fill
          alt="Background"
          className="object-cover"
        />
      </div>
      <div className="absolute top-0 right-[3%] sm:right-[5%] md:right-[7%] lg:right-[10%]">
        <Image
          src="/img/banner/image1.png"
          height={800}
          width={500}
          alt="Top Image 1"
          className="rounded-b-full object-cover h-[200px] sm:h-[250px] md:h-[300px] lg:h-[450px] w-[300px] sm:w-[400px] md:w-[450px] lg:w-[750px]"
        />
      </div>
      <div className="absolute top-0 left-[3%] sm:left-[5%] md:left-[7%] lg:left-[10%]">
        <Image
          src="/img/banner/image2.png"
          height={800}
          width={500}
          alt="Top Image 2"
          className="rounded-b-full object-cover h-[200px] sm:h-[250px] md:h-[300px] lg:h-[600px] w-[150px] sm:w-[150px] md:w-[200px] lg:w-[300px]"
        />
      </div>

      <motion.div
        className="absolute bottom-0 right-0 p-4"
        initial="hidden"
        animate="visible"
        variants={slideVariants}
      >
        <SocialMedia />
      </motion.div>
    </div>
  );
};

export default Background;
