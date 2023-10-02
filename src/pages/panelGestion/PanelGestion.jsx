import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import StationsByZone from "../../components/StationsByZone";
import { getStationsByZone } from "../../redux/fetchFunctions";
import { setStationsByZone } from "../../redux/slices/stationSlice";

function PanelGestion() {
  // const zones = ["Chimalhuacan-Neza", "Neza-CDMX", "Cuernavaca"];
  const zones = ["Neza-CDMX"];

  const [buttonStates, setButtonStates] = useState(
    Array(zones.length).fill(false)
  );

  useEffect(() => {
    const newButtonStates = [];
    newButtonStates[0] = true;
    setButtonStates(newButtonStates);
  }, []);

  const zoneOneOpen = (index) => {
    const newButtonStates = [];
    newButtonStates[index] = !newButtonStates[index];
    setButtonStates(newButtonStates);
  };

  const dispatch = useDispatch();

  const stations = async () => {
    const response = await getStationsByZone(
      zones.find((_, index) => buttonStates[index])
    );
    dispatch(setStationsByZone(response));
  };

  useEffect(() => {
    stations();
  }, [buttonStates]);

  return (
    <div className="flex flex-row mt-10 overscroll-none">
      <aside
        id="logo-sidebar"
        className="top-8 left-0 z-40 w-72 md:h-screen pt-20 transition-transform -translate-x-full bg-green-800 border-r border-gray-200 sm:translate-x-0 dark:border-gray-400"
        aria-label="Sidebar"
      >
        <div className="px-4 pb-6 overflow-y-auto bg-green-800 ">
          <ul className="space-y-4 font-bold font-weight: 900">
            {zones.map((zone, index) => {
              return (
                <li key={index}>
                  <button
                    onClick={() => zoneOneOpen(index)}
                    type="button"
                    className={`${
                      buttonStates[index]
                        ? "flex items-center p-2 w-full bg-gray-700 text-gray-900 rounded-lg dark:text-white +group shadow-lg"
                        : "flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-400 ease-in-out group shadow-lg"
                    }`}
                  >
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-500 ease-in-out dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"
                      />
                    </svg>
                    <span className="flex-1 ml-1 text-start tracking-normal max-w-md text-2xl font-semibold leading-normal text-gray-900 dark:text-white whitespace-nowrap ">
                      {zone}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
      <StationsByZone />
    </div>
  );
}

export default PanelGestion;
