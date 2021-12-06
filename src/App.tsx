import "./App.scss";
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
import { Contactanos } from "./components/feature/Contactanos";
// Routes
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
                <Route path="/" element={<Home />}>
                  {/* HOME */}
                  <Route index element={<Home />} />
                  {/* HOME */}
                </Route>
                <Route
                  path="copias-certificadas"
                  element={<CopiasCertificadas />}
                ></Route>
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
                <Route
                  path="sitios-interes"
                  element={<SitiosInteres />}
                ></Route>
                <Route path="contactanos" element={<Contactanos />}></Route>
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
