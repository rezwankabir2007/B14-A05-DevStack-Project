import type { Dispatch, SetStateAction } from 'react';
import type { Itechnologys } from '../type/technologys';
import TechnologyCard from './TechnologyCard';
import SelectedTechnologies from './SelectedTechnologies';

interface ExploreTechnologysProps {
  technologys: Itechnologys[];
  selectedTechnologies: Itechnologys[];
  setSelectedTechnologies: Dispatch<SetStateAction<Itechnologys[]>>;
}

const ExploreTechnologies = ({
  technologys,
  selectedTechnologies,
  setSelectedTechnologies,
}: ExploreTechnologysProps) => {
  return (
    <div className="container mx-auto mt-6 flex flex-col lg:flex-row gap-8 items-start px-4">
      



      <div className="flex-1 w-full">
        <TechnologyCard
          technologys={technologys}
          selectedTechnologies={selectedTechnologies}
          setSelectedTechnologies={setSelectedTechnologies}
        />
      </div>



      <div className="w-full lg:w-80 flex-none">
        <SelectedTechnologies
          selectedTechnologies={selectedTechnologies}
          setSelectedTechnologies={setSelectedTechnologies}
        />
      </div>

    </div>
  );
};

export default ExploreTechnologies;