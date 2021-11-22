// Styles
import "./Cerlin.scss";
// Shared
import { BtnVideoTutorial } from "./../../shared/buttons/BtnVideoTutorial";
import { BtnAction } from "./../../shared/buttons/BtnAction";
import { SignUp } from "./../../shared/signUp/SignUp";
// Config
import { TUTORIALES } from "../../../config/Constants/Tutoriales";
import { ENLACES } from "./../../../config/Constants/Enlaces";
// Models
import { ButtonModel } from "./../../../models/buttons/ButtonModel";

export const Cerlin = () => {
  // Boton solicitar certificado
  const btnSolicitarCertificado: ButtonModel = {
    color: "btn-action-blue",
    url: ENLACES.CERLIN,
    text: "Solicitar certificado",
    sameWindow: false,
  };

  return (
    <div className="container-cerlin">
      <div className="container-info-cerlin">
        <p className="titulo-cerlin pulse animated">
          CERLIN (Certificados en línea)
        </p>
        <p className="texto-cerlin">
          Podrán obtener las certificaciones sobre la existencia o inexistencia
          de las inscripciones o anotaciones registrales.
        </p>
        <div className="botones-cerlin">
          {/* BUTTON ACTION */}
          <BtnAction buttonOptions={btnSolicitarCertificado} />
          {/* BUTTON ACTION */}
          {/* VIDEO TUTORIAL */}
          <BtnVideoTutorial urlVideo={TUTORIALES.CERLIN} />
          {/* VIDEO TUTORIAL */}
        </div>
        <div className="container-img-forma-cerlin">
          <img
            src="http://172.34.9.154/portal_assets/img/formas/cerlin.png"
            alt=""
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
