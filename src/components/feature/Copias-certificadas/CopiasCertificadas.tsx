// Shared Components
import { SectionQuestion } from "./../../shared/sectionQuestion/SectionQuestion";
import { BtnVideoTutorial } from "./../../shared/buttons/BtnVideoTutorial";
import { BtnAction } from "./../../shared/buttons/BtnAction";
// Models
import { SectionQuestionModel } from "./../../../models/sectionQuestion/SectionQuestionModel";
import { ButtonModel } from "../../../models/buttons/ButtonModel";
// Data
import { COPIAS_CERTIFICADAS_DATA } from "./../../../data/Copias-certificadas/copiasCertificadas";
import { COPIAS_CERTIFICADAS_SIGNIFICADO_DATA } from "./../../../data/Copias-certificadas/copiasCertificadasSignificado";
// Styles
import "./CopiasCertificadas.scss";
// Images
import { TUTORIALES } from "./../../../config/Constants/Tutoriales";
// Config
import { ENLACES } from "./../../../config/Constants/Enlaces";
// Hooks
import { useState } from "react";
// Generals
import { GeneralModal } from "./../../shared/modals/General/General";

export const CopiasCertificadas = () => {
  // Copias certificadas significado
  const copiasCertificadasSignificadoData =
    COPIAS_CERTIFICADAS_SIGNIFICADO_DATA;
  // Hooks
  const [show, setShow] = useState(false);
  // Modal Options
  const [modalOpctions, setModalOptions] = useState({ title: "", body: "" });
  const { title, body } = modalOpctions;
  // Boton Solicitar copias certificadas
  const btnCopiasCertificadasRPP: ButtonModel = {
    color: "btn-action-blue",
    url: ENLACES.COPIAS_CERTIFICADAS,
    text: "Solicitar Copias Certificadas RPP",
    sameWindow: false,
  };
  // Boton Solicitar archivo general de notarias
  const btnCopiasCertificadasAGN: ButtonModel = {
    color: "btn-action-blue",
    url: ENLACES.COPIAS_CERTIFICADAS_AGN,
    text: "Solicitar Copias Certificadas AGN",
    sameWindow: false,
  };
  // Options Questions
  const options: SectionQuestionModel[] = COPIAS_CERTIFICADAS_DATA.slice();

  // Funcion para abrir el modal
  const handleClickModal = (opcion: string) => {
    if (opcion === "AGN") {
      setModalOptions({
        title: copiasCertificadasSignificadoData.AGN.titulo,
        body: copiasCertificadasSignificadoData.AGN.body,
      });
    } else {
      setModalOptions({
        title: copiasCertificadasSignificadoData.RPP.titulo,
        body: copiasCertificadasSignificadoData.RPP.body,
      });
    }
    setShow(true);
  };

  return (
    <div className="container-copias-certificadas">
      {show && <GeneralModal setShow={setShow} title={title} texto={body} />}
      <div className="titulo-copias-certificadas pulse animated">
        <h1>COPICE</h1>
        <p>(Solicitud de copias certificadas)</p>
      </div>
      <div className="opciones-copias-rpp">
        <h1>Del Registro Público</h1>
        <div>
          <BtnAction
            buttonOptions={btnCopiasCertificadasRPP}
            onChildClick={() => {}}
          />
        </div>
        <p onClick={() => handleClickModal("RPP")}>
          ¿Cuando solicitar las copias del RPP?
        </p>
      </div>
      <div className="opciones-copias-agn">
        <h1>De Archivo General de Notarías</h1>
        <div>
          <BtnAction
            buttonOptions={btnCopiasCertificadasAGN}
            onChildClick={() => {}}
          />
        </div>
        <p onClick={() => handleClickModal("AGN")}>
          ¿Cuando solicitar las copias del AGN?
        </p>
      </div>
      <div className="importancia-copias">
        <p>¿Por qué es importante tramitar tus Copias Certificadas?</p>
      </div>

      <div className="question-copias">
        <SectionQuestion options={options} gradient="bg-gradient-blue-purple" />
      </div>
    </div>
  );
};
