import Swal from "sweetalert2";

export const useAlertNotification = () => {
  const handleAlertNotification = (
    tipoAlerta: any,
    title: string,
    mensaje: string
  ) => {
    Swal.fire({
      title: title,
      text: mensaje,
      icon: tipoAlerta,
      confirmButtonText: "Aceptar",
      timer: 7000,
    });
  };

  return { handleAlertNotification };
};
