import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import ConsentPopup from "../components/ConsentPopUp/ConsentPopUp";

export default function Layout() {
  return (
    <div>
      <ConsentPopup />
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
