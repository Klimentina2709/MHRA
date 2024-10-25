import React from "react";
import CardBlog from "./CardBlog";
import { Blog, Event, JobsType } from "@/types/types";
import Section from "../Section";
import JobsSection from "./JobsSection";

interface Props {
  blogsData: Blog[];
  eventsData: Event[];
  jobs: JobsType[];
}

const NewestBlogs = ({ blogsData, eventsData, jobs }: Props) => {
  return (
    <>
      <Section>
        <div className="mr-16">
          <div className="mb-16">
            <CardBlog
              blogsData={blogsData}
              eventsData={eventsData}
              showCardFirst={true}
              randomIndexBlog={1}
              randomIndexEvent={1}
            />
          </div>
          <CardBlog
            blogsData={blogsData}
            eventsData={eventsData}
            showCardFirst={false}
            randomIndexBlog={2}
            randomIndexEvent={2}
          />
        </div>
        <JobsSection jobs={jobs} />
      </Section>
    </>
  );
};

export default NewestBlogs;
