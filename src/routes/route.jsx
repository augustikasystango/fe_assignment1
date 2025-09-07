import About from "../pages/About";
import ContactUs from "../pages/ContactUs";

import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about",
    name: "About",
    element: <About />,
  },

  {
    path: "/contact",
    name: "Contact Us",
    element: <ContactUs />,
  },
];

export default routes;


