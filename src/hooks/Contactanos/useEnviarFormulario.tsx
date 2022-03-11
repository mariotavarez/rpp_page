// Models
import { ContactanosModel } from "./../../models/contactanos/ContactanosModel";
// Axios
import axios from "axios";
// Hooks
import { useState } from "react";
// Config
import { URL } from "./../../config/Env/Url";

export const useEnviarFormulario = () => {
  // Loading peticion
  const [loading, setLoading] = useState(false);

  /**
   * @author Mario Tavarez
   * @date 01/12/2021
   * @description Realiza la peticion para enviar el formulario de contactanos
   * @param formulario
   * @returns
   */
  const enviarFormulario = async (formulario: ContactanosModel) => {
    setLoading(true);
    const response = await axios.post(
      `${URL.API_CIAS}/ws_rpp_pagina_web12/contactanos`,
      formulario
    );
    setLoading(false);

    if (!response.data) {
      setLoading(false);
    }
    return response.data;
  };

  return { enviarFormulario, loading, setLoading };
};
