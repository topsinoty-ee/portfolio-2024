/** @format */

import { ComponentType } from 'react';
import Navbar from '../components/Navbar';

export const withNavbar = <P extends object>(
  WrappedPageComponent: ComponentType<P>
) => {
  return (props: P) => {
    return (
      <>
        <Navbar
          navlinks={[
            { src: '/', children: 'home' },
            { src: '/page', children: 'page' },
            { src: '/page2', children: 'page 2' },
            { src: '/page3', children: 'page 3' },
          ]}
        />
        <WrappedPageComponent {...(props as P)} />
      </>
    );
  };
};
