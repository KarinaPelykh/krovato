import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Icon } from "../../ui";
import clsx from "clsx";

const icons = ["whatsapp", "telegram", "viber"];

type ContactList = {
  className?: string;
  textClassName?: string;
  listClassName?: string;
};
export const ContactList = ({
  listClassName,
  className,
  textClassName,
}: ContactList) => {
  const { t } = useTranslation("translation", { keyPrefix: "HomePage.header" });

  return (
    <div
      className={clsx(
        "flex gap-2.5 ml-auto mr-[30px] items-center",
        listClassName
      )}
    >
      <p className={clsx("text-base", textClassName)}>{t("text")}</p>
      <ul
        className={clsx(
          "flex gap-2.5 ml-auto mr-[30px] items-center",
          listClassName && "!mr-auto !mb-[23px] desktop:m-0 "
        )}
      >
        {icons.map((el, i) => (
          <li key={i}>
            <Link to="/">
              <Icon className={clsx("size-[30px]", className)} name={el} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
