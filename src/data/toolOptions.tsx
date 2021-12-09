// Icons
import COPIAS_CERTIFICADAS from "../assets/img/icons/COPIAS CERTIFICADAS.png";
import CERLIN from "../assets/img/icons/CERLIN.png";
import BUSQUEDA_ANTECEDENTES from "../assets/img/icons/BÚSQUEDA_DE_ANTECEDENTES.png";
import CONSULTA_INMOBILIARIA from "../assets/img/icons/CONSULTA INMOBI.png";
import ALERTA_REGISTRAL from "../assets/img/icons/ALERTA REGISTRAL.png";
import VALIDAR_TRAMITE from "../assets/img/icons/VALIDAR_TRAMITE.png";
import CONSULTA_ESTATUS from "../assets/img/icons/ESTATUS TRAMITE.png";
import DESCARTA_TRAMITE from "../assets/img/icons/DESCARGA TRAMITES.png";
import INFONAVIT from "../assets/img/icons/INFONAVIT.png";
// import COPIAS_CERTIFICADAS from '../assets/img'
// Models
import { ToolOptionsModel } from "../models/toolOptions/toolOptionsModel";
// Config
import { ENLACES } from "../config/Constants/Enlaces";

export const TOOL_OPTIONS: ToolOptionsModel[] = [
  {
    img: COPIAS_CERTIFICADAS,
    nombre: "Copias Certificadas",
    url: `${ENLACES.INDEX}/copias-certificadas`,
    isExternal: false,
  },
  {
    img: CERLIN,
    nombre: "Certificados en Línea",
    url: `${ENLACES.INDEX}/cerlin`,
    isExternal: false,
  },
  {
    img: BUSQUEDA_ANTECEDENTES,
    nombre: "Búsqueda de Antecedentes",
    url: `${ENLACES.INDEX}/busqueda-antecedentes`,
    isExternal: false,
  },
  {
    img: CONSULTA_INMOBILIARIA,
    nombre: "Consulta Inmobiliaria",
    url: `${ENLACES.INDEX}/consulta-inmobiliaria`,
    isExternal: false,
  },
  {
    img: ALERTA_REGISTRAL,
    nombre: "Alerta Registral",
    url: `${ENLACES.INDEX}/alerta-registral`,
    isExternal: false,
  },
  {
    img: VALIDAR_TRAMITE,
    nombre: "Validar Trámite",
    url: `${ENLACES.INDEX}/validar-tramite`,
    isExternal: false,
  },
  {
    img: CONSULTA_ESTATUS,
    nombre: "Consulta Estatus",
    url: `${ENLACES.INDEX}/consulta-estatus`,
    isExternal: false,
  },
  {
    img: DESCARTA_TRAMITE,
    nombre: "Descarga Comprobantes",
    url: `${ENLACES.INDEX}/descarga-tramite`,
    isExternal: false,
  },
  {
    img: INFONAVIT,
    nombre: "INFONAVIT",
    url: "https://rppc.queretaro.gob.mx/portal/videos/VIDEO_INFONAVIT.mp4",
    isExternal: true,
  },
];
