import { Link } from "react-router-dom";
import { ContactList } from "../Header/nav/ContactList";
import { Icon, Logo } from "../ui";
import { PhoneNumbers } from "./PhoneNumbers";
import { useTranslation } from "react-i18next";
import { FooterWrapperList } from "./FooterWrapperLists";

export const Footer = () => {
  const { t } = useTranslation("translation", { keyPrefix: "HomePage.footer" });

  return (
    <section className="bg-dark pt-10">
      <div className=" desktop:flex desktop:relative  desktop:justify-between container">
        <Logo
          nameLogo="logo-footer"
          className="!mb-10  flex flex-col items-center desktop:!mb-0"
        />

        <FooterWrapperList />
        <div className="flex flex-col items-center gap-[30px] mb-[30px] desktop:items-start  ">
          <PhoneNumbers />

          <div className=" desktop:flex desktop:gap-[15px] ">
            <Icon name="address" className=" size-[50px] hidden desktop:flex" />
            <p className="w-[148px] text-white text-xl font-semibold text-center desktop:w-[174px] desktop:text-start">
              {t("address")}
            </p>
          </div>

          <div className=" desktop:flex desktop:gap-[15px] ">
            <Icon
              name="calendar"
              className=" size-[50px] hidden desktop:flex"
            />
            <p className="w-[178px]  text-white text-xl font-semibold mx-auto text-center desktop:text-start">
              {t("schedule")}
            </p>
          </div>
        </div>

        <div className="desktop:absolute desktop:top-[133px] left-4">
          <div className="flex flex-col gap-2.5 mb-[30px] items-center desktop:items-start">
            <p className="text-white text-ms "> {t("joinAs")}</p>
            <div className="flex gap-2.5">
              <Link to="/">
                <Icon className="!size-10" name="facebook" />
              </Link>
              <Link to="/">
                <Icon className="!size-10" name="instagram" />
              </Link>
            </div>
          </div>
          <ContactList
            listClassName="  flex-col !m-0"
            className="size-[40px]"
            textClassName="text-white text-ms "
          />
        </div>
      </div>
      <div className="border  border-t-gray border-x-transparent border-b-transparent !p-5 w-full">
        <p className="text-gray text-m text-center">{t("askForAction")}</p>
      </div>
    </section>
  );
};
