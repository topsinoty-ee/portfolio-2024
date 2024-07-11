/** @format */

import { ComponentType } from 'react';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle';

export const withNavbar = <P extends object>(
  WrappedPageComponent: ComponentType<P>,
  title:string
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
        <PageTitle title={title}/>
        <WrappedPageComponent {...(props as P)} />
      </>
    );
  };
};