import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ListDaftarUser from "./Pages2/User/ListDaftarUser";
import ListFormApproft from "./Pages2/User/ListFormApproft";
import ListUserLulus from "./Pages2/User/ListUserLulus";
import ListFakultasDanProdi from "./Pages2/ProdiFakultas/ListFakultasDanProdi";
import AddFakultas from "./Pages2/ProdiFakultas/AddFakultas";
import AddPrody from "./Pages2/ProdiFakultas/AddPrody";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        {/* User */}
        <Route path="/user/listdaftaruser" component={ListDaftarUser} />
        <Route path="/user/listformapprofe" component={ListFormApproft} />
        <Route path="/user/listuserlulus" component={ListUserLulus} />
        {/* Akhir User */}
        {/* Prodi dan Fakultas */}
        <Route path="/Prodi/listfakultas" component={ListFakultasDanProdi} />
        <Route path="/fakultas/tambahfakultas" component={AddFakultas} />
        <Route path="/prodi/tambahprodi" component={AddPrody} />
        {/* AKhir Prodi dan fakultas */}
      </Switch>
    </Router>
  );
}

export default App;
