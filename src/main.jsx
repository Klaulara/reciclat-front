import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './assets/components/Layout';
import Index from './assets/pages/Index';
import Blog from './assets/pages/Blog';
import Information from './assets/pages/Information';
import { loader as infoLoader } from './assets/utils/recicleLibrary'

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
        element: <Blog />
      },
      {
        path: '/informacion',
        element: <Information />,
        loader: infoLoader
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
