// Styles
import "./Cargando.scss";
// Images
import CARGANDO from "../../../../assets/img/screens/cargando_rpp.gif";

export const Cargando = () => {
  return (
    <div className="container-loading">
      <img src={CARGANDO} alt="CARGANDO" />
    </div>
  );
};
