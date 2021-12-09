// Styles
import "./Contactanos.scss";
// Shared
import { ContactanosForm } from "./../../shared/formControls/Contactanos/ContactanosForm";

export const Contactanos = () => {
  return (
    <div className="container-contactanos">
      {/* TITULO CONTACTANOS  */}
      <div className="titulo-contactanos animate__animated animate__zoomInUp">
        <h1>
          <strong>Envíanos tus comentarios y sugerencias</strong>
        </h1>
      </div>
      {/* TITULO CONTACTANOS  */}
      {/* IMG CONTACTANOS */}
      <div className="img-contactanos">
        <img
          src="https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/dibujos/contactanos.png"
          alt="Contactanos"
        />
      </div>
      {/* IMG CONTACTANOS */}
      <div className="formulario-contactanos">
        <div className="formulario-contact-background">
          <ContactanosForm />
        </div>
      </div>
    </div>
  );
};
