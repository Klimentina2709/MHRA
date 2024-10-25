import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Card from "./Card";
import { Blog, Event, BlogsDetails, EventsDetail } from "@/types/types";

interface Props {
  arr: (Blog | Event)[];
  contentType: "events" | "blogs";
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const AnimatedCard: React.FC<{ item: EventsDetail | BlogsDetails }> = ({
  item,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isEvent = (item: EventsDetail | BlogsDetails): item is EventsDetail =>
    (item as EventsDetail).textDescription !== undefined;

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6 }}
    >
      <Card
        id={item.id}
        image={isEvent(item) ? item.image : item.img}
        mainTitle={isEvent(item) ? item.mainTitle : item.title}
        textDescription={
          isEvent(item) ? item.textDescription : item.introduction
        }
        type={isEvent(item) ? "events" : "blogs"}
      />
    </motion.div>
  );
};

const CardAnimation: React.FC<Props> = ({ arr, contentType }) => {
  const [randomItems, setRandomItems] = useState<
    (EventsDetail | BlogsDetails)[]
  >([]);

  useEffect(() => {
    let allItemsDetails: (EventsDetail | BlogsDetails)[] = [];

    if (contentType === "events") {
      allItemsDetails = arr.flatMap((item) => (item as Event).events);
    } else if (contentType === "blogs") {
      allItemsDetails = arr.flatMap((item) => (item as Blog).blogs);
    }

    const shuffledItems = allItemsDetails
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
    setRandomItems(shuffledItems);
  }, [arr, contentType]);

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {randomItems.map((item) => (
        <AnimatedCard key={item.id} item={item} />
      ))}
    </motion.div>
  );
};

export default CardAnimation;
