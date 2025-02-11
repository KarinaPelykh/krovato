import { FromFeedback } from "./FromFeedback";

export const ContactUsSection = () => {
  return (
    <section className="pt-17 desktop:pt-18">
      <div className="container desktop:bg-[url('/bg-form.png')] desktop:h-[530px] desktop:bg-contain desktop:bg-no-repeat desktop:bg-center desktop:min-h-full  desktop:flex desktop:justify-between">
        <div className=" mb-10 desktop:mb-0 desktop:w-[470px] desktop:my-auto">
          <h2 className=" text-black mb-10 font-semibold text-1xl desktop:text-2xl">
            Напишіть нам!
          </h2>
          <p className=" text-black text-lg mb-[30px] font-semibold">
            Якщо у вас є побажання щодо якості обслуговування, пропозиції щодо
            партнерства, напишіть нам і наше керівництво зв`яжеться з вами!
          </p>
          <p className=" text-yellow text-1xl font-semibold">
            Або чекаємо на вас у гості!
          </p>
        </div>
        <FromFeedback />
      </div>
    </section>
  );
};
