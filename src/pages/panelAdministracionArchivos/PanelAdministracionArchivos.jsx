import { useDispatch, useSelector } from "react-redux";
import { getFolder, getStation } from "../../redux/fetchFunctions";
import { setStation } from "../../redux/slices/stationSlice";
import { useEffect } from "react";
import BotonSubirCarpetas from "./BotonSubirCarpeta";
import BotonSubirArchivo from "./BotonSubirArchivo";
import Carpeta from "../../components/Carpeta";
import {
  changeSubFolderState,
  popStack,
  setFolder,
} from "../../redux/slices/folderSlice";
import Archivo from "../../components/Archivo";

const PanelAdministracionArchivos = () => {
  const dispatch = useDispatch();

  const dataStation = useSelector((state) => state.stations.station);
  const subFolder = useSelector((state) => state.folders.subFolder);
  const folder = useSelector((state) => state.folders.folder);
  const stack = useSelector((state) => state.folders.stack);

  const back = async () => {
    if (stack.length > 0) {
      const response = await getFolder(stack[stack.length - 1].id);
      dispatch(setFolder(response));
    } else {
      const response = await getStation(dataStation._id);
      dispatch(setStation(response));
      dispatch(changeSubFolderState(false));
    }
  };

  const handleBack = () => {
    dispatch(popStack());
  };

  useEffect(() => {
    back();
  }, [stack, subFolder]);

  return (
    <>
      {subFolder && (
        <button
          onClick={handleBack}
          className="fixed top-28 left-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-500"
        >
          <svg
            className="w-6 h-6 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          <span className="sr-only">Icon description</span>
        </button>
      )}

      <div className="md:flex mt-24 mb-2 flex-col overscroll-auto">
        <h1 className="text-2xl font-bold text-center">
          Panel de Administración de Archivos
        </h1>
        <div className="flex flex-col justify-center items-center overscroll-y-contain">
          <h2 className="text-2xl text-red-600 text-center">
            {dataStation.name}
          </h2>
        </div>
      </div>
      <div className="flex-1 h-full px-4 bg-slate-20">
        <div className="bg-white h-1/2 border  rounded-lg shadow-xl dark:border-gray-200">
          <div className="md:flex justify-center">
            <h2 className="flex font-bold text-xl w-full h-12 text-grey-400 rounded-sm shadow-lg text-left bg-gray-300 p-4 overscroll-auto">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-green-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M4.09 7.586A1 1 0 0 1 5 7h13V6a2 2 0 0 0-2-2h-4.557L9.043.8a2.009 2.009 0 0 0-1.6-.8H2a2 2 0 0 0-2 2v14c.001.154.02.308.058.457L4.09 7.586Z" />
                <path d="M6.05 9 2 17.952c.14.031.281.047.424.048h12.95a.992.992 0 0 0 .909-.594L20 9H6.05Z" />
              </svg>
              <p className="ml-2 text-xxl">
                Inicio
                {stack.map((stack, index) => {
                  return (
                    <span key={index} className="text-xxl">
                      {`/${stack.name}`}
                    </span>
                  );
                })}
              </p>
            </h2>
            <BotonSubirCarpetas
              stationId={dataStation._id}
              subFolder={subFolder}
            />
          </div>
          <div className="md:flex flex-wrap w-full h-1/2">
            {!subFolder
              ? dataStation.directory?.map((folder, index) => {
                  return <Carpeta folder={folder} key={index} />;
                })
              : folder.subFolders?.map((folder, index) => {
                  return <Carpeta folder={folder} key={index} />;
                })}
          </div>
        </div>
        <div className="bg-white h-1/2 border  rounded-lg shadow-xl dark:border-gray-200 overflow-auto">
          <div className="flex justify-center">
            <h2 className="flex font-bold text-xl w-full h-12 text-grey-400 rounded-sm shadow-lg text-left bg-gray-300 p-4">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-green-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Z" />
              </svg>
              <span className="ml-2 text-xxl">Archivos</span>
            </h2>
            {subFolder && <BotonSubirArchivo folder={folder} />}
          </div>
          <div className="md:flex grid grid-cols-2 md:grid-cols-3 gap-1 overflow-auto">
            {subFolder &&
              folder.files?.map((file, index) => {
                return <Archivo key={index} file={file} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PanelAdministracionArchivos;
