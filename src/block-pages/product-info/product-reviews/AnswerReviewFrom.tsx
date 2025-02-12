import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Icon } from "../../../components/ui";

export const AnswerReviewFrom = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [text, setText] = useState("");

  const handelChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handelChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handelChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handelSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ name, email, text });
  };
  return (
    <form
      className="p-[30px] bg-white-light rounded-lg mt-[30px]"
      onSubmit={handelSubmit}
    >
      <p className="text-black font-semibold flex gap-[15px] mb-[30px]">
        <Icon className="mr-[15px]" name="arrow-answer" />
        Відповідь для Іван Стедниця
      </p>
      <div className="flex items-center gap-[30px] mb-[30px]">
        <input
          type="text"
          name="name"
          value={name}
          className="w-full py-2.5 px-5 border border-gray-light text-gray outline-none rounded-lg"
          placeholder="Ваше ім'я прізвище"
          onChange={handelChangeName}
        />
        <input
          type="email"
          name="email"
          value={email}
          className="w-full py-2.5 px-5 border border-gray-light text-gray outline-none rounded-lg"
          placeholder="E-mail"
          onChange={handelChangeEmail}
        />
      </div>
      <textarea
        name="text"
        value={text}
        placeholder="Відгук"
        onChange={handelChangeText}
        className="w-full py-2.5 px-5 border border-gray-light text-gray outline-none rounded-lg h-[150px] mb-[30px]"
      ></textarea>
      <div className="flex gap-[30px]">
        <Button className=" !w-fit !bg-yellow  !text-white">Відправити</Button>
        <Button className=" !w-fit !bg-transparent  !text-yellow !border !border-yellow">
          Відмінити
        </Button>
      </div>
    </form>
  );
};
