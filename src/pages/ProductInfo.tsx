import { DescriptionProduct } from "../components/description-product/DescriptionProduct";
import { InfoOfProduct } from "../components/info-of-product/InfoOfProduct";
import { AdditionProduct } from "../components/ui/addition-products/AdditionProduct";

export const ProductInfo = () => (
  <>
    <InfoOfProduct />
    <DescriptionProduct />
    <AdditionProduct title="Відмінно доповнюють спальню тумба або комод" />
    <AdditionProduct title="  Рекомендовані товари" />
  </>
);
