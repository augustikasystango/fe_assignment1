import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./components/ErrorPage"; 
import ContactUs from "./pages/ContactUs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,   
      errorElement: <ErrorPage />, 
      children: [
        { index: true, element: <Home /> }, 
        { path: "about", element: <About /> },
        { path: "contact", element: <ContactUs /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
