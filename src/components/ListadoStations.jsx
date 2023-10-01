import StationCard from "./StationCard";

const ListadoStations = ({ stations }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Lista de Estaciones</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administración de{" "}
        <span className="text-red-600 font-bold">estaciones</span>
      </p>
      <div>
        {stations.length === 0 && (
          <p className="text-center text-gray-500">No hay estaciones</p>
        )}
        {stations.length > 0 &&
          stations.map((station, index) => {
            return <StationCard station={station} key={index} />;
          })}
      </div>
    </div>
  );
};

export default ListadoStations;
