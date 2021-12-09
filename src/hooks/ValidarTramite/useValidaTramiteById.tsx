// Axios
import axios from "axios";
// Hooks
import { useState } from "react";
import { URL } from "../../config/Env/Url";

export const useValidaTramiteById = () => {
  // const [resTramite, setResTramite] = useState<any>({});

  const validarTramiteById = async (id: any) => {
    return await axios.get(
      `${URL.API_CIAS}/qreco_obtener_documento/obtenerDocumento?id=${id}`
    );

    // setResTramite(data);
  };

  return { validarTramiteById };
};
