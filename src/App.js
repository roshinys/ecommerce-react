import { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import RootLayout from "./components/Root/Root";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import ProductDetail from "./components/Product/ProductDetail/ProductDetail";
import AddProduct from "./admin/AddProduct/AddProduct";
import Login from "./components/Login/Login";
import AuthContext from "./store/Auth/auth-context";

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
        element: (
          <RequireAuth redirectTo="/login">
            <Shop />
          </RequireAuth>
        ),
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
        element: (
          <RequireAuth redirectTo="/login">
            <ProductDetail />
          </RequireAuth>
        ),
      },
      {
        path: "/addProduct",
        element: (
          <RequireAuth redirectTo="/login">
            <AddProduct />
          </RequireAuth>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

function RequireAuth(props) {
  const authCtx = useContext(AuthContext);
  return authCtx.isLoggedIn ? (
    <>{props.children}</>
  ) : (
    <Navigate to={props.redirectTo} />
  );
}

export default App;
