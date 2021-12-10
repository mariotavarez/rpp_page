// Styles
import "./ConsultaInmobiliaria.scss";
// Shared
import { SignUp } from "./../../shared/signUp/SignUp";
import { BtnAction } from "./../../shared/buttons/BtnAction";
import { BtnVideoTutorial } from "./../../shared/buttons/BtnVideoTutorial";
// Config
import { ENLACES } from "./../../../config/Constants/Enlaces";
// Model
import { ButtonModel } from "./../../../models/buttons/ButtonModel";
// Config
import { TUTORIALES } from "../../../config/Constants/Tutoriales";

export const ConsultaInmobiliaria = () => {
  // Boton solicitar certificado
  const btnConsultarAsientos: ButtonModel = {
    color: "btn-action-blue",
    url: ENLACES.CONSULTA_INMOBILIARIA,
    text: "Consultar asientos",
    sameWindow: false,
  };

  return (
    // CONTAINER CONSULTA WEB INMO
    <div className="container-consulta-web-inmo">
      {/* CONTAINER CONTENIDO CONSULTA WEB INMO */}
      <div className="container-contenido-consulta-web-inmo">
        {/* TITLE CONSULTA WEB INMO */}
        <div className="title-consulta-web-inmo animate__animated animate__zoomInUp">
          <h1>CRI </h1>
          <p>(Consulta Remota de Inmuebles)</p>
        </div>
        {/* TITLE CONSULTA WEB INMO */}
        {/* TEXT CONSULTA WEB INMO */}
        <div className="text-consulta-web-inmo">
          <p>Podrás consultar la información de los asientos registrales.</p>
        </div>
        {/* TEXT CONSULTA WEB INMO */}
        {/* BUTTONS CONSULTA WEB INMO */}
        <div className="buttons-consulta-web-inmo">
          {/* BTN ACTION */}
          <BtnAction
            buttonOptions={btnConsultarAsientos}
            onChildClick={() => {}}
          />
          {/* BTN ACTION */}
          {/* BTN VIDEO TUTORIAL */}
          <BtnVideoTutorial urlVideo={TUTORIALES.CONSULTA_INMOBILIARIA} />
          {/* BTN VIDEO TUTORIAL */}
        </div>
        {/* BUTTONS CONSULTA WEB INMO */}
        {/* IMG CONSULTA WEB INMO */}
        <div className="img-consulta-web-inmo animate__animated animate__slideInDown">
          <img
            src="https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/dibujos/consulta-inmobiliaria.png"
            alt="Consulta Inmobiliaria"
          />
        </div>
        {/* IMG CONSULTA WEB INMO */}
      </div>
      {/* CONTAINER CONTENIDO CONSULTA WEB INMO */}
      {/* REGISTATE CONSULTA WEB INMO */}
      <div className="registrate-consulta-web-inmo">
        <SignUp />
      </div>
      {/* REGISTATE CONSULTA WEB INMO */}
    </div>
    // CONTAINER CONSULTA WEB INMO
  );
};
