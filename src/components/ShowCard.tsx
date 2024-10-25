import { NextPage } from "next";
import { IconType } from "react-icons";

interface ShowCardType {
  text: string;
  icon?: IconType;
  secondaryText: string;
}

const ShowCard: NextPage<ShowCardType> = ({
  text,
  icon: Icon,
  secondaryText,
}) => {
  return (
    <div className="flex items-center rounded-full shadow-md bg-white p-2">
      {/* Icon */}
      {Icon && (
        <div className="flex items-center justify-center rounded-full bg-orange-500 h-16 w-16 mr-1">
          <Icon className="text-white h-8 w-8" />
        </div>
      )}

      <div className="flex flex-col px-2">
        <span className="font-medium text-lg">{text}</span>
        <span className="text-gray-700">{secondaryText}</span>
      </div>
    </div>
  );
};

export default ShowCard;
