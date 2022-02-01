import "./ToolOptions.scss";
// Data
import { TOOL_OPTIONS } from "./../../../data/toolOptions";
// Models
import { ToolOptionsModel } from "./../../../models/toolOptions/toolOptionsModel";
import { NavigateFunction, NavLink, useNavigate } from "react-router-dom";
// Skeleton
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// React
import React from "react";

export const ToolOptions = () => {
  // Hook para redireccionar
  let navigate = useNavigate();

  return <ScreenToolOptions navigate={navigate} />;
};

export class ScreenToolOptions extends React.Component<
  { navigate: NavigateFunction },
  { loading: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
  }

  render() {
    const { navigate } = this.props;
    // Arreglo de las opciones del tool tips
    const toolOptions: ToolOptionsModel[] = TOOL_OPTIONS.slice();
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
              <a
                href={validateURL(option.url) ? option.url : ""}
                target="_blank"
              >
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

    return !this.state.loading ? (
      <div>
        <SkeletonTheme baseColor="#b1b1b1" highlightColor="#7d7d7d">
          <div className="container-tool-option-skeleton">
            <Skeleton count={1} width={100} />
            <Skeleton count={1} width={100} />
            <Skeleton count={1} width={100} />
            <Skeleton count={1} width={100} />
            <Skeleton count={1} width={100} />
            <Skeleton count={1} width={100} />
            <Skeleton count={1} width={100} />
            <Skeleton count={1} width={100} />
            <Skeleton count={1} width={100} />
          </div>
        </SkeletonTheme>
      </div>
    ) : (
      <div className="container-toolOptions">
        <div className="grid grid-cols-2 sm:grid-cols-7 gap-1 items-center justify-items-center show-tool-desktop">
          {toolOptionsImg}
        </div>
        <div className="container mx-auto show-tool show-tool-responsive">
          <div className="grid grid-cols-2 gap-4">{toolOptionsImg}</div>
        </div>
      </div>
    );
  }
}
