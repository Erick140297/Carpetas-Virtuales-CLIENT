import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/login/Login";
import PanelAdmin from "./pages/panelAdmin/PanelAdmin";
import PanelGestion from "./pages/panelGestion/PanelGestion";
import ProtectedRoute from "./components/ProtectedRoute";
import Users from "./pages/panelAdmin/Users";
import Stations from "./pages/panelAdmin/Stations";
import Perfil from "./pages/perfil/Perfil";
import PanelAdministracionArchivos from "./pages/panelAdministracionArchivos/PanelAdministracionArchivos";

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />} >
        <Route path="panel-admin" element={<PanelAdmin />} />
        <Route path="panel-admin/users" element={<Users />} />
        <Route path="panel-admin/estaciones" element={<Stations />} />
        <Route path="panel-gestion" element={<PanelGestion />} />
        <Route path="panel-gerente" element={<PanelAdministracionArchivos />}/>
        <Route path="perfil" element={<Perfil />} />
        </Route >
      </Routes>
    </div>
  );
}
