import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Icon } from "../ui";
import clsx from "clsx";

type SpecialOfferList = {
  icon: string;
  offer: string;
  id: string;
};

type SpecialOfferListProps = { className?: string };

export const SpecialOfferList = ({ className }: SpecialOfferListProps) => {
  const { t } = useTranslation("translation", { keyPrefix: "HomePage.header" });

  const specialOffer = t("SpecialOffer", {
    returnObjects: true,
  }) as SpecialOfferList[];

  return (
    <ul className={clsx("flex gap-4 mr-auto", className)}>
      {specialOffer.map(({ icon, offer, id }) => {
        return (
          <li key={id}>
            <Link to="" className="flex gap-2.5 ">
              <Icon name={icon} />

              <p className={clsx("text-ms", className && "!text-base")}>
                {offer}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
