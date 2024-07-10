/** @format */

import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/ErrorPage';

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: '/',
          element: <Home />,
        },
        {
          path:'*',
          element: <Error />,
        }
      ])}
    />
  );
}

export default App;
