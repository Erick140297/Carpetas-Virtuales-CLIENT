import { useState } from "react";
import {
  getFolder,
  getStation,
  registerFolder,
  registerSubFolder,
} from "../../redux/fetchFunctions";
import { useDispatch, useSelector } from "react-redux";
import { setStation } from "../../redux/slices/stationSlice";
import { setFolder } from "../../redux/slices/folderSlice";

const BotonSubirCarpetas = ({ stationId, subFolder }) => {
  const folderId = useSelector((state) => state.folders.folderId);

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState({
    folderName: "",
  });

  const [errors, setErrors] = useState({
    folderName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const createFolder = async (subFolder, folderId, stationId) => {
    if (subFolder) {
      await registerSubFolder(folderId, data);
      const response = await getFolder(folderId);
      dispatch(setFolder(response));
      setIsOpen(!isOpen);
      return response;
    } else {
      const response = await registerFolder(stationId, data);
      const station = await getStation(stationId);
      dispatch(setStation(station));
      setIsOpen(!isOpen);
      return response;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    if (data.folderName === "") {
      errors.folderName = "Este campo es obligatorio";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        await createFolder(subFolder, folderId, stationId);

        setData({
          folderName: "",
        });

        setErrors({
          folderName: "",
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const toggleSpeedDial = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="fixed top-1/2 right-12">
        <button
          type="button"
          data-dial-toggle="speed-dial-menu-default"
          aria-controls="speed-dial-menu-default"
          aria-expanded="false"
          className="flex
          items-center justify-center text-white bg-blue-700 rounded-full w-12 h-12
        hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-2
        focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          onClick={toggleSpeedDial}
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 18"
          >
            <path d="M9.043.8a2.009 2.009 0 0 0-1.6-.8H2a2 2 0 0 0-2 2v2h11.443L9.043.8ZM0 6v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6H0Zm11 7h-1v1a1 1 0 1 1-2 0v-1H7a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Open actions menu</span>
        </button>

        {isOpen && (
          <form className="fixed top-20 left-0 w-full h-full bg-black bg-opacity-50">
            <div className="fixed top-1/3 flex flex-col w-1/3 left-1/3 items-center justify-center py-8 bg-gray-300 rounded-lg shadow-2xl">
              <label className="text-2xl" htmlFor="folder">
                Nombre de la carpeta:{" "}
              </label>
              <input
                onChange={(e) => handleChange(e)}
                id="folder"
                className="outline-none p-2 rounded-md w-2/3 m-2"
                type="text"
                name="folderName"
                value={data.folderName}
              />
              {errors.folderName && (
                <p className="text-red-500 text-sm">{errors.folderName}</p>
              )}
              <button
                onClick={(e) => handleSubmit(e)}
                className="cursor-pointer hover:bg-green-900 mt-4 bg-green-800 p-2 rounded-md text-white w-2/3 m-2"
                type="submit"
              >
                Crear carpeta
              </button>
              <button
                className="bg-red-600 hover:bg-red-700 p-2 rounded-md text-white w-2/3 m-2"
                onClick={toggleSpeedDial}
              >
                Cancelar
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BotonSubirCarpetas;
