import { FilterProduct } from "../filter-product/FilterProduct";
import { Icon } from "../ui";
import { ProductsList } from "./ProductsList";

export const SelectedProducts = () => {
  return (
    <section className="py-[60px] desktop:py-[70px]">
      <div className="container desktop:flex desktop:gap-[30px]">
        <FilterProduct />
        <div className="flex flex-col">
          <div className=" flex items-center justify-between mb-10">
            <span className="text-black font-semibold text-ms">
              Ви вибрали:
            </span>
            <div className=" flex items-center gap-2.5">
              <Icon name="sort" />
              <span className="text-black font-semibold text-ms">
                Сортування:
              </span>
              <select className="bg-transparent">
                <option>За зростанням ціни</option>
              </select>
            </div>
          </div>
          <ProductsList />
        </div>
      </div>
    </section>
  );
};
