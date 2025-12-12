import Link from "../Link/Link";
import { NavLink } from "react-router";

const Menu = () => {
  return (
    <div className="absolute left-0 top-14 z-10 w-full">
      <div className="bg-neutral-0 border border-neutral-300 rounded-xl p-2">
        <ul className="list-none">
          <li className="px-2 py-3">
            <NavLink to="/" className={`text-strong-950`}>
              Home
            </NavLink>
          </li>
          <li className="px-2 py-3">
            <NavLink to="/about" className={`text-strong-950`}>
              About
            </NavLink>
          </li>
          <li className="px-2 py-3">
            <NavLink to="/recipes" className={`text-strong-950`}>
              Recipes
            </NavLink>
          </li>
        </ul>
        <Link to="/recipes" className="w-full inline-block text-center">
          Browse recipes
        </Link>
      </div>
    </div>
  );
};

export default Menu;
