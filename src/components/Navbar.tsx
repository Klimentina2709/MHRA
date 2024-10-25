import { menuItems } from "@/data/menuItems";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const currentPath = router.pathname;

    const activeIndex = menuItems.findIndex(
      (item) =>
        item.href === currentPath ||
        (item.dropdown &&
          item.dropdown.some((subItem) => subItem.href === currentPath))
    );

    if (activeIndex !== -1) {
      setActiveItem(activeIndex);
    } else {
      setActiveItem(null);
    }
  }, [router.pathname]);

  const handleLinkClick = (index: number) => {
    setActiveItem(index);
  };

  const handleDropdownClick = (index: number, subItemHref: string) => {
    setActiveItem(index);
    router.push(subItemHref);
  };

  const handleLogoClick = () => {
    setActiveItem(null);
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className="p-5 bg-white bg-opacity-95 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center max-w-[80%] mx-auto">
          <div>
            <Link href="/" onClick={handleLogoClick}>
              <Image
                src="/img/logo/logo.png"
                width={40}
                height={40}
                alt="Logo"
              />
            </Link>
          </div>

          <div>
            <ul className="flex space-x-5">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group">
                  <Link
                    href={item.href}
                    onClick={() => handleLinkClick(index)}
                    className={activeItem === index ? "text-orange-500" : ""}
                  >
                    {item.title}
                  </Link>
                  {item.dropdown && (
                    <ul className="absolute hidden group-hover:block bg-white shadow-lg z-10 rounded-md pt-5">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="px-5 py-2 hover:bg-orange-500 hover:text-white rounded-md"
                        >
                          <Link
                            href={subItem.href}
                            onClick={() =>
                              handleDropdownClick(index, subItem.href)
                            }
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="relative">
                <button
                  onClick={toggleSearch}
                  className="flex items-center mt-1"
                >
                  <FaSearch className="text-md text-gray-700" />
                </button>
                {isSearchOpen && (
                  <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md p-2">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="border border-gray-200 rounded-full p-2 w-48"
                    />
                  </div>
                )}
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <span>MK</span>

            <div>
              <Link href="/signIn">
                <button className="mr-4 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none transition duration-200">
                  Најави се
                </button>
              </Link>
              <Link href="/signUp">
                <button className="text-orange-500 font-semibold hover:underline">
                  Зачлени се
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
