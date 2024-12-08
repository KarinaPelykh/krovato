import icon from "/sprite.svg";
export const ReviewSvgList = () => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <ul className="flex ">
      {ratings.map((i) => (
        <li key={i}>
          <svg className="size-6">
            <use xlinkHref={icon + "#star"}></use>
          </svg>
        </li>
      ))}
    </ul>
  );
};
