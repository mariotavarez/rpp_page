// Styles
import "./App.scss";
import "animate.css";
// Navbar
import { NavbarPortal } from "./components/layout/navbar/Navbar";
// ToolOptions
import { ToolOptions } from "./components/layout/toolOptions/ToolOptions";
// Footer
import { Footer } from "./components/layout/footer/Footer";
// Components
import { Cargando } from "./components/shared/Screens/Cargando/Cargando";
import { Questions } from "./components/shared/floatingButtons/Questions/Questions";
import { Home } from "./components/feature/Home";
// Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Config
import { Routes as RoutesApp } from "./routes";
import { Suspense } from "react";
import { ENLACES } from "./config/Constants/Enlaces";
// Skeleton
function App() {
  return (
    <>
      <Suspense fallback={<Cargando />}>
        <BrowserRouter>
          {/* <Questions /> */}
          <div className="App">
            <div className="light">
              <ul className="line"></ul>
            </div>
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
                {RoutesApp.map((route) => (
                  <Route
                    key={route.path}
                    path={`${route.to}`}
                    element={<route.Component />}
                  ></Route>
                ))}
              </Routes>
            </div>
            {/* FOOTER */}
            <div className="footer-main">
              <Footer />
            </div>
            {/* FOOTER */}
          </div>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
