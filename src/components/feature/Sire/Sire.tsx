// Styles
import "./Sire.scss";

export const Sire = () => {
  return (
    <div className="container-sire">
      <div className="sire-title">
        <h1>Consultas al Registro Público de la Propiedad</h1>
      </div>
      <div className="sire-content">
        <div className="shadow-md">
          <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0 "
              id="tab-multi-one"
              type="checkbox"
              name="tabs"
            />
            <label
              className="block p-5 leading-normal cursor-pointer text-gray-700 text-lg font-bold"
              htmlFor="tab-multi-one"
            >
              Consulta vía internet
            </label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p className="p-5">
                Para accesar a la aplicación deberá contar con una clave de
                acceso proporcionada por la Dirección del Registro Público de la
                Propiedad.
              </p>
            </div>
          </div>
          <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0"
              id="tab-multi-two"
              type="checkbox"
              name="tabs"
            />
            <label
              className="block p-5 leading-normal cursor-pointer text-gray-700 text-lg font-bold"
              htmlFor="tab-multi-two"
            >
              Instrucciones de instalación
            </label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p className="p-5 text-blue-400 font-bold">
                <a
                  href="https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/documentos/MANUAL Consulta_remota_v5.pdf"
                  target="_blank"
                >
                  Guía para configurar el acceso al Sistema de Consulta Remota
                  del Sistema Integral Registral.
                </a>
              </p>
              <p className="p-5">Versión de Java 6.25 (Recomendable)</p>
              <p className="p-5 text-blue-400 font-bold">
                <a
                  download
                  href="https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/exec/Java_6.25_(x86).exe"
                >
                  Descargar
                </a>
              </p>
              <p className="p-5">
                Cualquier duda o pregunta no cubierta en este apartado, favor de
                contactar al Área de Tecnologías de la Información del Registro
                Público de la Propiedad del Estado de Querétaro:
                soporte_rppc@queretaro.gob.mx donde con gusto lo atenderemos
              </p>
            </div>
          </div>
          <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0"
              id="tab-multi-three"
              type="checkbox"
              name="tabs"
            />
            <label
              className="block p-5 leading-normal cursor-pointer text-gray-700 text-lg font-bold"
              htmlFor="tab-multi-three"
            >
              Accesar al sistema
            </label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p className="p-5">
                Para acceder al sistema copie el siguiente enlace y peguelo en
                el navegador <strong>Internet Explorer</strong>
              </p>
              <p className="p-5 text-blue-400 font-bold">
                <a
                  href="http://rppc.queretaro.gob.mx:7777/sirenet/sire_service.htm"
                  target="_blank"
                >
                  http://rppc.queretaro.gob.mx:7777/sirenet/sire_service.htm
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
