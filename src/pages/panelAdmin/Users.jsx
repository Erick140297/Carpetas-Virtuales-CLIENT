import { useSelector } from "react-redux";
import FormularioUsers from "../../components/FormularioUsers";
import ListadoUsers from "../../components/ListadoUsers";

const Users = () => {
  const users = useSelector((state) => state.users.users);

  return (
    <div className="pt-28 pb-4 md:flex bg-slate-200">
      <FormularioUsers />
      <ListadoUsers users={users} />
    </div>
  );
};

export default Users;
