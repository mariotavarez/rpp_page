// Styles
import "./MenuOpciones.scss";
// Models
import { MenuTramitesServiciosModel } from "./../../../../models/menu-tramites-servicios/MenuTramitesServiciosModel";
// Data
import { MENU_TRAMITES_SERVICIOS_DATA } from "./../../../../data/Menu-tramites-servicios/MenuTramitesServices";
import { Link } from "react-router-dom";

export const MenuOpciones = ({ setShow }: { setShow: any }) => {
  // Cierra el modal
  const handleClose = () => setShow(false);
  // Opciones
  const opciones: MenuTramitesServiciosModel[] =
    MENU_TRAMITES_SERVICIOS_DATA.slice();
  // Opciones HTML
  const opcionesHTML = opciones.map((opcion, index) =>
    !opcion.isExternal ? (
      <Link
        key={index}
        className="option-menu"
        to={opcion.url}
        onClick={() => setShow(false)}
      >
        <div className={`container-card-option ${opcion.theme}`}>
          {opcion.icono}
        </div>
        <p>{opcion.title}</p>
      </Link>
    ) : (
      <div
        key={index}
        className={`option-menu`}
        onClick={() => goToUrl(opcion)}
      >
        <div className={`container-card-option ${opcion.theme}`}>
          {opcion.icono}
        </div>
        <p>{opcion.title}</p>
      </div>
    )
  );

  const goToUrl = (opcion: MenuTramitesServiciosModel) => {
    // Valida si es un enlace externo o interno
    window.open(opcion.url, "_blank");
  };

  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className="animate__animated animate__flipInX w-full max-w-lg  relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
        <div className="scroll-menu-opciones">
          <div className="text-center p-5 flex-auto justify-center">
            <h1 className="text-3xl font-bold py-4 pulse animated">
              Trámites y Servicios
            </h1>
            <div className="h-64 grid grid-rows-2 p-2 grid-flow-col  gap-20 pulse animated show-menu-opciones-desktop">
              {opcionesHTML}
            </div>
            <div className="grid grid-rows-4 p-2 grid-flow-col gap-2 pulse animated show-menu-opciones-mobile">
              {opcionesHTML}
            </div>
          </div>
          <div className="p-4 mt-20 text-center space-x-4 md:block">
            <button
              className="mb-2 md:mb-0 bg-blue-500 px-5 py-2 text-lg shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-blue-300 hover:text-white"
              onClick={handleClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
