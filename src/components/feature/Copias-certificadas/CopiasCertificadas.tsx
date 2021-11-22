// Shared Components
import { SectionQuestion } from "./../../shared/sectionQuestion/SectionQuestion";
import { BtnVideoTutorial } from "./../../shared/buttons/BtnVideoTutorial";
// Models
import { SectionQuestionModel } from "./../../../models/sectionQuestion/SectionQuestionModel";
// Data
import { COPIAS_CERTIFICADAS_DATA } from "./../../../data/Copias-certificadas/copiasCertificadas";
// Styles
import "./CopiasCertificadas.scss";
// Images
import { TUTORIALES } from "./../../../config/Constants/Tutoriales";

export const CopiasCertificadas = () => {
  // Options Questions
  const options: SectionQuestionModel[] = COPIAS_CERTIFICADAS_DATA.slice();
  return (
    <div className="container-copias-certificadas">
      <h1 className="titulo-copias-certificadas pulse animated">
        Solicita tus Copias <strong> Certificadas</strong>
      </h1>
      <div className="instrucciones-copias">
        <img
          src="http://172.34.9.154/portal_assets/img/dibujos/copias-certificadas.png"
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
          <BtnVideoTutorial urlVideo={TUTORIALES.COPIAS_CERTIFICADAS} />
        </div>
        {/* BUTTON VIDEO TUTORIAL */}
      </div>
    </div>
  );
};
