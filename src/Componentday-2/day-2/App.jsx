import Header from "./Header";
// import Body from "./Body";
// import About from "../About";
// import Contact from "../Contact";
// import Error from "../Error";
import Footer from "../Fotter";
// import { createBrowserRouter, Outlet } from "react-router-dom";
// import RestaurantMenu from "./RestaurantMenu";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout
