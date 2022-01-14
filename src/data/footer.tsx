// Models
import { FooterModel } from "../models/footer/FooterModel";
// Config
import { ENLACES } from "../config/Constants/Enlaces";

export const FOOTER: FooterModel[] = [
  {
    tituloMenu: {
      text: "Inicio",
      url: `${ENLACES.INDEX}`,
      isSubMenu: false,
      targetBlank: false,
    },
    opcionMenu: [
      {
        text: "Copias certificadas",
        url: `${ENLACES.INDEX}/copias-certificadas`,
        isSubMenu: false,
        targetBlank: false,
      },
      {
        text: "Certificados en Línea",
        url: `${ENLACES.INDEX}/cerlin`,
        isSubMenu: false,
        targetBlank: false,
      },
      {
        text: "Búsqueda de antecedentes",
        url: `${ENLACES.INDEX}/busqueda-antecedentes`,
        isSubMenu: false,
        targetBlank: false,
      },
      {
        text: "Consulta inmobiliaria",
        url: `${ENLACES.INDEX}/consulta-inmobiliaria`,
        isSubMenu: false,
        targetBlank: false,
      },
      {
        text: "Alerta Registral",
        url: `${ENLACES.INDEX}/alerta-registral`,
        isSubMenu: false,
        targetBlank: false,
      },
      {
        text: "Validar Trámite",
        url: `${ENLACES.INDEX}/validar-tramite`,
        isSubMenu: false,
        targetBlank: false,
      },
      {
        text: "Consulta Estatus",
        url: `${ENLACES.INDEX}/consulta-estatus`,
        isSubMenu: false,
        targetBlank: false,
      },
      {
        text: "Descarga Comprobantes",
        url: `${ENLACES.INDEX}/descarga-tramite`,
        isSubMenu: false,
        targetBlank: false,
      },
      // {
      //   text: "INFONAVIT",
      //   url: `https://rppc.queretaro.gob.mx/portal/videos/VIDEO_INFONAVIT.mp4`,
      //   isSubMenu: true,
      //   targetBlank: true,
      // },
    ],
  },
  {
    tituloMenu: {
      text: "Organización",
      url: "portal/organizacion",
      isSubMenu: false,
      targetBlank: false,
    },
    opcionMenu: [],
  },
  {
    tituloMenu: {
      text: "Trámites y servicios",
      url: "#",
      isSubMenu: true,
      targetBlank: false,
    },
    opcionMenu: [],
  },
  {
    tituloMenu: {
      text: "Sitios de interés",
      url: "portal/sitios-interes",
      isSubMenu: false,
      targetBlank: false,
    },
    opcionMenu: [],
  },
  {
    tituloMenu: {
      text: "Portal notarial",
      url: "https://cerlin.ciasqro.gob.mx/login/portal-notarial",
      isSubMenu: true,
      targetBlank: true,
    },
    opcionMenu: [],
  },
  {
    tituloMenu: {
      text: "Contáctanos",
      url: `${ENLACES.INDEX}/contactanos`,
      isSubMenu: false,
      targetBlank: false,
    },
    opcionMenu: [],
  },
];
