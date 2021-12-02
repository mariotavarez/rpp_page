// Models
import { ListadoComprobanteModel } from "./ListadoComprobanteModel";
import { ResponseGenericaComprobanteModel } from "./ResponseGenericaComprobanteModel";

export interface ResponseBuscarComprobanteModel {
  lista: ListadoComprobanteModel[];
  respuesta: ResponseGenericaComprobanteModel;
}
