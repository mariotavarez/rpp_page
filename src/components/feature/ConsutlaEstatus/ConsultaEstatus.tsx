import "./ConsultaEstatus.scss";
// Models
import { ButtonModel } from "./../../../models/buttons/ButtonModel";
// Config
import { TUTORIALES } from "../../../config/Constants/Tutoriales";
// Hooks
import { useState } from "react";
// Shared
import { BtnAction } from "./../../shared/buttons/BtnAction";
import { BtnVideoTutorial } from "./../../shared/buttons/BtnVideoTutorial";
// Modlas
import { EstatusTramiteModal } from "./../../shared/modals/Estatus-tramite/EstatusTramite";

export const ConsultaEstatus = () => {
  // Boton solicitar certificado
  const btnConsultarEstatus: ButtonModel = {
    color: "btn-action-blue",
    url: "",
    text: "Consultar estatus",
    sameWindow: true,
  };

  // // Valida si debe de mostrar el modal para validar estatus del tramite
  const [show, setShow] = useState(false);

  /**
   * @author Mario Tavarez
   * @date 22/11/2021
   * @description Da clic para mostrar el modal de captura identificador
   * @param event
   */
  const handleClickShowConsultarEstatus = (event: any) => {
    // Previene el evento por defecto
    event.preventDefault();
    // Muestra el modal de captura identificador
    setShow(true);
  };

  return (
    <div className="container-consulta-estatus">
      {show && <EstatusTramiteModal setShow={setShow} />}

      <div className="container-info-estatus">
        {/* TITLE CONSULTA ESTATUS */}
        <div className="title-consulta-estatus animate__animated animate__zoomInUp">
          <h1>CONES</h1>
          <p>(Consulta el Estatus de tu Trámite)</p>
        </div>
        {/* TITLE CONSULTA ESTATUS */}
        {/* SUBTITLE CONSULTA ESTATUS */}
        <div className="subtitle-consulta-estatus">
          <p>
            Podrás consultar el estatus de tu trámite de manera fácil y
            sencilla, solo necesitas los siguientes datos:
          </p>
        </div>
        {/* SUBTITLE CONSULTA ESTATUS */}

        {/* <div className="ingresando-datos-consulta-estatus">
          <p>Ingresando los siguientes datos:</p>
        </div> */}
        <div className="img-requisitos-consulta-estatus animate__animated animate__heartBeat">
          <img
            src="https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/dibujos/estatus-tramite.png"
            alt="REQUISITOS"
          />
        </div>

        <div className="btn-consulta-estatus">
          {/* BUTTON ACTION */}
          <BtnAction
            buttonOptions={btnConsultarEstatus}
            onChildClick={handleClickShowConsultarEstatus}
          />
          {/* BUTTON ACTION */}
          {/* VIDEO TUTORIAL */}
          {/* <BtnVideoTutorial urlVideo={TUTORIALES.CONSULTA_ESTATUS} /> */}
          {/* VIDEO TUTORIAL */}
        </div>
      </div>
      <div className="img-consulta-estatus animate__animated animate__slideInDown">
        <img
          src="https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/dibujos/estatus-tramite-2.png"
          alt="Consulta Estatus"
        />
      </div>
    </div>
  );
};

export default ConsultaEstatus;
