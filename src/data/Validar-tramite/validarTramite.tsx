// Models
import { SectionQuestionModel } from "../../models/sectionQuestion/SectionQuestionModel";

export const VALIDAR_TRAMITE_DATA: SectionQuestionModel[] = [
  {
    pregunta: "¿Dónde consulto mi identificador?",
    button: {
      text: "Ver guía",
      url: "https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/slides/CERTIFICADO.png",
      action: () => {},
      colorTxt: "text-blue-btn",
      colorBtn: "bg-white",
    },
  },
  {
    pregunta: "¿Cómo puedo activar las ventanas emergentes?",
    button: {
      text: "Ver guía",
      url: "https://cerlin.ciasqro.gob.mx/app_assets/qreco_assets/MANUAL_DE_ACTIVACI%C3%93N_DE_VENTANAS_EMERGENTES.pdf",
      action: () => {},
      colorTxt: "text-blue-btn",
      colorBtn: "bg-white",
    },
  },
];
