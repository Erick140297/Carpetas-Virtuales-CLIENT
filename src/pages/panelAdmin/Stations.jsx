import { useSelector } from "react-redux";
import FormularioStation from "../../components/FormularioStation";
import ListadoStations from "../../components/ListadoStations";

const Stations = () => {
  const stations = useSelector((state) => state.stations.stations);
  return (
    <div className="pt-28 pb-4 md:flex bg-slate-200">
      <FormularioStation />
      <ListadoStations stations={stations} />
    </div>
  );
};

export default Stations;
