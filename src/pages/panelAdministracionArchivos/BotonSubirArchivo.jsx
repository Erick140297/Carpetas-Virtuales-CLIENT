import { useState } from "react";
import { getFolder, registerFiles } from "../../redux/fetchFunctions";
import { useDispatch, useSelector } from "react-redux";
import { setFolder } from "../../redux/slices/folderSlice";

const BotonSubirArchivo = () => {
  const folderId = useSelector((state) => state.folders.folderId);


  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false);

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  }

  const createFile = async (folderId, formData) => {
    const response = await registerFiles(folderId, formData);
    const folder = await getFolder(folderId);
    dispatch(setFolder(folder));
    return response;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    if (selectedFiles.length === 0) {
      setError("Por favor, selecciona al menos un archivo.");
    }

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append(`file${i}`, selectedFiles[i]);
    }

    if (Object.keys(errors).length === 0) {
      try {
        await createFile(folderId, formData);
        setSelectedFiles([]); 
        setError(null);
        setIsOpen(!isOpen);
      } catch (error) {
        console.log(error);
      }
    }

  }

  const toggleSpeedDial = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="fixed bottom-10 right-12">
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
                  viewBox="0 0 20 20"
                >
                  <path d="M.188 5H5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707c-.358.362-.617.81-.753 1.3C.148 5.011.166 5 .188 5ZM14 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm2 7h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2Z" />
                  <path d="M6 14a7.969 7.969 0 0 1 10-7.737V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H.188A.909.909 0 0 1 0 6.962V18a1.969 1.969 0 0 0 1.933 2h6.793A7.976 7.976 0 0 1 6 14Z" />
                </svg>
          <span className="sr-only">add file</span>
        </button>

        {isOpen && (
          <form className="fixed top-20 left-0 w-full h-full bg-black bg-opacity-50">
          <div className="fixed top-1/3 flex flex-col w-1/3 left-1/3 items-center justify-center py-8 bg-gray-300 rounded-lg shadow-2xl">
            <label className="text-lg"
            htmlFor="folder">Seleccione el archivo: </label>
          <input onChange={(e)=> handleChange(e)} id="archivo" className="outline-none p-2 rounded-md w-2/3 m-2" type="file" name="file" multiple />
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          <button onClick={(e)=>handleSubmit(e)} className="cursor-pointer hover:bg-green-900 mt-4 bg-green-800 p-2 rounded-md text-white w-2/3 m-2" type="submit">Crear archivo</button>
          <button className="bg-red-600 hover:bg-red-700 p-2 rounded-md text-white w-2/3 m-2" onClick={toggleSpeedDial}>Cancelar</button>
          </div>
        </form>
        )}
      </div>
    </div>
  );
};

export default BotonSubirArchivo;
