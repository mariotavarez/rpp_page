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
import { COPIAS_CERTIFICADAS_SIGNIFICADO_DATA } from "./../../../data/Copias-certificadas/copiasCertificadasSignificado";
// Generals
import { GeneralModal } from "./../../shared/modals/General/General";
// Hooks
import { useState } from "react";

export const BusquedaAntecedentes = () => {
  // Copias certificadas significado
  const busquedaData = COPIAS_CERTIFICADAS_SIGNIFICADO_DATA;
  // Hooks
  const [show, setShow] = useState(false);
  // Boton SignUp
  const btnBusquedaAntecedentes: ButtonModel = {
    color: "btn-action-blue",
    url: "",
    text: "Iniciar proceso",
    sameWindow: true,
  };
  // Questions Busqueda
  const questionsBusqueda: SectionQuestionModel[] =
    BUSQUEDA_ANTECEDENTES_DATA.slice();
  // Modal Options
  const [modalOpctions, setModalOptions] = useState({ title: "", body: "" });
  // Titulo y cuerpo
  const { title, body } = modalOpctions;
  // Setea la informacion al modal y lo abre
  const handleClickModal = () => {
    setModalOptions({
      title: busquedaData.SUBDIRECCIONES.titulo,
      body: busquedaData.SUBDIRECCIONES.body,
    });
    // Muestra el modal
    setShow(true);
  };

  return (
    // CONTAINER BUSQUEDA ANTE
    <div className="container-busqueda-ante">
      {show && <GeneralModal setShow={setShow} title={title} texto={body} />}
      {/* CONTAINER BUSQUEDA ANTE */}
      <div className="container-forma-busqueda-ante">
        {/* TITLE BUSQUEDA ANTE */}
        <div className="title-busqueda-ante animate__animated animate__zoomInUp">
          <h1>BUSAN</h1>
          <p>(Búsqueda de Antecedentes)</p>
        </div>
        {/* TITLE BUSQUEDA ANTE */}
        {/* BTN TUTORIAL BUSQUEDA ANTE */}
        <div className="btn-tutorial-busqueda-ante">
          <BtnVideoTutorial urlVideo={TUTORIALES.BUSQUEDA_ANTECEDENTES} />
        </div>
        {/* BTN TUTORIAL BUSQUEDA ANTE */}
        {/* TEXT TUTORIAL BUSQUEDA ANTE */}
        <div className="text-tutorial-busqueda-ante">
          <h2>Solicita aquí la búsqueda de tus antecedentes.</h2>
        </div>
        {/* TEXT TUTORIAL BUSQUEDA ANTE */}
        {/* BTN ACTION BUSQUEDA ANTE */}
        <div className="btn-action-busqueda-ante">
          <BtnAction
            buttonOptions={btnBusquedaAntecedentes}
            onChildClick={handleClickModal}
          />
        </div>
        {/* BTN ACTION BUSQUEDA ANTE */}
      </div>
      {/* CONTAINER BUSQUEDA ANTE */}
      {/* CONTAINER PREGUNTAS BUSQUEDA */}
      <div className="container-preguntas-busqueda">
        {/* IMG LAPTOP BUSQUEDA ANTE */}
        <div className="img-laptop-busqueda-ante animate__animated animate__slideInDown"></div>
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

export default BusquedaAntecedentes;
