// Styles
import "./ContactanosForm.scss";
// Hooks
import { useAlertNotification } from "./../../../../hooks/Generals/useAlertNotification";
import { useRef } from "react";
// Shared
import { BtnAction } from "./../../buttons/BtnAction";
import { CargandoRequest } from "./../../Screens/Cargando-request/CargandoRequest";
// Models
import { ButtonModel } from "./../../../../models/buttons/ButtonModel";
import { useEnviarFormulario } from "./../../../../hooks/Contactanos/useEnviarFormulario";
import { ContactanosModel } from "./../../../../models/contactanos/ContactanosModel";

export const ContactanosForm = () => {
  const contactRef: any = useRef(null);

  // Boton enviar
  const btnEnviar: ButtonModel = {
    color: "btn-action-blue",
    url: "",
    text: "Enviar",
    sameWindow: true,
  };

  // Alert notification
  const { handleAlertNotification } = useAlertNotification();
  // Hook para Enviar formulario
  const { enviarFormulario, loading, setLoading } = useEnviarFormulario();
  // Valida que el formulario este llenado de manera correcta
  const validarFormulario = (formularioContactanos: any) => {
    if (
      formularioContactanos.get("nombre") === "0" ||
      formularioContactanos.get("nombre") === ""
    ) {
      handleAlertNotification("info", "Aviso", `El campo nombre es necesario`);
      return false;
    }

    if (
      formularioContactanos.get("correo") === "0" ||
      formularioContactanos.get("correo") === ""
    ) {
      handleAlertNotification("info", "Aviso", `El campo correo es necesario`);
      return false;
    }

    if (
      formularioContactanos.get("telefono") === "0" ||
      formularioContactanos.get("telefono") === ""
    ) {
      handleAlertNotification(
        "info",
        "Aviso",
        `El campo teléfono es necesario`
      );
      return false;
    }

    if (
      formularioContactanos.get("celular") === "0" ||
      formularioContactanos.get("celular") === ""
    ) {
      handleAlertNotification("info", "Aviso", `El campo celular es necesario`);
      return false;
    }

    if (
      formularioContactanos.get("pais") === "0" ||
      formularioContactanos.get("pais") === ""
    ) {
      handleAlertNotification("info", "Aviso", `El campo país es necesario`);
      return false;
    }
    if (
      formularioContactanos.get("estado") === "0" ||
      formularioContactanos.get("estado") === ""
    ) {
      handleAlertNotification("info", "Aviso", `El campo estado es necesario`);
      return false;
    }
    if (
      formularioContactanos.get("comentarios") === "0" ||
      formularioContactanos.get("comentarios") === ""
    ) {
      handleAlertNotification(
        "info",
        "Aviso",
        `El campo comentarios es necesario`
      );
      return false;
    }

    return true;
  };

  /**
   * @author Mario Tavarez
   * @date 01/12/2021
   * @description Envia el formulario de contactanos
   * @param event
   * @returns
   */
  const handleClickSendFormContact = (event: any) => {
    // Previene el evento por defecto
    event.preventDefault();
    // Form contactanos
    const formContactanos = new FormData(contactRef.current);

    // Valida si todos los campos se han llenado correctamente
    if (validarFormulario(formContactanos)) {
      const requestFormContactanos: ContactanosModel = {
        nombre: formContactanos.get("nombre")?.toString() || "0",
        email: formContactanos.get("correo")?.toString() || "0",
        telefono: formContactanos.get("telefono")?.toString() || "0",
        movil: formContactanos.get("celular")?.toString() || "0",
        pais: formContactanos.get("pais")?.toString() || "0",
        estado: formContactanos.get("estado")?.toString() || "0",
        comentarios: formContactanos.get("comentarios")?.toString() || "0",
      };
      enviarFormulario(requestFormContactanos)
        .then((response) => {
          if (response.codError === "0") {
            handleAlertNotification(
              "success",
              "Información enviada correctamente",
              `Sus comentarios han sido enviados correctamente`
            );
            contactRef.current.reset();
          } else {
            handleAlertNotification(
              "error",
              "Ocurrió un error",
              `No fue posible enviar el formulario de contacto, intente nuevamente`
            );
            contactRef.current.reset();
          }
        })
        .catch((error) => {
          setLoading(false);
          handleAlertNotification("error", "Error", `${error}`);
        });
    } else {
      return;
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleClickSendFormContact}
        ref={contactRef}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* NOMBRE */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="nombre"
            >
              Nombre
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="nombre"
              name="nombre"
              autoComplete="off"
              maxLength={70}
              type="text"
              placeholder="Nombre"
            />
            <p className="text-gray-500 text-xs italic">Ingrese su nombre</p>
          </div>
          {/* NOMBRE */}
          {/* CORREO */}
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="correo"
            >
              Correo
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="correo"
              name="correo"
              autoComplete="off"
              maxLength={100}
              type="email"
              placeholder="usuario@mail.com"
            />
            <p className="text-gray-500 text-xs italic">Ingrese su correo</p>
          </div>
          {/* CORREO */}
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* TELEFONO */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="telefono"
            >
              Teléfono
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="telefono"
              name="telefono"
              type="text"
              autoComplete="off"
              maxLength={15}
              placeholder="xxxxxxxxxx"
            />
            <p className="text-gray-500 text-xs italic">Ingrese su teléfono</p>
          </div>
          {/* TELEFONO */}
          {/* CELULAR */}
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="celular"
            >
              Célular
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="celular"
              name="celular"
              autoComplete="off"
              maxLength={15}
              type="text"
              placeholder="xxxxxxxxxx"
            />
            <p className="text-gray-500 text-xs italic">Ingrese su célular</p>
          </div>
          {/* CELULAR */}
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* PAIS */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="pais"
            >
              País
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="pais"
              name="pais"
              autoComplete="off"
              maxLength={20}
              type="text"
              placeholder="Ej: MÉXICO"
            />
            <p className="text-gray-500 text-xs italic">Ingrese su país</p>
          </div>
          {/* PAIS */}
          {/* ESTADO */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="estado"
            >
              Estado
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="estado"
              name="estado"
              autoComplete="off"
              maxLength={30}
              type="text"
              placeholder="Ej: Querétaro"
            />
            <p className="text-gray-500 text-xs italic">Ingrese su estado</p>
          </div>
          {/* ESTADO */}
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          {/* COMENTARIOS */}
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="comentarios"
            >
              Comentarios
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="comentarios"
              name="comentarios"
              type="text"
              autoComplete="off"
              maxLength={200}
              placeholder="Ingrese sus comentarios"
            />
            <p className="text-gray-500 text-xs italic">
              Ingrese sus comentarios
            </p>
          </div>
          {/* COMENTARIOS */}
        </div>
        {/* BUTTON ACTION */}
        <BtnAction
          buttonOptions={btnEnviar}
          onChildClick={handleClickSendFormContact}
        />
        {/* BUTTON ACTION */}
        {/* LOADING */}
        {loading && <CargandoRequest />}
        {/* LOADING */}
      </form>
    </div>
  );
};
