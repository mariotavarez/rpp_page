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

export const TOOL_OPTIONS: ToolOptionsModel[] = [
  {
    img: COPIAS_CERTIFICADAS,
    nombre: "COPICE",
    url: "copias-certificadas",
    isExternal: false,
  },
  {
    img: CERLIN,
    nombre: "CERLIN",
    url: "cerlin",
    isExternal: false,
  },
  {
    img: BUSQUEDA_ANTECEDENTES,
    nombre: "BUSAN",
    url: "busqueda-antecedentes",
    isExternal: false,
  },
  {
    img: CONSULTA_INMOBILIARIA,
    nombre: "CRI",
    url: "consulta-inmobiliaria",
    isExternal: false,
  },
  {
    img: ALERTA_REGISTRAL,
    nombre: "ALERI",
    url: "alerta-registral",
    isExternal: false,
  },
  {
    img: VALIDAR_TRAMITE,
    nombre: "QRECO",
    url: "validar-tramite",
    isExternal: false,
  },
  {
    img: CONSULTA_ESTATUS,
    nombre: "CONES",
    url: "consulta-estatus",
    isExternal: false,
  },
  {
    img: DESCARTA_TRAMITE,
    nombre: "DESCO",
    url: "descarga-tramite",
    isExternal: false,
  },
  {
    img: INFONAVIT,
    nombre: "INFONAVIT",
    url: "https://rppc.queretaro.gob.mx/portal/videos/VIDEO_INFONAVIT.mp4",
    isExternal: true,
  },
];
