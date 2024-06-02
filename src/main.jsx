import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound404 from "./pages/error/NotFound404.jsx";
import Profile from "./pages/Profile.jsx";
import Diary from "./pages/Diary.jsx";
import Guest from "./pages/Guest.jsx";
import MainPage from "./pages/MainPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound404 />,
        children: [
            { path: "/", element: <MainPage /> },
        ]
    },
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound404 />,
        children: [
            { path: "/profile", element: <Profile /> },
        ]
    },
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound404 />,
        children: [
            { path: "/diary", element: <Diary /> },
        ]
    },
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound404 />,
        children: [
            { path: "/guest", element: <Guest /> },
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
