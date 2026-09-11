import { use } from "react";
import type { Itechnologys } from "../type/technologys";
import ExploreTechnologies from "./ExploreTechnologies";




interface TechnologysProps {
  technologysPromise: Promise<Itechnologys[]>;
}

const Technologys = ({ technologysPromise }: TechnologysProps) => {
  console.log(technologysPromise);

  const technologys = use(technologysPromise);
  console.log(technologys);

  return (
    <div>



  <div className="container mx-auto py-8">
      <h2 className="font-extrabold text-3xl text-[#0F172A]">Explore the <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Technologies</span></h2>

    <p className="text-[#64748B] py-5 font-medium">Pick one technology per category to build your ideal stack.</p>
  </div>

  
     <ExploreTechnologies technologys={technologys}  />

    </div>




  );
};

export default Technologys;