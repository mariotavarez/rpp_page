// Axios
import axios from "axios";
// Models
import { BuscarComprobanteModel } from "./../../models/descarga-tramite/BuscarComprobanteModel";
// Hooks
import { useState } from "react";
// Config
import { URL } from "./../../config/Env/Url";

export const useBuscarTramite = () => {
  // Valida que termine de cargar la peticion
  const [loading, setLoading] = useState(false);

  /**
   * @author Mario Tavarez
   * @date 30/11/2021
   * @description Busca el tramite y devuelve la tabla con el tramite a descargar
   * @param buscarTramite
   * @returns
   */
  const buscarTramite = async (buscarTramite: BuscarComprobanteModel) => {
    // Comienza el loading de la peticion
    setLoading(true);

    const response = await axios.post(
      `${URL.API_CIAS}/ws_rpp_compb_inscp_general/descargar`,
      buscarTramite
    );
    console.log(response);

    // Detiene el loading de la peticion
    setLoading(false);

    return response.data;
  };

  return { buscarTramite, loading };
};
