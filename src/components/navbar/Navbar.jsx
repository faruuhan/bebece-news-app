import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Burger } from "@mantine/core";

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <div className="bg-teal-700 lg:py-3">
      <div className="flex flex-col lg:items-center lg:px-0 lg:container mx-auto text-teal-200 lg:flex-row">
        <div className="flex items-center justify-between px-4 py-4 border-b border-teal-500 lg:px-0 lg:pr-4 lg:py-0 lg:border-b-0">
          <Link to="/" className="font-normal hover:text-white">
            BEBECE
            <br />
            <span className="font-bold text-xl">NEWS</span>
          </Link>
          <div className="">
            <Burger color="#99f6e4" className="block lg:hidden" opened={opened} onClick={() => setOpened((o) => !o)} title={title} />
          </div>
        </div>

        <div className={`${opened ? "block" : "hidden"} lg:flex flex-col justify-between w-full lg:flex-row`}>
          <div className="flex flex-col lg:flex-row">
            <Link to="/business" className="block px-4 py-3 lg:py-0 hover:text-white">
              Bisnis
            </Link>
            <Link to="/entertainment" className="block px-4 py-3 lg:py-0 hover:text-white">
              Hiburan
            </Link>
            <Link to="/health" className="block px-4 py-3 lg:py-0 hover:text-white">
              Kesehatan
            </Link>
            <Link to="/science" className="block px-4 py-3 lg:py-0 hover:text-white">
              Sains
            </Link>
            <Link to="/sports" className="block px-4 py-3 lg:py-0 hover:text-white">
              Olahraga
            </Link>
            <Link to="/technology" className="block px-4 py-3 lg:py-0 hover:text-white">
              Teknologi
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row">
            <button className="block px-4 py-3 lg:py-0 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
