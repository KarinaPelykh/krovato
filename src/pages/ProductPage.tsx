import { useTranslation } from "react-i18next";
import {
  CategoriesSection,
  FaqSection,
  OurAdvantagesSection,
  ReviewsSection,
} from "../components";
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
      <CategoriesSection />
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
