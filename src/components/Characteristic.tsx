export const Characteristic = () => {
  return (
    <>
      <p className="text-black font-semibold mb-10 text-1xl">Характеристики</p>
      <ul className="flex flex-col gap-[5px]">
        {[...Array(10)].map(() => (
          <li className="flex justify-center items-center py-2.5 px-[15px] rounded-lg bg-white">
            <span className="whitespace-nowrap">Форма</span>
            <span className="w-full border-b border-dotted"></span>
            <span>Прямокутний</span>
          </li>
        ))}
      </ul>
    </>
  );
};
