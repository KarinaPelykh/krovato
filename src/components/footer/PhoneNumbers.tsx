import { Icon } from "../ui";

export const PhoneNumbers = () => (
  <div className="desktop:flex desktop:gap-[15px]">
    <Icon name="tel" className=" size-[50px] hidden desktop:flex" />
    <div className="flex flex-col gap-2.5">
      <span className="text-xl font-semibold text-white">
        +38 067 929-45-45
      </span>
      <span className="text-xl font-semibold text-white">
        +38 050 133-45-45
      </span>
      <span className="text-xl font-semibold text-white">
        +38 093 170-75-45
      </span>
      <span className="text-yellow text-xl font-semibold mb-[30px]">
        Передзвоніть мені
      </span>
    </div>
  </div>
);
