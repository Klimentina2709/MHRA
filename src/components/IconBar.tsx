import React, { useState } from "react";
import { FaThumbsUp, FaHeart, FaComment } from "react-icons/fa";

const IconBar = () => {
  const [showTextarea, setShowTextarea] = useState(false);
  const [comment, setComment] = useState("");

  const handleCommentClick = () => {
    setShowTextarea(!showTextarea);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  return (
    <>
      <div className="flex space-x-10 my-6 px-4">
        {/* Like Icon */}
        <div className="flex items-center cursor-pointer">
          <FaThumbsUp className="text-gray-500 hover:text-blue-500 text-3xl" />
        </div>

        {/* Heart Icon */}
        <div className="flex items-center cursor-pointer">
          <FaHeart className="text-gray-500 hover:text-red-500 text-3xl" />
        </div>

        {/* Comment Icon */}
        <div
          className="flex items-center cursor-pointer"
          onClick={handleCommentClick}
        >
          <FaComment className="text-gray-500 hover:text-green-500 text-3xl" />
        </div>
      </div>

      {showTextarea && (
        <div className="relative mt-6">
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Напиши го твојот коментар..."
            rows={4}
            className="border border-gray-300 rounded-lg shadow-lg p-4 w-full pr-16 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 ease-in-out"
          ></textarea>
          <button
            className="absolute bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none transition duration-200"
            onClick={() => {
              setShowTextarea(false);
            }}
          >
            Испрати
          </button>
        </div>
      )}
    </>
  );
};

export default IconBar;
