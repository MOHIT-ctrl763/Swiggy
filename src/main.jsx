import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './componentday-1/App'
import { RouterProvider } from 'react-router-dom'
import router from './Componentday-2/day-2/Router'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
