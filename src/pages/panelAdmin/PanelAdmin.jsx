import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getStations, getSupervisores, getUsers } from "../../redux/fetchFunctions";
import { setUsers, setSupervisores } from "../../redux/slices/usersSlice";
import { setStations } from "../../redux/slices/stationSlice";

const PanelAdmin = () => {
  const dispatch = useDispatch();

  const users = async () => {
    const data = await getUsers();
    dispatch(setUsers(data));
  };

  const stations = async () => {
    const data = await getStations();
    dispatch(setStations(data));
  };

  const supervisores = async () => {
    const data = await getSupervisores();
    dispatch(setSupervisores(data));
  }; 

  useEffect(() => {
    users();
    stations();
    supervisores();
  });

  return (
    <div className="flex items-center h-full  ">
      <div className="flex flex-row justify-around w-full flex-wrap gap-6 p-4">
        <Link to="/panel-admin/users">
          <button className="bg-green-800 p-8 flex justify-around rounded-lg text-xl font-semibold leading-normal text-white w-64 hover:bg-green-900 transition duration-500 ease-in-out">
            <svg
              className="w-10 h-10 text-white mr-8"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            Usuarios
          </button>
        </Link>
        <Link to="/panel-admin/estaciones">
          <button className="bg-green-800 p-8 flex justify-around rounded-lg text-xl font-semibold leading-normal text-white w-64 hover:bg-green-900 transition duration-500 ease-in-out">
            <svg
              className="w-10 h-10 text-white mr-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1c.564 0 1.034.11 1.412.336.383.228.634.551.794.907.295.655.294 1.465.294 2.081V7.5a.5.5 0 0 1-.5.5H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V2Zm2.5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z" />
            </svg>
            Estaciones
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PanelAdmin;
