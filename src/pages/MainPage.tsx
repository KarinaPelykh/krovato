import {
  NewsSection,
  OurAdvantagesSection,
  ReviewsSection,
  SaleSection
} from '../block-pages/home'

import { PopularCategories } from '../block/home/popular-category/PopularCategories'
import { PopularGoodsSection } from '../block/home/popular-goods/PopularGoodsSection'

export const MainPage = () => (
  <>
    <PopularCategories />
    <PopularGoodsSection />
    <SaleSection />
    <ReviewsSection />
    <NewsSection />
    <OurAdvantagesSection />
  </>
)
