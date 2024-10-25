import { useState, useEffect } from "react";
import { Blog, Event, BlogsDetails, EventsDetail } from "@/types/types";
import Card from "./Card";

interface Props {
  arr: (Blog | Event)[];
  contentType: "events" | "blogs";
}

const RandomItems = ({ arr, contentType }: Props) => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {randomItems.map((item) => {
        const isEvent = (
          item: EventsDetail | BlogsDetails
        ): item is EventsDetail => (item as EventsDetail).image !== undefined;

        return (
          <div key={item.id}>
            <Card
              id={item.id}
              image={isEvent(item) ? item.image : item.img}
              mainTitle={isEvent(item) ? item.mainTitle : item.title}
              textDescription={
                isEvent(item) ? item.textDescription : item.introduction
              }
              type={isEvent(item) ? "events" : "blogs"}
            />
          </div>
        );
      })}
    </div>
  );
};

export default RandomItems;
