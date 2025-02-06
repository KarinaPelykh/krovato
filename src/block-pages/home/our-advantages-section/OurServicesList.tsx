import { useTranslation } from "react-i18next";
import { Icon } from "../../../components/ui";

type List = { icon: string; text: string };

export const OurServicesList = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.our-advantages-section",
  });
  const list = t("advantage-list", {
    returnObjects: true,
  }) as List[];

  return (
    <ul className="pt-[60px]  pb-10 desktop:pb-[70px]   flex items-center justify-center flex-wrap gap-x-2.5 gap-y-10 text-center desktop:gap-5 desktop:flex-row">
      {list.map(({ icon, text }, i) => (
        <li
          className="w-[141px] flex flex-col  justify-center items-center desktop:w-fit desktop:flex-row desktop:gap-5"
          key={i}
        >
          <Icon
            isScenery={true}
            name={icon}
            className="!size-20 mb-[5px] desktop:mb-0"
          />
          <p className="text-black desktop:w-[200px] font-semibold">{text}</p>
        </li>
      ))}
    </ul>
  );
};
