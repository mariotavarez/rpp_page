// Styles
import "./MenuOpciones.scss";
// Models
import { MenuTramitesServiciosModel } from "./../../../../models/menu-tramites-servicios/MenuTramitesServiciosModel";
// Data
import { MENU_TRAMITES_SERVICIOS_DATA } from "./../../../../data/Menu-tramites-servicios/MenuTramitesServices";

export const MenuOpciones = ({ setShow }: { setShow: any }) => {
  // Cierra el modal
  const handleClose = () => setShow(false);
  // Opciones
  const opciones: MenuTramitesServiciosModel[] =
    MENU_TRAMITES_SERVICIOS_DATA.slice();
  // Opciones HTML
  const opcionesHTML = opciones.map((opcion, index) => (
    <div
      key={index}
      className={`option-menu`}
      onClick={() => goToUrl(opcion.url)}
    >
      <div className={`container-card-option ${opcion.theme}`}>
        {opcion.icono}
      </div>
      <p>{opcion.title}</p>
    </div>
  ));

  const goToUrl = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className="w-full  max-w-lg  relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
        <div className="">
          <div className="text-center p-5 flex-auto justify-center">
            <h1 className="text-3xl font-bold py-4 pulse animated">
              Trámites y Servicios
            </h1>
            <div className="h-64 grid grid-rows-2 p-4 grid-flow-col gap-10 pulse animated">
              {opcionesHTML}
            </div>
          </div>
          <div className="p-3  mt-2 text-center space-x-4 md:block">
            <button
              className="mb-2 md:mb-0 bg-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-blue-300 hover:text-white"
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
