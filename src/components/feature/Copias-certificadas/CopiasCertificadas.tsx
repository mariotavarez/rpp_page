// Shared Components
import { SectionQuestion } from "./../../shared/sectionQuestion/SectionQuestion";
import { BtnVideoTutorial } from "./../../shared/buttons/BtnVideoTutorial";
import { BtnAction } from "./../../shared/buttons/BtnAction";
// Models
import { SectionQuestionModel } from "./../../../models/sectionQuestion/SectionQuestionModel";
import { ButtonModel } from "../../../models/buttons/ButtonModel";
// Data
import { COPIAS_CERTIFICADAS_DATA } from "./../../../data/Copias-certificadas/copiasCertificadas";
// Styles
import "./CopiasCertificadas.scss";
// Images
import { TUTORIALES } from "./../../../config/Constants/Tutoriales";
// Config
import { ENLACES } from "./../../../config/Constants/Enlaces";

export const CopiasCertificadas = () => {
  // Boton Solicitar copias certificadas
  const btnCopiasCertificadas: ButtonModel = {
    color: "btn-action-blue",
    url: ENLACES.COPIAS_CERTIFICADAS,
    text: "Solicitar Copias Certificadas",
    sameWindow: false,
  };

  // Options Questions
  const options: SectionQuestionModel[] = COPIAS_CERTIFICADAS_DATA.slice();
  return (
    <div className="container-copias-certificadas">
      <div className="titulo-copias-certificadas pulse animated">
        <h1>COPICE</h1>
        <p>Solicitud de copias certificadas</p>
      </div>
      {/* <p> Copias Certificadas</p> */}
      <div className="instrucciones-copias">
        <img
          src="https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/dibujos/copias-certificadas.png"
          alt=""
        />
      </div>
      <div className="section-question-copias">
        <div className="justify-end-btn-tutorial">
          {/* SECTION QUESTION */}
          <SectionQuestion
            options={options}
            gradient="bg-gradient-blue-purple"
          />
          {/* SECTION QUESTION */}
        </div>
        {/* BUTTON VIDEO TUTORIAL */}
        <div className="justify-end-btn-tutorial">
          <div className="container-buttons-copias-certificadas">
            <BtnAction
              buttonOptions={btnCopiasCertificadas}
              onChildClick={() => {}}
            />
            <BtnVideoTutorial urlVideo={TUTORIALES.COPIAS_CERTIFICADAS} />
          </div>
        </div>
        {/* BUTTON VIDEO TUTORIAL */}
      </div>
    </div>
  );
};
