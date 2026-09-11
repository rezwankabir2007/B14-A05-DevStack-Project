import { useState } from "react";
import type { Itechnologys } from "../type/technologys";
import { Bounce, toast } from "react-toastify";

interface ExploreTechnologysProps {
  technologys: Itechnologys[];
}

const TechnologyCard = ({ technologys }: ExploreTechnologysProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {technologys.map((technology: Itechnologys) => (
        <SingleCard key={technology.id} technology={technology} />
      ))}
    </div>
  );
};

const SingleCard = ({ technology }: { technology: Itechnologys }) => {
  const [buttonIsSelected, setButtonIsSelected] = useState(false);

  // বাটন ক্লিক হ্যান্ডলার
  const handleAddToStack = () => {
    setButtonIsSelected(true);

    // ক্লিক করার সাথে সাথে একবারই টোস্ট শো করবে
    toast.success(`${technology.name} Added successfully`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="card bg-base-100 shadow-sm rounded-2xl">
      <div className="card-body gap-3">

        {/* Top row */}
        <div className="flex justify-between items-start">
          <img src={technology.icon} alt={technology.name} className="size-10" />
          {technology.badge && (
            <span className="badge badge-info badge-outline rounded-full px-4 py-3 border-info/30 bg-info/10 text-info">
              {technology.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold">{technology.name}</h2>

        {/* Description */}
        <p className="text-sm text-base-content/60 border border-dashed border-info/40 rounded-lg p-3">
          {technology.description}
        </p>

        {/* Divider */}
        <div className="border-t border-base-200 mt-1" />

        {/* Tags + rating */}
        <div className="flex items-center justify-between text-sm pt-1">
          <span className="badge badge-ghost">{technology.category}</span>
          <span className="text-base-content/50">{technology.difficulty}</span>
          <span className="flex items-center gap-1 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-warning"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
            </svg>
            {technology.rating}
          </span>
        </div>

        {/* CTA Button */}


        <div className="card-actions mt-3">
          <button 
            onClick={handleAddToStack} 
            disabled={buttonIsSelected===true ? true : false }
            className="btn btn-neutral btn-block rounded-xl"
          >
            {buttonIsSelected ? "Added to Stack" : "Add to Stack"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default TechnologyCard;