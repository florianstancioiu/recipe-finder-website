const BeyondThePlate = () => {
  return (
    <div className="px-4 pt-12 mb-12 md:px-8 md:pt-20 md:mb-20 xl:max-w-dsktp-md xl:mx-auto xl:flex xl:justify-between xl:items-center">
      <div className="mb-8 xl:max-w-[380px]">
        <p className="text-4xl font-bold mb-5 text-neutral-900 md:font-extrabold">
          Beyond the plate
        </p>
        <p className="mb-3">
          We believe food is a catalyst for community and well-being. By sharing
          approachable recipes, we hope to:
        </p>
        <ul className="list-disc list-inside">
          <li>Encourage family dinners and social cooking.</li>
          <li>Reduce reliance on single-use packaging and delivery waste.</li>
          <li>Spark curiosity about seasonal produce and local agriculture.</li>
        </ul>
      </div>
      <div>
        <div className="bg-neutral-0 rounded p-1 md:bg-transparent md:rounded-none md:p-0">
          <img
            alt="Home Hero"
            className="rounded w-full xl:rounded-xl"
            src="./images/image-about-beyond-the-plate-small.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default BeyondThePlate;
