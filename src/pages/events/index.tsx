import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import { Event, EventsDetail } from "@/types/types";
import Banner from "@/components/banner/Banner";
import CalendarPage from "@/components/calendar/CalendarPage";
import useFiltering from "@/hooks/useFiltering";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";

interface EventsProps {
  data: Event[];
}

const Events: NextPage<EventsProps> = ({ data }) => {
  const [randomEvent, setRandomEvent] = useState<EventsDetail>();
  const [activeCategory, setActiveCategory] = useState(true);
  const router = useRouter();
  const {
    searchInput,
    setSearchInput,
    selectedCategories,
    handleSearch,
    handleCategoryFilter,
  } = useFiltering();

  useEffect(() => {
    const allEventsDetails = data.flatMap((event) => event.events);
    if (allEventsDetails.length > 0) {
      const randomDetail =
        allEventsDetails[Math.floor(Math.random() * allEventsDetails.length)];
      setRandomEvent(randomDetail);
    }
  }, [data]);

  useEffect(() => {
    setActiveCategory(!selectedCategories.length);
  }, [selectedCategories]);

  const handleAll = () => {
    setActiveCategory(true);
    setSearchInput("");
    router.push(
      {
        pathname: "/events",
        query: {},
      },
      undefined,
      { scroll: false }
    );
  };

  const filteredEvents = data.flatMap((eventGroup) =>
    eventGroup.events
      .slice(0, 4)
      .filter(
        (event) =>
          (selectedCategories.length === 0 ||
            selectedCategories.includes(eventGroup.category)) &&
          (event.mainTitle.toLowerCase().includes(searchInput.toLowerCase()) ||
            event.textDescription
              .toLowerCase()
              .includes(searchInput.toLowerCase()))
      )
  );

  const categories = [
    { id: "hr_coffee", label: "HR Кафе" },
    { id: "hr_weekend", label: "HR Викенд" },
    { id: "hr_webinar", label: "HR Вебинар" },
    { id: "hr_conference", label: "HR Конференции" },
  ];

  return (
    <>
      <Head>
        <title>Настани - Македонска Асоцијација за човечки ресурси</title>
        <meta
          name="description"
          content="Погледнете ги сите настани организирани од Македонската Асоцијација за човечки ресурси."
        />
        <meta
          name="keywords"
          content="настани, човечки ресурси, Македонија, HR"
        />
        <meta
          property="og:title"
          content="Настани - Македонска Асоцијација за човечки ресурси"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div>
        {randomEvent && (
          <Banner
            theme={"Истакнат настан"}
            title={randomEvent.mainTitle}
            paragraph={randomEvent.textDescription}
            showFirstStructure={true}
          />
        )}

        <Breadcrumbs />

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
            <CalendarPage events={data} />
          </div>
        </div>

        <div className="flex max-w-[82%] mx-auto py-6 mt-40">
          <button
            className={`px-4 py-2 mx-4 shadow-md rounded-5xl ${
              activeCategory ? "text-white bg-orange-600" : ""
            }`}
            onClick={handleAll}
          >
            сите
          </button>
          <div>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 mx-4 shadow-md rounded-5xl ${
                  selectedCategories.includes(category.id)
                    ? "text-white bg-orange-600"
                    : ""
                }`}
                onClick={() => handleCategoryFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between max-w-[80%] mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-4">Сите настани</h3>
          </div>
          <input
            type="text"
            name="search"
            placeholder="Пребарај"
            value={searchInput}
            onChange={handleSearch}
            className="rounded-5xl shadow-md px-4 py-2 border-1"
          />
        </div>

        <div>
          {searchInput ? (
            <div>
              {filteredEvents.length === 0 ? (
                <p>No events found</p>
              ) : (
                <div className="grid grid-cols-2 gap-8 max-w-[80%] mx-auto py-8">
                  {filteredEvents.map((event) => (
                    <div key={event.id}>
                      <Card
                        id={event.id}
                        image={event.image}
                        mainTitle={event.mainTitle}
                        textDescription={event.textDescription}
                        type={"events"}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            data.map((eventGroup) => {
              const hasMatchingEvents = eventGroup.events.some(
                (event) =>
                  (selectedCategories.length === 0 ||
                    selectedCategories.includes(eventGroup.category)) &&
                  (event.mainTitle
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()) ||
                    event.textDescription
                      .toLowerCase()
                      .includes(searchInput.toLowerCase()))
              );

              return hasMatchingEvents ? (
                <div key={eventGroup.category}>
                  <h1 className="text-3xl font-semibold max-w-[80%] mx-auto mb-8">
                    {eventGroup.theme}:
                  </h1>
                  <div className="grid grid-cols-2 gap-8 max-w-[80%] mx-auto py-8 mb-16">
                    {eventGroup.events
                      .slice(0, 4)
                      .filter(
                        (event) =>
                          (selectedCategories.length === 0 ||
                            selectedCategories.includes(eventGroup.category)) &&
                          (event.mainTitle
                            .toLowerCase()
                            .includes(searchInput.toLowerCase()) ||
                            event.textDescription
                              .toLowerCase()
                              .includes(searchInput.toLowerCase()))
                      )
                      .map((event) => (
                        <div key={event.id}>
                          <Card
                            id={event.id}
                            image={event.image}
                            mainTitle={event.mainTitle}
                            textDescription={event.textDescription}
                            type={"events"}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              ) : null;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Events;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const baseUrl = "http://localhost:5000";
  const url = new URL(`${baseUrl}/allEvents`);

  if (query.category) {
    const categories = Array.isArray(query.category)
      ? query.category
      : [query.category];
    categories.forEach((cat) => url.searchParams.append("category", cat));
  }
  if (query.search) url.searchParams.append("search", query.search as string);

  const eventsRes = await fetch(url.toString());
  const eventsData: Event[] = await eventsRes.json();

  return { props: { data: eventsData } };
};
