import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFile, getFile, getFolder } from "../redux/fetchFunctions";
import { setFolder } from "../redux/slices/folderSlice";
import Loading from "./Loading";

const Archivo = ({ file }) => {
  const folderId = useSelector((state) => state.folders.folderId);
  const gerente = useSelector((state) => state.users.gerente);

  const [toggleStatus, setToggleStatus] = useState(false);
  const [toggleObservation, setToggleObservation] = useState(false);

  const [newStatus, setNewStatus] = useState("");
  const [newObservation, setNewObservation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const formatearFechaHora = (fechaString) => {
    const fecha = new Date(fechaString);
    const dia = fecha.getDate().toString().padStart(2, "0");
    const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
    const año = fecha.getFullYear();
    const hora = fecha.getHours().toString().padStart(2, "0");
    const minutos = fecha.getMinutes().toString().padStart(2, "0");
    const segundos = fecha.getSeconds().toString().padStart(2, "0");

    const fechaFormateada = `Fecha: ${dia}/${mes}/${año} Hora: ${hora}:${minutos}:${segundos}`;
    return fechaFormateada;
  };

  const download = async (id) => {
    const response = await getFile(id);
    const link = document.createElement("a");
    link.href = response.URL;
    link.click();
  };

  useEffect(() => {
    !folderId ? setIsLoading(false) : true;
  }, []);
  const cancelDelete = () => {
    setIsOpenDelete(false);
  };

  const handleDelete = async (id) => {
    await deleteFile(id);
    const folder = await getFolder(folderId);
    dispatch(setFolder(folder));
  };

  const addObservation = () => {};

  const changeStatus = () => {};

  return (
    <div className="cursor-pointer items-center text-white rounded-xl mb-3">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex px-2 pt-2">
          <div className="bg-white border md:w-48 md:h-42 border-gray-100 rounded-lg shadow-lg dark:bg-transparent dark:border-gray-00">
            <div className="flex justify-center">
              <div className="flex-col ml-1 justify-center items-center pb-2 mt-3 mr-1">
                <div className="flex justify-start ml-4">
                  <svg
                    className="w-8 h-8 text-gray-800 dark:text-grey"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Z" />
                  </svg>
                </div>
                <h5
                  className="text-xs px-1 ml-1 md:w-20 font-semibold text-gray-900 dark:text-grey overflow-hidden"
                  style={{ maxHeight: "3em", lineHeight: "1" }}
                >
                  {file.name}
                </h5>
                {!gerente && (
                  <button
                    onClick={() => setToggleObservation(!toggleObservation)}
                    className="inline-flex mt-6 py-2 items-center w-20 text-xs font-normal text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-800"
                    style={{ maxHeight: "3em", lineHeight: "1" }}
                  >
                    Agregar observación
                  </button>
                )}
              </div>
              <div className="my-2">
                <h5
                  className="text-sm px-1 md:w-20 font-normal text-gray-900 dark:text-grey"
                  style={{ maxHeight: "3em", lineHeight: "1.2" }}
                >
                  {file.status}
                </h5>
                <h5
                  className="text-sm px-1 md:w-20 font-normal text-gray-900 dark:text-grey"
                  style={{ maxHeight: "3em", lineHeight: "1" }}
                >
                  {file.observation}
                </h5>
                <h5 className="px-1 text-slate-700 md:w-20 font-thin text-xs dark:text-grey">
                  {formatearFechaHora(file.date)}
                </h5>
                {!gerente && (
                  <button
                    onClick={() => setToggleStatus(!toggleStatus)}
                    className="inline-flex px-1 items-center w-20 py-1.5 mt-1 text-xs font-normal text-center text-white bg-orange-500 rounded-md hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-600"
                    style={{ maxHeight: "3em", lineHeight: "1" }}
                  >
                    Cambiar estado
                  </button>
                )}
              </div>
            </div>
            <div className="flex justify-center space-x-2 mr-1 mb-3">
              {file.status === "En revisión..." && (
                <button
                  onClick={() => handleDelete(file._id)}
                  className="inline-flex items-center pl-1 pr-1 py-1 text-sm font-medium text-center text-white bg-red-700 rounded-full hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-800"
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
                    Eliminar
                  </svg>
                </button>
              )}
              <button
                onClick={() => download(file._id)}
                className="inline-flex items-center pl-1 pr-1 py-1 text-sm font-medium text-center text-white bg-green-700 rounded-full hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-800"
              >
                <svg
                  className="w-3.5 h-3.5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 19"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3M9.5 1v10.93m4-3.93-4 4-4-4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      {/* <div className="">
      <h2>{file.name}</h2>
      <h2>Estado: {file.status}</h2>
      <h2>Observación: {file.observation}</h2>
      {!gerente && (
        <button onClick={() => setToggleObservation(!toggleObservation)}>
          Agregar observación
        </button>
      )}
      {!gerente && (
        <button onClick={() => setToggleStatus(!toggleStatus)}>
          Cambiar estado
        </button>
      )}
      <h2>{formatearFechaHora(file.date)}</h2>
      <button onClick={() => download(file._id)}>Descargar</button>
      {gerente && file.status === "En revisión..." && (
        <button onClick={() => handleDelete(file._id)}>Eliminar</button>
      )} */}

      {toggleObservation && (
        <form className="fixed top-20 left-0 w-full h-full bg-black bg-opacity-50">
          <div className="fixed top-1/3 flex flex-col w-1/3 left-1/3 items-center justify-center py-8 bg-gray-300 rounded-lg shadow-2xl">
            <label className="text-lg" htmlFor="folder">
              Agregue una observación:
            </label>
            <textarea
              id="archivo"
              className="outline-none p-2 rounded-md w-2/3 m-2"
              type="file"
              name="file"
            />
            {/* {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )} */}
            <button
              className="cursor-pointer hover:bg-green-900 mt-4 bg-green-800 p-2 rounded-md text-white w-2/3 m-2"
              type="submit"
            >
              Crear observación
            </button>
            <button
              onClick={() => setToggleObservation(false)}
              className="bg-red-600 hover:bg-red-700 p-2 rounded-md text-white w-2/3 m-2"
            >
              Cancelar
            </button>
          </div>
        </form>
      )}

      {toggleStatus && (
        <form className="fixed top-20 left-0 w-full h-full bg-black bg-opacity-50">
          <div className="fixed top-1/3 flex flex-col w-1/3 left-1/3 items-center justify-center py-8 bg-gray-300 rounded-lg shadow-2xl">
            <label className="text-lg" htmlFor="folder">
              Seleccione un estado:
            </label>
            <button
              className="cursor-pointer hover:bg-green-900 mt-4 bg-green-800 p-2 rounded-md text-white w-2/3 m-2"
              type="submit"
            >
              Aceptado
            </button>
            <button className="bg-red-600 hover:bg-red-700 p-2 rounded-md text-white w-2/3 m-2">
              Rechazado
            </button>
            <button
              onClick={() => setToggleStatus(false)}
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

export default Archivo;
