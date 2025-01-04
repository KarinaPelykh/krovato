import { useTranslation } from "react-i18next";

export const AboutAsSection = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "AboutAsPage.about-as-section",
  });
  return (
    <section className="pb-[60px] bg-white desktop:bg-transparent">
      <div className="container py-10 h-[524px] relative z-10 tablet:flex tablet:items-center  desktop:bg-gradient-to-r desktop:from-white desktop:to-transparent desktop:h-[454px]">
        <div className=" text-black desktop:w-[450px]  text-center desktop:text-start ">
          <h1 className="font-semibold text-1xl mb-[30px] desktop:text-2xl">
            {t("title")}
          </h1>
          <p className=" text-xl font-semibold mb-5 desktop:text-lg">
            {t("subtitle")}
          </p>
          <p className="text-black desktop:text-xl desktop:font-semibold">
            {t("description")}
          </p>
        </div>

        <div className="absolute top-[70px] left-0  -z-10 w-full  h-[520px] bg-[url('/bg-about-as.png')] bg-contain  bg-no-repeat   desktop:bg-[url('/img-about-1.png')]  desktop:top-0 desktop:h-[454px]"></div>
      </div>
    </section>
  );
};
