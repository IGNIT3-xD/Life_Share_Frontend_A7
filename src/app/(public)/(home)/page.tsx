import { CollaborateLogo } from "./_components/CollaborateLogo";
import HeroSection from "./_components/Hero";

const page = () => {
  return (
    <div>
      <HeroSection />

      <div className="relative mx-auto grid max-w-5xl px-4 w-full my-10 lg:my-16">
        <h2 className="mb-6 text-center text-primary">
          Our Honourable{" "}
          <span className="text-[#B15A36]">Partners</span>.
        </h2>
        <CollaborateLogo />
      </div>

    </div>
  );
};

export default page;
