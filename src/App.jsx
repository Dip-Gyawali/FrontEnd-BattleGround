import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Content from './Components/Content';
import Html from './Components/Html';
import Css from './Components/Css';
import Js from './Components/Js'

const route = createBrowserRouter([
  {
    path: '/',
    element: <Content/>,
    children:[
      {
        path: '/',
        element:<Html/>
      },
      {
        path: '/css',
        element:<Css/>
      },
      {
        path: '/js',
        element:<Js/>
      }
    ]
  },
]);
export default function App() {
  return <RouterProvider router={route}/>
}
