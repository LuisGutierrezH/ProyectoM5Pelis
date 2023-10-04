import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './home/Home.jsx'
import Movies from './movies/movies.jsx';
import DetailMovie from './movies/detailMovie/detailMovie.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <p>Not found</p>,
    children: [
      {
        path: "/",
        element: <p>Estrenos 2023</p>,
      },
      {
        path: "/comedia",
        element: <Movies genero="comedia" key={"comedia"} />,
      },
      {
        path: "/independientes",
        element: <Movies genero="independientes" key={"independientes"} />,
      }
    ],
  },
  {
    path: ":genero/:pelicula",
    element: <DetailMovie key={1} />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

