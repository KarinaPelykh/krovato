import { Fragment } from "react/jsx-runtime";
import { ProductCard } from "../produc-card/ProductCad";

type AdditionProductProps = {
  title: string;
};

export const AdditionProduct = ({ title }: AdditionProductProps) => {
  return (
    <section className="py-17 desktop:py-18 ">
      <div className="container">
        <h2 className="text-black text-1xl font-semibold mb-[30px]">{title}</h2>
        <ul className="grid justify-center tablet:grid-cols-2 gap-5 desktop:flex-row desktop:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Fragment key={i}>
              <ProductCard
                size="Розмір: 61 x 184 x 2130 мм"
                subTitle="Ліжко Спарта / Sparta з підйомним механізмом"
                isAvailable="В наявності"
                costsWithoutSale="25 400 грн."
                costs=" 15 400 грн."
                itemClassName="w-fit"
                imgClassName="!w-full desktop:!w-[260px]"
                iconClassName="!size-[50px]"
                subTitleClassName="text-ms font-semibold w-0 min-w-[260px]"
              />
            </Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
};
