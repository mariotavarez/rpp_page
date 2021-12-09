// Styles
import "./App.scss";
import "animate.css";

import { Home } from "./components/feature/Home";
// Navbar
import { NavbarPortal } from "./components/layout/navbar/Navbar";
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
import { CopiasCertificadas } from "./components/feature/Copias-certificadas/CopiasCertificadas";
import { SitiosInteres } from "./components/feature/Sitios-interes";
import { TramitesServicios } from "./components/feature/TramitesServicios";
import { Sire } from "./components/feature/Sire/Sire";
import { MarcoJuridico } from "./components/feature/MarcoJuridico/MarcoJuridico";
import { Contactanos } from "./components/feature/Contactanos";
import { Organizacion } from "./components/feature/Organizacion";
// Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ENLACES } from "./config/Constants/Enlaces";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  });

  return (
    <>
      {!loading ? (
        <BrowserRouter>
          <div className="App">
            {/* NAVBAR */}
            <div className="navbar-main">
              <NavbarPortal />
            </div>
            {/* NAVBAR */}
            {/* TOOL OPTIONS */}
            <div className="toolOptions-main">
              <ToolOptions />
            </div>
            {/* TOOL OPTIONS */}
            <div className="main-content">
              <Routes>
                <Route path={`${ENLACES.INDEX}/`} element={<Home />}>
                  {/* HOME */}
                  <Route index element={<Home />} />
                  {/* HOME */}
                </Route>

                <Route
                  path={`${ENLACES.INDEX}/copias-certificadas`}
                  element={<CopiasCertificadas />}
                ></Route>
                <Route
                  path={`${ENLACES.INDEX}/busqueda-antecedentes`}
                  element={<BusquedaAntecedentes />}
                ></Route>
                <Route
                  path={`${ENLACES.INDEX}/cerlin`}
                  element={<Cerlin />}
                ></Route>
                <Route
                  path={`${ENLACES.INDEX}/consulta-inmobiliaria`}
                  element={<ConsultaInmobiliaria />}
                ></Route>
                <Route
                  path={`${ENLACES.INDEX}/alerta-registral`}
                  element={<AlertaRegistral />}
                ></Route>
                <Route
                  path={`${ENLACES.INDEX}/consulta-estatus`}
                  element={<ConsultaEstatus />}
                ></Route>
                <Route
                  path={`${ENLACES.INDEX}/validar-tramite`}
                  element={<ValidarTramite />}
                ></Route>
                <Route
                  path={`${ENLACES.INDEX}/descarga-tramite`}
                  element={<DescargaTramite />}
                ></Route>
                <Route
                  path={`${ENLACES.INDEX}/sitios-interes`}
                  element={<SitiosInteres />}
                ></Route>
                <Route
                  path={`${ENLACES.INDEX}/organizacion`}
                  element={<Organizacion />}
                ></Route>
                <Route
                  path={`${ENLACES.INDEX}/tramites-servicios`}
                  element={<TramitesServicios />}
                ></Route>
                <Route
                  path={`${ENLACES.INDEX}/sire`}
                  element={<Sire />}
                ></Route>
                <Route
                  path={`${ENLACES.INDEX}/marco-juridico`}
                  element={<MarcoJuridico />}
                ></Route>
                <Route
                  path={`${ENLACES.INDEX}/contactanos`}
                  element={<Contactanos />}
                ></Route>
              </Routes>
            </div>
            {/* FOOTER */}
            <div className="footer-main">
              <Footer />
            </div>

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
