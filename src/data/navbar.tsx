// Models
import { NavbarModel } from "./../models/navbar/navbarModel";

export const NAVBAR_OPTIONS: NavbarModel[] = [
  {
    nombre: "Inicio",
    url: "portal/",
    isSubMenu: false,
  },
  {
    nombre: "Trámites y servicios",
    url: "#",
    isSubMenu: true,
  },
  {
    nombre: "Sitios de interés",
    url: "portal/sitios-interes",
    isSubMenu: false,
  },
  {
    nombre: "Contáctanos",
    url: "portal/contactanos",
    isSubMenu: false,
  },
];
