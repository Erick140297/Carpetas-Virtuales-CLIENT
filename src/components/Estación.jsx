import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setGerente } from "../redux/slices/usersSlice";
import { setStation } from "../redux/slices/stationSlice";
import { getStationName } from "../redux/fetchFunctions";

const Estación = ({ station }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
    
  const handleClick = async() => {
    const response = await getStationName(station.name);
    dispatch(setStation(response));
    dispatch(setGerente(false))
    navigate("/panel-gerente")
  }

  return (
    <>
        <button onClick={handleClick} className="flex flex-col mt-2 mr-3 items-center bg-white border border-gray-200 rounded-lg shadow-lg md:flex-row md:max-w-lg md:h-36 hover:bg-gray-100 duration-700 dark:border-green-700 dark:bg-gray-100 dark:hover:bg-green-800 ">
          <img
            className="object-cover ml-2 my-2 w-50 h-64 md:h-32 md:w-32 rounded-full shadow-md"
            src="https://imcp.org.mx/wp-content/uploads/2019/05/Gasolinera-Pemex-Nivel-1.jpg"
            alt="imagen estación"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 mt-1.5 text-xl font-bold tracking-tight text-gray-900 dark:text-black">
              {station.name}
            </h5>
            <p className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
              {station.address}
            </p>
          </div>
        </button>
    </>
  );
};

export default Estación;
