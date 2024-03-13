import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/client/Home";
import About from "../pages/client/About";
import ProductDetail from "../pages/client/ProductDetail";
import Product from "../pages/client/Product";
import Contact from "../pages/client/Contact";
import Checkout from "../pages/client/Checkout";
import Cart from "../pages/client/Cart";
import RootLayout from "../pages/client/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="home" element={<Home />}></Route>
      <Route path="shop" element={<Product />} />
      <Route path="shop/:id" element={<ProductDetail />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);

const Routing = () => <RouterProvider router={router} />;

export default Routing;
