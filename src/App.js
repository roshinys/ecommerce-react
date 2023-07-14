import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import RootLayout from "./components/Root/Root";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import ProductDetail from "./components/Product/ProductDetail/ProductDetail";
import AddProduct from "./admin/AddProduct/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
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
        path: "/shop/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
