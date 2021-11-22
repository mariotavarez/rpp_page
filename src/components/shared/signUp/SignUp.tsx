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
          Si aun no estas registrado a los servicios en linea del RPP,
          registrate ahora!!!
        </h2>
      </div>
      <div className="text-signUp">
        <h3>Dando clic en el botón "Registrarse".</h3>
      </div>
      <div className="img-container-signUp">
        <div className="img-signUp"></div>
      </div>
      <div className="btn-signUp">
        <BtnAction buttonOptions={btnSignUp} />
      </div>
    </div>
  );
};
