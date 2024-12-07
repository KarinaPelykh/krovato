import { CategoryItem } from "./CategoryItem";

export const PopularCategoriesList = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <ul className="grid justify-center mobile:grid-cols-2  tablet:grid-cols-3 gap-3  desktop:grid-rows-2 desktop:grid-cols-5  desktop:gap-x-2.5 desktop:gap-y-6">
      {list.map((i) => (
        <CategoryItem key={i} />
      ))}
    </ul>
  );
};
