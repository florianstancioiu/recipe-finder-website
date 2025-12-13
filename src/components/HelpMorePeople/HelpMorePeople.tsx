import PagePill from "../UI/PagePill/PagePill";

const HelpMorePeople = () => {
  return (
    <div className="px-4 text-neutral-900 pb-16 border-b border-neutral-300 md:px-8">
      <div className="mb-10">
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
        <div className="bg-neutral-0 rounded p-1 md:bg-none md:rounded-none md:p-0">
          <img
            alt="Home Hero"
            className="rounded w-full"
            src="/images/image-about-our-mission-small.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default HelpMorePeople;
