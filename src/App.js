import Header from "./components/Layout/Header/Header";
import PageInfo from "./components/Layout/PageInfo/PageInfo";
import Product from "./components/Product/Product/Product";
import CartContextProvider from "./store/Cart/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <PageInfo />
      <Product />
    </CartContextProvider>
  );
}

export default App;
