type ListProps = {
  category: string[];
};
export const List = ({ category }: ListProps) => {
  return (
    <ul className="flex flex-col  items-center">
      {category.map((item, i) => (
        <li key={i} className="first:mt-5  mb-5 text-white-light">
          {item}
        </li>
      ))}
    </ul>
  );
};
