const RealLife = () => {
  return (
    <div className="px-4 text-neutral-900 mb-10">
      <div>
        <h2 className="font-nunito text-4xl font-bold mb-4">
          Built for real life
        </h2>
        <p className="mb-8">
          Cooking shouldn’t be complicated. These recipes come in under{" "}
          <span className="font-bold">30 minutes</span> of active time, fit busy
          schedules, and taste good enough to repeat.
        </p>
        <p className="mb-8">
          Whether you’re new to the kitchen or just need fresh ideas, we’ve got
          you covered.
        </p>
      </div>
      <div>
        <div className="bg-neutral-0 rounded mb-16 p-1">
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
