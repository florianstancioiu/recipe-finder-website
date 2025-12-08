import BulletPointIcon from "../../../images/icon-bullet-point.svg?react";

export type BulletPointsOption = {
  id: number;
  title: string;
  description: string;
};

export type BulletPointsProps = {
  title: string;
  options: BulletPointsOption[];
};

const BulletPoints = ({ title, options }: BulletPointsProps) => {
  return (
    <div className="px-4 py-12 border-b border-neutral-300">
      <p className="text-4xl font-bold mb-10">{title}</p>
      <ul className="list-none">
        {options.map((option) => (
          <li className="mb-6" key={option.id}>
            <div className="flex gap-5">
              <div>
                <BulletPointIcon />
              </div>
              <div>
                <p className="text-2xl font-semibold mb-3 text-neutral-900">
                  {option.title}
                </p>
                <p>{option.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletPoints;
