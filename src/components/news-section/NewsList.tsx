import { useTranslation } from "react-i18next";
import { Button, Icon } from "../ui";
import { Link } from "react-router-dom";

export const NewsList = () => {
  const list = [1, 2, 3];

  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.news-section",
  });

  return (
    <>
      <ul className="flex gap-10  flex-wrap desktop:flex-nowrap mb-[20px] desktop:mb-0">
        {list.map((i) => (
          <li
            className="desktop:h-[454px] overflow-hidden  border-x-gray-light  group border-b-gray-light border-t-0    border-t-transparent   border  rounded-xs shadow-1xl  w-[calc((100% - 30px)/3)] "
            key={i}
          >
            <img
              src="/furniture.webp"
              alt="news"
              className="rounded-xs transition-all ease-[cubic-bezier(0.645, 0.045, 0.355, 1)]  duration-500  desktop:group-hover:object-cover  desktop:group-hover:h-[454px] desktop:group-hover:w-[410px]  desktop:w-[410px] desktop:h-[270px] h-auto w-full object-cover block  mobile:h-[270px]"
            />

            <div className="transition-all  duration-500 ease-[cubic-bezier(0.645, 0.045, 0.355, 1)] rounded-xs rounded-t-none  p-[30px]">
              <h3 className="text-black text-lg mb-[30px]">{t("subTitle")}</h3>
              <Link
                to="/"
                className="text-yellow text-ms flex gap-2.5 items-center"
              >
                {t("linkForDetails")}
                <Icon name="arrow-1" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <Button className="bg-yellow p-[13px] flex gap-[12px] justify-center w-full items-center h-[50px] text-white text-ms rounded-xs tablet:hidden">
        <Icon className="fill-white" name="read" />
        {t("linkBlog")}
      </Button>
    </>
  );
};
