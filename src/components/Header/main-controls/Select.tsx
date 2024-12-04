import Icons from "/sprite.svg";

export const Select = () => (
  <section>
    <div className="">
      <svg className=" size-[50px] ">
        <use xlinkHref={Icons + "#tel"}></use>
      </svg>
      <div className="">
        <span className="inline-block">Щодня з 9:00 до 18:00</span>
        <a href="tel:+067 929-45-45">067 929-45-45</a>
      </div>
    </div>
    <option></option>
    <option></option>
    <option></option>
  </section>
);
