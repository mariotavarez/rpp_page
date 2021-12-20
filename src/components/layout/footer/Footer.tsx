// Styles
import "./Footer.scss";
// Data
import { FOOTER } from "./../../../data/footer";
import { POLITICAS_SEGURIDAD } from "./../../../data/politicasSeguridad";
import { POLITICA_CALIDAD } from "./../../../data/Politica-calidad/PoliticaCalidad";
import { POLITICA_SEGURIDAD } from "./../../../data/Politica-seguridad/PoliticaSeguridad";
// Models
import { FooterModel } from "./../../../models/footer/FooterModel";
import { FooterOptionModel } from "./../../../models/footer/FooterOptionModel";
// Link
import { Link } from "react-router-dom";
// Hooks
import { useState } from "react";
// Shared
import { MenuOpciones } from "./../../shared/modals/Menu-optiones/MenuOpciones";
import { GeneralModal } from "./../../shared/modals/General/General";

export const Footer = () => {
  // Data del footer
  const footerData: FooterModel[] = FOOTER.slice();
  // Año actual
  const currentYear = new Date().getFullYear();

  // Mostrar Menu Opciones
  const [show, setShow] = useState(false);
  // Mostrar modal generico
  const [showModalGenerico, setShowModalGenerico] = useState(false);
  // Modal Options
  const [modalOpctions, setModalOptions] = useState({ title: "", body: "" });
  const { title, body } = modalOpctions;
  // Footer Options
  const footerOptions = footerData.map((option, index) => (
    <div key={index}>
      {/* NAVBAR ITEM */}
      <div className="navbar-footer-item">
        {/* NAVBAR TITLE H1 */}
        {option.tituloMenu.isSubMenu ? (
          option.tituloMenu.targetBlank ? (
            <a
              key={index}
              href={option.tituloMenu.url}
              target="_blank"
              className="font-bold text-gray-800 hover:bg-gray-200  px-3 py-2 rounded-md text-md"
            >
              {option.tituloMenu.text}
            </a>
          ) : (
            <a
              key={index}
              href={option.tituloMenu.url}
              onClick={() => setShow(true)}
              className="font-bold text-gray-800 hover:bg-gray-200  px-3 py-2 rounded-md text-md"
            >
              {option.tituloMenu.text}
            </a>
          )
        ) : (
          <Link
            key={index}
            className="font-bold text-gray-800 hover:bg-gray-200  px-3 py-2 rounded-md text-md"
            to={option.tituloMenu.url}
          >
            {option.tituloMenu.text}
          </Link>
        )}

        {/* <h1>
          {option.tituloMenu}</h1> */}
        {/* NAVBAR TITLE H1 */}
        {/* NAVBAR OPTION */}
        {option.opcionMenu.map((opcionMenu, indexMenu) => (
          <div key={indexMenu}>
            {opcionMenu.targetBlank ? (
              <a
                key={index}
                href={opcionMenu.url}
                target="_blank"
                className="font-bold text-gray-500 hover:bg-gray-200  px-3 py-2 rounded-md text-sm"
              >
                {opcionMenu.text}
              </a>
            ) : (
              <Link
                key={index}
                className="font-bold text-gray-500 hover:bg-gray-200  px-3 py-2 rounded-md text-sm"
                to={opcionMenu.url}
              >
                {opcionMenu.text}
              </Link>
            )}
          </div>
        ))}
        {/* NAVBAR OPTION */}
      </div>
      {/* NAVBAR ITEM */}
    </div>
  ));

  // Politicas
  const politicas: FooterOptionModel[] = POLITICAS_SEGURIDAD.slice();
  // Funcion para abrir setear valores al modal
  const handleClickModal = (event: any, opcion: number) => {
    // Previene el evento por defecto
    event.preventDefault();

    if (opcion === 0) {
      setModalOptions({
        title: POLITICA_CALIDAD.titulo,
        body: POLITICA_CALIDAD.body,
      });
    } else if (opcion === 1) {
      setModalOptions({
        title: POLITICA_SEGURIDAD.titulo,
        body: POLITICA_SEGURIDAD.body,
      });
    } else if (opcion === 2) {
      window.open(
        "https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/docs/AVISO PRIVACIDAD/aviso_privacidad.pdf",
        "_blank"
      );
      return;
    } else {
      return;
    }
    setShowModalGenerico(true);
  };
  // Politicas Options
  const politicasOption = politicas.map((politica, index) => (
    <div key={index}>
      <p onClick={(event) => handleClickModal(event, index)}>{politica.text}</p>
    </div>
  ));
  return (
    // CONTAINER FOOTER
    <div className="container-footer">
      {showModalGenerico && (
        <GeneralModal
          setShow={setShowModalGenerico}
          title={title}
          texto={body}
        />
      )}
      {show && <MenuOpciones setShow={setShow} />}
      {/* NAVBAR FOOTER */}
      <div className="navbar-footer">{footerOptions}</div>
      {/* NAVBAR FOOTER */}
      {/* POLITICAS */}
      <div className="politicas">
        {/* COPYRIHT */}
        <p>
          Copyright © {currentYear} Registro Público de la Propiedad del Estado
          de Querétaro. Todos los derechos reservados
        </p>
        {/* COPYRIHT */}
        {/* HR */}
        <hr />
        {/* HR */}
        {/* POLITICAS OPTIONS */}
        <div className="politicas-options">{politicasOption}</div>
        {/* POLITICAS OPTIONS */}
      </div>
      {/* POLITICAS */}
    </div>
    // CONTAINER FOOTER
  );
};
