const Loading = () => {
  return (
    <div className="flex items-center justify-center bg-transparent">
      <div className="flex items-center justify-center w-48 h-48 borderrounded-full dark:bg-trasparent ">
        <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
          loading...
        </div>
      </div>
    </div>
  );
};

export default Loading;
