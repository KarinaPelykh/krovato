import Icons from "/sprite.svg";

export const Form = () => (
  <div className="relative w-fit">
    <input
      placeholder="Пошук товарів"
      className=" outline-none py-[10px] px-[15px] rounded-[8px] border border-gray-light w-[421px]"
    />
    <svg className="absolute top-[10px] right-[15px]  size-6 ">
      <use xlinkHref={Icons + "#search"}></use>
    </svg>
  </div>
);
