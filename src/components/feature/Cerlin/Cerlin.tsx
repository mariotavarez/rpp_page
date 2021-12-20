// Styles
import "./Cerlin.scss";
// Shared
import { BtnVideoTutorial } from "./../../shared/buttons/BtnVideoTutorial";
import { BtnAction } from "./../../shared/buttons/BtnAction";
import { SignUp } from "./../../shared/signUp/SignUp";
import { GeneralModal } from "./../../shared/modals/General/General";
// Config
import { TUTORIALES } from "../../../config/Constants/Tutoriales";
import { ENLACES } from "./../../../config/Constants/Enlaces";
// Models
import { ButtonModel } from "./../../../models/buttons/ButtonModel";
// Hooks
import { useState } from "react";
// Data
import { CERLIN_DATA } from "./../../../data/Cerlin/Cerlin";

export const Cerlin = () => {
  // Cerlin Data
  const cerlinData = CERLIN_DATA;
  // Boton solicitar certificado
  const btnSolicitarCertificado: ButtonModel = {
    color: "btn-action-blue",
    url: ENLACES.CERLIN,
    text: "Solicitar certificado",
    sameWindow: false,
  };

  // Hook para abrir modal General
  const [show, setShow] = useState(false);
  // Modal Options
  const [modalOpctions, setModalOptions] = useState({ title: "", body: "" });
  const { title, body } = modalOpctions;

  // Funcion para abrir setear valores al modal
  const handleClickModal = (event: any) => {
    // Previene el evento por defecto
    event.preventDefault();
    setModalOptions({
      title: cerlinData.TIPOS_CERTIFICADOS.titulo,
      body: cerlinData.TIPOS_CERTIFICADOS.body,
    });
    setShow(true);
  };

  return (
    <div className="container-cerlin">
      {show && <GeneralModal setShow={setShow} title={title} texto={body} />}
      <div className="container-info-cerlin">
        <h1 className="titulo-cerlin animate__animated animate__zoomInUp ">
          CERLIN <br /> <strong>(Certificados en Línea)</strong>
        </h1>
        <p className="texto-cerlin">
          Podrán obtener las certificaciones sobre la existencia o inexistencia
          de las inscripciones o anotaciones registrales.
        </p>
        <p className="enlace-cerlin" onClick={handleClickModal}>
          Tipos de certificados
        </p>
        <div className="botones-cerlin animate__animated animate__flipInX">
          {/* BUTTON ACTION */}
          <BtnAction
            buttonOptions={btnSolicitarCertificado}
            onChildClick={() => {}}
          />
          {/* BUTTON ACTION */}
          {/* VIDEO TUTORIAL */}
          {/* <BtnVideoTutorial urlVideo={TUTORIALES.CERLIN} /> */}
          {/* VIDEO TUTORIAL */}
        </div>
        <div className="container-img-forma-cerlin">
          <img
            src="https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/formas/cerlin.png"
            alt="CERLIN"
          />
        </div>
      </div>
      <div className="registrate-cerlin">
        {/* REGISTRATE */}
        <SignUp />
        {/* REGISTRATE */}
      </div>
    </div>
  );
};

export default Cerlin;
