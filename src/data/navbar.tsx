// Models
import { NavbarModel } from "./../models/navbar/navbarModel";

export const NAVBAR_OPTIONS: NavbarModel[] = [
  {
    nombre: "Inicio",
    url: "portal/",
    isSubMenu: false,
    targetBlank: false,
  },
  {
    nombre: "Trámites y servicios",
    url: "#",
    isSubMenu: true,
    targetBlank: false,
  },
  {
    nombre: "Sitios de interés",
    url: "portal/sitios-interes",
    isSubMenu: false,
    targetBlank: false,
  },
  {
    nombre: "Organización",
    url: "portal/organizacion",
    isSubMenu: false,
    targetBlank: false,
  },
  {
    nombre: "Marco jurídico",
    url: "portal/marco-juridico",
    isSubMenu: false,
    targetBlank: false,
  },
  {
    nombre: "Portal notarial",
    url: "https://cerlin.ciasqro.gob.mx/login/portal-notarial",
    isSubMenu: true,
    targetBlank: true,
  },
  {
    nombre: "Contáctanos",
    url: "portal/contactanos",
    isSubMenu: false,
    targetBlank: false,
  },
];
