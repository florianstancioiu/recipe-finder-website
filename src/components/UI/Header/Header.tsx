import { useState, useEffect } from "react";
import LogoSvg from "../../../images/logo.svg?react";
import HamburgerMenuSvg from "../../../images/icon-hamburger-menu.svg?react";
import Menu from "../Menu/Menu";
import { NavLink, useLocation } from "react-router";

const Header = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const onClickHandler = () => {
    setShowMenu((val) => !val);
  };

  // hide the menu when the location changes
  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  return (
    <header className="border-red border-b border-neutral-300 p-4 ">
      <div className="flex justify-between items-center relative">
        <NavLink to="/">
          <LogoSvg className="cursor-pointer" />
        </NavLink>
        <div
          onClick={onClickHandler}
          className="bg-neutral-300 h-10 w-10 grid place-content-center rounded cursor-pointer"
        >
          <HamburgerMenuSvg />
        </div>
        {showMenu && <Menu />}
      </div>
    </header>
  );
};

export default Header;
