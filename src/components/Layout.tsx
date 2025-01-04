import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { Header } from "./Header/Header";
import { Breadcrumb } from "./Breadcrumb";

export const Layout = () => {
  return (
    <>
      <Header />
      <div className="container mb-10 desktop:mb-[30px] desktop:mt-5">
        <Breadcrumb />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
