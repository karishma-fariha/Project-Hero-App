import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AboutApps from '../Pages/AboutApps/AboutApps';
import CardDetails from '../Pages/CardDetails/CardDetails';



export const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index: true,
            loader: ()=>fetch('/home.json'),
            path: '/',
            Component: Home
        },
        {
            path: "/aboutApps",
            loader: ()=>fetch('/allApps.json'),
            Component:AboutApps
        },
        {
          path:"/cardDetails/:id",
          loader: ()=>fetch('/allApps.json'),
          Component: CardDetails
        }
    ]
  },
]);