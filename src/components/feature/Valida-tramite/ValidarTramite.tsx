// Styles
import "./ValidarTramite.scss";
import { BtnAction } from "./../../shared/buttons/BtnAction";
// Config
import { TUTORIALES } from "../../../config/Constants/Tutoriales";
import { ENLACES } from "./../../../config/Constants/Enlaces";
// Models
import { ButtonModel } from "./../../../models/buttons/ButtonModel";
import { SectionQuestionModel } from "../../../models/sectionQuestion/SectionQuestionModel";
// Shared
import { BtnVideoTutorial } from "../../shared/buttons/BtnVideoTutorial";
import { SectionQuestion } from "../../shared/sectionQuestion/SectionQuestion";
// Data
import { VALIDAR_TRAMITE_DATA } from "../../../data/Validar-tramite/validarTramite";

export const ValidarTramite = () => {
  // Options Questions
  const options: SectionQuestionModel[] = VALIDAR_TRAMITE_DATA.slice();
  // Boton solicitar certificado
  const btnValidarTramite: ButtonModel = {
    color: "btn-action-blue",
    url: "",
    text: "Validar trámite",
    sameWindow: false,
  };

  return (
    // CONTAINER VALIDAR TRAMITE
    <div className="container-validar-tramite">
      {/* CONTAINER INFO VALIDAR TRAMITE */}
      <div className="container-info-validar-tramite">
        {/* TITULO VALIDAR TRAMITE */}
        <div className="titulo-validar-tramite">
          <h1>
            Válida tu <strong>trámite</strong>
          </h1>
        </div>
        {/* TITULO VALIDAR TRAMITE */}
        {/* TEXTO VALIDAR TRAMITE */}
        <div className="texto-validar-tramite">
          <p>
            Es importante dar seguridad y certeza jurídica. Ponemos a tu
            diposición el validador de trámites
          </p>
        </div>
        {/* TEXTO VALIDAR TRAMITE */}
        {/* SUB TEXTO VALIDAR TRAMITE */}
        <div className="sub-texto-validar-tramite">
          <p>Ingresando tu:</p>
        </div>
        {/* SUB TEXTO VALIDAR TRAMITE */}
        {/* IMG FORMA VALIDAR TRAMITE */}
        <div className="img-forma-validar-tramite">
          <img
            src="http://172.34.9.154/portal_assets/img/dibujos/identificador.png"
            alt="IDENTIFICADOR"
          />
        </div>
        {/* IMG FORMA VALIDAR TRAMITE */}
        {/* BOTONES VALIDAR TRAMITE */}
        <div className="botones-validar-tramite">
          {/* BUTTON ACTION */}
          <BtnAction buttonOptions={btnValidarTramite} />
          {/* BUTTON ACTION */}
          {/* VIDEO TUTORIAL */}
          <BtnVideoTutorial urlVideo={TUTORIALES.CERLIN} />
          {/* VIDEO TUTORIAL */}
        </div>
        {/* BOTONES VALIDAR TRAMITE */}
      </div>
      {/* CONTAINER INFO VALIDAR TRAMITE */}
      <div className="preguntas-validar-tramite">
        <div className="section-question-validar-tramites">
          {/* SECTION QUESTION */}
          <SectionQuestion
            options={options}
            gradient="bg-gradient-blue-purple"
          />
          {/* SECTION QUESTION */}
        </div>
        <div className="dibujo-mano-certificado">
          <img
            src="http://172.34.9.154/portal_assets/img/dibujos/valida-tramite.png"
            alt="DIBUJO VALIDA TRAMITE"
          />
        </div>
      </div>
    </div>
    // CONTAINER VALIDAR TRAMITE
  );
};
