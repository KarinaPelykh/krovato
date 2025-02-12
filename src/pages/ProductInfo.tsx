import {
  AdvantageList,
  DescriptionProduct,
  InfoOfProduct,
} from "../block-pages/product-info";
import { AdditionProduct } from "../components/ui/addition-products/AdditionProduct";

export const ProductInfo = () => (
  <>
    <InfoOfProduct />
    <AdvantageList />
    <DescriptionProduct />
    <AdditionProduct title="Відмінно доповнюють спальню тумба або комод" />
    <AdditionProduct title="  Рекомендовані товари" />
  </>
);
