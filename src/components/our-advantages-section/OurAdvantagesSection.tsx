import { useState } from "react";
import { Button, Icon } from "../ui";
import clsx from "clsx";

export const OurAdvantagesSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="pt-10 desktop:pt-[70px] bg-white">
      <div className="container">
        <div className="mx-auto desktop:max-w-[1070px] mb-[70px]">
          <h2 className="text-black text-3xl  text-start font-semibold mb-10 desktop:mb-[30px] desktop:text-2xl desktop:text-center">
            KROVATO - коли потрібні якісні меблі за доступною ціною!
          </h2>
          <div>
            <p className="text-black text-base desktop:mb-5">
              Якщо в пошуковий рядок браузера ввести запит: «Куплю ліжко, шафу,
              диван», система видасть сотні продавців, що спеціалізуються з
              продажу цього товару. Але далеко не всі магазини та сайти в
              інтернеті можуть запропонувати такий самий різноманітний
              асортимент, як наша компанія. Та й з нашими цінами конкурувати
              можуть мало хто. Адже товар ми отримуємо безпосередньо від
              виробників, не переплачуючи за послуги посередників. До того ж,
              продажі ми ведемо як онлайн, так і в салоні, при цьому ціна на
              асортимент онлайн та офлайн - однакова.
            </p>

            <div className="relative">
              <p className="text-black text-base">
                Ми співпрацюємо тільки з найкращими вітчизняними та зарубіжними
                фабриками та компаніями, які отримали визнання покупців та
                експертів меблевої справи. Для нас важливо, щоб товар, який ми
                продаємо, відповідав міжнародним стандартам якості, був із
                сертифікованих матеріалів – довговічних, красивих та екологічно
                чистих. Ми з особливою ретельністю відбираємо пропозиції для
                магазину, тому можемо поручитися за їхню якість і впевнено
                рекомендувати клієнтам. У нас ви легко знайдете меблеві серії в
                класичному та модерному стилі, лінійки для оформлення житла в
                дусі романтики або скандинавського лаконізму...
              </p>
              <div
                className={clsx(
                  "absolute  z-0 -bottom-3 left-0  h-[145px] desktop:-[150px] desktop:-bottom-10 w-full",
                  isOpen ? "bg-transparent" : "bg-md"
                )}
              ></div>
              <Button
                className={clsx(
                  "absolute -bottom-7  left-[45%] z-10  desktop:-bottom-12  desktop:left-[50%]    transition-all duration-300  ",
                  isOpen ? "rotate-180" : "rotate-0"
                )}
                onClick={() => setOpen(!isOpen)}
              >
                <Icon className="size-[60px]" name="arrow-down" />
              </Button>
            </div>
          </div>
        </div>
        <div className="pt-[60px]  pb-10 desktop:pb-[70px]">
          <ul className="flex items-center justify-center flex-wrap gap-x-2.5 gap-y-10 text-center desktop:gap-[20px] desktop:flex-row">
            <li className="w-[141px] flex flex-col  justify-center items-center desktop:w-fit desktop:flex-row desktop:gap-5">
              <Icon isScenery={true} name="truck" className="!size-20" />
              <p className="text-black desktop:w-[200px]">
                Безкоштовна доставка
              </p>
            </li>
            <li className="w-[141px] flex flex-col  justify-center items-center desktop:w-fit desktop:flex-row desktop:gap-5">
              <Icon isScenery={true} name="box" className="!size-20" />
              <p className="text-black desktop:w-[200px]">Безкоштовна збірка</p>
            </li>
            <li className="w-[141px] flex  flex-col  justify-center items-center desktop:w-fit desktop:flex-row desktop:gap-5">
              <Icon isScenery={true} name="headset" className="!size-20" />
              <p className="text-black desktop:w-[200px]">
                Післягарантійне обслуговування
              </p>
            </li>
            <li className="w-[141px] flex flex-col justify-center items-center desktop:w-fit desktop:flex-row desktop:gap-5">
              <Icon isScenery={true} name="label" className="!size-20" />
              <p className="text-black desktop:w-[200px]">Знижки клієнтам</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
