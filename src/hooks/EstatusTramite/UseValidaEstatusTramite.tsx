// Axios
import axios from "axios";
// Config
import { URL } from "./../../config/Env/Url";
// Models
import { EstatusTramiteModel } from "./../../models/estatusTramite/EstatusTramiteModel";
// Hooks
import { useState } from "react";

export const useValidaEstatusTramite = () => {
  // Valida si se ha terminado de cargar el estatus del tramite
  const [loading, setLoading] = useState(false);

  // Devuelve la respuesta del servicio de estatus del tramite
  const validarEstatus = async (estatusTramite: EstatusTramiteModel) => {
    setLoading(true);
    const responseValidarEstatus = await axios.post(
      `${URL.API_CIAS}/ws_rpp_general_tramitesSire12/estatusTramite`,
      estatusTramite
    );

    setLoading(false);
    return responseValidarEstatus.data;
  };

  return {
    validarEstatus,
    loading,
  };
};
