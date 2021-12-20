// Styles
import "./Organizacion.scss";
// Models
import { MapasModel } from "../../../models/organizacion/MapasModel";
import { SubdireccionesOrganizacionModel } from "../../../models/organizacion/SubdireccionesOrganizacionModel";
// Data
import { MAPAS_DATA } from "../../../data/Organizacion/Mapas";
import { SUBDIRECCIONES_DATA } from "../../../data/Organizacion/Subdirecciones";
// Hooks
import { useState } from "react";
import { CardMap } from "../../shared/cards/CardMap";

export const Organizacion = () => {
  // Informacion de mapas
  const subdirecciones: SubdireccionesOrganizacionModel[] =
    SUBDIRECCIONES_DATA.slice();

  // Encargados
  const [encargados, setEncargados] = useState<MapasModel[]>(
    MAPAS_DATA.filter(
      (subdireccionItem) => subdireccionItem.cargo === "DIRECTOR"
    )
  );
  // Subdireccion actual seleccionada
  const [subdireccionActual, setSubdireccionActual] =
    useState<string>("DIRECCIÓN");
  // Cambia a los encargados dependiendo de la subdireccion seleccionada
  const handleChangeSubdireccion = (
    subdireccion: SubdireccionesOrganizacionModel
  ) => {
    setSubdireccionActual(
      subdireccion.subdireccion === "AGN"
        ? "ARCHIVO GENERAL DE NOTARÍAS"
        : subdireccion.subdireccion
    );
    const subdirecciones = MAPAS_DATA.filter(
      (subdireccionItem) =>
        subdireccionItem.subdireccion === subdireccion.subdireccion ||
        subdireccionItem.cargo === "DIRECTOR"
    );

    setEncargados(subdirecciones);
  };

  return (
    <div className="container-organizacion">
      <div className="title-organizacion">
        <h1>Organización</h1>
      </div>
      <div className="subdireccion-actual">
        <span>
          {subdireccionActual !== "DIRECCIÓN"
            ? `SUBDIRECCIÓN - ${subdireccionActual}`
            : subdireccionActual}{" "}
        </span>
      </div>
      <div className="subtitle-organizacion">
        <h2>Seleccione una subdirección</h2>
      </div>
      {/* VALIDA QUE NO SE ENCUENTRE VACIA LA LISTA DE ENCARGADOS */}
      {encargados.length > 0 && (
        <div className="content-organizacion animate__animated animate__fadeInDown">
          {encargados.map((encargado, index) => (
            <div key={index}>
              <div className="shadow-lg rounded-xl w-72 md:w-96 p-4 bg-white relative overflow-hidden">
                <div className="w-full h-full block">
                  <div className="flex items-center border-b-2 mb-2 py-2">
                    {encargado.img !== "" ? (
                      <img
                        className="w-10 h-10 object-cover rounded-full"
                        alt="User avatar"
                        src={encargado.img}
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-16 h-16 flex items-center text-blue-500 mx-auto"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    )}

                    <div className="pl-3">
                      <div className="font-medium">
                        {encargado.nombreEncargado}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {encargado.titulo}
                      </div>
                    </div>
                  </div>
                  <div className="w-full overflow-card-information">
                    <p className="text-gray-800 text-sm font-bold mb-2">
                      Ubicación
                    </p>
                    <p className="text-gray-800 text-sm font-medium mb-2">
                      {encargado.ubicacion}
                    </p>
                    {encargado.horario !== "" ? (
                      <div>
                        <p className="text-gray-800 text-sm font-bold mb-2">
                          Horario de atención
                        </p>
                        <p className="text-gray-800 text-sm mb-4">
                          {encargado.horario}
                        </p>
                      </div>
                    ) : null}
                    {encargado.email !== "" ? (
                      <div>
                        <p className="text-gray-800 text-sm font-bold mb-2">
                          Email
                        </p>
                        <p className="text-gray-800 text-sm mb-4">
                          {encargado.email}
                        </p>
                      </div>
                    ) : null}
                    <p className="text-gray-800 text-sm font-bold mb-2">
                      Teléfono
                    </p>
                    <p className="text-gray-800 text-sm mb-4">
                      {encargado.telefono}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="container-cards">
        {subdirecciones.map((subdireccion, index) => (
          <CardMap
            singleSubdireccion={subdireccion.subdireccion === "QUERÉTARO"}
            key={index}
            subdireccion={subdireccion}
            onChildClick={() => handleChangeSubdireccion(subdireccion)}
          />
        ))}
      </div>
    </div>
  );
};

export default Organizacion;
