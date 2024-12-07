import { Link } from "react-router-dom";
import icon from "/sprite.svg";
import { useTranslation } from "react-i18next";

export const PopularList = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.categories-section",
  });

  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <ul className="grid  grid-rows-2 grid-cols-5  gap-x-2.5 gap-y-6">
      {list.map((i) => {
        return (
          <li
            key={i}
            className="relative bg-white w-[250px] h-[300px] rounded-[8px]"
          >
            <div className="flex  mb-[60px] p-5">
              <span className="mr-[126px] text-xl text-black">
                {t("category")}
              </span>{" "}
              <span className="text-xl text-gray-light">54</span>
            </div>
            <div className="bg-[#F8F8F8]  rounded-t-[100%]  h-[192px]"></div>
            <img src="/img.png" className="absolute top-[11px] h-[300px]" />
            <Link to="/" className="absolute right-5 bottom-5">
              <svg className="size-[50px]">
                <use xlinkHref={icon + "#arrow"}></use>
              </svg>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
