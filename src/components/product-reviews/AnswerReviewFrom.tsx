import { Button, Icon } from "../ui";

export const AnswerReviewFrom = () => {
  return (
    <form className="p-[30px] bg-white-light rounded-lg">
      <p className="text-black font-semibold">
        <Icon className="mr-[15px]" name="" />
        Відповідь для Іван Стедниця
      </p>
      <div>
        <input placeholder="Ваше ім'я прізвище" />
        <input placeholder="E-mail" />
      </div>
      <textarea placeholder="Відгук"></textarea>
      <div>
        <Button className=" !w-fit  !p-0 m-0 !text-gray">Відправити</Button>
        <Button className=" !w-fit  !p-0 m-0 !text-gray">Відмінити</Button>
      </div>
    </form>
  );
};
