import React from "react";
import Navbar from "../navbar/Navbar";

const Layout = (props) => {
  return (
    <main className="bg-slate-200 min-h-[100vh]">
      <Navbar />
      {props.children}
    </main>
  );
};

export default Layout;
