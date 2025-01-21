import { Button, Icon } from "../ui";

export const FilterProduct = () => {
  return (
    <div className="w-[300px]  border border-t-0 border-gray-light rounded-lg">
      <div>
        <div className="flex items-center gap-2.5 bg-white p-5   border border-x-0 border-gray-light rounded-t-lg">
          <Icon className="mr-[15px]" name="filter" />
          <span className="text-black font-semibold text-ms">
            Фільтр пошуку
          </span>
        </div>
        <div className="flex items-center justify-between  p-5">
          <span className="text-black font-semibold text-ms">Ціна, грн</span>
          <Icon className="mr-[15px]" name="close" />
        </div>
        <div className="bg-white p-5">
          <div className="flex justify-between items-center">
            <span className=" text-black py-2 px-4 w-fit rounded-lg border border-gray">
              0
            </span>
            <span className=" text-black py-2 px-4 w-fit rounded-lg border border-gray">
              0
            </span>
            <Button className="bg-yellow text-white py-2 px-4 w-fit rounded-lg">
              OK
            </Button>
          </div>
          <input type="range" min="16" max="96" className="mt-[15px] w-full" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between  p-5">
          <span className="text-black font-semibold text-ms">Наявність</span>
          <Icon className="mr-[15px]" name="close" />
        </div>
        <div className="bg-white p-5 flex flex-col">
          <label className=" flex items-center gap-2.5 text-base text-black">
            <input type="checkbox" className=" " />В наявності
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" className=" " />
            Під замовлення
          </label>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between  p-5">
          <span className="text-black font-semibold text-ms">Наявність</span>
          <Icon className="mr-[15px]" name="close" />
        </div>
        <div className="bg-white p-5 flex flex-col">
          <label className=" flex items-center gap-2.5 text-base text-black">
            <input type="checkbox" className=" " />
            Corners
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" className=" " />
            Estella
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" className=" " />
            Green Line
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" className=" " />
            Legko
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" className=" " />
            MiroMark
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" className=" " />
            Novelty
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" className=" " />
            Soft-line
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" className=" " />
            Venger
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" className=" " />
            Арбор Древ
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" className=" " />
            Городок мебель
          </label>
          <Button className="text-yellow text-start">Показати всі</Button>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between  p-5">
          <span className="text-black font-semibold text-ms">Тип ліжка</span>
          <Icon className="mr-[15px]" name="close" />
        </div>
        <div className="bg-white p-5 flex flex-col">
          <label className=" flex items-center gap-2.5 text-base text-black">
            <input type="checkbox" className=" " /> Без узголов'я
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" className=" " />З узголів'ям
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" className=" " />
            Двоярусні
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" className=" " />
            Розкладачки
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" className=" " />
            Шафи
          </label>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between  p-5">
          <span className="text-black font-semibold text-ms block w-[234px]">
            Розмір спального місця
          </span>
          <Icon className="mr-2.5" name="close" />
        </div>
        <div className="bg-white p-5 flex flex-col">
          <label className=" flex items-center gap-2.5 text-base text-black">
            <input type="checkbox" className=" " /> 200x210 см
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" className=" " />
            200x200 см
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" className=" " />
            180x200 см
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" className=" " />
            160x200 см
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" className=" " />
            110x190 см
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" className=" " />
            160x190 см
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" className=" " />
            150x200 см
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" className=" " /> 140x200 см
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" className=" " /> 140x190 см
          </label>
          <label className=" flex items-center gap-2.5  text-base text-black">
            <input type="checkbox" className=" " /> 120x200 см
          </label>
          <Button className="text-yellow text-start">Показати всі</Button>
        </div>
      </div>

      <div className="flex items-center justify-between border border-x-0 border-b-0 border-t-gray-light p-5">
        <span className="text-black font-semibold text-ms block w-[234px]">
          Ширина спального місця
        </span>
        <Icon className="mr-2.5" name="close" />
      </div>
      <div className="flex items-center justify-between border border-x-0  border-b-0 border-t-gray-light  p-5">
        <span className="text-black font-semibold text-ms block w-[234px]">
          Довжина спального місця
        </span>
        <Icon className="mr-2.5" name="close" />
      </div>
      <div className="flex items-center justify-between  p-5 border border-x-0 border-b-0 border-t-gray-light">
        <span className="text-black font-semibold text-ms block w-[234px]">
          Форма
        </span>
        <Icon className="mr-2.5" name="close" />
      </div>
      <div className="flex items-center justify-between  p-5 border border-x-0 border-b-0 border-t-gray-light">
        <span className="text-black font-semibold text-ms block w-[234px]">
          Матеріал корпусу
        </span>
        <Icon className="mr-2.5" name="close" />
      </div>
      <div className="flex items-center justify-between  p-5 border border-x-0 border-b-0 border-t-gray-light">
        <span className="text-black font-semibold text-ms block w-[234px]">
          Основа для матраца
        </span>
        <Icon className="mr-2.5" name="close" />
      </div>
    </div>
  );
};
