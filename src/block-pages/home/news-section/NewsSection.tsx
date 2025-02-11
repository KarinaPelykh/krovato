import { NewsList } from "./NewsList";
import { useTranslation } from "react-i18next";
import { Link } from "../../../components";

export const NewsSection = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.news-section",
  });

  return (
    <section className="py-17  desktop:py-18">
      <div className="container">
        <div className=" desktop:flex  mb-10 desktop:gap-[30px]  desktop:items-center">
          <h2 className="text-black  text-1xl desktop:text-2xl">
            {t("title")}
          </h2>
          <Link to="/blog" linkClassName="hidden desktop:flex ">
            {t("linkBlog")}
          </Link>
        </div>

        <NewsList />
      </div>
    </section>
  );
};
