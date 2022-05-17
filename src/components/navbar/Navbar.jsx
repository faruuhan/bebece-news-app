import React, { useState } from "react";
import { Burger } from "@mantine/core";

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <div className="bg-teal-600 py-3">
      <div className="px-4 flex items-center lg:px-0 lg:container mx-auto text-teal-200">
        <div className="flex items-center justify-between pr-4">
          <div className="font-normal">
            BEBECE
            <br />
            <span className="font-bold text-xl">NEWS</span>
          </div>
          <div className="">
            <Burger className="block lg:hidden" opened={opened} onClick={() => setOpened((o) => !o)} title={title} />
          </div>
        </div>

        <div className="flex justify-between w-full">
          <div className="flex">
            <a href="#" className="block px-4 hover:text-white">
              Bisnis
            </a>
            <a href="#" className="block px-4 hover:text-white">
              Hiburan
            </a>
            <a href="#" className="block px-4 hover:text-white">
              Kesehatan
            </a>
            <a href="#" className="block px-4 hover:text-white">
              Sains
            </a>
            <a href="#" className="block px-4 hover:text-white">
              Teknologi
            </a>
          </div>
          <div className="flex">
            <a href="#" className="block px-4 hover:text-white">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
