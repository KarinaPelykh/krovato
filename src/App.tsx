import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Layout } from "./components/Layout";
import { BlogPage } from "./pages/Blog";
import { AboutAsPage } from "./pages/AboutAsPage";
import { PaymentPage } from "./pages/PaymentPage";
import { DeliveryPage } from "./pages/DeliveryPage";
import { ReviewsPage } from "./pages/ReviewsPage";
import { ContactPage } from "./pages/ContactPage";
import { ProductPage } from "./pages/ProductPage";
import { BlogPost } from "./components/blog-post/BlogPost";
import { ProductInfo } from "./pages/ProductInfo";

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
          path: "blog",
          element: <BlogPage />,
          errorElement: <div>sorry, now it is not working</div>,
        },
        {
          path: "blog/:id",
          element: <BlogPost />,
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
          errorElement: <div>sorry,now it is not working</div>,
        },
        {
          path: "delivery",
          element: <DeliveryPage />,
          errorElement: <div>sorry,now it is not working</div>,
        },
        {
          path: "reviews",
          element: <ReviewsPage />,
          errorElement: <div>sorry,now it is not working</div>,
        },
        {
          path: "contact",
          element: <ContactPage />,
          errorElement: <div>sorry,now it is not working</div>,
        },
        {
          path: "product",
          element: <ProductPage />,
          errorElement: <div>sorry,now it is not working</div>,
        },
        {
          path: "product/:id",
          element: <ProductInfo />,
          errorElement: <div>sorry,now it is not working</div>,
        },
      ],
    },
  ]);
  return router;
};
export const routers = App();
