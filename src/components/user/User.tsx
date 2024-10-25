import { SettingsModal } from "@/utils/utils";
import Image from "next/image";
import React, { useState } from "react";
import { FaUser, FaFileAlt, FaPhone, FaEnvelope, FaCog } from "react-icons/fa";

const User = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="rounded-2xl shadow-2xl p-6 inline-flex flex-col px-20">
      <div className=" mb-4">
        <Image
          src="/img/banner/image2.png"
          alt="image"
          width={200}
          height={300}
          className="rounded-t-full"
        />
        <span className="block text-center mt-5">User Name</span>
        <span className="block text-gray-400 text-center">City</span>
      </div>

      <div className="border-t-2 border-t-gray-100">
        <div className="space-y-2 mt-4">
          <div className="flex items-center text-gray-500">
            <FaUser className="mr-2" />
            <span>Profession</span>
          </div>
          <div className="flex items-center text-gray-500">
            <FaFileAlt className="mr-2" />
            <span>CV</span>
          </div>
        </div>
      </div>

      <div className="space-y-2 mt-4 pt-4 border-t-2 border-t-gray-1">
        <div className="flex items-center text-gray-500">
          <FaPhone className="mr-2" />
          <span>0783209309</span>
        </div>
        <div className="flex items-center text-gray-500">
          <FaEnvelope className="mr-2" />
          <span>Email</span>
        </div>
        <div className="flex items-center text-gray-500">
          <FaCog className="mr-2" />
          <span className="block cursor-pointer" onClick={openModal}>
            Settings
          </span>
        </div>
      </div>
      <SettingsModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default User;
