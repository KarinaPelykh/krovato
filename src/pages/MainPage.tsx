import { Header } from "../components/Header/Header";
import { PopularGoodsSection } from "../components/popular-goods/PopularGoodsSection";
import { CategoriesSection } from "../components/popular-section/CategoriesSection";

export const MainPage = () => (
  <>
    <Header />
    <CategoriesSection />
    <PopularGoodsSection />
  </>
);
