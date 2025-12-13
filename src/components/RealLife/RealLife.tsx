const RealLife = () => {
  return (
    <div className="px-4 text-neutral-900 mb-10 md:px-8">
      <div className="md:mb-10">
        <h2 className="font-nunito text-4xl font-extrabold mb-4 md:mb-5">
          Built for real life
        </h2>
        <p className="mb-8">
          Cooking shouldn’t be complicated. These recipes come in under{" "}
          <span className="font-bold md:hidden">30 minutes</span>
          <span className="relative hidden md:inline font-bold text-neutral-800 font-nunito">
            <span className="absolute block w-full bg-orange-500 h-3 rounded-sm left-0 bottom-[3px] -z-1"></span>
            30 minutes
          </span>{" "}
          of active time, fit busy schedules, and taste good enough to repeat.
        </p>
        <p className="mb-8">
          Whether you’re new to the kitchen or just need fresh ideas, we’ve got
          you covered.
        </p>
      </div>
      <div>
        <div className="bg-neutral-0 rounded mb-16 p-1 md:mb-20">
          <img
            src="/images/image-home-real-life-small.webp"
            alt="Built for real life"
            className="rounded w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default RealLife;
