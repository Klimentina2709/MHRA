import { useRouter } from "next/router";
import { NextPage, GetServerSideProps } from "next";
import Banner from "@/components/banner/Banner";
import React from "react";
import { Event } from "@/types/types";
import { truncateText } from "@/utils/utils";
import CalendarPage from "@/components/calendar/CalendarPage";
import EventStructure from "@/components/eventsStructure/EventStructure";
import { Double } from "@/components/eventsStructure/Double";
import SingleEventStructure from "@/components/eventsStructure/SingleEventStructure";
import NotificationLink from "@/components/NotificationLink";
import RandomItems from "@/components/RandomItems";
import Breadcrumb from "@/components/Breadcrumbs";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";

interface GroupEventsProps {
  events: Event[];
}

const GroupEvents: NextPage<GroupEventsProps> = ({ events }) => {
  const router = useRouter();
  const { groupId } = router.query;
  const filteredEvents = events.filter((event) => event.category === groupId);

  return (
    <div>
      <Head>
        <title>{`Настани за категоријата ${groupId}`}</title>
        <meta
          name="description"
          content={`Погледнете сите настани за категоријата ${groupId}.`}
        />
        <meta
          property="og:title"
          content={`Настани за категоријата ${groupId}`}
        />
        <meta
          property="og:description"
          content={`Погледнете ги сите настани за ${groupId}.`}
        />
        <meta property="og:type" content="website" />
      </Head>
      {/*Banner*/}
      {filteredEvents.length === 0 ? (
        <p>No events found for this category.</p>
      ) : (
        filteredEvents.map((event) => (
          <React.Fragment key={event.id}>
            <Banner
              theme={"Настан"}
              title={event.theme}
              date={event.date}
              paragraph={truncateText(event.eventDescription, 20)}
              showFirstStructure={true}
            />
          </React.Fragment>
        ))
      )}

      <Breadcrumbs />

      {/*Calendar*/}
      <div className="flex justify-between max-w-[80%] mx-auto mt-40">
        <div>
          <h2 className="text-5xl font-bold mb-6">
            Календар со датуми за сите претстојни HR
          </h2>
          <p>
            Погледни ги сите настани распоредени на календар. Со клик на
            обележаните настани можеш да дознаеш повеќе информации за секој од
            настаните но за целосни информации упатете се до индивидуалната
            страна на настанот
          </p>
        </div>
        <div>
          <CalendarPage events={filteredEvents} />
        </div>
      </div>

      {/*Info section*/}
      <div className="relative max-w-[80%] mx-auto mt-40">
        {filteredEvents.map((event) => (
          <React.Fragment key={event.id}>
            <h3 className="text-2xl font-bold mb-4">{event.theme}</h3>
            <p>{event.eventDescription}</p>
            <div className="mt-20">
              <EventStructure arr={event.eventList} />
              <SingleEventStructure text={event.benefits} />
            </div>
          </React.Fragment>
        ))}

        <div className="absolute top-[550px] left-96 bg-white rounded-md">
          <NotificationLink
            text={"Купи карта за следниот настан"}
            buttonText={"Купи карта"}
          />
        </div>
      </div>

      <div className="w-full max-w-[80%] mx-auto mt-10 md:mt-20 lg:mt-40">
        <h3 className="text-3xl mb-8 md:mb-10 font-medium">Слични настани:</h3>
        <RandomItems arr={events} contentType={"events"} />
      </div>
    </div>
  );
};

export default GroupEvents;

export const getServerSideProps: GetServerSideProps = async () => {
  const baseUrl = "http://localhost:5000";

  const eventsRes = await fetch(`${baseUrl}/allEvents`);
  const events = await eventsRes.json();

  return {
    props: {
      events,
    },
  };
};
