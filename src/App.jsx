import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Room from './Components/Room.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/room/:roomid',
      element: <Room />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
