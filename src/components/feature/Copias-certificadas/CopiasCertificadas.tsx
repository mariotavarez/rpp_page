// Shared Components
import { SectionQuestion } from "./../../shared/sectionQuestion/SectionQuestion";
import { BtnVideoTutorial } from "./../../shared/buttons/BtnVideoTutorial";
import { BtnAction } from "./../../shared/buttons/BtnAction";
// Models
import { SectionQuestionModel } from "./../../../models/sectionQuestion/SectionQuestionModel";
import { ButtonModel } from "../../../models/buttons/ButtonModel";
// Data
import { COPIAS_CERTIFICADAS_DATA } from "./../../../data/Copias-certificadas/copiasCertificadas";
import { COPIAS_CERTIFICADAS_SIGNIFICADO_DATA } from "./../../../data/Copias-certificadas/copiasCertificadasSignificado";
// Styles
import "./CopiasCertificadas.scss";
// Images
import { TUTORIALES } from "./../../../config/Constants/Tutoriales";
// Config
import { ENLACES } from "./../../../config/Constants/Enlaces";
// Hooks
import { useState } from "react";
// Generals
import { GeneralModal } from "./../../shared/modals/General/General";
// React
import React from "react";

// Skeleton
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CopiasCertificadas = () => {
  return <ScreenCopiasCertificadas />;
};

class ScreenCopiasCertificadas extends React.Component<
  {},
  { loading: boolean; show: boolean; modalOpctions: any }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
      show: false,
      modalOpctions: { title: "", body: "" },
    };
    console.log(this.state);
  }

  componentDidMount() {
    this.setState({ loading: true });
  }

  render() {
    // Copias certificadas significado
    const copiasCertificadasSignificadoData =
      COPIAS_CERTIFICADAS_SIGNIFICADO_DATA;
    const { title, body } = this.state.modalOpctions;
    // Boton Solicitar copias certificadas
    const btnCopiasCertificadasRPP: ButtonModel = {
      color: "btn-action-blue",
      url: "",
      text: "Solicitar Copias Certificadas RPP",
      sameWindow: true,
    };
    // Boton Solicitar archivo general de notarias
    const btnCopiasCertificadasAGN: ButtonModel = {
      color: "btn-action-blue",
      url: ENLACES.COPIAS_CERTIFICADAS_AGN,
      text: "Solicitar Copias Certificadas AGN",
      sameWindow: false,
    };
    // Options Questions
    const options: SectionQuestionModel[] = COPIAS_CERTIFICADAS_DATA.slice();

    // Funcion para abrir el modal
    const handleClickModal = (opcion: string) => {
      if (opcion === "AGN") {
        this.setState({
          modalOpctions: {
            title: copiasCertificadasSignificadoData.AGN.titulo,
            body: copiasCertificadasSignificadoData.AGN.body,
          },
        });
      } else if (opcion === "RPP") {
        this.setState({
          modalOpctions: {
            title: copiasCertificadasSignificadoData.RPP.titulo,
            body: copiasCertificadasSignificadoData.RPP.body,
          },
        });
      } else {
        this.setState({
          modalOpctions: {
            title: copiasCertificadasSignificadoData.SUBDIRECCIONES.titulo,
            body: copiasCertificadasSignificadoData.SUBDIRECCIONES.body,
          },
        });
      }

      this.setState({ show: true });
    };

    return (
      <div className="container-copias-certificadas">
        {this.state.show && (
          <GeneralModal
            setShow={(value: any) => this.setState({ show: value })}
            title={title}
            texto={body}
          />
        )}
        <div className="titulo-copias-certificadas animate__animated animate__zoomInUp">
          {!this.state.loading ? (
            <SkeletonTheme baseColor="#b1b1b1" highlightColor="#7d7d7d">
              <Skeleton count={1} width={200} />
              <Skeleton count={1} width={100} />
              <Skeleton count={1} width={200} />
            </SkeletonTheme>
          ) : (
            <>
              <h1>COPICE</h1>
              <p>(Solicitud de copias certificadas)</p>
            </>
          )}
        </div>
        <div className="opciones-copias-rpp">
          {!this.state.loading ? (
            <SkeletonTheme baseColor="#b1b1b1" highlightColor="#7d7d7d">
              <Skeleton count={1} width={200} />
              <Skeleton count={1} width={100} />
              <Skeleton count={1} width={200} />
            </SkeletonTheme>
          ) : (
            <>
              <h1>Del Registro Público</h1>
              <div>
                <BtnAction
                  buttonOptions={btnCopiasCertificadasRPP}
                  onChildClick={() => handleClickModal("SUB")}
                />
              </div>
              <p onClick={() => handleClickModal("RPP")}>
                ¿Cuándo solicitar las copias del RPP?
              </p>
            </>
          )}
        </div>

        <div className="btn-video-tutorial-copias">
          {!this.state.loading ? (
            <SkeletonTheme baseColor="#b1b1b1" highlightColor="#7d7d7d">
              <Skeleton count={1} width={200} />
            </SkeletonTheme>
          ) : (
            <BtnVideoTutorial urlVideo={TUTORIALES.COPIAS_CERTIFICADAS} />
          )}
        </div>
        <div className="opciones-copias-agn">
          {!this.state.loading ? (
            <SkeletonTheme baseColor="#b1b1b1" highlightColor="#7d7d7d">
              <Skeleton count={1} width={200} />
              <Skeleton count={1} width={100} />
              <Skeleton count={1} width={200} />
            </SkeletonTheme>
          ) : (
            <>
              <h1>De Archivo General de Notarías</h1>
              <div>
                <BtnAction
                  buttonOptions={btnCopiasCertificadasAGN}
                  onChildClick={() => {}}
                />
              </div>
              <p onClick={() => handleClickModal("AGN")}>
                ¿Cuándo solicitar las copias del AGN?
              </p>
            </>
          )}
        </div>

        <div className="question-copias">
          <SectionQuestion
            options={options}
            gradient="bg-gradient-blue-purple"
          />
        </div>
      </div>
    );
  }
}

export default CopiasCertificadas;
