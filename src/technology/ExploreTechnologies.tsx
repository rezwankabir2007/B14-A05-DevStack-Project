import type { Itechnologys } from '../type/technologys';
import TechnologyCard from './TechnologyCard';

interface exploreTechnologysProps {
  technologys: Itechnologys[];
  
}

const ExploreTechnologies = ({ technologys}: exploreTechnologysProps) => {
  return (
    <div className="container mx-auto mt-10 flex gap-5">

    <TechnologyCard technologys={technologys} />



    </div>
  );
};

export default ExploreTechnologies;