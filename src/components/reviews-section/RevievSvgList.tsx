import { Button, Icon } from "../ui";

type ReviewSvgListProps = {
  className?: string;
  toggle?: (i: number) => void;
};
export const ReviewSvgList = ({ className, toggle }: ReviewSvgListProps) => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <ul className="flex">
      {ratings.map((i) => (
        <li key={i}>
          <Button type="button" onClick={() => toggle && toggle(i)}>
            <Icon name="star" className={className} />
          </Button>
        </li>
      ))}
    </ul>
  );
};
