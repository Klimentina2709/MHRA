import { CardData } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const HorizontalScrollCard = ({
  imageSrc,
  month,
  day,
  firstText,
  lastText,
  theme,
  title,
  id,
}: CardData) => {
  const cardHeight = firstText || lastText ? "h-72" : "h-48";
  const cardWidth = firstText || lastText ? "w-64" : "w-52";

  return (
    <Link href={`/events/${id}`}>
      <div
        className={`relative  rounded-b-full overflow-hidden ${cardHeight} ${cardWidth}`}
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {firstText && (
            <span className="text-white text-md font-semibold">
              {firstText}
            </span>
          )}
          <span className="text-white text-sm">{theme}</span>
          <span className="text-white text-sm">{title}</span>
          <span className="text-white text-xl mt-2">{month}</span>
          <div className="border-2 border-white rounded-md p-2 mt-1 text-white text-3xl font-bold">
            {day}
          </div>
          {lastText && (
            <span className="text-white text-sm underline">{lastText}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default HorizontalScrollCard;
