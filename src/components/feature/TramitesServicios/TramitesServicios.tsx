// Styles
import "./TramitesServicios.scss";
// Hooks
import { useState, useEffect } from "react";
import { useBusquedaTramites } from "../../../hooks/TramitesServicios/useBusquedaTramites";
// Models
import { TramitesResponseModel } from "./../../../models/tramites-servicios/TramitesResponseModel";
import { TramitesModel } from "./../../../models/tramites-servicios/TramitesModel";

import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";

import { MDBDataTable, MDBAnimation } from "mdbreact";
// Models
import { ButtonModel } from "./../../../models/buttons/ButtonModel";
import { BtnAction } from "./../../shared/buttons/BtnAction";
// Skeleton
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const TramitesServicios = () => {
  // Hook que realiza la busqueda de tramites
  const { loading, getTramites, descargarDocumento } = useBusquedaTramites();
  // Lista de tramites
  const [tramites, setTramites] = useState<any[]>([]);
  // Label encabezado de tramites
  const [labelTramites, setLabelTramites] = useState<string>(
    "Cargando lista de trámites...."
  );

  // Boton Solicitar archivo general de notarias
  const btnDescargarTramite: ButtonModel = {
    color: "btn-action-blue",
    url: "",
    text: "Descargar",
    sameWindow: true,
  };

  // Descarga el tramite seleccionado
  const handleDescargarTramite = (tramite: TramitesModel) => {
    descargarDocumento(tramite);
  };

  const getTramitesYServicios = () => {
    // Lista de tramites
    const tramitesList: any[] = [];
    // Devuelve el listado de tramites
    getTramites().then((data: TramitesResponseModel) => {
      // Valida que el response sea correcto
      if (data.errores.codError === "0" || data.errores.codError === "") {
        // Agrega el boton de descarga al array de tramites
        for (const tramite of data.list) {
          tramitesList.push({
            descripcionArchivo: tramite.descripcionArchivo,
            claveTramite: tramite.claveTramite,
            clave: tramite.clave,
            enlace: (
              <BtnAction
                buttonOptions={btnDescargarTramite}
                onChildClick={() => handleDescargarTramite(tramite)}
              />
            ),
          });
        }
        // Setea los tramites
        setTramites(tramitesList);
        setLabelTramites("Ingrese el término de búsqueda");
      } else {
        setLabelTramites("No fue posible cargar el listado de trámites");
      }
    });
  };
  useEffect(() => {
    getTramitesYServicios();
    return;
  }, []);

  const tramitesList = {
    columns: [
      {
        label: "Nombre del trámite",
        field: "descripcionArchivo",
        sort: "asc",
        width: 500,
      },
      {
        label: "Enlace",
        field: "enlace",
        sort: "asc",
        width: 500,
      },
    ],
    rows: tramites,
  };

  return (
    <div className="container-tramites-servicios">
      <div className="title-tramites-servicios">
        <h1>
          {" "}
          <strong>Trámites y Servicios</strong>
        </h1>
      </div>
      <div className="content-tramites-servicios">
        <div className="container-tramites-mas-buscados">
          <img
            className="animate__animated animate__slideInDown"
            src="https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/dibujos/servicios.png"
            alt="Trámites y servicios"
          />
          {/* TABLA */}
          <div className="container-documentos-pdf">
            <p>{labelTramites}</p>
            {loading ? (
              <SkeletonTheme baseColor="#b1b1b1" highlightColor="#7d7d7d">
                <Skeleton count={1} height={20} />
                <Skeleton count={1} height={40} />
                <Skeleton count={1} height={20} />
                <Skeleton count={1} height={20} />
                <Skeleton count={1} height={20} />
                <Skeleton count={1} height={20} />
                <Skeleton count={1} height={20} />
              </SkeletonTheme>
            ) : null}
            {tramites.length > 0 && (
              <MDBAnimation type="slideInDown">
                <MDBDataTable
                  size={"lg"}
                  striped
                  displayEntries={false}
                  hover
                  noRecordsFoundLabel={
                    "No se encontrarón trámites con este término de búsqueda"
                  }
                  bordered
                  entries={5}
                  entrieslabel={"Número de registros"}
                  noBottomColumns={true}
                  exportToCSV={true}
                  data={tramitesList}
                  paginationLabel={["Previo", "Siguiente"]}
                  info={false}
                  searching={true}
                  searchinglabel={"Buscar"}
                  fullPagination
                />
              </MDBAnimation>
            )}
          </div>
          {/* TABLA */}
        </div>
      </div>
    </div>
  );
};

export default TramitesServicios;
