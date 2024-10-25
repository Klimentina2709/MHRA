import { GetStaticProps, NextPage } from "next";
import { AboutPage, BoardType, Event } from "@/types/types";
import Board from "@/components/Board";
import Image from "next/image";
import Banner from "@/components/banner/Banner";
import HorizontalScroll from "@/components/horizontalScroll/HorizontalScroll";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";

interface Props {
  about: AboutPage;
  board: BoardType[];
  events: Event[];
}

const About: NextPage<Props> = ({ about, board, events }) => {
  return (
    <>
      <Head>
        <title>{about.title} - Македонска Асоцијација за човечки ресурси</title>
        <meta
          name="description"
          content={`Запознајте ја Македонската Асоцијација за човечки ресурси: ${about.firstParagraph}`}
        />
        <meta
          name="keywords"
          content="човечки ресурси, асоцијација, Македонија, тим"
        />
        <meta property="og:title" content={about.title} />
        <meta property="og:description" content={about.firstParagraph} />
        <meta property="og:image" content={about.firstImage} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* Banner section */}
      <Banner
        theme="Запознај го тимот"
        title={"Македонска Асоцијација за човечки ресурси"}
        paragraph={"Придружи ни се"}
        buttonText="Прочитај повеќе"
        showFirstStructure={false}
      />

      {/* Horizontal scroll section */}
      <HorizontalScroll eventsData={events} />

      <Breadcrumbs />

      {/* Body */}
      <div className="flex flex-col lg:flex-row mb-20 mt-40 mx-auto max-w-[80%]">
        <div className="flex-[3] mb-6 lg:mb-0">
          <div className="relative w-full h-[400px]">
            <Image
              src={about.firstImage}
              alt="About Us Mission Image"
              className="rounded-t-full"
              fill
            />
          </div>
        </div>
        <div className="flex-[7] md:ml-16">
          <h1 className="text-5xl font-bold mb-5">{about.title}</h1>
          <h3 className="text-2xl font-semibold mb-4">{about.firstSubTitle}</h3>
          <p className="mb-3">{about.fifthParagraph}</p>
          <p>
            <span className="text-orange-500 mr-2 font-semibold">Мисија:</span>
            {about.mission}
          </p>
          <p>
            <span className="text-orange-500 mr-2 font-semibold">Визија:</span>
            {about.vision}
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mb-40 mx-auto max-w-[80%]">
        <div className="flex-[7] mb-6 lg:mb-0 md:mr-16">
          <h3 className="text-5xl mb-10">{about.goals}</h3>
          <p>
            <span className="text-orange-500 mr-2 font-semibold">ПОДДРШКА</span>
            {about.backup}
          </p>
          <p>
            <span className="text-orange-500 mr-2 font-semibold">
              ПРИЗНАВАЊЕ
            </span>
            {about.acknowledgment}
          </p>
          <p>
            <span className="text-orange-500 mr-2 font-semibold">СТРЕМЕЖ</span>
            {about.aspiration}
          </p>
        </div>
        <div className="flex-[3]">
          <div className="relative w-full h-[400px]">
            <Image
              src={about.secondImage}
              fill
              alt="Second Image"
              className="rounded-b-full"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mb-40 mx-auto max-w-[80%]">
        <div className="flex-[3] mb-6 lg:mb-0">
          <div className="relative w-full h-[300px]">
            <Image
              src={about.thirdImage}
              fill
              alt="Image of the President of the Macedonian association"
              className="rounded-b-full"
            />
          </div>
        </div>
        <div className="flex-[7] md:ml-16">
          <h3 className="text-2xl font-semibold mb-2">
            {about.secondSubTitle}
          </h3>
          <span className="text-orange-500 mb-5 font-semibold block">
            {about.name}
          </span>
          <p className="mb-4">{about.secondParagraph}</p>
          <p className="mb-4">{about.thirdParagraph}</p>
          <p className="mb-4">{about.forthParagraph}</p>
          <p>{about.fifthParagraph}</p>
        </div>
      </div>

      {/* Board Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mx-auto max-w-[80%]">
        {board.map((el) => (
          <Board key={el.id} {...el} />
        ))}
      </div>
    </>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  const baseUrl = "http://localhost:5000";

  const aboutRes = await fetch(`${baseUrl}/aboutPage`);
  const about: AboutPage = await aboutRes.json();

  const boardRes = await fetch(`${baseUrl}/board`);
  const board: BoardType[] = await boardRes.json();

  const eventsRes = await fetch(`${baseUrl}/allEvents`);
  const events: Event[] = await eventsRes.json();

  return {
    props: {
      about,
      board,
      events,
    },
  };
};
