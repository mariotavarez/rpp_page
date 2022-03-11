// Axios
import axios from "axios";
// Hooks
import { useState } from "react";
// Models
import { TramitesModel } from "../../models/tramites-servicios/TramitesModel";
// Config
import { URL } from "./../../config/Env/Url";

export const useBusquedaTramites = () => {
  // Muestra el loading mientras carga la peticion
  const [loading, setLoading] = useState(false);

  /**
   * @author Mario Tavarez
   * @date 07/12/2021
   * @description Devuelve el listado de tramites
   * @returns
   */
  const getTramites = async () => {
    setLoading(true);

    const response = await axios.post(
      `${URL.API_CIAS}/ws_rpp_pagina_web12/tramites`
    );

    setLoading(false);

    return response.data;
  };

  const descargarDocumento = async (tramite: TramitesModel) => {
    setLoading(true);
    window.open(
      `${URL.API_CIAS}/ws_rpp_pagina_web12/documento?claveTramite=${tramite.claveTramite}&clave=${tramite.clave}&descr=${tramite.descripcionArchivo}`,
      "_blank"
    );
    setLoading(false);
  };

  return {
    loading,
    getTramites,
    descargarDocumento,
  };
};
