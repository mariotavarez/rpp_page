import "./SitiosInteres.scss";
// Models
import { SitiosInteresModel } from "./../../../models/sitios-interes/SitiosInteresModel";
// Data
import { SITIOS_INTERES_DATA } from "./../../../data/Sitios-interes/SitiosInteres";

export const SitiosInteres = () => {
  // Sitios de interes
  const sitiosInteresItems: SitiosInteresModel[] = SITIOS_INTERES_DATA.slice();

  return (
    // CONTAINER SITIOS INTERES
    <div className="container-sitios-interes">
      {/* IMG SITIOS INTERES */}
      <div className="img-sitios-interes">
        <img
          src="https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/dibujos/sitios-interes.png"
          alt="Sitios de interes"
        />
      </div>
      {/* IMG SITIOS INTERES */}
      {/* TITLE SITIOS INTERES */}
      <div className="title-sitios-interes pulse animated">
        <h1>
          <strong>Sitios interés</strong>
        </h1>
      </div>
      {/* TITLE SITIOS INTERES */}
      {/* TABLE SITIOS INTERES */}
      <div className="tabla-sitios-interes">
        {/* TABLE */}
        <div className="flex flex-col table-auto">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-blue-500">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider"
                      >
                        Nombre del sitrio
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
                    {sitiosInteresItems.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 transition delay-150 duration-300 ease-in-out">
                            {item.nombre}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 transition text-url delay-150 duration-300 ease-in-out">
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
