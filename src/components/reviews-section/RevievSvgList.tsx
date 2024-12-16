import { Icon } from "../ui";
export const ReviewSvgList = () => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <ul className="flex ">
      {ratings.map((i) => (
        <li key={i}>
          <Icon name="star" />
        </li>
      ))}
    </ul>
  );
};
