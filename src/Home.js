import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { GlobalContext } from "./App";
import { AppContext } from "./App";

const Home = () => {
  const { setIsModalOpen } = GlobalContext();
  const { isSideBarOpen, setIsSideBarOpen } = GlobalContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={() => setIsSideBarOpen(true)}>
        <FaBars />
      </button>
      <button className="btn" onClick={() => setIsModalOpen(true)}>
        Show Modal
      </button>
    </main>
  );
};

export default Home;
