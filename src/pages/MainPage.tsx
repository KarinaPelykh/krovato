// import { ReviewsSection } from '../block-pages/about-as'

import { OurAdvantagesSection } from '../block-pages/home/our-advantages-section/OurAdvantagesSection'
import { NewsSection } from '../block/home/news-section/NewsSection'
import { PopularCategories } from '../block/home/popular-category/PopularCategories'
import { PopularGoodsSection } from '../block/home/popular-goods/PopularGoodsSection'
import { SaleSection } from '../block/home/sale-section/SaleSection'

export const MainPage = () => (
  <>
    <PopularCategories />
    <PopularGoodsSection />
    <SaleSection />
    {/* <ReviewsSection /> */}
    <NewsSection />
    <OurAdvantagesSection />
  </>
)
