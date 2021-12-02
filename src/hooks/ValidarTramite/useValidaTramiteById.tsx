// Axios
import axios from "axios";
// Hooks
import { useState } from "react";
import { URL } from "../../config/Env/Url";

export const useValidaTramiteById = () => {
  // const [resTramite, setResTramite] = useState<any>({});

  const validarTramiteById = async (id: any) => {
    return await axios
      .post(`${URL.API_CIAS}/qreco_obtener_documento/obtenerDocumento?id=${id}`)
      .then((res) => {
        return res;
      });

    // setResTramite(data);
  };

  return { validarTramiteById };
};
