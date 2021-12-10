// Styles
import "./SignUp.scss";
// Shared
import { BtnAction } from "./../buttons/BtnAction";
// Models
import { ButtonModel } from "./../../../models/buttons/ButtonModel";
// Config
import { ENLACES } from "./../../../config/Constants/Enlaces";
// Shared
import { BtnVideoTutorial } from "./../buttons/BtnVideoTutorial";
// Tutoriales
import { TUTORIALES } from "./../../../config/Constants/Tutoriales";

export const SignUp = () => {
  // Boton SignUp
  const btnSignUp: ButtonModel = {
    color: "btn-action-white",
    url: ENLACES.REGISTRARSE,
    text: "Registrarse",
    sameWindow: false,
  };

  return (
    <div className="container-signUp">
      <div className="title-signUp">
        <h2>
          {" "}
          Si aún no estas registrado a los servicios en línea del Registro
          Público de la Propiedad
        </h2>
        <BtnVideoTutorial urlVideo={TUTORIALES.REGISTRARSE} />
      </div>
      <div className="text-signUp">
        <h3>Da clic en el siguiente botón para registrarte</h3>
      </div>
      <div className="img-container-signUp animate__animated animate__slideInDown">
        <img
          src="https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/dibujos/registrate.png"
          alt="Registrate"
        />
        {/* <div className="img-signUp"></div> */}
      </div>
      <div className="btn-signUp">
        <BtnAction buttonOptions={btnSignUp} onChildClick={() => {}} />
        <p>
          <a
            href={ENLACES.OLVIDE_CONTRASENA}
            target="_blank"
            rel="noopener noreferrer"
          >
            Olvidé mi contraseña
          </a>{" "}
        </p>
      </div>
    </div>
  );
};
