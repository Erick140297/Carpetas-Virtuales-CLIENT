import { useSelector } from "react-redux";
import Estación from "./Estación";

const StationsByZone = () => {
  const stationsByZone = useSelector((state) => state.stations.stationsByZone);
  return (
    <div className="mt-14 max-w-screen-lg mx-4  ">
      <p
        scope="col"
        className="flex justify-center mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black"
      >
        Estaciones
      </p>
      <div className="w-full mb-4 sm:ml-4 bg-transparent max-h-screen overflow-x-auto flex-1">
        {/* <div className="grid grid-cols-2 gap-2 text-md w-full text-left text-gray-500 dark:text-gray-400">
          {stationsByZone?.length === 0 ? (
            <p>No se encontraron estaciones</p>
          ) : (
            stationsByZone?.map((station, index) => {
              return <Estación key={index} station={station}></Estación>;
            })
          )}
        </div> */}
        <div className="grid grid-cols-2 gap-2 text-md w-full text-left text-gray-500 dark:text-gray-400">
          {stationsByZone?.map((station, index) => {
            return <Estación key={index} station={station}></Estación>;
          })}
        </div>
      </div>
    </div>
  );
};

export default StationsByZone;
