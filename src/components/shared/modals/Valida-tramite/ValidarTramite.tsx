// Hooks
import { useValidaTramiteById } from "../../../../hooks/ValidarTramite/useValidaTramiteById";
// Hooks
import { useRef } from "react";
import { useAlertNotification } from "./../../../../hooks/Generals/useAlertNotification";
// Config
import { URL } from "../../../../config/Env/Url";

export const ValidarTramiteModal = ({ setShow }: { setShow: any }) => {
  // Cierra el modal
  const handleClose = () => setShow(false);

  // Hook que permite visualizar una notificacion de alerta
  const { handleAlertNotification } = useAlertNotification();

  const formValidarTramite: any = useRef(null);

  /**
   * @author Mario Tavarez
   * @date 23/11/2021
   * @description Funcion para validar el tramite mediante el id
   */
  const handleClickValidarTramite = (event: any) => {
    event.preventDefault();
    // Validacion del formulario
    // formValidarTramite
    const formData = new FormData(formValidarTramite.current);
    const identificador = formData.get("id")?.toString() || "0";
    // Valida que el identificador no venga vacio
    if (identificador === "" || identificador === "0") {
      handleAlertNotification(
        "info",
        "Información",
        "Es necesario que introduzca el identificador"
      );

      return;
    }
    //  Valida que el identificador tenga una longitud de 15 caracteres
    if (identificador?.toString().length < 15) {
      handleAlertNotification(
        "info",
        "Información",
        "El identificador debe ser de al menos 15 caractares"
      );
      return;
    }
    // Abre la ventana para validar el documento
    window.open(
      `${
        URL.API_CIAS
      }/qreco_obtener_documento/obtenerDocumento?id=${identificador?.toString()}`,
      "_blank"
    );
  };

  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
        <div className="">
          <div className="text-center p-5 flex-auto justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="w-16 h-16 flex items-center text-blue-500 mx-auto"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
            </svg>
            <h2 className="text-xl font-bold py-4 ">
              Ingrese su identificador
            </h2>
            <form
              onSubmit={handleClickValidarTramite}
              ref={formValidarTramite}
              className="w-full max-w-lg"
            >
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Capture su Id
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="id"
                    name="id"
                    maxLength={16}
                    type="text"
                    placeholder="Ej: 03449958493587Q9"
                  />
                  <p className="text-gray-600 text-xs italic">
                    Asegurese de que su identificador tenga una longitud de 16
                    caracteres
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div className="p-3  mt-2 text-center space-x-4 md:block">
            <button
              className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
              onClick={handleClose}
            >
              Cerrar
            </button>
            <button
              type="button"
              onClick={handleClickValidarTramite}
              className="mb-2 md:mb-0 bg-blue-500 border  px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-700"
            >
              Validar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
