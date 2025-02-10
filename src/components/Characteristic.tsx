export const Characteristic = () => {
  const characteristics = [
    { characteristic: "Довжина (см)", size: "210, 200" },
    { characteristic: "Ширина (см)", size: "132" },
    { characteristic: "Висота (см)", size: "105" },
    { characteristic: "Ширина спального місця (см)", size: "120" },
    { characteristic: "Довжина спального місця (см)", size: "200, 190" },
    { characteristic: "Розмір спального місця", size: "120x200, 120x190" },
    { characteristic: "Колір", size: "Під замовлення" },
    { characteristic: "Форма", size: "Прямокутний" },
    { characteristic: "Кількість ламелей", size: "36" },
    { characteristic: "Основа під матрац", size: "ламіль" },
  ];
  return (
    <div className="desktop:pb-[70px]">
      <p className="text-black font-semibold mb-10 text-1xl">Характеристики</p>
      <ul className="flex flex-col gap-[5px]">
        {characteristics.map(({ characteristic, size }) => (
          <li className="flex justify-center items-center py-2.5 px-[15px] rounded-lg bg-white">
            <span className="whitespace-nowrap">{characteristic}</span>
            <span className="w-full border-b border-dotted"></span>
            <span className="whitespace-nowrap">{size}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
