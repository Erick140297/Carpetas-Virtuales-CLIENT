const ProfileSettings = ({ user }) => {
  return (
    <div className="flex justify-center md:w-1/2 lg:w-3/5 md:h-3/5 mt-16 mx-10 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-200 dark:border-gray-200 py-2">
      <div className="flex flex-col my-12 justify-center h-96 w-96 items-center bg-green-800 opacity-90 rounded-full">
        <button
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          alt="Bonnie image"
        >
          <svg
            className="w-24 h-24 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
        </button>

        <h5 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
          <span className="font-normal normal-case">{user.name}</span>
        </h5>
        <span className="text-lg text-gray-400 dark:text-gray-300">
          {`${user.post}`}
        </span>
        <span className="text-lg text-gray-200 dark:text-gray-400">
          Uuario: {`${user.userName}`}
        </span>
      </div>
    </div>
  );
};

export default ProfileSettings;
