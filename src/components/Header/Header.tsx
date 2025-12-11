import NavBtns from "./NavBtns";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full fixed top-0 left-0 h-20 bg-white z-40 ">
      <div className="w-9/10 my-0 mx-auto h-full flex justify-between">
        <NavLink to={"/"} className="my-auto">
          <h1 className="text-3xl font-bold text-c-primary">LMoses</h1>
        </NavLink>
        <NavBtns /> {/* Btns */}
        {/* Optns */}
      </div>
    </div>
  );
};

export default Header;
