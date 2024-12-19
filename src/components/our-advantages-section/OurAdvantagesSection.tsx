import { useState } from "react";
import { Button, Icon } from "../ui";
import clsx from "clsx";
import { OurServicesList } from "./OurServicesList";
import { sizeWindow } from "../../hook/sizeWIndow";
import { useTranslation } from "react-i18next";
export const OurAdvantagesSection = () => {
  const [isOpen, setOpen] = useState(false);

  const { size } = sizeWindow();

  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.our-advantages-section",
  });

  return (
    <section className="pt-10 desktop:pt-[70px] bg-white">
      <div className="container">
        <div className="mx-auto desktop:max-w-[1070px] relative">
          <h2 className="text-black text-3xl  text-start font-semibold mb-10 desktop:mb-[30px] desktop:text-2xl desktop:text-center">
            {t("title")}
          </h2>

          <div
            className={clsx(
              isOpen
                ? "overflow-auto h-auto"
                : "  overflow-hidden !whitespace-wrap  text-ellipsis h-[350px] "
            )}
          >
            <p className="text-black  text-base desktop:mb-5">
              {t("text_1")}
              {isOpen || size >= 1440 ? <span>{t("text_2")}</span> : "..."}
            </p>
            <div
              className={clsx(
                "absolute  z-0 -bottom-12 left-0  h-[145px] desktop:-bottom-10 w-full",
                isOpen ? "bg-transparent" : "bg-md"
              )}
            ></div>
            <Button
              className={clsx(
                "absolute -bottom-12  left-[45%] z-10  desktop:-bottom-12  desktop:left-[50%]    transition-all duration-300",
                isOpen ? "rotate-180" : "rotate-0"
              )}
              onClick={() => setOpen(!isOpen)}
            >
              <Icon className="size-[60px]" name="arrow-down" />
            </Button>
          </div>
        </div>
        <OurServicesList />
      </div>
    </section>
  );
};
