import Introduction from "@/components/badges/Introduction";
import Banner from "@/components/banner/Banner";
import NewestBlogs from "@/components/blogs/NewestBlogs";
import Breadcrumbs from "@/components/Breadcrumbs";
import Card from "@/components/Card";
import HorizontalScroll from "@/components/horizontalScroll/HorizontalScroll";
import useFiltering from "@/hooks/useFiltering";
import { Blog, BlogsDetails, Event, JobsType } from "@/types/types";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

interface BlogProps {
  data: Blog[];
  eventsData: Event[];
  jobs: JobsType[];
}

const Blogs: NextPage<BlogProps> = ({ data, eventsData, jobs }) => {
  const [randomBlog, setRandomBlog] = useState<BlogsDetails>();
  const router = useRouter();
  const {
    searchInput,
    setSearchInput,
    selectedCategories,
    handleSearch,
    handleCategoryFilter,
  } = useFiltering();

  useEffect(() => {
    const allBlogsDetails = data.flatMap((blog) => blog.blogs);
    if (allBlogsDetails.length > 0) {
      const randomDetail =
        allBlogsDetails[Math.floor(Math.random() * allBlogsDetails.length)];
      setRandomBlog(randomDetail);
    }
  }, [data]);

  const handleAll = () => {
    setSearchInput("");

    handleCategoryFilter("");
    router.push(
      {
        pathname: "/blogs",
        query: {},
      },
      undefined,
      { scroll: false }
    );
  };

  const categories = [
    { label: "Развој", value: "development" },
    { label: "Обучувања", value: "training" },
    { label: "Регрутирање", value: "recruitment" },
    { label: "Менаџмент на перформанси", value: "performance-management" },
    { label: "Организацика структура", value: "organizational-structure" },
    { label: "Здравствени прашања", value: "health-issues" },
  ];

  const filteredBlogs = data.flatMap((blogGroup) =>
    blogGroup.blogs
      .slice(0, 4)
      .filter(
        (blog) =>
          (selectedCategories.length === 0 ||
            selectedCategories.includes(blogGroup.category)) &&
          (blog.title.toLowerCase().includes(searchInput.toLowerCase()) ||
            blog.introduction.toLowerCase().includes(searchInput.toLowerCase()))
      )
  );

  return (
    <>
      <Head>
        <title>Најнови блогови за HR и обука</title>
        <meta
          name="description"
          content="Откријте најновите блогови за HR, обука, регрутирање и управување со перформанси."
        />
        <meta property="og:title" content="Најнови блогови за HR и обука" />
        <meta
          property="og:description"
          content="Погледнете ги најновите блогови за HR, обука и управување со перформанси."
        />
        <meta property="og:type" content="website" />
      </Head>
      {/*Banner */}
      {randomBlog && (
        <Banner
          theme={"Истакнат блог"}
          title={randomBlog.title}
          paragraph={randomBlog.introduction}
          showFirstStructure={true}
        />
      )}

      {/*Horizontal scroll */}
      <HorizontalScroll eventsData={eventsData} />

      {/*Breadcrumbs*/}
      <Breadcrumbs />

      {/*Introduction to badges*/}
      <Introduction />

      <div className="max-w-[80%] mx-auto mt-10 md:mt-20 lg:mt-40 pb-10 ">
        <h3 className="text-3xl font-bold mb-16">Најнови блогови</h3>
        <NewestBlogs blogsData={data} eventsData={eventsData} jobs={jobs} />
      </div>
      <div className="relative w-full h-40">
        <Image src={"/img/banner/back02.png"} fill alt="background" />
      </div>

      <div className="flex overflow-x-auto whitespace-nowrap max-w-[82%] mx-auto py-6">
        <button
          className={`px-4 py-2 mx-4 shadow-md rounded-5xl ${
            selectedCategories.length === 0 ? "text-white bg-orange-600" : ""
          }`}
          onClick={handleAll}
        >
          сите
        </button>
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={`px-4 py-2 mx-4 shadow-md rounded-5xl ${
              selectedCategories.includes(cat.value)
                ? "text-white bg-orange-600"
                : ""
            }`}
            onClick={() => handleCategoryFilter(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div>
        <div className="flex justify-between max-w-[80%] mx-auto">
          <h3 className="text-2xl font-bold mb-4">Блогови</h3>
          <input
            type="text"
            name="search"
            placeholder="пребарај"
            value={searchInput}
            onChange={handleSearch}
            className="rounded-5xl shadow-md px-4 py-2 border-1"
          />
        </div>

        <div>
          {searchInput ? (
            <div>
              {filteredBlogs.length === 0 ? (
                <p>No blogs found</p>
              ) : (
                <div className="grid grid-cols-2 gap-8 max-w-[80%] mx-auto py-8">
                  {filteredBlogs.map((blog) => (
                    <div key={blog.id}>
                      <Card
                        id={blog.id}
                        image={blog.img}
                        mainTitle={blog.title}
                        textDescription={blog.introduction}
                        type={"blogs"}
                      />
                    </div>
                  ))}
                </div>
              )}
              {/* Background image section */}
              <div className="relative w-full h-40">
                <Image
                  src={"/img/background/back02.png"}
                  fill
                  alt="background"
                />
              </div>
            </div>
          ) : (
            data.map((blogGroup) => {
              const hasMatchingBlogs = blogGroup.blogs.some(
                (blog) =>
                  (selectedCategories.length === 0 ||
                    selectedCategories.includes(blogGroup.category)) &&
                  (blog.title
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()) ||
                    blog.introduction
                      .toLowerCase()
                      .includes(searchInput.toLowerCase()))
              );

              return hasMatchingBlogs ? (
                <div key={blogGroup.category}>
                  <h1 className="text-3xl font-semibold max-w-[80%] mx-auto mb-10">
                    {blogGroup.theme}
                  </h1>
                  <div className="grid grid-cols-2 gap-8 max-w-[80%] mx-auto py-8">
                    {blogGroup.blogs
                      .slice(0, 4)
                      .filter(
                        (blog) =>
                          (selectedCategories.length === 0 ||
                            selectedCategories.includes(blogGroup.category)) &&
                          (blog.title
                            .toLowerCase()
                            .includes(searchInput.toLowerCase()) ||
                            blog.introduction
                              .toLowerCase()
                              .includes(searchInput.toLowerCase()))
                      )
                      .map((blog) => (
                        <div key={blog.id}>
                          <Card
                            id={blog.id}
                            image={blog.img}
                            mainTitle={blog.title}
                            textDescription={blog.introduction}
                            type={"blogs"}
                          />
                        </div>
                      ))}
                  </div>
                  {/* Background image section */}
                  <div className="relative w-full h-40">
                    <Image
                      src={"/img/background/back02.png"}
                      fill
                      alt="background"
                    />
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

export default Blogs;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const baseUrl = "http://localhost:5000";
  const url = new URL(`${baseUrl}/allBlogs`);

  if (query.category) {
    const categories = Array.isArray(query.category)
      ? query.category
      : [query.category];
    categories.forEach((cat) => url.searchParams.append("category", cat));
  }
  if (query.search) url.searchParams.append("search", query.search as string);

  const blogsRes = await fetch(url.toString());
  const blogsData: Blog[] = await blogsRes.json();

  const events = new URL(`${baseUrl}/allEvents`);
  const eventsRes = await fetch(events.toString());
  const eventsData: Event[] = await eventsRes.json();

  const jobsUrl = new URL(`${baseUrl}/jobs`);
  const jobsRes = await fetch(jobsUrl.toString());
  const jobs: Event[] = await jobsRes.json();

  return { props: { data: blogsData, eventsData, jobs } };
};
