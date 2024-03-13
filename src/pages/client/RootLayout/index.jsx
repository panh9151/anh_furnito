import { Outlet } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const RootLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default RootLayout;
