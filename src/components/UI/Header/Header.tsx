import { useState, useEffect } from "react";
import LogoSvg from "../../../images/logo.svg?react";
import HamburgerMenuSvg from "../../../images/icon-hamburger-menu.svg?react";
import MobileMenu from "../Menu/MobileMenu";
import { NavLink, useLocation } from "react-router";
import Link from "../Link/Link";

const Header = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const onClickHandler = () => {
    setShowMenu((val) => !val);
  };

  // hide the menu when the location changes
  // scroll to the top of the page when the location changes
  useEffect(() => {
    setShowMenu(false);
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [location]);

  return (
    <header className="border-b border-neutral-300 p-4 md:pt-8 md:px-8 md:pb-5">
      <div className="flex justify-between items-center relative z-20 xl:hidden">
        <NavLink to="/">
          <LogoSvg className="cursor-pointer" />
        </NavLink>
        <div
          onClick={onClickHandler}
          className="bg-neutral-300 h-10 w-10 grid place-content-center rounded cursor-pointer xl:hidden"
        >
          <HamburgerMenuSvg />
        </div>
        {showMenu && <MobileMenu />}
      </div>
      <div className="hidden xl:flex justify-between items-center z-20 relative xl:max-w-dsktp-lg xl:mx-auto xl:px-16">
        <NavLink
          to="/"
          className={`focus-visible:shadow-focus-visible focus-visible:rounded-lg focus-visible:outline-none`}
        >
          <LogoSvg className="cursor-pointer" />
        </NavLink>
        <ul className="list-none flex justify-between items-center text-lg font-semibold">
          <li className="px-2 py-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-strong-950 border-b-4 border-orange-500 focus-visible:shadow-focus-visible focus-visible:rounded-lg focus-visible:outline-none"
                  : "text-strong-950 hover:border-b-4 hover:border-orange-500 focus-visible:shadow-focus-visible focus-visible:rounded-lg focus-visible:outline-none"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="px-2 py-3">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-strong-950 border-b-4 border-orange-500 focus-visible:shadow-focus-visible focus-visible:rounded-lg focus-visible:outline-none"
                  : "text-strong-950 hover:border-b-4 hover:border-orange-500 focus-visible:shadow-focus-visible focus-visible:rounded-lg focus-visible:outline-none"
              }
            >
              About
            </NavLink>
          </li>
          <li className="px-2 py-3">
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                isActive
                  ? "text-strong-950 border-b-4 border-orange-500 focus-visible:shadow-focus-visible focus-visible:rounded-lg focus-visible:outline-none"
                  : "text-strong-950 hover:border-b-4 hover:border-orange-500 focus-visible:shadow-focus-visible focus-visible:rounded-lg focus-visible:outline-none"
              }
            >
              Recipes
            </NavLink>
          </li>
        </ul>
        <Link to="/recipes" className="inline-block text-center px-4 py-3">
          Browse recipes
        </Link>
      </div>
    </header>
  );
};

export default Header;
