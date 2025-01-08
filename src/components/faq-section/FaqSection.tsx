import { useTranslation } from "react-i18next";
import { FaqList } from "./FaqList";
import { sizeWindow } from "../../hook/sizeWIndow";

type FaqList = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  title: string;
  listQuestion: FaqList[];
};

export const FaqSection = ({ title, listQuestion }: FaqSectionProps) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "PaymentPage.faq-section",
  });

  const list = t("list-question", {
    returnObjects: true,
  }) as FaqList[];

  const { size } = sizeWindow();

  const isNotDesktop = size < 1440;

  return (
    <section className="pt-[60px] desktop:pt-[70px]">
      <div className="container">
        <h2 className="text-black font-semibold text-1xl desktop:text-2xl mb-10 text-center">
          {title && isNotDesktop ? title : t("title")}
        </h2>
        <ul className="flex flex-col gap-[15px]">
          {(listQuestion && isNotDesktop ? listQuestion : list).map(
            ({ question, answer }, i) => (
              <FaqList key={i} question={question} answer={answer} />
            )
          )}
        </ul>
      </div>
    </section>
  );
};
