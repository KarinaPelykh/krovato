import { Header } from "../components/Header/Header";
import { CategoriesSection } from "../components/popular-category-section/CategoriesSection";
import { PopularGoodsSection } from "../components/popular-goods-section/PopularGoodsSection";
import { SaleSection } from "../components/sale-section/SaleSection";

export const MainPage = () => (
  <>
    <Header />
    <CategoriesSection />
    <PopularGoodsSection />
    <SaleSection />
  </>
);
