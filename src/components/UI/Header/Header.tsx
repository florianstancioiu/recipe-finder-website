import LogoSvg from "../../../images/logo.svg?react";
import HamburgerMenuSvg from "../../../images/icon-hamburger-menu.svg?react";

const Header = () => {
  return (
    <header className="border-red border-b border-neutral-300 p-4">
      <div className="flex justify-between items-center">
        <LogoSvg className="cursor-pointer" />
        <div className="bg-neutral-300 h-10 w-10 grid place-content-center rounded cursor-pointer">
          <HamburgerMenuSvg />
        </div>
      </div>
    </header>
  );
};

export default Header;
