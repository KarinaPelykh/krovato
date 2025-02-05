import { BlogPage } from "./pages/Blog";
import { AboutAsPage } from "./pages/AboutAsPage";
import { PaymentPage } from "./pages/PaymentPage";
import { DeliveryPage } from "./pages/DeliveryPage";
import { ReviewsPage } from "./pages/ReviewsPage";
import { ContactPage } from "./pages/ContactPage";
import { ProductPage } from "./pages/ProductPage";
import { BlogPost } from "./components/blog-post/BlogPost";
import { ProductInfo } from "./pages/ProductInfo";
import { MainPage } from "./pages/MainPage";

const handelError = () => <div>sorry, now it is not working</div>;

const routerInformation = [
  { index: true, element: <MainPage /> },
  { path: "blog", element: <BlogPage /> },
  { path: "blog/:id", element: <BlogPost /> },
  { path: "aboutas", element: <AboutAsPage /> },
  { path: "payment", element: <PaymentPage /> },
  { path: "delivery", element: <DeliveryPage /> },
  { path: "reviews", element: <ReviewsPage /> },
  { path: "contact", element: <ContactPage /> },
  { path: "product", element: <ProductPage /> },
  { path: "product/:id", element: <ProductInfo /> },
];

export const routes = routerInformation.map((route) => ({
  ...route,
  handelError,
}));
