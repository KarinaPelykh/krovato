import clsx from "clsx";
import icon from "/sprite.svg";
import iconDecorations from "/decorations.svg";
type IconProps = {
  name: string;
  className?: string;
  isScenery?: boolean;
};
export const Icon = ({ className, name, isScenery }: IconProps) => (
  <svg className={clsx("size-6", className)}>
    <use xlinkHref={(isScenery ? iconDecorations : icon) + `#${name}`}></use>
  </svg>
);
