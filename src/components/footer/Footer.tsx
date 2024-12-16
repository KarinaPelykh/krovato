import { Link } from "react-router-dom";
import { ContactList } from "../Header/nav/ContactList";
import { Icon, Logo } from "../ui";
import { FooterInfo } from "./FooterInfo";
import { PhoneNumbers } from "./PhoneNumbers";

export const Footer = () => {
  const category = [
    "Ліжка",
    "Матраци",
    "М’які меблі",
    "Шафи",
    "Комоди",
    "Тумби",
    "Столи",
    "Меблеві стіни",
    "Кухні",
  ];

  return (
    <section className="bg-dark pt-10">
      <div className=" desktop:flex desktop:relative  desktop:justify-between container">
        <Logo
          nameLogo="logo-footer"
          className="!mb-10  flex flex-col items-center"
        />

        <div className="mb-10 desktop:flex desktop:gap-[83px]">
          <FooterInfo category={category} title="Категорії" />
          <FooterInfo category={category} title="Інформація" />
          <FooterInfo category={category} title="Клієнтам" />
        </div>
        <div className="flex flex-col items-center gap-2.5 mb-[30px] desktop:items-start desktop:gap-[30px]">
          <PhoneNumbers />

          <div className="flex gap-[15px] ">
            <Icon name="address" className=" size-[50px] hidden desktop:flex" />
            <p className="w-[148px] text-white text-xl font-semibold text-center desktop:w-[174px] desktop:text-start">
              м. Київ, провулок Ізяславський 52, поверх 2
            </p>
          </div>

          <div className="flex gap-[15px]">
            <Icon
              name="calendar"
              className=" size-[50px] hidden desktop:flex"
            />
            <p className="w-[178px] mb-[30px] text-white text-xl font-semibold mx-auto text-center desktop:text-start">
              Працюємо щодня з 9:00 до 18:00
            </p>
          </div>
        </div>

        <div className="desktop:absolute desktop:top-[133px] left-0">
          <div className="flex flex-col gap-2.5 mb-[30px] items-center desktop:items-start">
            <p className="text-white text-ms ">Приєднуйтесь:</p>
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
        <p className="text-gray text-m text-center">
          © KROVATO - Технології сну - 2022. Всі права захищені.
        </p>
      </div>
    </section>
  );
};
