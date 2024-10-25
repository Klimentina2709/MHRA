import React from "react";
import Card from "../Card";
import { Blog, Event } from "@/types/types";
import HorizontalScrollCard from "../horizontalScroll/HorizontalScrollCard";
import { truncateText } from "@/utils/utils";

interface Props {
  blogsData: Blog[];
  eventsData: Event[];
  showCardFirst?: boolean;
  randomIndexBlog: number;
  randomIndexEvent: number;
}

const CardBlog = ({
  blogsData,
  eventsData,
  showCardFirst = true,
  randomIndexBlog,
  randomIndexEvent,
}: Props) => {
  const blog = blogsData[randomIndexBlog]?.blogs[randomIndexBlog];
  const event = eventsData[randomIndexEvent]?.events[randomIndexEvent];

  return (
    <div className="flex">
      {showCardFirst ? (
        <div className="flex">
          <div className="w-full mr-16">
            {blog && (
              <Card
                key={blog.id}
                id={blog.id}
                image={blog.img}
                mainTitle={blog.title}
                textDescription={blog.introduction}
                type={"blogs"}
              />
            )}
          </div>
          {event && (
            <HorizontalScrollCard
              key={event.id}
              id={event.id}
              firstText="Предложен настан"
              imageSrc={event.image}
              month="December"
              day={15}
              theme={eventsData[randomIndexEvent]?.theme}
              title={truncateText(event.mainTitle, 3)}
              lastText="Прочитај повеќе"
            />
          )}
        </div>
      ) : (
        <div className="flex">
          <div className="mr-16">
            {event && (
              <HorizontalScrollCard
                key={event.id}
                id={event.id}
                firstText="Предложен настан"
                imageSrc={event.image}
                month="January"
                day={25}
                theme={eventsData[randomIndexEvent]?.theme}
                title={truncateText(event.mainTitle, 3)}
                lastText="Прочитај повеќе"
              />
            )}
          </div>
          <div className="w-full">
            {blog && (
              <Card
                key={blog.id}
                id={blog.id}
                image={blog.img}
                mainTitle={blog.title}
                textDescription={blog.introduction}
                type={"blogs"}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardBlog;
