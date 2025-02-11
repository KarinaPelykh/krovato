import { ProductCard } from "../produc-card/ProductCad";

type AdditionProductProps = {
  title: string;
};
export const AdditionProduct = ({ title }: AdditionProductProps) => {
  return (
    <section>
      <div className="container py-[60px] desktop:py-[70px]  ">
        <h2 className="text-black text-1xl font-semibold mb-[30px]">{title}</h2>
        <ul className="flex flex-col gap-5 desktop:flex-row">
          {[1, 2, 3, 4].map((i) => (
            <li key={i}>
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
