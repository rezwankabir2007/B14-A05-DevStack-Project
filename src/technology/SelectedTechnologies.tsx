import type { SetStateAction, Dispatch } from "react";
import type { Itechnologys } from "../type/technologys";


interface ISelectedTechnologiesProps {
  selectedTechnologies: Itechnologys[];
  setSelectedTechnologies: Dispatch<SetStateAction<Itechnologys[]>>;
}




const SelectedTechnologies = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: ISelectedTechnologiesProps) => {


  const handleRemoveOneItems = (id: string | number) => {
    setSelectedTechnologies((prev) => prev.filter((item) => item.id !== id));
  };



  const handleRemoveAllItems = () => {
    setSelectedTechnologies([]);
  };

  return (
    <div className="w-80 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm h-fit sticky top-24">



      <h3 className="text-lg font-bold text-[#0F172A]">Your Stack</h3>
      <p className="text-xs text-[#94A3B8] mb-4">
        {selectedTechnologies.length} Technology Selected
      </p>



      {selectedTechnologies.length === 0 ? (

        <div className="text-center py-9 text-sm text-[#94A3B8] border border-dashed border-gray-200 rounded-xl">
          No technology selected yet.
        </div>
      ) : (
        <div className="space-y-3">
          {selectedTechnologies.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-100"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="size-6 object-contain"
                />
                <div>
                  <h4 className="text-sm font-semibold text-[#0F172A] leading-none">
                    {item.name}
                  </h4>
                  <span className="text-[10px] text-[#94A3B8]  capitalize">
                    {item.category}
                  </span>
                </div>
              </div>




              <button
                onClick={() => handleRemoveOneItems(item.id)}
                className="text-[#94A3B8] hover:text-red-500 p-1 transition-colors"
                title="Remove"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}




          <button
            onClick={handleRemoveAllItems}
            className="w-full mt-4 py-2 text-xs font-semibold text-[#D82C20] border border-[#ED8C85] hover:bg-[#FFFFFF] rounded-xl transition-colors"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectedTechnologies;