import { type Dispatch, type SetStateAction } from "react";
import type { Itechnologys } from "../type/technologys";
import { Bounce, toast } from "react-toastify";

interface TechnologyCardProps {
  technologys: Itechnologys[];
  selectedTechnologies: Itechnologys[];
  setSelectedTechnologies: Dispatch<SetStateAction<Itechnologys[]>>; 
}



const TechnologyCard = ({
  technologys,
  selectedTechnologies,
  setSelectedTechnologies,
}: TechnologyCardProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {technologys.map((technology: Itechnologys) => (
        <SingleCard
          key={technology.id}
          technology={technology}
          selectedTechnologies={selectedTechnologies}
          setSelectedTechnologies={setSelectedTechnologies}
        />
      ))}
    </div>
  );
};

interface SingleCardProps {
  technology: Itechnologys;
  selectedTechnologies: Itechnologys[];
  setSelectedTechnologies: Dispatch<SetStateAction<Itechnologys[]>>;
}

const SingleCard = ({
  technology,
  selectedTechnologies,
  setSelectedTechnologies,
}: SingleCardProps) => {



  const buttonIsSelected = selectedTechnologies.some(
    (selectedTechnology) => selectedTechnology.id === technology.id
  );

  const handleAddToStack = () => {
    if (buttonIsSelected) return;

    setSelectedTechnologies((currentTechnologies) => [
      ...currentTechnologies,
      technology,
    ]);

    toast.success(`${technology.name} added successfully`, {
      position: "bottom-right", autoClose: 3000,
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
      <div className="card-body gap-5">
        <div className="flex justify-between items-start">
          <img src={technology.icon} alt={technology.name} className="size-10" />
          {technology.badge && (
            <span className="badge badge-info badge-outline rounded-full px-4 py-3 border-info/30 bg-info/10 text-info">
              {technology.badge}
            </span>
          )}
        </div>

        <h2 className="text-2xl font-bold">{technology.name}</h2>

        <p className="text-sm text-base-content/50 border border-dashed border-info/40 rounded-lg p-3">
          {technology.description}
        </p>

        <div className="border-t border-base-200 mt-1" />

        <div className="flex items-center justify-between text-sm pt-3 ">
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

        <div className="card-actions mt-3">
          <button
            onClick={handleAddToStack}
            disabled={buttonIsSelected}
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