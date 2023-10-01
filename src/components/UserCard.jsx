import { deleteUser, resetPassword } from "../redux/fetchFunctions";
import { useDispatch } from "react-redux";
import { getUsers } from "../redux/fetchFunctions";
import { setUsers, setUser } from "../redux/slices/usersSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  const users = async () => {
    const data = await getUsers();
    dispatch(setUsers(data));
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      await users();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (user) => {
    try {
      dispatch(setUser(user));
    } catch (error) {
      console.log(error);
    }
  };

  const handleReset = async (id) => {
    try {
      resetPassword(id)
    } catch (error) {
      console.log(error);
    }
  
  }

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 test-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{`${user.name} ${user.lastName1} ${user.lastName2}`}</span>
      </p>

      <p className="font-bold mb-3 test-gray-700 uppercase">
        usuario: {""}
        <span className="font-normal normal-case">{user.userName}</span>
      </p>

      <p className="font-bold mb-3 test-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{user.email}</span>
      </p>

      <p className="font-bold mb-3 test-gray-700 uppercase">
        Puesto: <span className="font-normal normal-case">{user.post}</span>
      </p>

      <p className="font-bold mb-3 test-gray-700 uppercase">
        Zona: <span className="font-normal normal-case">{user.zone}</span>
      </p>

      <p className="font-bold mb-3 test-gray-700 uppercase">
        Estación:{" "}
        <span className="font-normal normal-case">{user.station}</span>
      </p>
      <div className="flex justify-around mt-2 rounded-md " role="group">
        <button
          onClick={() => handleDelete(user._id)}
          type="button"
          className="px-4 py-2 text-sm shadow-md font-medium text-gray-900 bg-red-600 border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          Eliminar
        </button>
        <button
          onClick={() => handleUpdate(user)}
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-green-800 rounded-lg border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          Actualizar
        </button>
        <button
          onClick={() => handleReset(user._id)}
          type="button"
          className="px-4 py-2 text-sm shadow-md font-medium text-gray-900 bg-red-600 border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          Resetear contraseña
        </button>
      </div>
    </div>
  );
};

export default UserCard;
