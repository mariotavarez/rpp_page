// Styles
import "./DescargaTramite.scss";
// Shared
import { BtnAction } from "./../../shared/buttons/BtnAction";
import { BtnVideoTutorial } from "./../../shared/buttons/BtnVideoTutorial";
// Models
import { ButtonModel } from "./../../../models/buttons/ButtonModel";
// Config
import { TUTORIALES } from "../../../config/Constants/Tutoriales";
// Hooks
import { useState } from "react";
// Modal
import { DescargaTramiteModal } from "./../../shared/modals/Descarga-tramite/DescargaTramite";

export const DescargaTramite = () => {
  // Boton solicitar certificado
  const btnDescargaTramite: ButtonModel = {
    color: "btn-action-blue",
    url: "",
    text: "Descargar trámite",
    sameWindow: true,
  };

  // Valida que se muestre el modal para descargar tramites
  const [show, setShow] = useState(false);

  const handleClickShowDescargarTramite = (event: any) => {
    // Previene el evento por defecto
    event.preventDefault();
    // Muestra el modal de descarga de tramite
    setShow(true);
  };

  return (
    <div className="container-descarga-tramite">
      {/* DESCARGA TRAMITE MODAL */}
      {show && <DescargaTramiteModal setShow={setShow} />}
      {/* DESCARGA TRAMITE MODAL */}
      {/* CONTAINER DESCARGA TRAMITE */}
      <div className="container-info-descarga-tramite">
        {/* TITLE DESCARGA TRAMITE */}
        <div className="title-descarga-tramite">
          <h1>DESCO</h1>
          <p>Descarga de trámites</p>
        </div>
        {/* TITLE DESCARGA TRAMITE */}
        {/* SUBTITLE DESCARGA TRAMITE */}
        <div className="subtitle-descarga-tramite">
          <p>
            Podrás consultar el estatus de tu trámite de manera fácil y
            sencilla, solo necesitas los siguientes datos:
          </p>
        </div>
        {/* SUBTITLE DESCARGA TRAMITE */}
        {/* INGRESANDO DATOS DESCARGA TRAMITE */}
        <div className="ingresando-datos-descarga-tramite">
          <p>Ingresando los siguientes datos:</p>
        </div>
        {/* INGRESANDO DATOS DESCARGA TRAMITE */}
        <div className="img-requisitos-descarga-tramite">
          <img
            src="https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/dibujos/descarga-tramite.png"
            alt="DESCARGA DE TRAMITE"
          />
        </div>
        {/* INGRESANDO DATOS DESCARGA TRAMITE */}
        <div className="btn-descarga-tramite">
          {/* BUTTON ACTION */}
          <BtnAction
            buttonOptions={btnDescargaTramite}
            onChildClick={handleClickShowDescargarTramite}
          />
          {/* BUTTON ACTION */}
          {/* VIDEO TUTORIAL */}
          <BtnVideoTutorial urlVideo={TUTORIALES.DESCARGA_COMPROBANTES} />
          {/* VIDEO TUTORIAL */}
        </div>
      </div>
      {/* CONTAINER DESCARGA TRAMITE */}
      <div className="img-descarga-tramite">
        <img
          src="https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/dibujos/descarga-tramite-2.png"
          alt="Descarga trámite"
        />
      </div>
    </div>
  );
};
