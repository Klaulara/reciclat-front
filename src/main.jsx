import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './assets/components/Layout';
import Index from './assets/pages/Index';
import Blog from './assets/pages/Blog';
import Information from './assets/pages/Information';
import { loader as infoLoader } from './assets/data/recicleLibrary';
import InfoBins, { loader as binsId } from './assets/pages/InfoBins';
import { loader as blogLoader } from './assets/data/blogData';
import Puntos from './assets/pages/Puntos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: '/blog',
        element: <Blog />,
        loader: blogLoader
      },
      {
        path: '/informacion',
        element: <Information />,
        loader: infoLoader
      },
      {
        path: '/informacion/:id/bins',
        element: <InfoBins />,
        loader: binsId,
      },
      {
        path: '/puntos',
        element: <Puntos />,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
