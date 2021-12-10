// Styles
import "./Footer.scss";
// Data
import { FOOTER } from "./../../../data/footer";
import { POLITICAS_SEGURIDAD } from "./../../../data/politicasSeguridad";
// Models
import { FooterModel } from "./../../../models/footer/FooterModel";
import { FooterOptionModel } from "./../../../models/footer/FooterOptionModel";

export const Footer = () => {
  // Data del footer
  const footerData: FooterModel[] = FOOTER.slice();
  // Año actual
  const currentYear = new Date().getFullYear();
  // Footer Options
  const footerOptions = footerData.map((option, index) => (
    <div key={index}>
      {/* NAVBAR ITEM */}
      <div className="navbar-footer-item">
        {/* NAVBAR TITLE H1 */}
        {/* <h1>{option.tituloMenu.text}</h1> */}
        {/* NAVBAR TITLE H1 */}
        {/* NAVBAR OPTION */}
        {/* {option.opcionMenu.map((opcionMenu, indexMenu) => (
          <div key={indexMenu}>
            <p>{opcionMenu.text}</p>
          </div>
        ))} */}
        {/* NAVBAR OPTION */}
      </div>
      {/* NAVBAR ITEM */}
    </div>
  ));

  // Politicas
  const politicas: FooterOptionModel[] = POLITICAS_SEGURIDAD.slice();
  // Politicas Options
  const politicasOption = politicas.map((politica, index) => (
    <div key={index}>
      <p>{politica.text}</p>
    </div>
  ));
  return (
    // CONTAINER FOOTER
    <div className="container-footer">
      {/* NAVBAR FOOTER */}
      {/* <div className="navbar-footer">{footerOptions}</div> */}
      {/* NAVBAR FOOTER */}
      {/* POLITICAS */}
      <div className="politicas">
        {/* COPYRIHT */}
        <p>
          Copyright © {currentYear} Registro Público de la Propiedad del Estado
          de Querétaro. Todos los derechos reservados
        </p>
        {/* COPYRIHT */}
        {/* HR */}
        <hr />
        {/* HR */}
        {/* POLITICAS OPTIONS */}
        {/* <div className="politicas-options">{politicasOption}</div> */}
        {/* POLITICAS OPTIONS */}
      </div>
      {/* POLITICAS */}
    </div>
    // CONTAINER FOOTER
  );
};
