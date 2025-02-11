import clsx from "clsx";

type InfoSectionProps = {
  title: string;
  subtitle: string;
  description: string;
  bgClassName: string;
};

export const InfoSection = ({
  title,
  subtitle,
  description,
  bgClassName,
}: InfoSectionProps) => {
  return (
    <section className="pb-17 desktop:pb-18">
      <div className="container text-center  z-10  h-[524px] relative desktop:flex desktop:text-start desktop:h-[454px]">
        <div className="desktop:w-[450px] desktop:my-auto">
          <h1 className="text-black text-1xl font-semibold mb-[30px]">
            {title}
          </h1>
          <p className="text-black text-xl font-semibold mb-5">{subtitle}</p>
          <p className="text-black">{description}</p>
        </div>
        <div
          className={clsx(
            "absolute left-0  object-center -z-10  bg-center bg-contain  bg-no-repeat",
            bgClassName
          )}
        ></div>
      </div>
    </section>
  );
};
