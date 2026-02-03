import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./day-2/App";
import Body from "../componentday-1/Body";
import About from "./About";
import Contact from "./Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      }

    ]
   
  },
]);

export default router
