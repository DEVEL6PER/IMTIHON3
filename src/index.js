import React from 'react'
import ReactDOM from 'react-dom/client'
import UserProvider from './context/Context'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <UserProvider>
    <RouterProvider router={routes} />
  </UserProvider>
)
