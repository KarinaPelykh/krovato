import { useTranslation } from "react-i18next";
import { FaqList } from "./FaqList";

type FaqList = {
  question: string;
  answer: string;
};

export const FaqSection = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "PaymentPage.faq-section",
  });

  const list = t("list-question", {
    returnObjects: true,
  }) as FaqList[];

  return (
    <section>
      <div className="container">
        <h2 className="text-black font-semibold text-1xl desktop:text-2xl mb-10">
          {t("title")}
        </h2>
        <ul className="flex flex-col gap-[15px]">
          {list.map(({ question, answer }, i) => (
            <FaqList key={i} question={question} answer={answer} />
          ))}
        </ul>
      </div>
    </section>
  );
};
