// Styles
import "./MarcoJuridico.scss";
// Data
import { MARCO_JURIDICO_DATA } from "./../../../data/Marco-juridico/MarcoJuridico";
// Models
import { MarcoJuridicoModel } from "../../../models/marco-jurifico/MarcoJuridicoModel";

export const MarcoJuridico = () => {
  // Sitios de interes
  const marcoJuridico: MarcoJuridicoModel[] = MARCO_JURIDICO_DATA.slice();

  return (
    // CONTAINER SITIOS INTERES
    <div className="container-marco-juridico">
      {/* IMG SITIOS INTERES */}
      <div className="img-marco-juridico animate__animated animate__slideInDown">
        <img
          src="https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/dibujos/marco-juridico.png"
          alt="Marco Jurídico"
        />
      </div>
      {/* IMG SITIOS INTERES */}
      {/* TITLE SITIOS INTERES */}
      <div className="title-marco-juridico animate__animated animate__zoomInUp">
        <h1>
          <strong>Marco Jurídico</strong>
        </h1>
      </div>
      {/* TITLE SITIOS INTERES */}
      {/* TABLE SITIOS INTERES */}
      <div className="tabla-marco-juridico">
        {/* TABLE */}
        <div className="flex flex-col table-auto">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 ">
              <div className="shadow  border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-blue-500">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider"
                      >
                        Descripción
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider"
                      >
                        Enlace
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {marcoJuridico.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="md:text-sm sm:text-lg text-gray-900 transition delay-150 duration-300 ease-in-out">
                            {item.nombre}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="md:text-sm sm:text-lg text-gray-500 transition text-url delay-150 duration-300 ease-in-out">
                            <a href={item.url} target="_blank" rel={item.url}>
                              {" "}
                              {item.url}
                            </a>
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
        {/* TABLE */}
      </div>
      {/* TABLE SITIOS INTERES */}
    </div>
    // CONTAINER SITIOS INTERES
  );
};
export default MarcoJuridico;
