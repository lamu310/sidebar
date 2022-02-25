import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
import React, { useContext, useState } from "react";

const AppContext = React.createContext();
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{ isModalOpen, setIsModalOpen, isSideBarOpen, setIsSideBarOpen }}
    >
      <>
        <Home />
        <Modal />
        <Sidebar />
      </>
    </AppContext.Provider>
  );
}
export const GlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext };
export default App;
