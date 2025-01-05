import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Layout } from "./components/Layout";
import { CatalogPage } from "./pages/CatalogPage";
import { AboutAsPage } from "./pages/AboutAsPage";
import { PaymentPage } from "./pages/PaymentPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <div>sorry, now it is not working</div>,
      children: [
        {
          index: true,
          element: <MainPage />,
          errorElement: <div>sorry, now it is not working</div>,
        },
        {
          path: "catalog",
          element: <CatalogPage />,
          errorElement: <div>sorry, now it is not working</div>,
        },
        {
          path: "aboutas",
          element: <AboutAsPage />,
          errorElement: <div>sorry, now it is not working</div>,
        },
        {
          path: "payment",
          element: <PaymentPage />,
          errorElement: <div>sorr,now it is not working</div>,
        },
      ],
    },
  ]);
  return router;
};
export const routers = App();
