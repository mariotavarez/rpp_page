import "./App.scss";
import { Home } from "./components/feature/Home";
// Navbar
import { Navbar } from "./components/layout/navbar/Navbar";
// ToolOptions
import { ToolOptions } from "./components/layout/toolOptions/ToolOptions";
// Footer
import { Footer } from "./components/layout/footer/Footer";
import { useEffect, useState } from "react";
// Components
import { Cargando } from "./components/shared/Screens/Cargando/Cargando";
import { BusquedaAntecedentes } from "./components/feature/Busqueda-antecedentes";
import { Cerlin } from "./components/feature/Cerlin/Cerlin";
import { ConsultaInmobiliaria } from "./components/feature/ConsultaInmobiliaria";
import { AlertaRegistral } from "./components/feature/AlertaRegistral";
import { ConsultaEstatus } from "./components/feature/ConsutlaEstatus";
import { DescargaTramite } from "./components/feature/DescargaTramite";
import { ValidarTramite } from "./components/feature/Valida-tramite";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  });

  return (
    <>
      {!loading ? (
        <BrowserRouter>
          <div className="App">
            {/* NAVBAR */}
            <Navbar />
            {/* NAVBAR */}
            {/* TOOL OPTIONS */}
            <ToolOptions />
            {/* TOOL OPTIONS */}
            <Routes>
              <Route path="/" element={<Home />}>
                {/* HOME */}
                <Route index element={<Home />} />
                {/* HOME */}
                {/* <Route path=":teamId" element={<Team />} />
                  <Route path="new" element={<NewTeamForm />} />
                <Route index element={<LeagueStandings />} /> */}
              </Route>
              <Route
                path="busqueda-antecedentes"
                element={<BusquedaAntecedentes />}
              ></Route>
              <Route path="cerlin" element={<Cerlin />}></Route>
              <Route
                path="consulta-inmobiliaria"
                element={<ConsultaInmobiliaria />}
              ></Route>
              <Route
                path="alerta-registral"
                element={<AlertaRegistral />}
              ></Route>
              <Route
                path="consulta-estatus"
                element={<ConsultaEstatus />}
              ></Route>
              <Route
                path="validar-tramite"
                element={<ValidarTramite />}
              ></Route>
              <Route
                path="descarga-tramite"
                element={<DescargaTramite />}
              ></Route>
            </Routes>

            {/* FOOTER */}
            <Footer />
            {/* FOOTER */}
          </div>
        </BrowserRouter>
      ) : (
        <Cargando />
      )}
    </>
  );
}

export default App;
