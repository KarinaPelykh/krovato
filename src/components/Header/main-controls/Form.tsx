import { useTranslation } from "react-i18next";
import { Button, Icon } from "../../ui";
import clsx from "clsx";

type FormProps = {
  className?: string;
};

export const Form = ({ className }: FormProps) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.header",
  });

  return (
    <form className={clsx("hidden desktop:flex   relative w-fit", className)}>
      <input
        placeholder={t("placeholder")}
        className=" outline-none w-full text-base py-2.5 px-[15px] rounded-xs border border-gray-light desktop:w-[421px]"
      />
      <Button className="absolute top-3.5 right-[15px]  ">
        <Icon name="search" />
      </Button>
    </form>
  );
};
