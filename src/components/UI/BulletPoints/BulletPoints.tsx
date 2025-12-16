import BulletPointIcon from "../../../images/icon-bullet-point.svg?react";

import { cn } from "tailwind-cn";

export type BulletPointsOption = {
  id: number;
  title?: string;
  description: string;
};

export type BulletPointsProps = {
  title: string;
  options: BulletPointsOption[];
  showTitle?: boolean;
  className?: string;
};

const BulletPoints = ({
  title,
  options,
  className,
  showTitle = true,
}: BulletPointsProps) => {
  const baseClasses = "px-4 py-12 border-b border-neutral-300 md:px-8";
  const mergedClasses = cn(
    baseClasses,
    className !== undefined ? className : ""
  );

  return (
    <div className={mergedClasses}>
      <p className="text-4xl font-bold mb-10 text-neutral-900 md:font-extrabold">
        {title}
      </p>
      <ul className="list-none">
        {options.map((option) => (
          <li className="mb-6" key={option.id}>
            <div className="flex gap-4">
              <div>
                <BulletPointIcon />
              </div>
              <div>
                {showTitle && (
                  <p className="text-2xl font-semibold mb-3 text-neutral-900">
                    {option.title}
                  </p>
                )}
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
