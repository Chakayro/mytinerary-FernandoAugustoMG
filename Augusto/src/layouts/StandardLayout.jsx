import Side from "../components/Side";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import { Outlet } from "react-router-dom";

function StandardLayout() {
  return (
    <>
      <Outlet />
      <Side />
      <Navbar />

      <main>
        <Main />
      </main>
    </>
  );
}

export default StandardLayout;
