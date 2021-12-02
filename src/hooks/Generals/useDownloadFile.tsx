export const useDownloadFile = () => {
  /**
   * @author Mario Tavarez
   * @date 01/12/2021
   * @description Descarga el archivo y lo muestra en base64
   * @param file
   * @param name
   */
  const downloadFilePassBase64 = (fileBase64: string, name: string) => {
    let nuevaEtiqueta = document.createElement("a");
    nuevaEtiqueta.href = `data:application/pdf;base64,${fileBase64}`;
    // Descarga el archivo pdf
    nuevaEtiqueta.download = `${name}.pdf`;
    nuevaEtiqueta.click();
    // Crea una instancia de una ventana
    let pdfWindow: any = window.open("");
    // Abre la pagina con el documento en base64
    pdfWindow.document.write(
      `"<iframe width='100%' height='100%' src='data:application/pdf;base64,${fileBase64}'></iframe>`
    );
  };

  return { downloadFilePassBase64 };
};
