import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PageNotFound from "./components/routes/PageNotFound.tsx";
import Home from "./components/routes/Home.tsx";
import AppLanding from "./components/routes/AppLanding.tsx";
import Membership from "./components/routes/Membership.tsx";
import OurStory from "./components/routes/OurStory.tsx";
import Profile from "./components/routes/Profile.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <PageNotFound/>
    },
    {
        path: 'app',
        element: <AppLanding/>
    },
    {
        path: 'membership',
        element: <Membership/>
    },
    {
        path: 'story',
        element: <OurStory/>
    },
    {
        path: 'profile',
        element: <Profile/>
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <RouterProvider router={router}/>
      </ThemeProvider>
  </React.StrictMode>,
)
