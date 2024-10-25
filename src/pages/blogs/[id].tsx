import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef, useEffect, useState } from "react";
import RandomItems from "@/components/RandomItems";
import { Blog, BlogsDetails, Event } from "@/types/types";
import SocialMediaLinks from "@/utils/utils";
import HorizontalScroll from "@/components/horizontalScroll/HorizontalScroll";
import BannerVersion02 from "@/components/banner/BannerVersion02";
import Comments from "@/components/Comments";
import IconBar from "@/components/IconBar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";

interface BlogDetailsProps {
  data: Blog[];
  blog: BlogsDetails | null;
  eventsData: Event[];
}

const BlogDetails: NextPage<BlogDetailsProps> = ({
  data,
  blog,
  eventsData,
}) => {
  const router = useRouter();
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            setActiveSectionIndex(index);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>No event found</div>;
  }

  return (
    <>
      <Head>
        <title>{blog.title} - Your Blog Name</title>
        <meta name="description" content={blog.introduction} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.introduction} />
        <meta property="og:image" content={blog.authorImage} />
        <meta
          property="og:url"
          content={`http://localhost:5000/blogs/${blog.id}`}
        />
      </Head>
      <BannerVersion02 theme={"Блог"} heading={blog.title} info={blog.author} />

      {/*Horizontal scroll section*/}
      <HorizontalScroll eventsData={eventsData} />

      <Breadcrumbs />

      {/*Blog content*/}

      <div className="flex max-w-[80%] mx-auto mt-40">
        <div className="flex-[7]">
          <h2 className="text-5xl font-bold mb-10">{blog.title}</h2>
          <div className="mb-10">{blog.introduction}</div>

          {blog.sections?.map((section, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                sectionRefs.current[index] = el;
              }}
              className="mb-10"
            >
              <h5 className="text-2xl font-medium mb-5">{section.title}</h5>
              {typeof section.content === "string" ? (
                section.content
              ) : (
                <div>
                  {section.content.map((contentItem, itemIndex) => (
                    <div key={itemIndex}>
                      <h6 className="text-base font-semibold mb-2 pl-4">
                        {contentItem.subtitle}
                      </h6>
                      <p className="pl-6 mb-10">- {contentItem.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Sidebar Section */}
        <div className="flex-[3] pl-10">
          <div className="text-center">
            <Image
              src={blog.authorImage}
              width={300}
              height={400}
              alt="author"
              className="rounded-b-full mx-auto"
            />
          </div>
          <span className="block py-6 font-semibold">{blog.author}</span>

          {/*Social Media*/}
          <SocialMediaLinks />

          <h5 className="text-xl font-medium mb-4 mt-8">Кратка содржина</h5>
          {blog.sections?.map((section, index) => (
            <h6
              key={index}
              className={`text-base font-semibold mb-1 ${
                activeSectionIndex === index
                  ? "text-orange-600"
                  : "text-gray-600"
              }`}
            >
              {section.title}
            </h6>
          ))}
          <div className="relative w-full h-40 mt-20">
            <Image src={"/img/background/back13.png"} fill alt="background" />
          </div>
        </div>
      </div>

      <div className="max-w-[80%] mx-auto">
        <IconBar />
        <div className="bg-orange-600 transition-all duration-300 ease-in-out hover:bg-orange-700 rounded-l-full rounded-r-full text-white flex justify-between items-center px-8">
          <span className="block">Ти се допаѓа овој пост? Сподели го.</span>
          <SocialMediaLinks />
        </div>
      </div>

      <div className="relative w-full h-40 mt-20">
        <Image src={"/img/background/back12.png"} fill alt="background" />
      </div>

      <div className="max-w-[80%] mx-auto my-20">
        <h3 className="text-2xl mb-10 ">Коментари:</h3>
        <Comments />
      </div>

      <div className="relative w-full h-40">
        <Image src={"/img/background/back02.png"} fill alt="background" />
      </div>

      <div className="w-full max-w-[80%] mx-auto mt-10 md:mt-20 lg:mt-40">
        <h3 className="text-3xl mb-8 md:mb-10 font-medium">Слични блогови:</h3>
        <RandomItems arr={data} contentType={"blogs"} />
      </div>
    </>
  );
};

export default BlogDetails;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params!;
  const url = "http://localhost:5000";

  const res = await fetch(`${url}/allBlogs`);
  const data: Blog[] = await res.json();

  let foundBlog: BlogsDetails | null = null;
  let blogTheme: string | null = null;

  for (const group of data) {
    const blog = group.blogs.find((blog) => blog.id.toString() === id);
    if (blog) {
      foundBlog = blog;
      blogTheme = group.theme; // Capture the theme of the event group
      break;
    }
  }

  const events = new URL(`${url}/allEvents`);

  const eventsRes = await fetch(events.toString());
  const eventsData: Event[] = await eventsRes.json();

  return {
    props: {
      blog: foundBlog,
      blogTheme,
      data,
      eventsData,
    },
  };
};
