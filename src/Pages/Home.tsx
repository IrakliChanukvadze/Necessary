import React from "react";
import SideBar from "../Components/SideBar";
import Main from "../Components/Main";

const Home = () => {
  return (
    <div className="flex h-full">
      <SideBar />
      <Main />
    </div>
  );
};

export default Home;
