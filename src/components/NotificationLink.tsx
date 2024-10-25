import React from "react";

interface NotificationLinkType {
  text: string;
  buttonText: string;
}

const NotificationLink = ({ text, buttonText }: NotificationLinkType) => {
  return (
    <div className="rounded-md shadow-lg inline-flex items-center p-6">
      <p className="text-lg">{text}</p>
      <button className=" text-lg rounded-full shadow-lg px-4 py-2 ml-4 bg-orange-500 text-white">
        {buttonText}
      </button>
    </div>
  );
};

export default NotificationLink;
