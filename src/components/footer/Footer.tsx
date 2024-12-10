import { Logo } from "../ui";

export const Footer = () => {
  return (
    <section className="bg-dark">
      <div className="container">
        <Logo />
        <div className="border border-t-gray border-x-transparent border-b-transparent p-[20px]">
          <p className="text-gray">
            © KROVATO - Технології сну - 2022. Всі права захищені.
          </p>
        </div>
      </div>
    </section>
  );
};
