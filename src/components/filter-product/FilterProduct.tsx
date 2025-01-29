import { Button, Icon } from "../ui";
import { HeadingFilter } from "./HedingFilter";

export const FilterProduct = () => {
  return (
    <div className="w-[300px] border border-t-0 border-gray-light rounded-lg">
      <div>
        <div className="flex items-center gap-2.5 bg-white p-5   border border-x-0 border-gray-light rounded-t-lg">
          <Icon className="mr-[15px]" name="filter" />
          <span className="text-black font-semibold text-ms">
            Фільтр пошуку
          </span>
        </div>
        <HeadingFilter title="Ціна, грн" />
        <div className="bg-white p-5">
          <div className="flex justify-between items-center">
            <span className=" text-black py-2 px-4 w-fit rounded-lg border border-gray">
              0
            </span>
            <span className=" text-black py-2 px-4 w-fit rounded-lg border border-gray">
              0
            </span>
            <Button className=" py-2 px-4 !w-fit ">OK</Button>
          </div>
          <input type="range" min="16" max="96" className="mt-[15px] w-full" />
        </div>
      </div>

      <div>
        <HeadingFilter title="Наявність" />
        <div className="bg-white p-5 flex flex-col">
          <label className=" flex items-center gap-2.5 text-base text-black">
            <input type="checkbox" />В наявності
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" />
            Під замовлення
          </label>
        </div>
      </div>

      <div>
        <HeadingFilter title="Виробник" />
        <div className="bg-white p-5 flex flex-col">
          <label className=" flex items-center gap-2.5 text-base text-black">
            <input type="checkbox" />
            Corners
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" />
            Estella
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" />
            Green Line
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" />
            Legko
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" />
            MiroMark
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" />
            Novelty
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" />
            Soft-line
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" />
            Venger
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" />
            Арбор Древ
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" />
            Городок мебель
          </label>
          <Button className="text-yellow !bg-transparent text-start !w-fit">
            Показати всі
          </Button>
        </div>
      </div>

      <div>
        <HeadingFilter title="Тип ліжка" />
        <div className="bg-white p-5 flex flex-col">
          <label className=" flex items-center gap-2.5 text-base text-black">
            <input type="checkbox" /> Без узголов'я
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" />З узголів'ям
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" />
            Двоярусні
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" />
            Розкладачки
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" />
            Шафи
          </label>
        </div>
      </div>

      <div>
        <HeadingFilter
          title="Розмір спального місця"
          textClassName="block w-[234px]"
          iconClassName="mr-2.5"
        />
        <div className="bg-white p-5 flex flex-col">
          <label className=" flex items-center gap-2.5 text-base text-black">
            <input type="checkbox" /> 200x210 см
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" />
            200x200 см
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" />
            180x200 см
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" />
            160x200 см
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" />
            110x190 см
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" />
            160x190 см
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" />
            150x200 см
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" /> 140x200 см
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" /> 140x190 см
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" /> 120x200 см
          </label>
          <Button className="text-yellow text-start !w-fit !bg-transparent">
            Показати всі
          </Button>
        </div>
      </div>
      <HeadingFilter
        textClassName="block w-[234px]"
        title="Ширина спального місця"
        isBorder={true}
        iconClassName="mr-2.5"
      />
      <HeadingFilter
        textClassName=" block w-[234px]"
        title="Довжина спального місця"
        isBorder={true}
        iconClassName="mr-2.5"
      />
      <HeadingFilter
        textClassName=" block w-[234px]"
        title="Форма"
        isBorder={true}
        iconClassName="mr-2.5"
      />

      <HeadingFilter
        textClassName="block w-[234px]"
        title="Матеріал корпусу"
        isBorder={true}
        iconClassName="mr-2.5"
      />

      <HeadingFilter
        textClassName="block w-[234px] "
        title="Основа для матраца"
        isBorder={true}
        iconClassName="mr-2.5"
      />
    </div>
  );
};
