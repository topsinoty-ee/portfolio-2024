/** @format */

import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

export interface NavlinkProp {
  src: string;
  children: string;
}

interface NavlinksProp {
  navlinks: NavlinkProp[];
}

/**
 * The `NavLinks` component is a React functional component that renders a navigation bar with links
 * based on an array of `Navlink` objects.
 *
 * @component
 * @param {NavlinkProp[]} navlinks - An array of objects representing the navigation links. Each object
 * should have the following properties:
 *   - {string} src - The destination route for the NavLink.
 *   - {string} children - The text to be displayed within the NavLink.
 * @returns {ReactElement} The `NavLinks` component returns a `nav` element with a class name of "navlinks".
 * Inside the `nav` element, it maps over the array of `navlinks` and renders a `NavLink` component for each
 * `navlink` in the array. The `NavLink` component has a `key` prop set to the index of the `navlink`,
 * a `to` prop set to the `src` property of the `navlink`, and a `className` prop that dynamically generates
 * a class string based on the values of `isActive`, `isPending`, and `isTransitioning`. The content of the
 * `NavLink` is the `children` property of the `navlink`.
 */
const NavLinks: React.FC<NavlinksProp> = ({
  navlinks,
}: NavlinksProp): ReactElement => {
  return (
    <nav className="flex h-full px-2 justify-center items-center">
      {navlinks.map((navlink, index) => (
        <li key={navlink.src}>
          <NavLink
            to={navlink.src}
            children={navlink.children}
            key={index}
            className={({ isActive, isPending, isTransitioning }) =>
              [
                'capitalize transition- px-2 h-full self-center flex justify-center items-center hover:font-medium',
                isPending ? '' : '',
                isActive ? 'font-semibold ' : '',
                isTransitioning ? '' : '',
              ].join(' ')
            }
          />
        </li>
      ))}
    </nav>
  );
};

export default NavLinks;
