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
  const baseClasses =
    "px-4 py-12 border-b border-neutral-300 md:px-8 xl:max-w-dsktp-md xl:mx-auto xl:px-0 xl:flex xl:justify-between xl:items-top xl:gap-x-16";
  const mergedClasses = cn(
    baseClasses,
    className !== undefined ? className : ""
  );

  return (
    <div className={mergedClasses}>
      <p className="text-4xl font-bold mb-10 text-neutral-900 md:font-extrabold xl:min-w-[372px] xl:mb-2 xl:text-2xl">
        {title}
      </p>
      <ul className="list-none">
        {options.map((option) => (
          <li className="mb-6 xl:mb-2" key={option.id}>
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
