import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaComment, FaThumbsUp } from "react-icons/fa";

const Comments = () => {
  const initialComments = [
    {
      id: 1,
      name: "Франко",
      time: "пред 9 минути",
      text: "Последниот чекор е донесувањето на информирана одлука. Ова подразбира анализа на сите информации собрани за време на процесот на регрутација, вклучувајќи го интервјуто, резултатите од тестовите и препораките.",
      image: "/img/banner/image2.png",
    },
    {
      id: 2,
      name: "Марија",
      time: "пред 15 минути",
      text: "Навистина ми се допадна начинот на кој беше организирана секоја фаза од интервјуто. Тимот беше професионален и пријателски настроен.",
      image: "/img/banner/image2.png",
    },
    {
      id: 3,
      name: "Алекс",
      time: "пред 30 минути",
      text: "Сè беше супер, од првиот контакт до финалната одлука. Голема благодарност до целиот тим!",
      image: "/img/banner/image2.png",
    },
  ];

  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      setUsername("Непознат корисник");
    }
  }, []);

  const addComment = () => {
    if (newComment.trim() === "") return;
    const newCommentObj = {
      id: comments.length + 1,
      name: username,
      time: "пред малку",
      text: newComment,
      image: "/img/banner/image2.png",
    };
    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  const deleteComment = (id: number) => {
    alert("Сакате да го избришете коменатрот");
    if (id > initialComments.length) {
      setComments(comments.filter((comment) => comment.id !== id));
    }
  };

  return (
    <>
      <div>
        {comments.map((comment) => (
          <div key={comment.id} className="mt-8">
            <div className="flex items-center">
              <Image
                src={comment.image}
                alt="User image"
                width={50}
                height={80}
                className="rounded-b-full"
              />
              <div className="ml-2">
                <span className="block">{comment.name}</span>
                <span className="block text-gray-500">{comment.time}</span>
              </div>
            </div>

            <div className="flex justify-between">
              <p>{comment.text}</p>

              {comment.id > initialComments.length && (
                <button
                  className="text-red-500 mt-2"
                  onClick={() => deleteComment(comment.id)}
                >
                  Избриши
                </button>
              )}
            </div>
            <div className="flex space-x-6 mt-2">
              <FaThumbsUp className="text-gray-500" />
              <FaComment className="text-gray-500" />
            </div>
          </div>
        ))}
      </div>
      <div className="relative mt-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Твој коментар"
          rows={5}
          className="border border-gray-300 rounded-lg shadow-lg p-4 w-full pr-16 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 ease-in-out"
        ></textarea>

        <button
          onClick={addComment}
          className="absolute bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none transition duration-200"
        >
          Испрати
        </button>
      </div>
    </>
  );
};

export default Comments;
