import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Icon } from "../ui";

export const CategoryItem = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.categories-section",
  });

  return (
    <li className="relative bg-white w-full mobile:w-[180px] h-[240px]  desktop:w-[250px] desktop:h-[300px] rounded-xs">
      <div className="flex justify-between items-center  desktop:mb-[60px] p-[15px]  desktop:p-5">
        <span className="text-ms  desktop:mr-[126px] desktop:text-xl text-black">
          {t("category")}
        </span>
        <span className="text-ms  desktop:text-xl text-gray-light">54</span>
      </div>
      <div className="bg-white-light  rounded-t-full h-[80px]  desktop:h-[192px] "></div>
      <img
        src="/img.png"
        className="absolute  top-0   h-[240px] desktop:top-[11px]    desktop:h-[300px]"
      />
      <Link to="/" className="absolute right-5 bottom-5">
        <Icon className="size-[50px]" name="arrow" />
      </Link>
    </li>
  );
};
