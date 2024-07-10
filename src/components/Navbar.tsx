/** @format */

import { NavLink } from 'react-router-dom';
import { Logo } from './Logo';
import NavLinks, { NavlinkProp } from './Navlinks';

interface NavbarProps {
  navlinks: NavlinkProp[];
}
const Navbar: React.FC<NavbarProps> = ({ navlinks }) => {
  return (
    <header className="navbar bg-base-200 items-center ease-in duration-300 transition-all top-0 z-[999] sticky">
      <div className="flex-1">
        <NavLink to={navlinks[0].src}>
          <Logo />
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="sm:hidden menu menu-vertical px-1">
          <NavLinks navlinks={navlinks} />
        </ul>
        <ul className="sm:block hidden menu menu-horizontal">
          <li>
            <details>
              <summary>Menu</summary>
              <NavLinks navlinks={navlinks} />
            </details>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
