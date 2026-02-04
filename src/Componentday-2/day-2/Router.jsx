import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./App";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import RestaurantMenu from "./RestuarentMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export default router;
