export const CategoriesList = () => {
  const categories = [
    "Дитяча",
    "Кухня",
    "Ванна",
    "Спальня",
    "Передпокій",
    "Вітальня",
    "Офіс",
  ];
  return (
    <ul className="flex gap-10 ">
      {categories.map((item, i) => {
        return <li key={i}>{item}</li>;
      })}
    </ul>
  );
};
