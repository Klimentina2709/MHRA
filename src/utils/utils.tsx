import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import React from "react";
import { MdClose } from "react-icons/md";

export const truncateText = (text: string, maxWords: number) => {
  const words = text.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "...";
  }
  return text;
};

const SocialMediaLinks: React.FC = () => (
  <div className="rounded-l-full rounded-r-full bg-orange-600 text-white flex justify-evenly items-center space-x-4 p-4">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebookF className="text-white hover:text-gray-200" size={24} />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter className="text-white hover:text-gray-200" size={24} />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn className="text-white hover:text-gray-200" size={24} />
    </a>
  </div>
);

export default SocialMediaLinks;

// localization.ts
export const weekdays = [
  "Недела",
  "Понеделник",
  "Вторник",
  "Среда",
  "Четврток",
  "Петок",
  "Сабота",
];
export const months = [
  "Јануари",
  "Февруари",
  "Март",
  "Април",
  "Мај",
  "Јуни",
  "Јули",
  "Август",
  "Септември",
  "Октомври",
  "Ноември",
  "Декември",
];

interface SettingsModalType {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal = ({ isOpen, onClose }: SettingsModalType) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        style={{ backdropFilter: "blur(5px)" }}
      ></div>
      <div
        className="bg-white p-6 rounded-lg shadow-lg z-10"
        style={{ width: "70%", maxWidth: "800px", maxHeight: "90%" }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Settings</h2>
          <button
            className="text-gray-500 hover:text-gray-700 text-2xl"
            onClick={onClose}
          >
            <MdClose />
          </button>
        </div>
        <form>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[300px]">
              <div className="border border-gray-300 rounded-md shadow-sm mb-5">
                <label className="block text-sm font-medium text-gray-700 p-2">
                  Name:
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 block w-full px-3   border-0"
                />
              </div>

              <div className="border border-gray-300 rounded-md shadow-sm mb-5">
                <label className="block text-sm font-medium text-gray-700 p-2">
                  Age:
                </label>
                <input
                  type="number"
                  placeholder="Enter your age"
                  className="mt-1 block w-full px-3 "
                />
              </div>

              <div className="border border-gray-300 rounded-md shadow-sm mb-5">
                <label className="block text-sm font-medium text-gray-700 p-2">
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full px-3  border-0 rounded-md shadow-sm focus:outline-none sm:text-sm"
                />
              </div>

              <div className="border border-gray-300 rounded-md shadow-sm mb-5">
                <label className="block text-sm font-medium text-gray-700 p-2">
                  Password:
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1 block w-full px-3  border-0 rounded-md shadow-sm focus:outline-none sm:text-sm"
                />
              </div>

              <div className="border border-gray-300 rounded-md shadow-sm mb-5">
                <label className="block text-sm font-medium text-gray-700 p-2">
                  Profession:
                </label>
                <select className="mt-1 block w-full px-3  border-0 rounded-md shadow-sm focus:outline-none sm:text-sm">
                  <option value="">Select profession</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="manager">Manager</option>
                </select>
              </div>
            </div>

            <div className="flex-1 min-w-[300px]">
              <div className="w-full mb-5">
                <div className="border border-gray-300 rounded-md shadow-sm">
                  <label className="block text-sm font-medium text-gray-700 p-2">
                    Surname:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your surname"
                    className="mt-1 block w-full px-3 py-2 border-0"
                  />
                </div>
              </div>

              <div className="mb-5">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Notifications:
                </p>
                <div className="flex flex-col gap-2">
                  <div>
                    <input type="checkbox" id="platform" className="mr-2" />
                    <label htmlFor="platform" className="text-sm text-gray-700">
                      Platform
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="email" className="mr-2" />
                    <label htmlFor="email" className="text-sm text-gray-700">
                      Email
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="social" className="mr-2" />
                    <label htmlFor="social" className="text-sm text-gray-700">
                      Social Media
                    </label>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Content Notifications:
                </p>
                <div className="flex flex-col gap-2">
                  <div>
                    <input type="checkbox" id="newContent" className="mr-2" />
                    <label
                      htmlFor="newContent"
                      className="text-sm text-gray-700"
                    >
                      New Content
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="newEvents" className="mr-2" />
                    <label
                      htmlFor="newEvents"
                      className="text-sm text-gray-700"
                    >
                      New Events
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="eventReminder"
                      className="mr-2"
                    />
                    <label
                      htmlFor="eventReminder"
                      className="text-sm text-gray-700"
                    >
                      Event Reminder
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="px-4 py-2 border rounded-full bg-orange-500 text-white my-4"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
