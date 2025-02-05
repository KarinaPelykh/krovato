import { ProductSlider } from "../components/product-slider/ProductSlider";
import { ReviewSvgList } from "../components/reviews-section/RevievSvgList";
import { ReviewForm } from "../components/reviews/ReviewForm";
import { Button, Icon } from "../components/ui";
import { ProductCard } from "../components/ui/produc-card/ProductCad";

export const ProductInfo = () => (
  <section>
    <div className="container ">
      <div className=" desktop:flex desktop:justify-between">
        <div>
          <ProductSlider />
        </div>
        <div className="flex flex-col">
          <h1 className="text-black text-1xl font-semibold mb-[30px]">
            Ліжко двоспальне МК-1 з підйомним механізмом
          </h1>

          <div className="flex justify-between mb-[30px]">
            <div className="flex justify-between">
              <Icon name="check" />В наявності
            </div>
            <div className="flex justify-between">
              <ReviewSvgList rate={5} /> <Icon name="chat" /> 93 отзыва
            </div>
            <span>Модель: 62003836</span>
          </div>

          <div className="bg-white rounded-lg  p-5">
            <div className="border border-x-0 border-t-0 border-b-gray-light flex justify-between items-center mb-[30px]">
              <p className="text-1xl font-semibold text-black">15 400 грн</p>{" "}
              <p className="text-red text-ms font-semibold line-through ">
                25 400 грн
              </p>
              <Button className="!bg-transparent !w-fit p-0 !text-gray font-semibold">
                <Icon name="liked" className="size-[50px]" /> В обране
              </Button>
            </div>

            <div className="flex justify-between mb-5 gap-[30px]">
              <label className="">
                <span className="flex gap-2.5 items-center mb-2.5">
                  <Icon name="help" className="size-6" />
                  Розмір
                </span>

                <select className="px-[15px] w-[280px]  py-[10px] rounded-lg bg-[#F8F8F8]">
                  <option>Виберіть</option>
                  <option>120*220cm</option>
                </select>
              </label>
              <label>
                <span className="flex  gap-2.5 items-center mb-2.5">
                  <Icon name="help" className="size-6" />
                  Ламельний блок
                </span>

                <select className="px-[15px]  py-[10px] w-[280px] rounded-lg bg-[#F8F8F8]">
                  <option>Виберіть</option>
                  <option>120*220cm</option>
                </select>
              </label>
            </div>

            <div>
              <div className="flex gap-2.5 flex-col mb-[30px]">
                <div className="flex gap-2.5">
                  <Icon name="help" className="size-6" />
                  Виберіть тканину:
                </div>
                <ul className=" flex gap-5 items-center">
                  {[
                    "/colors-of-product/blue.png",
                    "/colors-of-product/brown.png",
                    "/colors-of-product/gray-green.png",
                    ,
                    "/colors-of-product/gray.png",
                    ,
                    "/public/colors-of-product/light-brown.png",
                    ,
                  ].map((img, i) => (
                    <li key={i}>
                      <img
                        src={img}
                        className="size-[70px]"
                        alt="color of product"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex  gap-[15px] p-[13px] border border-gray-light w-[110px] rounded-lg">
                <Button className="!bg-transparent !p-0 !w-fit !text-black ">
                  -
                </Button>
                <span className="">1</span>
                <Button className="!bg-transparent !p-0 !w-fit !text-black">
                  +
                </Button>
              </div>
              <Button className="!w-fit ">
                <Icon name="bas" /> Купити
              </Button>
              <Button className="!bg-transparent !border-2 !border-yellow  !w-fit !text-black">
                <Icon name="credit" />
                Купити в кредит
              </Button>
            </div>
          </div>

          <div className="flex justify-between">
            <Button className="!bg-transparent !w-fit !text-gray-light">
              <Icon className="size-[30px] mr-5" name="tel" />
              +380 -- --- -- --
            </Button>
            <Button className="!bg-transparent !border-2 !border-gray  !w-fit !text-black">
              Купити в 1 клік
            </Button>
          </div>
        </div>
      </div>
      <div className="py-[60px] desktop:py-[70px]">
        <ul className="flex gap-[30px]">
          {[1, 2, 3, 4].map(() => (
            <li className="flex ">
              <Icon name="" className="size-[80px]" />
              <div>
                <h4 className="text-black font-semibold text-xl">Доставка</h4>
                <p className="text-black mb-2.5 text-sm">
                  Доставка по Києву або по всій Україні
                </p>
                <p className="text-yellow  text-sm flex items-center">
                  Детальніше{" "}
                  <Icon name="arrow-1" className="size-6  fill-yellow" />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="py-[60px] desktop:py-[70px] flex gap-[30px]">
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
        </div>{" "}
        <ReviewForm hiddenLogo="hidden" />
      </div>

      <div>
        <h2 className="text-black text-1xl font-semibold mb-[30px]">
          Відмінно доповнюють спальню тумба або комод
        </h2>
        <ul className="flex gap-5">
          {[1, 2, 3, 4].map((i) => (
            <li key={i}>
              <ProductCard
                size="Розмір: 61 x 184 x 2130 мм"
                subTitle="Ліжко Спарта / Sparta з підйомним механізмом"
                isAvailable="В наявності"
                costsWithoutSale="25 400 грн."
                costs=" 15 400 грн."
                itemClassName="w-fit"
                imgClassName="!w-full desktop:!w-[260px]"
                iconClassName="!size-[50px]"
                subTitleClassName="text-ms font-semibold w-0 min-w-[260px]"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="py-[60px] desktop:py-[70px]">
        <h2 className="text-black text-1xl font-semibold mb-[30px]">
          Рекомендовані товари
        </h2>
        <ul className="flex gap-5">
          {[1, 2, 3, 4].map((i) => (
            <li key={i}>
              <ProductCard
                size="Розмір: 61 x 184 x 2130 мм"
                subTitle="Ліжко Спарта / Sparta з підйомним механізмом"
                isAvailable="В наявності"
                costsWithoutSale="25 400 грн."
                costs=" 15 400 грн."
                itemClassName="w-fit"
                imgClassName="!w-full desktop:!w-[260px]"
                iconClassName="!size-[50px]"
                subTitleClassName="text-ms font-semibold w-0 min-w-[260px]"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
