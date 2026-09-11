import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 py-10">

      {/* Banner Content */}
      <div className="flex-1">

        <h1 className="text-[#0F172A] font-extrabold text-4xl md:text-5xl leading-tight py-6">
          Build Your Ideal{" "}
          <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="text-[#475569] pb-8 text-lg md:text-xl leading-relaxed">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits
          your next project.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">

          <button className="text-white bg-gradient-to-r from-[#F97316] to-[#EC4899] px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-all">
            Explore Technologies
          </button>

          <button className="text-[#374151] font-medium px-4 py-2 hover:text-[#D81B7E] transition">
            Learn More
          </button>

        </div>
      </div>

      {/* Banner Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={BannerImage}
          alt="Development Stack"
          className="w-full max-w-lg"
        />
      </div>

    </div>
  );
};

export default Banner;