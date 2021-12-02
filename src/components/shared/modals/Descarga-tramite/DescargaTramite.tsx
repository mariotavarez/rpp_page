// Styles
import "./DescargaTramite.scss";
// Hooks
import { useRef } from "react";
import { useState } from "react";
import { useDescargarTramite } from "./../../../../hooks/DescargaTramite/useDescargarTramite";
import { useDownloadFile } from "./../../../../hooks/Generals/useDownloadFile";
// Models
import { CatalogosModel } from "./../../../../models/catalogos/CatalogosModel";
import { useBuscarTramite } from "./../../../../hooks/DescargaTramite/useBuscarTramite";
import { useAlertNotification } from "./../../../../hooks/Generals/useAlertNotification";
// Data
import { SUBDIRECCIONES_DATA } from "./../../../../data/subdirecciones";
// Models
import { BuscarComprobanteModel } from "./../../../../models/descarga-tramite/BuscarComprobanteModel";
import { ResponseBuscarComprobanteModel } from "./../../../../models/descarga-tramite/ResponseBuscarComprobanteModel";
import { BtnAction } from "./../../buttons/BtnAction";
import { ButtonModel } from "./../../../../models/buttons/ButtonModel";
import { DescargaComprobanteModel } from "./../../../../models/descarga-tramite/DescargaComprobanteModel";
// Shared
import { CargandoRequest } from "./../../Screens/Cargando-request/CargandoRequest";

