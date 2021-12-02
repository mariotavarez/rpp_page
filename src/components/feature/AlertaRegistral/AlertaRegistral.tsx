// Styles
import "./AlertaRegistral.scss";
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

export const AlertaRegistral = () => {
  // Boton solicitar certificado
  const btnAlertaRegistral: ButtonModel = {
    color: "btn-action-blue",
    url: ENLACES.ALERTA_REGISTRAL,
    text: "Solicitar Alerta Registral",
    sameWindow: false,
  };

  return (
    <div className="contenido-alerta-registral">
      <div className="container-contenido-alerta-registral">
        <div className="title-alerta-registral">
          <h1>ALERI</h1>
          <p>Alerta Registral</p>
        </div>

        <div className="text-alerta-registral">
          <p>
            Puede solicitar el servicio, mediante el cual, se les informará de
            las peticiones de inscripción que se presenten al Registro Público
          </p>
        </div>

        <div className="buttons-alerta-registral">
          <BtnAction
            buttonOptions={btnAlertaRegistral}
            onChildClick={() => {}}
          />
          <BtnVideoTutorial urlVideo={TUTORIALES.ALERTA_REGISTRAL} />
        </div>

        <div className="img-alerta-registral">
          <img
            src="https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/dibujos/alerta-registral.png"
            alt=""
          />
        </div>
      </div>

      <div className="registrate-alerta-registral">
        <SignUp />
      </div>
    </div>
  );
};
