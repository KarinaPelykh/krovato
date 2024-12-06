import icons from "/sprite.svg";
export const SpecialOfferList = () => {
  const data = [
    { icon: "akcii", offer: "Акції" },
    { icon: "sale", offer: "Розпродаж" },
    { icon: "credit", offer: "Купити в кредит" },
  ];
  return (
    <ul className="flex gap-10">
      {data.map(({ icon, offer }, i) => {
        return (
          <li key={i} className="flex gap-[10px] ">
            <svg className="size-6">
              <use xlinkHref={icons + `#${icon}`}></use>
            </svg>
            <p>{offer}</p>
          </li>
        );
      })}
    </ul>
  );
};
