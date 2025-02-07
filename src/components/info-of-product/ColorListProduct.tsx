import { Icon } from "../ui";

const colors = [
  "/colors-of-product/blue.png",
  "/colors-of-product/brown.png",
  "/colors-of-product/gray-green.png",
  "/colors-of-product/gray.png",
  "/colors-of-product/light-brown.png",
];

export const ColorListProduct = () => {
  return (
    <div className="flex gap-2.5 flex-col mb-[30px]">
      <span className="flex gap-2.5">
        <Icon name="help" className="size-6" />
        Виберіть тканину:
      </span>
      <ul className="flex gap-5 items-center">
        {colors.map((color, i) => (
          <li key={i}>
            <img src={color} className="size-[70px]" alt="color of product" />
          </li>
        ))}
      </ul>
    </div>
  );
};
