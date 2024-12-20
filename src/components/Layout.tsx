import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { Header } from "./Header/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
