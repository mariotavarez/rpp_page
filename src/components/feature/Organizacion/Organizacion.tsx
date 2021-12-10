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
  const [encargados, setEncargados] = useState<MapasModel[]>([]);
  // Cambia a los encargados dependiendo de la subdireccion seleccionada
  const handleChangeSubdireccion = (
    subdireccion: SubdireccionesOrganizacionModel
  ) => {
    const subdirecciones = MAPAS_DATA.filter(
      (subdireccionItem) =>
        subdireccionItem.subdireccion === subdireccion.subdireccion
    );

    setEncargados(subdirecciones);
  };

  return (
    <div className="container-organizacion">
      <div className="title-organizacion">
        <h1>Organización</h1>
      </div>
      {/* VALIDA QUE NO SE ENCUENTRE VACIA LA LISTA DE ENCARGADOS */}
      {encargados.length > 0 && (
        <div className="content-organizacion">
          {encargados.map((encargado, index) => (
            <div
              key={index}
              className="flex flex-wrap place-items-center h-screen"
            >
              <div className="shadow-lg rounded-xl w-72 md:w-96 p-4 bg-white relative overflow-hidden">
                <div className="w-full h-full block">
                  <div className="flex items-center border-b-2 mb-2 py-2">
                    <img
                      className="w-10 h-10 object-cover rounded-full"
                      alt="User avatar"
                      src={encargado.img}
                    />

                    <div className="pl-3">
                      <div className="font-medium">
                        {encargado.nombreEncargado}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {encargado.titulo}
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gray-800 text-sm font-bold mb-2">
                      Ubicación
                    </p>
                    <p className="text-gray-800 text-sm font-medium mb-2">
                      {encargado.ubicacion}
                    </p>
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
            key={index}
            subdireccion={subdireccion}
            onChildClick={() => handleChangeSubdireccion(subdireccion)}
          />
        ))}
      </div>
    </div>
  );
};
