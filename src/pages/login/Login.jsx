import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { getStationName, login } from "../../redux/fetchFunctions";
import { getUser, loginUser, logoutUser } from "../../redux/slices/authSlice";
import { clearStationState, setStation } from "../../redux/slices/stationSlice";
import { clearUserState } from "../../redux/slices/usersSlice";
import { clearFolderState } from "../../redux/slices/folderSlice";
import { clearFileState } from "../../redux/slices/fileSlice";

const Login = () => {
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const [data, setData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const station = async (user) => {
    const response = await getStationName(user.station);
    dispatch(setStation(response));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await login(data);

    if (!user?.id) {
      toast.error("Usuario o contraseña incorrectos");
    } else {
      dispatch(getUser(user));
      dispatch(loginUser());
      if (user.post == "Administrador") {
        navigate("/panel-admin");
      }
      if (user.post == "Equipo de apoyo") {
        navigate("/panel-gestion");
      }
      if (user.post == "Supervisor") {
        navigate("/panel-gestion");
      }
      if (user.post == "Gerente") {
        await station(user);
        navigate(`/panel-gerente`);
      }
    }
  };

  useEffect(() => {
    dispatch(logoutUser());
    dispatch(clearStationState());
    dispatch(clearUserState());
    dispatch(clearFolderState())
    dispatch(clearFileState())
  });

  return (
    <section className="bg-gray-50 dark:bg-gray-100 flex-1 h-full shadow-lg">
      <div className=" py-10 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 ml-5 text-4xl font-extrabold tracking-tight leading-none text-green-800 md:text-5xl lg:text-6xl dark:text-gray/300 opacity-80">
            Gomez Corp, Venta de Hidrocarburos.
          </h1>
          <p className="mb-6 ml-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Nos dedicamos a la venta de hidrocarburos de calidad a precio
            competitivo y con excelente servicio al cliente que nos diferencia
            de la competencia.
          </p>
          <a
            href="https://www.gomezcorp.com.mx/"
            className="text-blue-600 ml-6 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
          >
            Lee más acerca de Gomez Corp
            <svg
              className="w-3.5 h-3.5 ml-2"
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
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        <div>
          <div className="mt-16 w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-2xl dark:bg-green-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Ingresa a Gomez Corp
            </h2>
            <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
              <div>
                <label
                  htmlFor="user"
                  className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                >
                  Usuario:
                </label>
                <input
                  id="user"
                  type="text"
                  name="userName"
                  onChange={(e) => handleChange(e)}
                  value={data.userName}
                  className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-400 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Usuario"
                  required
                  autoComplete="on"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                >
                  Contraseña:
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={(e) => handleChange(e)}
                  id="password"
                  placeholder="••••••••"
                  className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-400 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                value="Iniciar sesion"
                className="mt-6 w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-md"
              >
                Ingresa a tu cuenta
              </button>
              <p></p>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Login;
