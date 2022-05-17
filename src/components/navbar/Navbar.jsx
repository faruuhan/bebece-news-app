import React, { useState } from "react";
import { Burger } from "@mantine/core";

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <div className="bg-cyan-500 py-3">
      <div className="px-4 lg:px-0 lg:container mx-auto text-neutral-100">
        <div className="flex justify-between">
          <div className="font-normal">
            BEBECE
            <br />
            <span className="font-bold text-xl">NEWS</span>
          </div>

          <div className="self-center block lg:hidden">
            <Burger color="white" opened={opened} onClick={() => setOpened((o) => !o)} title={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
