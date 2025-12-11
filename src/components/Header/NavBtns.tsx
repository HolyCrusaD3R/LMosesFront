import NavBtn from "../UI/NavBtn";

const NavBtns = () => {
  return (
    <div className="flex">
      <NavBtn to="/chat">Chat With AI</NavBtn>
      <NavBtn to="/news">News</NavBtn>
      <NavBtn to="/aboutus">About Us</NavBtn>
    </div>
  );
};

export default NavBtns;
