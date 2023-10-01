import FormularioContraseña from "../../components/FormularioContraseña";
import { useSelector } from "react-redux";
import ProfileSettings from "../../components/ProfileSettings";

const Perfil = () => {
  const user = useSelector((state) => state.auth.authUser);
  return (
    <div>
      <div className="pt-8 md:flex">
        <ProfileSettings user={user} />
        <FormularioContraseña id={user.id} />
      </div>
    </div>
  );
};

export default Perfil;
