// Models
import { SectionQuestionModel } from "../../models/sectionQuestion/SectionQuestionModel";
// Tutoriales
import { TUTORIALES } from "./../../config/Constants/Tutoriales";

export const COPIAS_CERTIFICADAS_DATA: SectionQuestionModel[] = [
  {
    pregunta: "Si no conoces tu folio entra al siguiente enlace",
    button: {
      text: "Consulta y solicita",
      url: TUTORIALES.CONSULTA_INMOBILIARIA,
      action: () => {},
      colorTxt: "text-blue-btn",
      colorBtn: "bg-white",
    },
  },
  {
    pregunta: "¿Cómo consulto mi clave catastral?",
    button: {
      text: "Consulta y solicita",
      url: TUTORIALES.CONSULTA_INMOBILIARIA,
      action: () => {},
      colorTxt: "text-blue-btn",
      colorBtn: "bg-white",
    },
  },
];