export const DescargaTramiteModal = ({ setShow }: { setShow: any }) => {
  // Boton solicitar certificado
  const btnDescargar: ButtonModel = {
    color: "btn-action-blue",
    url: "",
    text: "Descargar",
    sameWindow: true,
  };
  // Form Descarga de tramite
  const refDescargaTramite: any = useRef(null);

  // Cierra el modal de descarga de tramite
  const handleClose = () => setShow(false);
  // Hook que devuelve el comprobante y el loading de la peticion
  const { buscarTramite, loading } = useBuscarTramite();
  // Tabla descarga de tramite
  const [tablaDescargaTramite, setTablaDescargaTramite] = useState<any>(null);
  // Hook alert notification
  const { handleAlertNotification } = useAlertNotification();
  // Descargar Archivo PDF
  const { downloadFilePassBase64 } = useDownloadFile();
  // Descargar Tramite
  const {
    getKeyDocumento,
    descargarTramite,
    loading: loadingDescargar,
  } = useDescargarTramite();
  // Obtiene el año actual
  const currectYear = new Date().getFullYear();
  // Subdirecciones
  const subdirecciones: CatalogosModel[] = SUBDIRECCIONES_DATA.slice();
  // Subdirecciones HTML
  const subdireccionesHTML = subdirecciones.map((subdireccion) => (
    <option key={subdireccion.value} value={subdireccion.value}>
      {subdireccion.name}
    </option>
  ));
  // Construir tabla
  const construirTabla = (
    responseBuscarComprobante: ResponseBuscarComprobanteModel
  ) => {
    return (
      <div className="flex flex-col  ">
        <div className="my-2  sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow  border-b border-gray-200 sm:rounded-lg">
              <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Descripción
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    ></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {responseBuscarComprobante.lista.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-800">
                          {item.tipoDoc}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {/* BUTTON ACTION */}
                          <BtnAction
                            buttonOptions={btnDescargar}
                            onChildClick={() =>
                              handleClicDescargaTramite(
                                item.cscImg,
                                item.tipoDoc
                              )
                            }
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };

  /**
   * @author Mario Tavarez
   * @date 01/12/2021
   * @description
   * @param cscImg
   * @param tipoDoc
   */
  const handleClicDescargaTramite = (cscImg: string, tipoDoc: string) => {
    // Form Data Descarga Tramite
    const formDescargaTramite = new FormData(refDescargaTramite.current);
    const keyImagen: DescargaComprobanteModel = {
      entrada: formDescargaTramite.get("noEntrada")?.toString() || "0",
      anioEntrada: formDescargaTramite.get("noAnio")?.toString() || "0",
      cscImg: cscImg,
      origenPeticion: 36,
      subdireccion: parseInt(
        formDescargaTramite.get("subdireccion")?.toString() || "0"
      ),
      tipoDocumento: 2,
      usuario: null,
    };
    // Genera la llave para descargar el documento
    getKeyDocumento(keyImagen)
      .then((response) => {
        // Valida si la respuesta es correcta
        if (response.respuesta.codRes === 0) {
          const llave = response.key;
          descargarTramite(llave).then((responseLlave: any) => {
            if (responseLlave.errores.codErr === "0") {
              downloadFilePassBase64(responseLlave.resultado, tipoDoc);
            }
          });
        } else {
          handleAlertNotification(
            "error",
            "Error al obtener el comprobante de inscripción",
            "No fue posible descargar el comprobante"
          );
        }
      })
      .catch((error) => {
        handleAlertNotification(
          "error",
          "Error al obtener llave de documento",
          error.message
        );
      });
  };

  // Descarga el tramite del usuario
  const handleClickBuscarTramite = async () => {
    // Form Data Descarga Tramite
    const formDescargaTramite = new FormData(refDescargaTramite.current);
    // Request de la peticion para buscar el comprobante
    const buscarComprobante: BuscarComprobanteModel = {
      anioEntrada: formDescargaTramite.get("noAnio")?.toString() || "0",
      entrada: formDescargaTramite.get("noEntrada")?.toString() || "0",
      subdireccion: formDescargaTramite.get("subdireccion")?.toString() || "0",
      usuario: null,
      origen: "36",
      numOrden: formDescargaTramite.get("numOrden")?.toString() || "0",
      anioOrden: formDescargaTramite.get("anioOrden")?.toString() || "0",
    };
    // Reealiza la peticion para buscar el comprobante de inscripcion
    buscarTramite(buscarComprobante).then(
      (response: ResponseBuscarComprobanteModel) => {
        // Valida que la respuesta sea correcta
        if (response.respuesta.codRes === 0) {
          setTablaDescargaTramite(construirTabla(response));
        } else {
          handleAlertNotification("error", "Aviso", response.respuesta.msjRes);
        }
      }
    );
  };

  return (
    <div
      className="  min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className="w-full  max-w-xl p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
        <div className="">
          <div className="text-center p-5 flex-auto justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-file-check w-16 h-16 flex items-center text-blue-500 mx-auto"
              viewBox="0 0 16 16"
            >
              <path d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
              <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
            </svg>
            <h2 className="text-xl font-bold py-4 ">
              Ingrese los siguientes datos
            </h2>

            <form
              onSubmit={handleClickBuscarTramite}
              ref={refDescargaTramite}
              className=" max-w-lg "
            >
              <div className="flex flex-wrap -mx-3 mb-6">
                {/* ENTRADA */}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    No. Entrada
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="noEntrada"
                    name="noEntrada"
                    maxLength={16}
                    type="text"
                    autoComplete="off"
                    placeholder="Ej: 432457"
                  />
                  <p className="text-gray-600 text-xs italic">
                    Ingrese su número de entrada
                  </p>
                </div>
                {/* ENTRADA */}
                {/* ANIO DE ENTRADA */}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Año de la entrada
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="noAnio"
                    name="noAnio"
                    maxLength={4}
                    autoComplete="off"
                    type="text"
                    placeholder={`Ej: ${currectYear}`}
                  />
                  <p className="text-gray-600 text-xs italic">
                    Ingrese el año de la entrada
                  </p>
                </div>
                {/* ANIO DE ENTRADA */}
                {/* SUBDIRECCION */}
                <div className="w-full px-3 pt-4">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Subdirección
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="subdireccion"
                      name="subdireccion"
                    >
                      <option disabled selected>
                        Seleccione la subdirección
                      </option>
                      {subdireccionesHTML}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs italic">
                    Seleccione la subdirección a la que corresponde su trámite
                  </p>
                </div>
                {/* SUBDIRECCION */}
                {/* NO ORDEN DE PAGO */}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 pt-4">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    No. orden de pago
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="numOrden"
                    name="numOrden"
                    maxLength={16}
                    type="text"
                    autoComplete="off"
                    placeholder="Ej: 432457"
                  />
                  <p className="text-gray-600 text-xs italic">
                    Ingrese su orden de pago
                  </p>
                </div>
                {/* NO ORDEN DE PAGO */}
                {/* ANIO ORDEN DE PAGO */}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0  pt-4">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Año de orden de pago
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="anioOrden"
                    name="anioOrden"
                    maxLength={4}
                    autoComplete="off"
                    type="text"
                    placeholder={`Ej: ${currectYear}`}
                  />
                  <p className="text-gray-600 text-xs italic">
                    Ingrese el año de orden de pago
                  </p>
                </div>
                {/* ANIO ORDEN DE PAGO */}
              </div>
              {/* TABLA DESCARGA COMPROBANTE */}
              {loading ? (
                <CargandoRequest />
              ) : (
                <div className="overflow-scroll">
                  <div>{tablaDescargaTramite}</div>
                </div>
              )}
              {/* TABLA DESCARGA COMPROBANTE */}
            </form>
          </div>
          <div className="p-3  mt-2 text-center space-x-4 md:block">
            {/* CERRAR */}
            <button
              className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
              onClick={handleClose}
            >
              Cerrar
            </button>
            {/* CERRAR */}
            {/* CONSULTA ESTATUS */}
            <button
              type="button"
              onClick={handleClickBuscarTramite}
              className="mb-2 md:mb-0 bg-blue-500 border  px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-700"
            >
              Descargar trámite
            </button>
            {/* CONSULTA ESTATUS */}
          </div>
        </div>
      </div>
    </div>
  );
};