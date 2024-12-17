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
      <ul className="flex gap-10 flex-wrap desktop:flex-nowrap mb-[20px] desktop:mb-0">
        {list.map((i) => (
          <li className="rounded-xs w-[calc((100% - 30px)/3)] m-0 p-0" key={i}>
            <img
              src="/furniture.webp"
              alt="news"
              className="rounded-t-xs  block w-full h-auto mobile:h-[270px] m-0 p-0 "
            />

            <div className="  rounded-xs rounded-t-none  border-x-gray-light border-b-gray-light border-t-0    border-t-transparent   border p-[30px]">
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
