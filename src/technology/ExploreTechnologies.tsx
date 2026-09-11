import type { Itechnologys } from '../type/technologys';

interface exploreTechnologysProps {
  technologys: Itechnologys[];
  onAdd?: (technology: Itechnologys) => void;
}

const ExploreTechnologies = ({ technologys, onAdd }: exploreTechnologysProps) => {
  return (
    <div className="container mx-auto mt-10 flex gap-5">

      <div className="grid md:grid-cols-3 gap-8">
        {technologys.map((technology: Itechnologys) => (
          <div key={technology.id} className="card  bg-base-100 shadow-sm rounded-2xl">
            <div className="card-body gap-3">

              {/* top row: icon + popular badge */}
              <div className="flex justify-between items-start">
                <img src={technology.icon} alt={technology.name} className="size-10" />
                {technology.badge && (
                  <span className="badge badge-info badge-outline rounded-full px-4 py-3 border-info/30 bg-info/10 text-info">
                    {technology.badge}
                  </span>
                )}
              </div>

              {/* title */}
              <h2 className="text-2xl font-bold">{technology.name}</h2>

              {/* description in dashed box */}
              <p className="text-sm text-base-content/60 border border-dashed border-info/40 rounded-lg p-3">
                {technology.description}
              </p>

              {/* divider */}
              <div className="border-t border-base-200 mt-1" />

              {/* tags + rating row */}
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

              {/* CTA */}
              <div className="card-actions mt-3">
                <button
                  className="btn btn-neutral btn-block rounded-xl"
                  onClick={() => onAdd?.(technology)}
                >
                  Add to Stack
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* 2nd part */}
      <h2>Your Stack</h2>

    </div>
  );
};

export default ExploreTechnologies;