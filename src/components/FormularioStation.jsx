import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import {
  registerStation,
  getStations,
  updateStation,
} from "../redux/fetchFunctions";
import { clearStation, setStations } from "../redux/slices/stationSlice";

const FormularioStation = () => {
  const edit = useSelector((state) => state.stations.edit);
  const station = useSelector((state) => state.stations.station);
  const supervisores = useSelector((state) => state.users.supervisores);

  const dispatch = useDispatch();

  const stations = async () => {
    const data = await getStations();
    dispatch(setStations(data));
  };

  const handleCancelUpdate = () => {
    dispatch(clearStation());
  };

  const handleEdit = async (data) => {
    if (!edit) {
      const response = await registerStation(data);
      toast.success("Estación registrada exitosamente");
      return response;
    } else {
      const response = await updateStation(station._id, data);
      dispatch(clearStation());
      toast.success("Estación actualizado exitosamente");
      return response;
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    zone: "",
    manager: "",
    supervisor: "",
  });

  useEffect(() => {
    if (edit) {
      setFormData({
        name: station.name || "",
        address: station.address || "",
        zone: station.zone || "",
        manager: station.manager || "",
        supervisor: station.supervisor || "",
      });
    } else {
      setFormData({
        name: "",
        address: "",
        zone: "",
        manager: "",
        supervisor: "",
      });
    }
  }, [edit, station]);

  const [formErrors, setFormErrors] = useState({
    name: "",
    address: "",
    zone: "",
    manager: "",
    supervisor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (formData.name === "") {
      errors.name = "Este campo es obligatorio";
    }
    if (formData.address === "") {
      errors.address = "Este campo es obligatorio";
    }
    if (formData.zone === "") {
      errors.zone = "Este campo es obligatorio";
    }
    if (formData.manager === "") {
      errors.manager = "Este campo es obligatorio";
    }
    if (formData.supervisor === "") {
      errors.supervisor = "Este campo es obligatorio";
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await handleEdit(formData);

        if (response.ok) {
          setFormData({
            name: "",
            address: "",
            zone: "",
            manager: "",
            supervisor: "",
          });

          setFormErrors({});

          await stations();
        } else {
          console.error("Error al registrar la estación");
        }
      } catch (error) {
        console.error("Error al enviar la solicitud:", error);
      }
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">
        Registra una nueva Estación
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Llena los siguientes campos para{" "}
        <span className="text-red-600 font-bold">registrar una estación</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="ml-4 mr-4 bg-white shadow-md rounded-lg py-10 px-5"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="name"
          >
            Nombre:
          </label>
          <input
            id="name"
            name="name"
            className="outline-none border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name && (
            <p className="text-red-500 text-sm">{formErrors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="address"
          >
            Dirección:
          </label>
          <input
            id="address"
            name="address"
            className="outline-none border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Dirección"
            value={formData.address}
            onChange={handleChange}
          />
          {formErrors.address && (
            <p className="text-red-500 text-sm">{formErrors.address}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="lastName2"
          >
            Zona:{" "}
          </label>
          <select
            className="outline-none border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="zone"
            value={formData.zone}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Chimalhuacan-Neza">Chimalhuacan-Neza</option>
            <option value="Neza-CDMX">Neza-CDMX</option>
            <option value="Cuernavaca">Cuernavaca</option>
          </select>
          {formErrors.zone && (
            <p className="text-red-500 text-sm">{formErrors.zone}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="manager"
          >
            Gerente:
          </label>
          <input
            id="manager"
            name="manager"
            className="outline-none border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Gerente"
            value={formData.manager}
            onChange={handleChange}
          />
          {formErrors.manager && (
            <p className="text-red-500 text-sm">{formErrors.manager}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="supervisor"
          >
            Supervisor:{" "}
          </label>
          <select
            className="outline-none border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="supervisor"
            value={formData.supervisor}
            onChange={handleChange}
          >
            <option value=""></option>
            {supervisores.map((supervisor, index) => (
              <option
                key={index}
                value={`${supervisor.name} ${supervisor.lastName1} ${supervisor.lastName2}`}
              >{`${supervisor.name} ${supervisor.lastName1} ${supervisor.lastName2}`}</option>
            ))}
          </select>
          {formErrors.supervisor && (
            <p className="text-red-500 text-sm">{formErrors.supervisor}</p>
          )}
        </div>

        {edit ? (
          <div>
            <input
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 w-full p-3 text-white uppercase font-bold mb-4"
              value="Actualizar estación"
            />

            <button
              onClick={handleCancelUpdate}
              className="bg-red-600 hover:bg-red-800 w-full p-3 text-white uppercase font-bold"
            >
              Cancelar
            </button>
          </div>
        ) : (
          <input
            type="submit"
            className="bg-red-600 hover:bg-red-800 w-full p-3 text-white uppercase font-bold"
            value="Registrar estación"
          />
        )}
      </form>
      <Toaster />
    </div>
  );
};

export default FormularioStation;
