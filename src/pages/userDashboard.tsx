import Badges from "@/components/badges/Badges";
import CalendarPage from "@/components/calendar/CalendarPage";
import HorizontalScroll from "@/components/horizontalScroll/HorizontalScroll";
import BuyCard from "@/components/user/BuyCard";
import Connects from "@/components/user/Connects";
import Points from "@/components/user/Points";
import StaticText from "@/components/user/StaticText";
import User from "@/components/user/User";
import { BadgesType, ConnectType, Event } from "@/types/types";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import Head from "next/head";

interface Props {
  events: Event[];
  badges: BadgesType[];
  users: ConnectType[];
}

const UserDashboard: NextPage<Props> = ({ events, badges, users }) => {
  const [showAll, setShowAll] = useState(false);
  const [showAllUsers, setShowAllUsers] = useState(false);

  return (
    <>
      <Head>
        <title>User Dashboard - Your Website Name</title>
        <meta
          name="description"
          content="Manage your events, badges, and connections on your personal dashboard."
        />
        <meta
          name="keywords"
          content="user dashboard, events, badges, connections"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/user-dashboard" />
      </Head>

      <div className="mt-40">
        <div className="flex max-w-[80%] mx-auto">
          <div>
            <User />
            <div className="text-center">
              <Link href={"/createBlog"}>
                <button className="my-5 bottom-4 right-4 bg-orange-500 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none transition duration-200">
                  Креирај блог
                </button>
              </Link>
            </div>
          </div>
          <StaticText />
        </div>

        {/* Horizontal scroll section */}
        <HorizontalScroll eventsData={events} />

        <div className="flex max-w-[80%] mx-auto mt-20">
          {/* Left side - 30% */}
          <div className="flex-[30%] mr-10">
            <Points />

            {/* Badges part */}
            <div className="rounded-3xl shadow-lg p-5 mt-6">
              <div className="flex justify-between">
                <h5 className="font-semibold text-xl mb-4">Најнови беџови</h5>
                <span
                  className="underline text-orange-500 cursor-pointer"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? "Врати назад" : "Види ги сите"}
                </span>
              </div>
              {(showAll ? badges : badges.slice(0, 2)).map((badge) => (
                <Badges
                  key={badge.id}
                  badge={badge.badge}
                  badgeDescription={badge.badgeDescription}
                />
              ))}
            </div>

            {/* Connects part */}
            <div className="rounded-3xl shadow-lg p-5 mt-6">
              <div className="flex justify-between">
                <h5 className="font-semibold text-xl mb-4">
                  Последно додадени
                </h5>
                <span
                  className="underline text-orange-500 cursor-pointer"
                  onClick={() => setShowAllUsers(!showAllUsers)}
                >
                  {showAllUsers ? "Врати назад" : "Види ги сите"}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {(showAllUsers ? users : users.slice(0, 6)).map((user) => (
                  <Connects
                    key={user.id}
                    userImg={user.userImage}
                    userName={user.userName}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right side - 70% */}
          <div className="flex-[70%]">
            <div>
              <BuyCard cardDescription={"13та меѓународна МАЧР конференција"} />
              <BuyCard cardDescription={"HR Coffee настан"} />
            </div>

            {/* Percent */}
            <div className="flex">
              <div className="inline-flex flex-col items-center justify-center rounded-2xl shadow-lg p-10 mr-3">
                <span className="text-xl font-semibold">Освоено:</span>
                <span className="text-8xl font-bold my-2">20%</span>
                <span className="text-xl font-semibold">
                  попуст на следна карта
                </span>
              </div>

              <div className="inline-flex flex-col items-center justify-center rounded-2xl shadow-lg p-10">
                <span className="text-xl font-semibold">Препорачано на:</span>
                <span className="text-8xl font-bold my-2">30</span>
                <span className="text-xl font-semibold">пријатели</span>
              </div>
            </div>

            {/* Textarea */}
            <div className="relative w-full mt-6">
              <textarea
                placeholder="Остави фидбек за нешто што би можеле да подобриме на страната. Кажи ни што ти смета и ние ке се потрудиме да го подобриме."
                rows={10}
                className="border border-gray-300 rounded-lg shadow-lg p-4 w-full pr-16 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 ease-in-out"
              ></textarea>

              {/* Button inside the container */}
              <button className="absolute bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none transition duration-200">
                Испрати
              </button>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="flex justify-between max-w-[80%] mx-auto mt-40">
          <div>
            <h2 className="text-5xl font-bold mb-6">
              Календар со датуми за сите претстојни настани
            </h2>
            <p>
              Погледни ги сите настани распоредени на календар. Со клик на
              обележаните настани можеш да дознаеш повеќе информации за секој од
              настаните но за целосни информации упатете се до индивидуалната
              страна на настанот
            </p>
          </div>
          <div>
            <CalendarPage events={events} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;

export const getStaticProps: GetStaticProps = async () => {
  const baseUrl = "http://localhost:5000";

  const eventsRes = await fetch(`${baseUrl}/allEvents`);
  const events = await eventsRes.json();

  const badgesRes = await fetch(`${baseUrl}/badges`);
  const badges = await badgesRes.json();

  const usersRes = await fetch(`${baseUrl}/users`);
  const users = await usersRes.json();

  return {
    props: {
      events,
      badges,
      users,
    },
  };
};
