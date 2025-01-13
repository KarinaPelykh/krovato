import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { Header } from "./Header/Header";
import { Breadcrumb } from "./Breadcrumb";
import { OurServicesList } from "./our-advantages-section/OurServicesList";

export const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="container mb-10 desktop:mb-[30px] desktop:mt-5">
        <Breadcrumb />
      </div>
      <main>
        <Outlet />
        {location.pathname === "/" ? null : <OurServicesList />}
      </main>
      <Footer />
    </>
  );
};
