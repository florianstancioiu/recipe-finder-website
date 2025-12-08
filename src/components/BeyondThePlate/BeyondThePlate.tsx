const BeyondThePlate = () => {
  return (
    <div className="px-4 pt-12 mb-12">
      <div className="mb-8">
        <p className="text-4xl font-bold mb-5">Beyond the plate</p>
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
        <div className="bg-neutral-0 rounded p-1">
          <img
            alt="Home Hero"
            className="rounded w-full"
            src="/images/image-about-beyond-the-plate-small.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default BeyondThePlate;
