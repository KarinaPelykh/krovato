import { Link } from "react-router-dom";
import { NewsList } from "./NewsList";
import { Icon } from "../ui";
import { useTranslation } from "react-i18next";

export const NewsSection = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.news-section",
  });

  return (
    <section className="py-[60px]  desktop:py-[70px]">
      <div className="container">
        <div className=" desktop:flex  mb-10 desktop:gap-[30px]  desktop:items-center">
          <h2 className="text-black  text-1xl desktop:text-2xl">
            {t("title")}
          </h2>

          <Link
            to="/blog"
            className="text-yellow hidden desktop:flex gap-[10px] items-center"
          >
            {t("linkBlog")}

            <Icon className="fill-yellow" name="arrow-1" />
          </Link>
        </div>

        <NewsList />
      </div>
    </section>
  );
};
