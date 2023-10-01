import { useState } from "react";
const BotonSubirArchivos = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSpeedDial = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="fixed bottom-4 right-4">
        <button
          type="button"
          data-dial-toggle="speed-dial-menu-default"
          aria-controls="speed-dial-menu-default"
          aria-expanded="false"
          className="flex
          items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14
        hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4
        focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          onClick={toggleSpeedDial}
        >
          <svg
            className="w-5 h-5 transition-transform group-hover:rotate-45"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 1v16M1 9h16"
            />
          </svg>
          <span className="sr-only">Open actions menu</span>
        </button>

        {isOpen && (
          <div className="flex flex-col items-center mb-4 mt-2 space-y-2 absolute bottom-full right-0.5">
            <>
              <div
                id="tooltip-share"
                role="tooltip"
                className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                New File
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
              <button
                type="button"
                data-tooltip-target="tooltip-print"
                data-tooltip-placement="left"
                className="flex justify-center items-center w-[44px] h-[44px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-600 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
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

                <span className="sr-only">New File</span>
              </button>
              <>
                <div
                  id="tooltip-share"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Share
                  <div className="tooltip-arrow" data-popper-arrow="" />
                </div>
                <button
                  type="button"
                  data-tooltip-target="tooltip-print"
                  data-tooltip-placement="left"
                  className="flex justify-center items-center w-[44px] h-[44px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-600 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
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

                  <span className="sr-only">Print</span>
                </button>
              </>
            </>
          </div>
        )}
      </div>
    </div>
  );
};

export default BotonSubirArchivos;
