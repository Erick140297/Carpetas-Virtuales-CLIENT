import { useSelector } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.authUser);

  let navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogo = () => {
    if (!isAuth) {
      navigate("/");
    } else {
      if (user.post == "Administrador") {
        navigate("/panel-admin");
      }
      if (user.post == "Gestor legal") {
        navigate("/panel-gestion");
      }
      if (user.post == "Gerente") {
        navigate(`/panel-gerente`);
      }

      // Agregar los otros redireccionamientos dependiendo del puesto
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full h-18 drop-shadow-lg bg-gray-100">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div onClick={handleLogo} className="flex items-center justify-start">
            <button className="flex ml-6 md:mr-24">
              <img
                src="https://res.cloudinary.com/dnrcmjyu1/image/upload/v1689748432/Gomez%20Corp/GomezCorpLogo_iodwuc.png"
                className="h-16 mr-3 opacity-90"
                alt="Gomez Corp Logo"
              />
            </button>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ml-3">
              <div>
                {isAuth && (
                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        onClick={toggleDropdown}
                        type="button"
                        className="inline-flex items-center px-4 py-2 tracking-normal max-w-md rounded-lg text-xl font-semibold leading-normal text-gray-900 bg-green-800 border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-2 focus:ring-gray-200 focus:text-gray-200 dark:border-gray-200 dark:text-white dark:hover:text-white dark:hover:bg-green-900 transition duration-500 ease-in-out  dark:focus:ring-grey-200 dark:focus:text-white"
                      >
                        <svg
                          className="w-6 h-6 mr-3"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                        </svg>
                        Cuenta
                        <svg
                          className="w-6 h-6 ml-3 mt-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                        </svg>
                      </button>
                    </div>
                    {isOpen && (
                      <div
                        onClick={toggleDropdown}
                        className="absolute right-0 mt-2 origin-top-right w-42 bg-white border border-gray-300 divide-y divide-gray-100 rounded-md shadow-lg"
                      >
                        <div className="py-1">
                          <Link to={"/perfil"}>
                            <button className="flex px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:w-full">
                              <svg
                                className="w-6 h-6 mr-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                              </svg>
                              <span className="flex-1c text-sm ml-3 font-bold whitespace-nowrap">
                                Mi Perfil
                              </span>
                            </button>
                          </Link>
                          <Link to={"/"}>
                            <button className="flex px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:w-full">
                              <svg
                                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-700 group-hover:text-gray-900 dark:group-hover:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 16"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                                />
                              </svg>
                              <span className="flex-1c text-sm ml-3 font-bold whitespace-nowrap">
                                Cerrar sesión
                              </span>
                            </button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
