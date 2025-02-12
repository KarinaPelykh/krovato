import { ReviewSvgList } from "../../about-as/reviews-section/RevievSvgList";
import { ProductSlider } from "../ProductSlider";

import { Button, Icon } from "../../../components/ui";
import { ColorListProduct } from "./ColorListProduct";
import { ButtonControls } from "./ButtonControls";
import { ProductConfiguration } from "./ProductConfiguration";

export const InfoOfProduct = () => {
  return (
    <section>
      <div className="container  desktop:flex desktop:justify-between">
        <div className="hidden desktop:flex">
          <ProductSlider />
        </div>

        <div className="flex flex-col">
          <h1 className="text-black text-1xl font-semibold mb-5 desktop:mb-[30px]">
            Ліжко двоспальне МК-1 з підйомним механізмом
          </h1>

          <div className="flex flex-col gap-2.5 desktop:justify-between desktop:gap-0 mb-[30px] desktop:flex-row">
            <div className="flex gap-[5px]">
              <Icon name="check" />В наявності
            </div>
            <div className="flex gap-2.5 ">
              <ReviewSvgList rate={5} />
              <span className="ml-2.5 flex gap-2.5">
                <Icon name="chat" />
                93 отзыва
              </span>
            </div>
            <span>Модель: 62003836</span>
          </div>
          <div className="flex desktop:hidden pb-17">
            <ProductSlider />
          </div>

          <div className="bg-white rounded-lg  p-5">
            <div className="border border-x-0 border-t-0 border-b-gray-light flex items-center pb-[30px] mb-[30px] flex-col desktop:flex-row">
              <p className="text-1xl  font-semibold text-black desktop:mr-[30px]">
                15 400 грн
              </p>
              <p className="text-red  text-ms font-semibold line-through desktop:mr-auto">
                25 400 грн
              </p>
              <Button className="hidden desktop:flex   !bg-transparent !w-fit p-0 !text-gray font-semibold">
                <Icon name="liked" className="size-[50px]" /> В обране
              </Button>
            </div>

            <ProductConfiguration />

            <ColorListProduct />
            <ButtonControls />
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
    </section>
  );
};
