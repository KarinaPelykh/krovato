import { Icon } from "../ui";

export const DeliverSaleSection = () => {
  return (
    <section className="py-[60px] desktop:py-[70px]">
      <div className="container">
        <h2 className="text-black text-1xl font-semibold mb-10 text-center">
          Акції доставки
        </h2>
        <ul className="flex flex-col gap-[30px] desktop:flex-row mb-10">
          <li className="flex gap-5 desktop:text-center desktop:flex-col desktop:justify-center desktop:items-center">
            <Icon name="sale-icon" className="size-[70px]" />
            <p className="text-black text-xl font-semibold w-full">
              При покупці ліжка з матрацом більше 7000 грн. (вартість матрацу)
              занесення ліфтом та складання БЕЗКОШТОВНО *{" "}
            </p>
          </li>
          <li className="flex gap-5 desktop:text-center desktop:flex-col desktop:justify-center desktop:items-center">
            <Icon name="sale-icon" className="size-[70px]" />
            <p className="text-black text-xl font-semibold w-full">
              При покупці ліжка з матрацом більше 10000 грн. знижка 5% на матрац
              + доставка, занесення ліфтом та складання БЕЗКОШТОВНО *
            </p>
          </li>
          <li className="flex gap-5 desktop:text-center desktop:flex-col desktop:justify-center desktop:items-center">
            <Icon name="sale-icon" className="size-[70px]" />
            <p className="text-black text-xl font-semibold w-full">
              Купуючи матрац від 7000 грн. доставка та занесення БЕЗКОШТОВНО *
            </p>
          </li>
          <li className="flex gap-5 desktop:text-center desktop:flex-col desktop:justify-center desktop:items-center">
            <Icon name="sale-icon" className="size-[70px]" />
            <p className="text-black text-xl font-semibold w-full">
              Купуючи матрац від 10000 грн. доставка та занесення БЕЗКОШТОВНО *
              + знижка 5% на матрац
            </p>
          </li>
          <li className="flex gap-5 desktop:text-center desktop:flex-col desktop:justify-center desktop:items-center">
            <Icon name="sale-icon" className="size-[70px]" />
            <p className="text-black text-xl font-semibold w-full">
              При покупці столу та 2-х стільців доставка та занесення
              БЕЗКОШТОВНО *
            </p>
          </li>
        </ul>
        <p className="text-black text-base text-center">
          * Під покупкою ліжка з матрацом до суми "N" - мається на увазі ціна за
          матрац. ** Занесення відбувається ліфтом (по сходах занесення платне)
          * В акції не беруть участь ліжка з вбудованим матрацом. * Знижка на
          матраци ТМ Сонлайн не сумується з іншими акціями.
        </p>
      </div>
    </section>
  );
};
