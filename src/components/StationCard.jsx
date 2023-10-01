import { deleteStation, getStations } from "../redux/fetchFunctions";
import { useDispatch } from "react-redux";
import { setStation, setStations } from "../redux/slices/stationSlice";

const StationCard = ({ station }) => {
  const dispatch = useDispatch();

  const stations = async () => {
    const data = await getStations();
    dispatch(setStations(data));
  };

  const handleDelete = async (id) => {
    try {
      await deleteStation(id);
      await stations();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (station) => {
    try {
      dispatch(setStation(station));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 test-gray-700 uppercase">
        Estación: {" "}
        <span className="font-normal normal-case">{station.name}</span>
      </p>
      <p className="font-bold mb-3 test-gray-700 uppercase">
        Dirección: {" "}
        <span className="font-normal normal-case">{station.address}</span>
      </p>
      <p className="font-bold mb-3 test-gray-700 uppercase">
        Zona: {" "}
        <span className="font-normal normal-case">{station.zone}</span>
      </p>
      <p className="font-bold mb-3 test-gray-700 uppercase">
        Gerente: {" "}
        <span className="font-normal normal-case">{station.manager}</span>
      </p>
      <p className="font-bold mb-3 test-gray-700 uppercase">
        Supervisor: {" "}
        <span className="font-normal normal-case">{station.supervisor}</span>
      </p>
      <div className="inline-flex ml-40 mt-2 rounded-md " role="group">
        <button
          onClick={() => handleDelete(station._id)}
          type="button"
          className="px-4 py-2 mr-5 text-sm shadow-md font-medium text-gray-900 bg-red-600 border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          Eliminar
        </button>
        <button
          onClick={() => handleUpdate(station)}
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-green-800 rounded-lg border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          Actualizar
        </button>
      </div>
    </div>
  );
};

export default StationCard;
