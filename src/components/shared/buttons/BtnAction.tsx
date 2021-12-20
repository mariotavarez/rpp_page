// Models
import { ButtonModel } from "./../../../models/buttons/ButtonModel";

export const BtnAction = ({
  buttonOptions,
  onChildClick,
}: {
  buttonOptions: ButtonModel;
  onChildClick: any;
}) => {
  /**
   * @author Mario Tavarez
   * @date 19/11/2021
   * @description Redirige a un enlace externo o interno segun el parametro "sameWindow": false - mismo destino, true - nueva ventana
   * @param event
   */
  const handleClick = (event: any) => {
    // Previene el primer clic
    event.preventDefault();
    // Redirecciona al enlace externo o interno segun el parametro "sameWindow": false - mismo destino, true - nueva ventana
    if (!buttonOptions.sameWindow) {
      window.open(buttonOptions.url, "_blank");
    } else {
      onChildClick(event);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`${buttonOptions.color}  btn-portal-rounded hover:bg-gray-700  text-white font-extrabold px-4 rounded  items-center`}
      >
        <span>{buttonOptions.text}</span>
      </button>
    </div>
  );
};
