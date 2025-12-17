import PagePill from "../UI/PagePill/PagePill";

const HelpMorePeople = () => {
  return (
    <div className="px-4 text-neutral-900 pb-16 border-b border-neutral-300 md:px-8 xl:px-0 xl:max-w-dsktp-md xl:mx-auto xl:flex xl:justify-between xl:items-center xl:gap-x-16 xl:pt-8 xl:pb-24">
      <div className="mb-10 xl:max-w-[530px]">
        <PagePill className="mb-6">Our mission</PagePill>
        <h1 className="font-nunito text-4xl font-extrabold mb-6 md:text-5xl">
          Help more people cook nourishing meals, more often.
        </h1>
        <p className="mb-4">
          Healthy Recipe Finder was created to prove that healthy eating can be
          convenient, affordable, and genuinely delicious.
        </p>
        <p className="mb-4">
          We showcase quick, whole-food dishes that anyone can master—no fancy
          equipment, no ultra-processed shortcuts—just honest ingredients and
          straightforward steps.
        </p>
      </div>
      <div>
        <div className="bg-neutral-0 rounded p-1 md:bg-transparent md:rounded-none md:p-0">
          <img
            alt="Home Hero"
            className="rounded w-full xl:rounded-xl"
            src="/images/image-about-our-mission-small.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default HelpMorePeople;
