import { useTranslation } from "react-i18next";
import icon from "/sprite.svg";
import { Link } from "react-router-dom";

const icons = ["whatsapp", "telegram", "viber"];

export const ContactList = () => {
  const { t } = useTranslation("translation", { keyPrefix: "HomePage.header" });

  return (
    <ul className="flex gap-2.5 ml-auto mr-[30px] items-center">
      <p className="text-base">{t("text")}</p>
      {icons.map((el, i) => (
        <li key={i}>
          <Link to="/">
            <svg className="size-[30px]">
              <use xlinkHref={icon + `#${el}`}></use>
            </svg>
          </Link>
        </li>
      ))}
    </ul>
  );
};
