import { use, useState } from "react";
import type { Itechnologys } from "../type/technologys";
import ExploreTechnologies from "./ExploreTechnologies";

interface TechnologysProps {
  technologysPromise: Promise<Itechnologys[]>;
}

const Technologys = ({ technologysPromise }: TechnologysProps) => {
  const technologys = use(technologysPromise);
  const [selectedTechnologies, setSelectedTechnologies] = useState<Itechnologys[]>([]);

  return (

    
    <div className="pt-24 pb-12 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-4">
        <h2 className="font-extrabold text-3xl md:text-4xl text-[#0F172A]">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="text-[#64748B] pt-2 font-medium">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <ExploreTechnologies
        technologys={technologys}
        selectedTechnologies={selectedTechnologies}
        setSelectedTechnologies={setSelectedTechnologies}
      />
    </div>
  );
};

export default Technologys;