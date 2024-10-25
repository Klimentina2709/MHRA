import React from "react";
import HorizontalScrollCard from "./HorizontalScrollCard";
import { Event } from "@/types/types";
import Image from "next/image";
import { truncateText } from "@/utils/utils";

interface Props {
  eventsData: Event[];
}

const HorizontalScroll = ({ eventsData }: Props) => {
  return (
    <div className="relative p-5 flex whitespace-nowrap h-72 overflow-hidden">
      <Image src={"/img/banner/back01.png"} fill alt="image back" />

      <div className="flex items-center space-x-5 animate-scroll">
        {eventsData?.map((event) =>
          event.events.map((item, index) => (
            <div key={index}>
              <HorizontalScrollCard
                imageSrc={item.image}
                month={"Month name"}
                day={100}
                theme={event.theme}
                title={truncateText(item.mainTitle, 3)}
                id={item.id}
              />
            </div>
          ))
        )}
        {eventsData?.map((event) =>
          event.events.map((item, index) => (
            <div key={index}>
              <HorizontalScrollCard
                imageSrc={item.image}
                month={"Month.name"}
                day={100}
                theme={event.theme}
                title={truncateText(item.mainTitle, 3)}
                id={item.id}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HorizontalScroll;
