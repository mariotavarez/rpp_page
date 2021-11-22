import "./ToolOptions.scss";
// Data
import { TOOL_OPTIONS } from "./../../../data/toolOptions";
// Models
import { ToolOptionsModel } from "./../../../models/toolOptions/toolOptionsModel";
import { Link, useNavigate } from "react-router-dom";

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
    // Redirecciona a la ruta especificada
    navigate(pathUrl);
  };

  const toolOptionsImg = toolOptions.map((option, index) => (
    // CONTAINER MRNU ARRAY OPTIONS
    <div
      key={index}
      className="container-menu-array-options"
      onClick={(event) => handleRedirectToUrl(event, option.url)}
    >
      {/* CONTAINER MENU ITEM */}
      <div className="container-menu-item ">
        {/* CONTAINER MENU ITEM IMG*/}
        <img src={option.img} alt={option.nombre} />
        {/* CONTAINER MENU ITEM IMG*/}
        {/* CONTAINER MENU ITEM P*/}
        <p className="text-toolOption">
          <Link to={option.url}>{option.nombre}</Link>
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
      <div className="grid grid-cols-8 gap-1 items-center justify-items-center ">
        {toolOptionsImg}
      </div>
    </div>
    // CONTAINER-TOOLOPTIONS
  );
};