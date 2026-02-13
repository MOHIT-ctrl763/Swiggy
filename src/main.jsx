import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './componentday-1/App'
import { RouterProvider } from 'react-router-dom'
import router from './Componetday-3/Router'
import './Componetday-3/index.css'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
