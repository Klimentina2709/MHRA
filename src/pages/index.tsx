import Banner from "@/components/banner/Banner";
import CardAnimation from "@/components/CardAnimation";
import GroupCards from "@/components/homepage/groupCards/GroupCards";
import HomepageAbout from "@/components/homepage/HomepageAbout";
import HomepageConference from "@/components/homepage/HomepageConference";
import SubscriptionDeals from "@/components/homepage/SubscriptionDeals";
import HorizontalScroll from "@/components/horizontalScroll/HorizontalScroll";
import { Blog, Event } from "@/types/types";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";

interface HomepageProps {
  events: Event[];
  blogs: Blog[];
}

const Home: NextPage<HomepageProps> = ({ events, blogs }) => {
  return (
    <>
      <Head>
        <title>Македонска Асоцијација за човечки ресурси</title>
        <meta
          name="description"
          content="Придружи се на Македонската Асоцијација за човечки ресурси и остани информиран за најновите настани и блогови."
        />
        <meta
          name="keywords"
          content="човечки ресурси, настани, блогови, Македонија"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      {/*Banner section*/}
      <Banner
        theme="Луѓето пред се"
        title={"Македонска Асоцијација за човечки ресурси"}
        paragraph={"Придружи ни се"}
        buttonText="Зачлени се"
        showFirstStructure={false}
      />

      {/*Horizontal scroll section*/}
      <HorizontalScroll eventsData={events} />

      {/*Cards section*/}
      <GroupCards />

      {/*Subscription benefits*/}
      <SubscriptionDeals />

      {/*Events*/}

      <div className="w-full max-w-[80%] mx-auto mt-10 md:mt-20 lg:mt-40">
        <h3 className="text-3xl mb-8 md:mb-10 font-medium">Слични настани:</h3>
        <CardAnimation arr={events} contentType={"events"} />
      </div>

      {/*Conference section*/}
      <HomepageConference />

      {/*Blogs*/}
      <div className="w-full max-w-[80%] mx-auto mt-10 md:mt-20 lg:mt-40">
        <h3 className="text-3xl mb-8 md:mb-10 font-medium">Најнови блогови:</h3>
        <CardAnimation arr={blogs} contentType={"blogs"} />
      </div>

      {/*To about page*/}
      <HomepageAbout />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const baseUrl = "http://localhost:5000";

  const eventsRes = await fetch(`${baseUrl}/allEvents`);
  const events = await eventsRes.json();

  const blogsRes = await fetch(`${baseUrl}/allBlogs`);
  const blogs = await blogsRes.json();

  return {
    props: {
      events,
      blogs,
    },
  };
};
