import React, { useState } from "react";
import { Burger } from "@mantine/core";

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <div className="bg-teal-600 lg:py-3">
      <div className="flex flex-col lg:items-center lg:px-0 lg:container mx-auto text-teal-200 lg:flex-row">
        <div className="flex items-center justify-between px-4 py-4 border-b border-teal-500 lg:px-0 lg:py-0 lg:border-b-0">
          <div className="font-normal">
            BEBECE
            <br />
            <span className="font-bold text-xl">NEWS</span>
          </div>
          <div className="">
            <Burger color="#99f6e4" className="block lg:hidden" opened={opened} onClick={() => setOpened((o) => !o)} title={title} />
          </div>
        </div>

        <div className={`${opened ? "block" : "hidden"} lg:flex flex-col justify-between w-full lg:flex-row`}>
          <div className="flex flex-col lg:flex-row">
            <a href="#" className="block px-4 py-3 lg:py-0 hover:text-white">
              Bisnis
            </a>
            <a href="#" className="block px-4 py-3 lg:py-0 hover:text-white">
              Hiburan
            </a>
            <a href="#" className="block px-4 py-3 lg:py-0 hover:text-white">
              Kesehatan
            </a>
            <a href="#" className="block px-4 py-3 lg:py-0 hover:text-white">
              Sains
            </a>
            <a href="#" className="block px-4 py-3 lg:py-0 hover:text-white">
              Teknologi
            </a>
          </div>
          <div className="flex flex-col lg:flex-row">
            <a href="#" className="block px-4 py-3 lg:py-0 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
