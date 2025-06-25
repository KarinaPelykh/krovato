import {
  NewsSection,
  OurAdvantagesSection,
  ReviewsSection
} from '../block-pages/home'

import { PopularCategories } from '../block/home/popular-category/PopularCategories'
import { PopularGoodsSection } from '../block/home/popular-goods/PopularGoodsSection'
import { SaleSection } from '../block/home/sale-section/SaleSection'

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
