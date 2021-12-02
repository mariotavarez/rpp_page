// Styles
import "./SignUp.scss";
// Shared
import { BtnAction } from "./../buttons/BtnAction";
// Models
import { ButtonModel } from "./../../../models/buttons/ButtonModel";
// Config
import { ENLACES } from "./../../../config/Constants/Enlaces";

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
      </div>
      <div className="text-signUp">
        <h3>Da clic en el siguiente botón para registrarte</h3>
      </div>
      <div className="img-container-signUp">
        <img
          src="http://172.34.9.154/portal_assets/img/dibujos/registrate.png"
          alt="Registrate"
        />
        {/* <div className="img-signUp"></div> */}
      </div>
      <div className="btn-signUp">
        <BtnAction buttonOptions={btnSignUp} onChildClick={() => {}} />
      </div>
    </div>
  );
};
