import BannerVersion02 from "@/components/banner/BannerVersion02";
import Breadcrumbs from "@/components/Breadcrumbs";
import Announcement from "@/components/conference/Announcement";
import Confessions from "@/components/conference/Confessions";
import GuestsSpeakers from "@/components/conference/GuestsSpeakers";
import IntroductionLayout from "@/components/conference/IntroductionLayout";
import HorizontalScroll from "@/components/horizontalScroll/HorizontalScroll";
import RandomItems from "@/components/RandomItems";
import Packs from "@/components/subscription/Packs";
import { Event, ConferenceType, Blog } from "@/types/types";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  eventsData: Event[];
  conference: ConferenceType[];
  blogsData: Blog[];
}

const Conference: NextPage<Props> = ({ eventsData, conference, blogsData }) => {
  const [selectedDay, setSelectedDay] = useState("conference_1");

  const handleDayClick = (dayId: string) => {
    setSelectedDay(dayId);
  };

  return (
    <>
      <Head>
        <title>
          13та Меѓународна МАЧР конференција | Македонска Асоцијација за човечки
          ресурси
        </title>
        <meta
          name="description"
          content="Приклучете се на 13тата Меѓународна МАЧР конференција на 24-25 Декември."
        />
        <meta
          name="keywords"
          content="конференција, човечки ресурси, Македонија"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      {/*Banner*/}
      <BannerVersion02
        theme={"Настан"}
        heading={"13та Меѓународна МАЧР конференција"}
        info={"| 24-25 Декември"}
      />

      {/*Horizontal Scroll*/}
      <HorizontalScroll eventsData={eventsData} />

      {/*Breadcrumb*/}
      <Breadcrumbs />

      {/*Introduction*/}
      <IntroductionLayout />

      {/*Announcement*/}
      <div className="py-10">
        <Announcement />
      </div>
      <div className="relative w-full h-40">
        <Image src={"/img/background/back12.png"} fill alt="background" />
      </div>

      {/*Guests*/}
      <GuestsSpeakers />

      <div className="relative w-full h-40 mt-40">
        <Image src={"/img/background/back12.png"} fill alt="background" />
      </div>

      {/*Conference Agenda*/}
      <div className="w-full max-w-[80%] mx-auto mt-40">
        <h3 className="text-3xl font-bold mb-10 text-center">
          Агенда на конференцијата
        </h3>

        <div className="border-b-2 border-b-orange-500 py-3 flex space-x-5 mb-10">
          <span
            className={`cursor-pointer ${
              selectedDay === "conference_1" ? "font-bold text-orange-500" : ""
            }`}
            onClick={() => handleDayClick("conference_1")}
          >
            Ден 1
          </span>
          <span
            className={`cursor-pointer ${
              selectedDay === "conference_2" ? "font-bold text-orange-500" : ""
            }`}
            onClick={() => handleDayClick("conference_2")}
          >
            Ден 2
          </span>
        </div>

        {conference?.map((conferenceDay) => {
          if (conferenceDay.id === selectedDay) {
            return (
              <div key={conferenceDay.id}>
                {conferenceDay.conferenceEvents?.map((event, index) => (
                  <div key={index} className="flex mb-4">
                    {/* Time */}
                    <span className="w-24">{event.time}</span>

                    {/* Conference Events */}
                    <div className="flex-1">
                      {/* Title */}
                      <span className="font-medium">{event.title}</span>

                      {/* Description */}
                      {event.description && (
                        <p>
                          <span className="text-orange-400">|</span>{" "}
                          {event.description}
                        </p>
                      )}

                      {/* Moderator */}
                      {event.moderator && (
                        <span className="before:content-['•'] before:mr-2 block">
                          <span className="text-orange-600">Модератор:</span>{" "}
                          {event.moderator}
                        </span>
                      )}

                      {/* Presenter */}
                      {event.presenter && (
                        <span className="before:content-['•'] before:mr-2 block">
                          <span className="text-orange-600">Презентер:</span>{" "}
                          {event.presenter}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="relative w-full h-40 mt-40">
        <Image src={"/img/background/back12.png"} fill alt="background" />
      </div>

      {/*Confessions*/}
      <Confessions />

      {/* Subscription*/}
      <div className="max-w-[80%] mx-auto mt-40">
        <h3 className="text-orange-500 text-3xl font-bold mb-10 text-center">
          Пакети за поединци и корпорации
        </h3>

        <div className="relative w-full mt-32">
          <div className="flex justify-between items-center">
            <div className="relative w-[10%] h-96">
              <Image
                src={"/img/background/back05.png"}
                fill
                alt="background"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-1/2">
              <div className="flex justify-center">
                <Packs title={"Поединци"} price={1500}>
                  <li>1 седиште</li>
                  <li>Пауза за ручек</li>
                  <li>WiFi</li>
                </Packs>
              </div>
              <div className="flex justify-center">
                <Packs title={"Корпорации"} price={20000}>
                  <li>20 седишта</li>
                  <li>Паузи за чај и кафе</li>
                  <li>Пауза за ручек</li>
                  <li>WiFi</li>
                </Packs>
              </div>
            </div>
            <div className="relative w-[10%] h-96">
              <Image
                src={"/img/background/back05.png"}
                fill
                alt="background"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="mt-20 bg-orange-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none transition duration-200">
            Предложи на пријател
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-40">
        <div className="relative w-full max-w-[80%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.412912839514!2d21.430441676089035!3d41.99673467074705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415eeded48c19%3A0x6d252d830e17819e!2z0JHQvtCz0LjQutCwINCh0YLQvNC40YLQuNC9IDcvMS03LCDQntC80LDQv9C70LXQvdC40YfQvdCwLCAxMDAwINCj0KYi!5e0!3m2!1sen!2smk!4v1695215081325!5m2!1sen!2smk"
            width="100%"
            height="450"
            className="border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <noscript>
            <div style={{ color: "red" }}>
              Map could not be loaded. Please enable JavaScript to view the map.
            </div>
          </noscript>
        </div>
      </div>

      <div className="w-full max-w-[80%] mx-auto mt-10 md:mt-20 lg:mt-40">
        <h3 className="text-3xl mb-8 md:mb-10 font-medium">Најнови блогови:</h3>
        <RandomItems arr={blogsData} contentType={"blogs"} />
      </div>

      <div className="w-full max-w-[80%] mx-auto mt-10 md:mt-20 lg:mt-40">
        <h3 className="text-3xl mb-8 md:mb-10 font-medium">Слични настани:</h3>
        <RandomItems arr={eventsData} contentType={"events"} />
      </div>
    </>
  );
};

export default Conference;

export const getStaticProps: GetStaticProps = async () => {
  const baseUrl = "http://localhost:5000";

  const eventsRes = await fetch(`${baseUrl}/allEvents`);
  const eventsData: Event[] = await eventsRes.json();

  const blogsRes = await fetch(`${baseUrl}/allBlogs`);
  const blogsData: Blog[] = await blogsRes.json();

  const conferenceRes = await fetch(`${baseUrl}/conference`);
  const conference: ConferenceType[] = await conferenceRes.json();

  return {
    props: {
      eventsData,
      blogsData,
      conference,
    },
  };
};
