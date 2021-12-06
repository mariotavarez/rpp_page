// Styles
import "./BusquedaAntecedentes.scss";
// Shared
import { BtnVideoTutorial } from "./../../shared/buttons/BtnVideoTutorial";
import { BtnAction } from "./../../shared/buttons/BtnAction";
// Config
import { TUTORIALES } from "./../../../config/Constants/Tutoriales";
import { ENLACES } from "./../../../config/Constants/Enlaces";
// Models
import { ButtonModel } from "./../../../models/buttons/ButtonModel";
import { SectionQuestion } from "./../../shared/sectionQuestion/SectionQuestion";
import { SectionQuestionModel } from "./../../../models/sectionQuestion/SectionQuestionModel";
// Data
import { BUSQUEDA_ANTECEDENTES_DATA } from "./../../../data/Busqueda-antecedentes/busquedaAntecedentes";

export const BusquedaAntecedentes = () => {
  // Boton SignUp
  const btnBusquedaAntecedentes: ButtonModel = {
    color: "btn-action-blue",
    url: ENLACES.BUSQUEDA_ANTECEDENTES,
    text: "Iniciar proceso",
    sameWindow: false,
  };
  // Questions Busqueda
  const questionsBusqueda: SectionQuestionModel[] =
    BUSQUEDA_ANTECEDENTES_DATA.slice();

  return (
    // CONTAINER BUSQUEDA ANTE
    <div className="container-busqueda-ante">
      {/* CONTAINER BUSQUEDA ANTE */}
      <div className="container-forma-busqueda-ante">
        {/* TITLE BUSQUEDA ANTE */}
        <div className="title-busqueda-ante pulse animated">
          <h1>BUSAN</h1>
          <p>(Búsqueda Antecedentes)</p>
        </div>
        {/* TITLE BUSQUEDA ANTE */}
        {/* BTN TUTORIAL BUSQUEDA ANTE */}
        <div className="btn-tutorial-busqueda-ante">
          {/* <BtnVideoTutorial urlVideo={TUTORIALES.BUSQUEDA_ANTECEDENTES} /> */}
        </div>
        {/* BTN TUTORIAL BUSQUEDA ANTE */}
        {/* TEXT TUTORIAL BUSQUEDA ANTE */}
        <div className="text-tutorial-busqueda-ante">
          <h2>Solicita aquí la búsqueda de tus antecedentes</h2>
        </div>
        {/* TEXT TUTORIAL BUSQUEDA ANTE */}
        {/* BTN ACTION BUSQUEDA ANTE */}
        <div className="btn-action-busqueda-ante">
          <BtnAction
            buttonOptions={btnBusquedaAntecedentes}
            onChildClick={() => {}}
          />
        </div>
        {/* BTN ACTION BUSQUEDA ANTE */}
      </div>
      {/* CONTAINER BUSQUEDA ANTE */}
      {/* CONTAINER PREGUNTAS BUSQUEDA */}
      <div className="container-preguntas-busqueda">
        {/* IMG LAPTOP BUSQUEDA ANTE */}
        <div className="img-laptop-busqueda-ante"></div>
        {/* IMG LAPTOP BUSQUEDA ANTE */}
        {/* CONTAINER QUESTION BUSQUEDA ANTE */}
        <div className="container-question-busqueda-ante">
          <SectionQuestion
            options={questionsBusqueda}
            gradient="bg-gradient-blue-green"
          />
        </div>
        {/* CONTAINER QUESTION BUSQUEDA ANTE */}
      </div>
      {/* CONTAINER PREGUNTAS BUSQUEDA */}
    </div>
    // CONTAINER BUSQUEDA ANTE
  );
};
