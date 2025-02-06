import { ReviewForm } from "../../block-pages/reviews/reviews/ReviewForm";

export const DescriptionProduct = () => {
  return (
    <section>
      <div className="container py-[60px] desktop:[70px] flex gap-[30px]">
        <div>
          <h2 className="text-black text-1xl font-semibold mb-[30px]">
            Опис товару
          </h2>
          <p className="text-black mb-[30px]">
            Модель МК-1 – це ліжко від українського виробника, компанії
            MegaMebli. Вона виготовляється з ДСП та оснащена м'якою спинкою.
            Також може бути виготовлена з дерев'яного щита (сосни). Ламелі
            виконані з бука. Подібна конструкція характеризується надійністю та
            привабливим зовнішнім виглядом.
          </p>

          <ul className=" flex gap-[30px] flex-wrap">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <div className="bg-stone-600 size-[150px]" key={i}>
                lunar
              </div>
            ))}
          </ul>
        </div>
        <ReviewForm hiddenLogo="hidden" />
      </div>
    </section>
  );
};
