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
            { src: 'https://github.com/topsinoty-ee/portfolio-2024', children: 'View the repo' },
          ]}
        />
        <PageTitle title={title}/>
        <WrappedPageComponent {...(props as P)} />
      </>
    );
  };
};