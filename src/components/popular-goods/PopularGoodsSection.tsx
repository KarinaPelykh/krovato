import { Link } from "react-router-dom";
import icon from "/sprite.svg";
import { useTranslation } from "react-i18next";

export const PopularGoodsSection = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.header",
  });
  return (
    <section>
      <div className="container">
        <div className=" flex gap-[30px] items-center">
          <h2 className="text-black text-[40px] font-semibold">
            Найпопулярніші товари
          </h2>
          <Link to="/" className="text-yellow flex gap-[10px] items-center">
            Дивитись всі
            <svg className="size-6">
              <use xlinkHref={icon + "#arrow-1"}></use>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
