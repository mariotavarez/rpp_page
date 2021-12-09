// Styles
import "./EstatusTramite.scss";
// Hooks
import { useRef } from "react";
import { useState } from "react";
import { useValidaEstatusTramite } from "./../../../../hooks/EstatusTramite/UseValidaEstatusTramite";
import { useAlertNotification } from "../../../../hooks/Generals/useAlertNotification";
// Models
import { CatalogosModel } from "./../../../../models/catalogos/CatalogosModel";
// Data
import { SUBDIRECCIONES_DATA } from "./../../../../data/subdirecciones";
// Models
import { EstatusTramiteModel } from "./../../../../models/estatusTramite/EstatusTramiteModel";
import { ResponseEstatusTramiteModel } from "./../../../../models/estatusTramite/ResponseEstatusTramiteModel";
// Shared
import { CargandoRequest } from "./../../Screens/Cargando-request/CargandoRequest";

export const EstatusTramiteModal = ({ setShow }: { setShow: any }) => {
  const { validarEstatus, loading } = useValidaEstatusTramite();
  // Alert notification
  const { handleAlertNotification } = useAlertNotification();
  // Form estatus tramite
  const formEstatusTramite: any = useRef(null);
  // Cierra el modal
  const handleClose = () => setShow(false);
  // Obtiene el año actual
  const currectYear = new Date().getFullYear();
  // Subdirecciones
  const subdirecciones: CatalogosModel[] = SUBDIRECCIONES_DATA.slice();
  const [tablaEstatus, setTablaEstatus] = useState<any>(null);

  // Subdirecciones HTML
  const subdireccionesHTML = subdirecciones.map((subdireccion) => (
    <option key={subdireccion.value} value={subdireccion.value}>
      {subdireccion.name}
    </option>
  ));

  const construirTabla = (
    responseEstatusTramite: ResponseEstatusTramiteModel
  ) => {
    return responseEstatusTramite.estatus !== "" &&
      responseEstatusTramite.estatus !== null ? (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto overflow-y-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Estatus
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Fecha
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-800">
                        {responseEstatusTramite.estatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {responseEstatusTramite.fecha}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    ) : null;
  };

  const validarFormulario = (formDataEstatus: any) => {
    if (
      formDataEstatus.get("noEntrada")?.toString() === "0" ||
      formDataEstatus.get("noEntrada")?.toString() === ""
    ) {
      handleAlertNotification(
        "info",
        "Aviso",
        `El número de entrada es necesario`
      );
      return false;
    }

    if (
      formDataEstatus.get("noAnio")?.toString() === "0" ||
      formDataEstatus.get("noAnio")?.toString() === ""
    ) {
      handleAlertNotification(
        "info",
        "Aviso",
        `El año de entrada es necesario`
      );
      return false;
    }

    if (
      formDataEstatus.get("subdireccion")?.toString() === "0" ||
      formDataEstatus.get("subdireccion")?.toString() === ""
    ) {
      handleAlertNotification("info", "Aviso", `La subdirección es necesaria`);
      return false;
    }

    return true;
  };

  /**
   * @author Mario Tavarez
   * @date 26/11/2021
   * @description Valida el estatus del tramite del usuario
   */
  const handleClickEstatusTramite = () => {
    // Form Data Estatus
    const formDataEstatus = new FormData(formEstatusTramite.current);

    if (validarFormulario(formDataEstatus)) {
      // Objeto estatus tramite
      const estatusTramite: EstatusTramiteModel = {
        noEntrada: formDataEstatus.get("noEntrada")?.toString() || "0",
        noAnio: formDataEstatus.get("noAnio")?.toString() || "0",
        subdir: formDataEstatus.get("subdireccion")?.toString() || "0",
      };

      const responseValidarEstatus = validarEstatus(estatusTramite);

      responseValidarEstatus.then((response: ResponseEstatusTramiteModel) => {
        // Valida que le peticion se haya hecho correctamente
        if (response.codRes === "0") {
          if (response.estatus === "" || response.estatus === null) {
            handleAlertNotification(
              "info",
              "Aviso",
              "No se encontraron resultados"
            );
            setTablaEstatus(construirTabla(response));
          } else {
            setTablaEstatus(construirTabla(response));
          }
        }
      });
    } else {
      return;
    }
  };

  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster scroll-estatus  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className="animate__animated animate__flipInX w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
        <div className="">
          <div className="text-center p-5 flex-auto justify-center">
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
              onSubmit={handleClickEstatusTramite}
              ref={formEstatusTramite}
              className="w-full max-w-lg"
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
                      <option disabled value="0">
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
              </div>
            </form>
          </div>
          {/* TABLA ESTATUS TRAMITE */}
          {loading ? <CargandoRequest /> : tablaEstatus}
          {/* TABLA ESTATUS TRAMITE */}
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
              onClick={handleClickEstatusTramite}
              className="mb-2 md:mb-0 bg-blue-500 border  px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-700"
            >
              Consultar estatus
            </button>
            {/* CONSULTA ESTATUS */}
          </div>
        </div>
      </div>
    </div>
  );
};
