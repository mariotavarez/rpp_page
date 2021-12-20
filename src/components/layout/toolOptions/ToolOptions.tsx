import "./ToolOptions.scss";
// Data
import { TOOL_OPTIONS } from "./../../../data/toolOptions";
// Models
import { ToolOptionsModel } from "./../../../models/toolOptions/toolOptionsModel";
import { NavLink, useNavigate } from "react-router-dom";

export const ToolOptions = () => {
  // Arreglo de las opciones del tool tips
  const toolOptions: ToolOptionsModel[] = TOOL_OPTIONS.slice();
  // Hook para redireccionar
  let navigate = useNavigate();

  /**
   * @autho Mario Tavarez
   * @date 22/11/2021
   * @description Redirecciona a la ruta especificada
   * @param event
   * @param pathUrl
   */
  const handleRedirectToUrl = (event: any, pathUrl: any) => {
    // Previene el comportamiento por defecto del evento
    event.preventDefault();
    if (pathUrl.isExternal) {
      window.open(pathUrl.url, "_blank");
    } else {
      // Redirecciona a la ruta especificada
      navigate(pathUrl.url);
    }
  };

  // Valida que la url sea segura
  const validateURL = (url: string) => {
    const parsed = new URL(url);
    return ["https:", "http:"].includes(parsed.protocol);
  };

  // Barra de opciones
  const toolOptionsImg = toolOptions.map((option, index) => (
    // CONTAINER MRNU ARRAY OPTIONS
    <div
      key={index}
      className="container-menu-array-options"
      onClick={(event) => handleRedirectToUrl(event, option)}
    >
      {/* CONTAINER MENU ITEM */}
      <div className="container-menu-item ">
        {/* CONTAINER MENU ITEM IMG*/}
        <img src={option.img} alt={option.nombre} />
        {/* CONTAINER MENU ITEM IMG*/}
        {/* CONTAINER MENU ITEM P*/}
        <p>
          {!option.isExternal ? (
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-toolOption-active" : "text-toolOption"
              }
              to={option.url}
            >
              {option.nombre}
            </NavLink>
          ) : (
            <a href={validateURL(option.url) ? option.url : ""} target="_blank">
              {option.nombre}
            </a>
          )}
        </p>
        {/* CONTAINER MENU ITEM P*/}
      </div>
      {/* CONTAINER MENU ITEM */}
    </div>
    // CONTAINER MRNU ARRAY OPTIONS
  ));

  return (
    // CONTAINER-TOOLOPTIONS
    <div className="container-toolOptions">
      <div className="grid grid-cols-2 sm:grid-cols-9 gap-1 items-center justify-items-center show-tool-desktop">
        {toolOptionsImg}
      </div>
      <div className="container mx-auto show-tool show-tool-responsive">
        <div className="grid grid-cols-2 gap-4">{toolOptionsImg}</div>
      </div>
    </div>

    // CONTAINER-TOOLOPTIONS
  );
};
