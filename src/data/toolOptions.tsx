// Icons
import COPIAS_CERTIFICADAS from "../assets/img/icons/COPIAS CERTIFICADAS.png";
import CERLIN from "../assets/img/icons/CERLIN.png";
import BUSQUEDA_ANTECEDENTES from "../assets/img/icons/BÚSQUEDA_DE_ANTECEDENTES.png";
import CONSULTA_INMOBILIARIA from "../assets/img/icons/CONSULTA INMOBI.png";
import ALERTA_REGISTRAL from "../assets/img/icons/ALERTA REGISTRAL.png";
import VALIDAR_TRAMITE from "../assets/img/icons/ESTATUS TRAMITE.png";
import CONSULTA_ESTATUS from "../assets/img/icons/ESTATUS TRAMITE.png";
import DESCARTA_TRAMITE from "../assets/img/icons/DESCARGA TRAMITES.png";
// import COPIAS_CERTIFICADAS from '../assets/img'
// Models
import { ToolOptionsModel } from "../models/toolOptions/toolOptionsModel";

export const TOOL_OPTIONS: ToolOptionsModel[] = [
  {
    img: COPIAS_CERTIFICADAS,
    nombre: "Copias certificadas",
    url: "/",
  },
  {
    img: CERLIN,
    nombre: "CERLIN",
    url: "cerlin",
  },
  {
    img: BUSQUEDA_ANTECEDENTES,
    nombre: "Búsqueda de antecedentes",
    url: "busqueda-antecedentes",
  },
  {
    img: CONSULTA_INMOBILIARIA,
    nombre: "Consulta inmobiliaria",
    url: "consulta-inmobiliaria",
  },
  {
    img: ALERTA_REGISTRAL,
    nombre: "Alerta registral",
    url: "alerta-registral",
  },
  {
    img: VALIDAR_TRAMITE,
    nombre: "Validar trámite",
    url: "validar-tramite",
  },
  {
    img: CONSULTA_ESTATUS,
    nombre: "Consulta estatus",
    url: "consulta-estatus",
  },
  {
    img: DESCARTA_TRAMITE,
    nombre: "Descarga Trámite",
    url: "descarga-tramite",
  },
];
