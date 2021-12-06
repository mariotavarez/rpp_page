// Models
import { NavbarModel } from "./../models/navbar/navbarModel";

export const NAVBAR_OPTIONS: NavbarModel[] = [
  {
    nombre: "Inicio",
    url: "/",
    isSubMenu: false,
  },
  {
    nombre: "Trámites y servicios",
    url: "#",
    isSubMenu: true,
  },
  {
    nombre: "Sitios de interés",
    url: "sitios-interes",
    isSubMenu: false,
  },
  {
    nombre: "Contáctanos",
    url: "contactanos",
    isSubMenu: false,
  },
];
