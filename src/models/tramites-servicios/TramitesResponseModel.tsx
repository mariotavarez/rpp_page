// Models
import { TramitesModel } from "./TramitesModel";

export interface TramitesResponseModel {
  list: TramitesModel[];
  errores: {
    codError: string;
    msjError: string;
  };
}
