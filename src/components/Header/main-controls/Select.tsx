import Icons from "/sprite.svg";

export const Select = () => (
  <section className="h-[50px] w-[230px] ">
    <div className=" flex gap-[10px]">
      <svg className=" size-[50px] ">
        <use xlinkHref={Icons + "#tel"}></use>
      </svg>
      <div className=" flex flex-col">
        <span className="inline-block  text-[13px] ">
          Щодня з 9:00 до 18:00
        </span>
        <a className="text-[20px]" href="tel:+067 929-45-45">
          067 929-45-45
        </a>
      </div>
    </div>
    <option></option>
    <option></option>
    <option></option>
  </section>
);
