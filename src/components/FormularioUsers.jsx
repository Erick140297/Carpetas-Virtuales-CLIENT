import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { registerUser, getUsers, updateUser } from "../redux/fetchFunctions";
import { setUsers, clearUser } from "../redux/slices/usersSlice";

const FormularioUsers = () => {
  const edit = useSelector((state) => state.users.edit);
  const user = useSelector((state) => state.users.user);
  const stations = useSelector((state) => state.stations.stations);

  const dispatch = useDispatch();

  const users = async () => {
    const data = await getUsers();
    dispatch(setUsers(data));
  };

  const handleCancelUpdate = () => {
    dispatch(clearUser());
  };

  const handleEdit = async (data) => {
    if (!edit) {
      const response = await registerUser(data);
      toast.success("Usuario registrado exitosamente");
      return response;
    } else {
      const response = await updateUser(user._id, data);
      dispatch(clearUser());
      toast.success("Usuario actualizado exitosamente");
      return response;
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    lastName1: "",
    lastName2: "",
    email: "",
    puesto: "",
    zona: "",
    estacion: "",
  });

  useEffect(() => {
    if (edit) {
      setFormData({
        name: user.name || "",
        lastName1: user.lastName1 || "",
        lastName2: user.lastName2 || "",
        email: user.email || "",
        puesto: user.post || "",
        zona: user.zone || "",
        estacion: user.station || "",
      });
    } else {
      setFormData({
        name: "",
        lastName1: "",
        lastName2: "",
        email: "",
        puesto: "",
        zona: "",
        estacion: "",
      });
    }
  }, [edit, user]);

  const [formErrors, setFormErrors] = useState({
    name: "",
    lastName1: "",
    lastName2: "",
    email: "",
    puesto: "",
    zona: "",
    estacion: "",
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
    if (formData.lastName1 === "") {
      errors.lastName1 = "Este campo es obligatorio";
    }
    if (formData.lastName2 === "") {
      errors.lastName2 = "Este campo es obligatorio";
    }
    if (formData.email === "") {
      errors.email = "Este campo es obligatorio";
    }
    if (formData.puesto === "") {
      errors.puesto = "Este campo es obligatorio";
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const data = {
          name: formData.name,
          lastName1: formData.lastName1,
          lastName2: formData.lastName2,
          email: formData.email,
          post: formData.puesto,
          zone: formData.zona,
          station: formData.estacion,
        };

        const response = await handleEdit(data);

        if (response.ok) {
          setFormData({
            name: "",
            lastName1: "",
            lastName2: "",
            email: "",
            puesto: "",
            zona: "",
            estacion: "",
          });

          setFormErrors({});

          await users();
        } else {
          console.error("Error al registrar el usuario");
        }
      } catch (error) {
        console.error("Error al enviar la solicitud:", error);
      }
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">
        Registra un nuevo usuario
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Llena los siguientes campos para{" "}
        <span className="text-red-600 font-bold">registrar un usuario</span>
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
            placeholder="Nombre(s)"
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
            htmlFor="lastName1"
          >
            Apellido paterno:
          </label>
          <input
            id="lastName1"
            name="lastName1"
            className="outline-none border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Apellido paterno"
            value={formData.lastName1}
            onChange={handleChange}
          />
          {formErrors.lastName1 && (
            <p className="text-red-500 text-sm">{formErrors.lastName1}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="lastName2"
          >
            Apellido materno:
          </label>
          <input
            id="lastName2"
            name="lastName2"
            className="outline-none border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Apellido materno"
            value={formData.lastName2}
            onChange={handleChange}
          />
          {formErrors.lastName2 && (
            <p className="text-red-500 text-sm">{formErrors.lastName2}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            id="email"
            name="email"
            className="outline-none border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="mail@gomezcorp.com.mx"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && (
            <p className="text-red-500 text-sm">{formErrors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="lastName2"
          >
            Puesto:{" "}
          </label>
          <select
            className="outline-none border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="puesto"
            value={formData.puesto}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Administrador">Administrador</option>
            <option value="Equipo de apoyo">Equipo de apoyo</option>
            <option value="Gerente">Gerente</option>
            <option value="Supervisor">Supervisor</option>
          </select>
          {formErrors.puesto && (
            <p className="text-red-500 text-sm">{formErrors.puesto}</p>
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
            name="zona"
            value={formData.zona}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Chimalhuacan-Neza">Chimalhuacan-Neza</option>
            <option value="Neza-CDMX">Neza-CDMX</option>
            <option value="Cuernavaca">Cuernavaca</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="lastName2"
          >
            Estación:{" "}
          </label>
          <select
            className="outline-none border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="estacion"
            value={formData.estacion}
            onChange={handleChange}
          >
            <option value=""></option>
            {stations.map((estacion, i) => (
              <option key={i} value={estacion.name}>
                {estacion.name}
              </option>
            ))}
          </select>
        </div>
        {edit ? (
          <div>
            <input
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 w-full p-3 text-white uppercase font-bold mb-4"
              value="Actualizar usuario"
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
            value="Registrar usuario"
          />
        )}
      </form>
      <Toaster />
    </div>
  );
};

export default FormularioUsers;
