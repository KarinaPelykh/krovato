import { ReviewSvgList } from "../../block-pages/about-as/reviews-section/RevievSvgList";
import { ProductSlider } from "../product-slider/ProductSlider";

import { Button, Icon } from "../ui";
import { ColorListProduct } from "./ColorListProduct";

export const InfoOfProduct = () => {
  return (
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
                <p className="text-1xl font-semibold text-black">15 400 грн</p>
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

              <ColorListProduct />
              <div className="flex justify-between gap-[30px] items-center">
                <div className="flex gap-[15px] p-[13px] border border-gray-light rounded-lg">
                  <Button className="!bg-transparent !p-0  !text-gray ">
                    -
                  </Button>
                  <span className="text-black">1</span>
                  <Button className="!bg-transparent !p-0  !text-gray">
                    +
                  </Button>
                </div>
                <Button>
                  <Icon name="bas" className="size-6" /> Купити
                </Button>
                <Button className="!bg-transparent border-2 border-yellow font-semibold !text-nowrap !text-gray ">
                  <Icon name="credit" />
                  Купити в кредит
                </Button>
              </div>
            </div>

            <div className="flex justify-between py-2.5 px-5">
              <Button className="!bg-transparent !w-fit !text-gray-light">
                <Icon className="size-[30px] mr-5" name="call" />
                +380 -- --- -- --
              </Button>
              <Button className="!bg-transparent !border-2 !border-gray h-[50px] !w-[212px] !text-gray">
                Купити в 1 клік
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
