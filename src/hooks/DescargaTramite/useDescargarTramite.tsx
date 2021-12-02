// Models
import { DescargaComprobanteModel } from "./../../models/descarga-tramite/DescargaComprobanteModel";
// Hooks
import { useState } from "react";
// Axios
import axios from "axios";
// Config
import { URL } from "./../../config/Env/Url";

export const useDescargarTramite = () => {
  // Valida que la peticion haya cargado
  const [loading, setLoading] = useState(false);

  const getKeyDocumento = async (
    descargaComprobanteModel: DescargaComprobanteModel
  ) => {
    // Realiza la peticion
    const response = await axios.post(
      `${URL.API_CIAS}/ws_rpp_compb_inscp_general/consultaDoc`,
      descargaComprobanteModel
    );

    return response.data;
  };

  const descargarTramite = async (llave: string) => {
    // Setea el loading
    setLoading(true);

    // Realiza la peticion
    const response = await axios.post(
      `${URL.API_CIAS}/ws_rpp_alterin_general/alterin/recuperaDocumento`,
      { llave }
    );

    // Setea el loading
    setLoading(false);

    // Retorna la respuesta
    return response.data;
  };

  return { getKeyDocumento, descargarTramite, loading };
};
