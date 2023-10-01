import UserCard from "./UserCard";

const ListadoUsers = ({ users }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Lista de Usuarios</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administración de{" "}
        <span className="text-red-600 font-bold"> Usuarios</span>
      </p>
      <div>
        {users.length === 0 && (
          <p className="text-center text-gray-500">No hay usuarios</p>
        )}

        {users.length > 0 &&
          users.map((user, index) => {
            return <UserCard user={user} key={index} />;
          })}
      </div>
    </div>
  );
};

export default ListadoUsers;
