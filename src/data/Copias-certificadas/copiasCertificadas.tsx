// Models
import { SectionQuestionModel } from "../../models/sectionQuestion/SectionQuestionModel";
// Tutoriales
import { TUTORIALES } from "./../../config/Constants/Tutoriales";

export const COPIAS_CERTIFICADAS_DATA: SectionQuestionModel[] = [
  // {
  //   pregunta: "Si no conoces tu folio entra al siguiente enlace",
  //   button: {
  //     text: "Consulta y solicita",
  //     url: TUTORIALES.CONSULTA_INMOBILIARIA,
  //     action: () => {},
  //     colorTxt: "text-blue-btn",
  //     colorBtn: "bg-white",
  //   },
  // },
  // {
  //   pregunta: "¿Cómo consulto mi clave catastral?",
  //   button: {
  //     text: "Consulta y solicita",
  //     url: TUTORIALES.CONSULTA_INMOBILIARIA,
  //     action: () => {},
  //     colorTxt: "text-blue-btn",
  //     colorBtn: "bg-white",
  //   },
  // },
  {
    pregunta: "¿Cómo solicitar Copias Certificadas del AGN?",
    button: {
      text: "Consultar",
      url: "https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/documentos/Procedimiento%20para%20solictar%20copias%20certificadas%20AGN.pdf",
      action: () => {},
      colorTxt: "text-blue-btn",
      colorBtn: "bg-white",
    },
  },
  {
    pregunta: "¿Cómo solicitar un Informe de Testamento del AGN?",
    button: {
      text: "Consultar",
      url: "https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/documentos/Procedimiento%20para%20solictar%20informe%20de%20testamento%20en%20AGN%202021.pdf",
      action: () => {},
      colorTxt: "text-blue-btn",
      colorBtn: "bg-white",
    },
  },
];
