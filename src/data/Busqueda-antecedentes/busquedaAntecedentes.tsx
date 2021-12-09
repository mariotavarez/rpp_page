// Models
import { SectionQuestionModel } from "./../../models/sectionQuestion/SectionQuestionModel";
// Tutoriales
import { TUTORIALES } from "./../../config/Constants/Tutoriales";

export const BUSQUEDA_ANTECEDENTES_DATA: SectionQuestionModel[] = [
  {
    pregunta: "Si no conoces tu folio entra al siguiente enlace",
    button: {
      text: "Video Tutorial",
      url: TUTORIALES.CONSULTA_INMOBILIARIA,
      action: () => {},
      colorTxt: "text-blue-btn",
      colorBtn: "bg-white",
    },
  },
  {
    pregunta: "¿Cómo consulto mi clave catastral?",
    button: {
      text: "Video Tutorial",
      url: TUTORIALES.CONSULTA_INMOBILIARIA,
      action: () => {},
      colorTxt: "text-blue-btn",
      colorBtn: "bg-white",
    },
  },
];
