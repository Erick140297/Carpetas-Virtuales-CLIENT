import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { updatePassword } from "../redux/fetchFunctions";

const FormularioContraseña = ({ id }) => {
  const [formData, setFormData] = useState({
    password: "",
    newPassword: "",
    repeatPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    password: "",
    newPassword: "",
    repeatPassword: "",
    isMacth: false,
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

    if (formData.password === "") {
      errors.password = "Este campo es obligatorio";
    }
    if (formData.newPassword === "") {
      errors.newPassword = "Este campo es obligatorio";
    }
    if (formData.repeatPassword === "") {
      errors.repeatPassword = "Este campo es obligatorio";
    }

    if (formData.newPassword !== formData.repeatPassword) {
      errors.isMacth = false;
      toast.error("Las contraseñas no coinciden");
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const data = {
          password: formData.password,
          newPassword: formData.newPassword,
        };

        const response = await updatePassword(id, data);
        if (response.ok) {
          setFormData({
            password: "",
            newPassword: "",
            repeatPassword: "",
          });

          setFormErrors({
            password: "",
            newPassword: "",
            repeatPassword: "",
          });

          toast.success("Contraseña actualizada");
        } else {
          toast.error("La contraseña es incorrecta");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="justify-center mr-6 max-w-lg mx-6 top-5 right-5 md:w-1/2 lg:w-2/5 mt-24">
      <form onSubmit={(user) => handleSubmit(user)} className="mx-4">
        <h2 className="font-black text-3xl text-center mb-4">
          Actualizar Contraseña
        </h2>
        <div className="bg-slate-400 rounded-lg shadow-lg mb-2 pt-6 px-5 py-4">
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-1 text-lg font-bold text-gray-900 dark:text-white"
            >
              Contraseña actual:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.password}
              onChange={handleChange}
              placeholder="*****"
            />
            {formErrors.password && (
              <p className="text-red-500 text-sm">{formErrors.password}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="newPassword"
              className="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
            >
              Nueva contraseña:
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.newPassword}
              onChange={handleChange}
            />
            {formErrors.newPassword && (
              <p className="text-red-500 text-sm">{formErrors.newPassword}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="repeatPassword"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Repita la nueva contraseña:
            </label>
            <input
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.repeatPassword}
              onChange={handleChange}
            />
            {formErrors.repeatPassword && (
              <p className="text-red-500 text-sm">
                {formErrors.repeatPassword}
              </p>
            )}
          </div>
          <input
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mb-2 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            value="Actualiza"
          />
        </div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </form>
    </div>
  );
};

export default FormularioContraseña;
