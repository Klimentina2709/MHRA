import { Event, EventsDetail } from "@/types/types";
import { NextPage } from "next";
import { useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { isSameDay } from "date-fns";
import Link from "next/link";

interface CalendarItemProps {
  events: Event[];
}

interface TileProperties {
  date: Date;
  view: string;
}

const parseDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split(".").map(Number);
  return new Date(year, month - 1, day);
};

const CalendarPage = ({ events }: CalendarItemProps) => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [selectedEvents, setSelectedEvents] = useState<EventsDetail[]>([]);

  const handleDateChange: CalendarProps["onChange"] = (value) => {
    if (value instanceof Date) {
      setDate(value);

      const matchingEvents = events
        .flatMap((event) => event.events)
        .filter((eventDetail) =>
          eventDetail.date
            ? isSameDay(parseDate(eventDetail.date), value)
            : false
        );

      setSelectedEvents(matchingEvents || []);
    }
  };

  const tileClassName = ({ date, view }: TileProperties) => {
    if (view === "month") {
      const hasEvent = events
        .flatMap((event) => event.events)
        .some((eventDetail) =>
          eventDetail.date
            ? isSameDay(parseDate(eventDetail.date), date)
            : false
        );

      return hasEvent ? "event-day" : null;
    }
    return null;
  };

  return (
    <div className="flex rounded-md shadow-lg border w-[800px]">
      <div className="w-[400px] p-5 border-r border-gray-300">
        {selectedEvents.length > 0 && (
          <>
            {selectedEvents.map((event, index) => (
              <div key={index}>
                <h4 className="font-semibold text-xl mb-5">
                  {event.mainTitle}
                </h4>
                <span className="text-gray-600 block mb-2">{event.date}</span>
                <p>{event.textDescription}</p>
                <Link href={`/events/${event.id}`}>
                  <span className="text-orange-500 underline">
                    Прочитај повеќе
                  </span>
                </Link>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="flex-1 p-5">
        <h4 className="text-xl font-medium mb-2">Избери дата</h4>
        <Calendar
          onChange={handleDateChange}
          value={date}
          className="w-full max-w-sm text-center p-4"
          tileClassName={tileClassName}
          nextLabel={<FaChevronRight />}
          prevLabel={<FaChevronLeft />}
          next2Label={null}
          prev2Label={null}
        />
      </div>
    </div>
  );
};

export default CalendarPage;
