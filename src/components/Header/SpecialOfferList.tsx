import { Link } from "react-router-dom";
import icons from "/sprite.svg";
import { useTranslation } from "react-i18next";

type SpecialOfferList = {
  icon: string;
  offer: string;
  id: string;
};

export const SpecialOfferList = () => {
  const { t } = useTranslation("translation", { keyPrefix: "HomePage.header" });

  const specialOffer = t("SpecialOffer", {
    returnObjects: true,
  }) as SpecialOfferList[];

  return (
    <ul className="flex gap-4 mr-auto">
      {specialOffer.map(({ icon, offer, id }) => {
        return (
          <li key={id}>
            <Link to="" className="flex gap-2.5 ">
              <svg className="size-6">
                <use xlinkHref={icons + `#${icon}`}></use>
              </svg>
              <p className="text-ms">{offer}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
