import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Layout } from "./components/Layout";
import { CategoryPAge } from "./pages/CategoryPage";

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
          path: "category",
          element: <CategoryPAge />,
          errorElement: <div>sorry, now it is not working</div>,
        },
      ],
    },
  ]);
  return router;
};
export const routers = App();
