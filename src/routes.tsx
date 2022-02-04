// Models
import { RoutesModel } from "./models/Routes/RoutesModel";
// Constants
import { ENLACES } from "./config/Constants/Enlaces";
import { lazy } from "react";
// Copias certificadas
const CopiasCertificadas = lazy(
  () =>
    import(
      /* webpackChunkName: "Copias Certificadas" */ "./components/feature/Copias-certificadas/CopiasCertificadas"
    )
);
// Busqueda antecedentes
const BusquedaAntecedentes = lazy(
  () =>
    import(
      /* webpackChunkName: "Busqueda Antecedentes" */ "./components/feature/Busqueda-antecedentes/BusquedaAntecedentes"
    )
);
// Cerlin
const Cerlin = lazy(
  () =>
    import(
      /* webpackChunkName: "Cerlin" */ "./components/feature/Cerlin/Cerlin"
    )
);
// Consulta inmobiliaria
const ConsultaInmobiliaria = lazy(
  () =>
    import(
      /* webpackChunkName: "Consulta Inmobiliaria" */ "./components/feature/ConsultaInmobiliaria/ConsultaInmobiliaria"
    )
);
// Alerta Registral
const AlertaRegistral = lazy(
  () =>
    import(
      /* webpackChunkName: "Alerta Registral" */ "./components/feature/AlertaRegistral/AlertaRegistral"
    )
);
// Consulta Estatus
const ConsultaEstatus = lazy(
  () =>
    import(
      /* webpackChunkName: "Consulta Estatus" */ "./components/feature/ConsutlaEstatus/ConsultaEstatus"
    )
);
// Validar Tramite
const ValidarTramite = lazy(
  () =>
    import(
      /* webpackChunkName: "Validar Tramite" */ "./components/feature/Valida-tramite/ValidarTramite"
    )
);
// Descargar Tramite
const DescargarTramite = lazy(
  () =>
    import(
      /* webpackChunkName: "Descargar Tramite" */ "./components/feature/DescargaTramite/DescargaTramite"
    )
);
// Sitios Interes
const SitiosInteres = lazy(
  () =>
    import(
      /* webpackChunkName: "Sitios Interes" */ "./components/feature/Sitios-interes/SitiosInteres"
    )
);
// Organizacion
const Organizacion = lazy(
  () =>
    import(
      /* webpackChunkName: "Organizacion" */ "./components/feature/Organizacion/Organizacion"
    )
);
// Tramites y Servicios
const TramitesServicios = lazy(
  () =>
    import(
      /* webpackChunkName: "Tramites y Servicios" */ "./components/feature/TramitesServicios/TramitesServicios"
    )
);
// Sire
const Sire = lazy(
  () => import(/* webpackChunkName: "Sire" */ "./components/feature/Sire/Sire")
);
// Marco Juridico
const MarcoJuridico = lazy(
  () =>
    import(
      /* webpackChunkName: "Marco Juridico" */ "./components/feature/MarcoJuridico/MarcoJuridico"
    )
);
// Contactanos
const Contactanos = lazy(
  () =>
    import(
      /* webpackChunkName: "Contactanos" */ "./components/feature/Contactanos/Contactanos"
    )
);

export const Routes: RoutesModel[] = [
  {
    to: `${ENLACES.INDEX}/copias-certificadas`,
    path: `${ENLACES.INDEX}/copias-certificadas`,
    name: "Copias Certificadas",
    Component: CopiasCertificadas,
  },
  {
    to: `${ENLACES.INDEX}/busqueda-antecedentes`,
    path: `${ENLACES.INDEX}/busqueda-antecedentes`,
    name: "Busqueda Antecedentes",
    Component: BusquedaAntecedentes,
  },
  {
    to: `${ENLACES.INDEX}/cerlin`,
    path: `${ENLACES.INDEX}/cerlin`,
    name: "Cerlin",
    Component: Cerlin,
  },
  {
    to: `${ENLACES.INDEX}/consulta-inmobiliaria`,
    path: `${ENLACES.INDEX}/consulta-inmobiliaria`,
    name: "Consulta Inmobiliaria",
    Component: ConsultaInmobiliaria,
  },
  {
    to: `${ENLACES.INDEX}/alerta-registral`,
    path: `${ENLACES.INDEX}/alerta-registral`,
    name: "Alerta Registral",
    Component: AlertaRegistral,
  },
  {
    to: `${ENLACES.INDEX}/consulta-estatus`,
    path: `${ENLACES.INDEX}/consulta-estatus`,
    name: "Consulta Estatus",
    Component: ConsultaEstatus,
  },
  {
    to: `${ENLACES.INDEX}/validar-tramite`,
    path: `${ENLACES.INDEX}/validar-tramite`,
    name: "Validar Trámite",
    Component: ValidarTramite,
  },
  {
    to: `${ENLACES.INDEX}/descarga-tramite`,
    path: `${ENLACES.INDEX}/descarga-tramite`,
    name: "Descarga Trámite",
    Component: DescargarTramite,
  },
  {
    to: `${ENLACES.INDEX}/sitios-interes`,
    path: `${ENLACES.INDEX}/sitios-interes`,
    name: "Sitios Interés",
    Component: SitiosInteres,
  },
  {
    to: `${ENLACES.INDEX}/organizacion`,
    path: `${ENLACES.INDEX}/organizacion`,
    name: "Organización",
    Component: Organizacion,
  },
  {
    to: `${ENLACES.INDEX}/tramites-servicios`,
    path: `${ENLACES.INDEX}/tramites-servicios`,
    name: "Trámites y Servicios",
    Component: TramitesServicios,
  },
  {
    to: `${ENLACES.INDEX}/sire`,
    path: `${ENLACES.INDEX}/sire`,
    name: "Sire",
    Component: Sire,
  },
  {
    to: `${ENLACES.INDEX}/marco-juridico`,
    path: `${ENLACES.INDEX}/marco-juridico`,
    name: "Marco Jurídico",
    Component: MarcoJuridico,
  },
  {
    to: `${ENLACES.INDEX}/contactanos`,
    path: `${ENLACES.INDEX}/contactanos`,
    name: "Contáctanos",
    Component: Contactanos,
  },
];
