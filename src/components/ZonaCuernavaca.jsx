import BotonSubirArchivos from "../pages/panelGestion/BotonSubirArchivos";

const ZonaCuernavaca = () => {
  return (
    <>
    <div className="p-3 mt-20 sm:ml-52 flex items-center justify-between">
        <div className="p-3 sm:ml-20 flex items-center justify-start">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-500"
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
        </div>
        <div
          className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 bg-transparen  border-x-transparent border-y-transparent"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li>
              <div className="flex items-center">
                <svg
                  className="w-3 h-3 mx-1 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <p className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-gray-500">
                  Nombre Carpeta
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <BotonSubirArchivos></BotonSubirArchivos>
    </>
  )
  
};

export default ZonaCuernavaca;
