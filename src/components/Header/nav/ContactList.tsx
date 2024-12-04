import { useTranslation } from "react-i18next";
import icon from "/sprite.svg";
import { Link } from "react-router-dom";

const icons = ["whatsapp", "telegram", "viber"];

export const ContactLast = () => {
  const { t } = useTranslation("translation", { keyPrefix: "HomePage.header" });

  return (
    <ul className="flex gap-[10px] ml-auto mr-[30px] items-center">
      <p className="">{t("text")}</p>
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
