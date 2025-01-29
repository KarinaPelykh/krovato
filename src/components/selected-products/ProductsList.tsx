import { Button, Icon } from "../ui";
import { ProductCard } from "../ui/produc-card/ProductCad";

export const ProductsList = () => {
  return (
    <>
      <ul className="flex gap-2.5 flex-wrap mb-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <ProductCard
            key={i}
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
        ))}
      </ul>
      <Button className="mx-auto font-semibold desktop:w-[300px]">
        <Icon name="reload" className="size-[24px]" />
        Показати ще відгуки
      </Button>
    </>
  );
};
