import BannerVersion02 from "@/components/banner/BannerVersion02";
import Board from "@/components/Board";
import Breadcrumbs from "@/components/Breadcrumbs";
import HorizontalScroll from "@/components/horizontalScroll/HorizontalScroll";
import RandomItems from "@/components/RandomItems";
import Section from "@/components/Section";
import ShowCard from "@/components/ShowCard";
import CardSection from "@/components/subscription/CardSection";
import Price from "@/components/subscription/Price";
import { EventsDetail, Event, BoardType } from "@/types/types";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaFacebook, FaPaperclip } from "react-icons/fa";

interface EventDetailProps {
  event: EventsDetail | null;
  eventTheme: string;
  data: Event[];
  board: BoardType[];
}

const EventDetail: NextPage<EventDetailProps> = ({
  event,
  eventTheme,
  data,
  board,
}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!event) {
    return <div>No event found</div>;
  }

  return (
    <>
      <Head>
        <title>{`${event.mainTitle} - ${eventTheme}`}</title>
        <meta name="description" content={event.textDescription} />
        <meta
          property="og:title"
          content={`${event.mainTitle} - ${eventTheme}`}
        />
        <meta property="og:description" content={event.textDescription} />
        <meta
          property="og:image"
          content={event.image || "/default-image.png"}
        />
      </Head>
      {/*Banner*/}
      <BannerVersion02
        theme={"Настан"}
        heading={eventTheme}
        info={"| 24-25 Декември"}
      />

      {/*Horizontal scroll section*/}
      <HorizontalScroll eventsData={data} />

      <Breadcrumbs />

      <div className="max-w-[80%] mx-auto">
        <h2 className="text-4xl font-bold mb-4">{eventTheme}</h2>
        <h1 className="text-3xl text-gray-800 uppercase mb-20">
          Тема: {event.mainTitle}
        </h1>

        <div className="flex">
          <div className="flex-[7] mr-10">
            <h5 className="text-3xl mb-6">Опис:</h5>
            <p className="mb-8">{event.textDescription}</p>

            <h5 className="text-3xl mb-6">Цел:</h5>
            <p>{event.goal}</p>
          </div>
          <div className="flex-[3]">
            <div className="relative w-[300px] h-[500px]">
              <Image
                src="/img/about/image2.png"
                fill
                alt="Image"
                className="rounded-t-5xl rounded-b-5xl object-cover"
              />
              <div className="absolute bottom-8 -right-24">
                <ShowCard
                  text="Купи карта"
                  secondaryText="https://example.com"
                  icon={FaPaperclip}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="relative w-full h-24">
        <Image
          src="/img/banner/back04.png"
          fill
          alt="background"
          className="object-cover"
        />
      </div>

      <div className="flex max-w-[80%] mx-auto">
        <div className="flex-[9]">
          <h3 className="text-3xl mb-6 font-semibold">Агенда на настанот:</h3>
          <div className="border-b-2 border-orange-500 mb-8 pb-4">
            {event.date}
          </div>
          {event.schedule?.map((item, index) => (
            <div key={index} className="flex mb-4">
              {/* Time */}
              <div className="w-24">{item.time}</div>

              {/* Event Details */}
              <div>
                {/* Title */}
                <span className="font-medium">{item.title}</span>

                {/* Description */}
                {item.description && (
                  <p>
                    <span className="text-orange-400">|</span>{" "}
                    {item.description}
                  </p>
                )}

                {/* Moderator */}
                {item.moderator && (
                  <span className="before:content-['•'] before:mr-2 block">
                    <span className="text-orange-600">Модератор:</span>{" "}
                    {item.moderator}
                  </span>
                )}

                {/* Panelists */}
                {item.panelists && (
                  <span className="before:content-['•'] before:mr-2 block">
                    Панелисти: {item.panelists}
                  </span>
                )}

                {/* Presenter */}
                {item.presenter && (
                  <span className="before:content-['•'] before:mr-2 block ">
                    <span className="text-orange-600"> Презентер:</span>{" "}
                    {item.presenter}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="relative flex-[1] mr-10">
          <Image
            src="/img/background/back05.png"
            fill
            alt="background"
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative">
        <div className="flex max-w-[80%] mx-auto mt-40">
          <div className="w-1/2">
            <h3 className="font-semibold text-2xl">Говорници на настанот:</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {board?.slice(0, 3).map((el) => (
              <div key={el.id} className="">
                <Board {...el} />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute left-0 top-[6rem] w-[1000px] h-36">
          <Image
            src="/img/background/back06.png"
            fill
            alt="background"
            className="object-cover"
          />
        </div>
      </div>

      <div className="max-w-[80%] mx-auto mt-40">
        <Price
          firstPrice={500}
          secondPrice={5000}
          firstText={"Цена за поединци"}
          secondText={"Цена за компании"}
        />
        <div className="mt-20">
          <CardSection />
        </div>
      </div>

      <div className="w-full max-w-[80%] mx-auto mt-10 md:mt-20 lg:mt-40">
        <h3 className="text-3xl mb-8 md:mb-10 font-medium">Слични настани:</h3>
        <RandomItems arr={data} contentType={"events"} />
      </div>
    </>
  );
};

export default EventDetail;

export const getServerSideProps: GetServerSideProps = async ({
  params,
  locale,
}) => {
  const { id } = params!;

  const url = "http://localhost:5000";

  const res = await fetch(`${url}/allEvents`);
  const data: Event[] = await res.json();

  let foundEvent: EventsDetail | null = null;
  let eventTheme: string | null = null;

  // Loop through each event group to find the specific event and its theme
  for (const group of data) {
    const event = group.events.find((event) => event.id.toString() === id);
    if (event) {
      foundEvent = event;
      eventTheme = group.theme; // Capture the theme of the event group
      break;
    }
  }

  const boardRes = await fetch(`${url}/board`);
  const board = await boardRes.json();

  return {
    props: {
      event: foundEvent,
      eventTheme,
      data,
      board,
    },
  };
};
