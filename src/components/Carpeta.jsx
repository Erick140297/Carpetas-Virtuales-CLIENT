import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSubFolderState,
  pushStack,
  setFolder,
  setFolderId,
} from "../redux/slices/folderSlice";
import { deleteFolder, getFolder, getStation } from "../redux/fetchFunctions";
import { setStation } from "../redux/slices/stationSlice";
import Loading from "./Loading";

const Carpeta = ({ folder }) => {
  const stack = useSelector((state) => state.folders.stack);
  const dataStation = useSelector((state) => state.stations.station);

  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(changeSubFolderState(true));
    dispatch(setFolderId(folder._id));
    dispatch(pushStack({ name: folder.folderName, id: folder._id }));
    const response = await getFolder(folder._id);
    dispatch(setFolder(response));
  };

  const confirmDelete = async (e) => {
    e.preventDefault();
    if (stack.length < 1) {
      await deleteFolder(folder._id);
      const station = await getStation(dataStation._id);
      dispatch(setStation(station));
      setIsOpenDelete(false);
    } else {
      await deleteFolder(folder._id);
      const response = await getFolder(stack[stack.length - 1].id);
      dispatch(setFolder(response));
      setIsOpenDelete(false);
    }
  };

  useEffect(() => {
    stack ? setIsLoading(false) : true;
  }, []);
  const cancelDelete = () => {
    setIsOpenDelete(false);
  };

  const handleDelete = () => {
    setIsOpenDelete(true);
  };

  const cancelEdit = () => {
    setIsOpenEdit(false);
  };

  const handleEdit = () => {
    setIsOpenEdit(true);
  };

  return (
    <div className="cursor-pointer items-center text-white rounded-xl mb-3">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex justify-end px-2 pt-2">
          <div className="bg-white border md:w-24 md:h-28 border-gray-100 rounded-lg shadow-lg dark:bg-transparent dark:border-gray-00">
            <div className="flex justify-center">
              <button
                className="flex text-gray-800 dark:text-grey flex-col items-center pb-2 mt-2"
                onClick={handleClick}
              >
                <svg
                  className="text-gray-800"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
                </svg>
                <h5
                  className="text-xs px-1 md:w-20 font-semibold text-gray-900 dark:text-grey overflow-hidden"
                  style={{ maxHeight: "3em", lineHeight: "1" }}
                >
                  {folder.folderName}
                </h5>
              </button>
            </div>
            <div className="flex justify-center space-x-2 mr-1 mb-1">
              <button
                type="button"
                onClick={handleDelete}
                className="inline-flex items-center pl-1.5 pr-1.5 ml-1 text-sm font-medium text-center text-white bg-red-600 rounded-full hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                <svg
                  className="w-3.5 h-3.5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
                  />
                </svg>
              </button>
              <button
                onClick={handleEdit}
                className="inline-flex items-center pl-1 pr-1 py-1 text-sm font-medium text-center text-white bg-green-700 rounded-full hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-800"
              >
                <svg
                  className="w-4 h-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                  <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {isOpenDelete && (
        <form className="fixed top-20 left-0 w-full h-full bg-black bg-opacity-50">
          <div className="fixed top-1/3 flex flex-col w-1/3 left-1/3 items-center justify-center py-8 bg-gray-300 rounded-lg shadow-2xl">
            <label className="text-center p-4 text-black">
              ¿Seguro que desea eliminar esta carpeta? Esta acción no se puede
              deshacer.
            </label>

            <button
              onClick={(e) => confirmDelete(e)}
              className="cursor-pointer hover:bg-green-900 mt-4 bg-green-800 p-2 rounded-md text-white w-2/3 m-2"
            >
              Confirmar
            </button>

            <button
              onClick={cancelDelete}
              className="bg-red-600 hover:bg-red-700 p-2 rounded-md text-white w-2/3 m-2"
            >
              Cancelar
            </button>
          </div>
        </form>
      )}
      {isOpenEdit && (
        <form className="fixed top-20 left-0 w-full h-full bg-black bg-opacity-50">
          <div className="fixed top-1/3 flex flex-col w-1/3 left-1/3 items-center justify-center py-8 bg-gray-300 rounded-lg shadow-2xl">
            <label className="text-2xl" htmlFor="folder">
              Nuevo nombre:{" "}
            </label>
            <input
              onChange=""
              id="folder"
              className="outline-none p-2 rounded-md w-2/3 m-2"
              type="text"
              name="folderName"
              value=""
            />

            <button
              onClick=""
              className="cursor-pointer hover:bg-green-900 mt-4 bg-green-800 p-2 rounded-md text-white w-2/3 m-2"
            >
              Editar
            </button>

            <button
              onClick={cancelEdit}
              className="bg-red-600 hover:bg-red-700 p-2 rounded-md text-white w-2/3 m-2"
            >
              Cancelar
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Carpeta;
