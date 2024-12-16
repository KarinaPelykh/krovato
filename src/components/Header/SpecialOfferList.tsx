import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Icon } from "../ui";

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
              <Icon name={icon} />

              <p className="text-ms">{offer}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
