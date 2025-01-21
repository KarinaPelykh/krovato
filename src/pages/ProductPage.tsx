import { useTranslation } from "react-i18next";
import {
  FaqSection,
  OurAdvantagesSection,
  ReviewsSection,
} from "../components";
import { ProductsSection } from "../components/products/ProductsSection";
import { SelectedProducts } from "../components/selected-products/Selected-Products";
type ListQuestion = {
  question: string;
  answer: string;
};

export const ProductPage = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "DeliveryPage",
  });
  const listQuestion = t("deliver-faq-section.list-question", {
    returnObjects: true,
  }) as ListQuestion[];
  return (
    <>
      <ProductsSection />
      <SelectedProducts />
      <OurAdvantagesSection className="hidden" />
      <ReviewsSection />
      <FaqSection
        title={t("deliver-faq-section.title")}
        listQuestion={listQuestion}
        isProductPage={true}
      />
    </>
  );
};
