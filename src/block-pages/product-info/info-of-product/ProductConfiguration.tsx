import { Icon } from "../../../components";

export const ProductConfiguration = () => (
  <div className="tablet:flex tablet:justify-between mb-5 tablet:gap-[30px]">
    <label>
      <span className="flex gap-2.5 items-center mb-2.5">
        <Icon name="help" className="size-6" />
        Розмір
      </span>

      <select className="px-[15px] w-[190px] desktop:w-[280px]  py-[10px] rounded-lg bg-[#F8F8F8]">
        <option>Виберіть</option>
        <option>120*220cm</option>
      </select>
    </label>
    <label>
      <span className="flex  gap-2.5 items-center mb-2.5">
        <Icon name="help" className="size-6" />
        Ламельний блок
      </span>

      <select className="px-[15px]  py-[10px] w-[190px] desktop:w-[280px] rounded-lg bg-[#F8F8F8]">
        <option>Виберіть</option>
        <option>120*220cm</option>
      </select>
    </label>
  </div>
);
