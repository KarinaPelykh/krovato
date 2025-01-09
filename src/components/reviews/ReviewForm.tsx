import { ChangeEvent, FormEvent, useState } from "react";
import { ReviewSvgList } from "../reviews-section/RevievSvgList";
import { Button, Icon } from "../ui";
import clsx from "clsx";

export const ReviewForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  //   const [star, setStar] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handelText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleGetReview = (e?: FormEvent) => {
    e?.preventDefault();
    const data = {
      name,
      email,
      text,
    };

    console.log(data);
    setName("");
    setEmail("");
    setText("");
  };

  const handleIsSelected = (i: number) => {
    console.log(i);

    setIsSelected(!isSelected);
  };
  return (
    <div>
      <div className="flex mb-[30px] justify-center desktop:justify-start">
        <Icon className=" size-[80px] mr-[30px]" name="ava" />
        <div>
          <p className="text-black text-xl mb-10 w-[300px]">
            Магазин меблів для дому «KROVATO»
          </p>
          <div className="flex gap-2.5">
            <span className="text-yellow text-ms">0.5</span>
            <ReviewSvgList className="fill-yellow" />
          </div>
          <p>Базовано на відгуках: 269</p>
        </div>
      </div>
      <form
        className="bg-white rounded-lg p-[30px] desktop:w-[410px]"
        onSubmit={handleGetReview}
      >
        <h2 className="text-black text-1xl font-semibold mb-[30px] text-center ">
          Залишіть свій відгук про магазин
        </h2>

        <input
          type="text"
          name="name"
          value={name}
          placeholder="Ваше ім'я прізвище"
          onChange={handleName}
          className=" bg-transparent border outline-none border-gray-light rounded-lg py-2.5 px-5 w-full mb-5 placeholder:text-gray"
        />
        <input
          name="email"
          type="email"
          value={email}
          placeholder="E-mail"
          onChange={handleEmail}
          className=" bg-transparent border outline-none border-gray-light rounded-lg py-2.5 px-5 w-full mb-5 placeholder:text-gray"
        />
        <textarea
          name="text"
          value={text}
          onChange={handelText}
          placeholder="Відгук"
          className=" bg-transparent border outline-none border-gray-light rounded-lg py-2.5 px-5 w-full mb-[30px] h-[150px] placeholder:text-gray resize-none"
        ></textarea>
        <div className="mb-[30px] flex flex-col items-center">
          <span className="text-gray text-ms font-semibold mb-2.5">
            Ваша оцінка:
          </span>
          <ReviewSvgList
            className={clsx(
              isSelected
                ? "fill-yellow stroke-none"
                : "stroke-gray fill-transparent"
            )}
            toggle={handleIsSelected}
          />
        </div>
        <Button
          className="bg-yellow py-[13px] flex justify-center text-white text-ms font-semibold w-full rounded-lg"
          type="submit"
        >
          Залишити відгук
        </Button>
      </form>
    </div>
  );
};
