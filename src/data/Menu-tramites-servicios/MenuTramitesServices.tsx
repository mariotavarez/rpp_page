// Models
import { MenuTramitesServiciosModel } from "../../models/menu-tramites-servicios/MenuTramitesServiciosModel";

export const MENU_TRAMITES_SERVICIOS_DATA: MenuTramitesServiciosModel[] = [
  {
    title: "Copias Certificadas AGN",
    icono: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="w-16 h-16 flex items-center text-white mx-auto"
        viewBox="0 0 16 16"
      >
        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
      </svg>
    ),
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeOINCoB7CH9zLQGDGzs0v0R0uJbMDRrXsvpeYw5KJraZxnMA/viewform",
    theme: "bg-gradient-1",
  },
  {
    title: "Copias Certificadas Comercio",
    icono: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="w-16 h-16 flex items-center text-white mx-auto"
        viewBox="0 0 16 16"
      >
        <path d="M11 0H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2 2 2 0 0 0 2-2V4a2 2 0 0 0-2-2 2 2 0 0 0-2-2zm2 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1V3zM2 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2z" />
      </svg>
    ),
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeOINCoB7CH9zLQGDGzs0v0R0uJbMDRrXsvpeYw5KJraZxnMA/viewform",
    theme: "bg-gradient-4",
  },
  {
    title: "Costos de Trámites y Servicios",
    icono: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="w-16 h-16 flex items-center text-white mx-auto"
        viewBox="0 0 16 16"
      >
        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
      </svg>
    ),
    url: "https://catastroedo.queretaro.gob.mx/Qsig/?mun=06#inicio",
    theme: "bg-gradient-2",
  },
  {
    title: "Información catastral registral",
    icono: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="w-16 h-16 flex items-center text-white mx-auto"
        viewBox="0 0 16 16"
      >
        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
      </svg>
    ),
    url: "https://catastroedo.queretaro.gob.mx/Qsig/?mun=06#inicio",
    theme: "bg-gradient-3",
  },
  {
    title: "Solicitudes de informe de testamento",
    icono: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="w-16 h-16 flex items-center text-white mx-auto"
        viewBox="0 0 16 16"
      >
        <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
      </svg>
    ),
    url: "https://docs.google.com/forms/d/e/1FAIpQLSc9X1KGQgTFb8bStRdx3oZgYjM-Ec7TfDHLSE60sA7UNKoaEQ/viewform",
    theme: "bg-gradient-5",
  },
];
