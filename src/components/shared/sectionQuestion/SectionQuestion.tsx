import "./SectionQuestion.scss";
// Models
import { SectionQuestionModel } from "./../../../models/sectionQuestion/SectionQuestionModel";
// React
import React from "react";
// Skeleton
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export class SectionQuestion extends React.Component<
  { options: SectionQuestionModel[]; gradient: string },
  { loading: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
  }

  render() {
    // Obtiene las opciones que se renderizaran y el color gradient del background
    const { options, gradient } = this.props;

    const handleClick = (event: any, pathUrl: string) => {
      // Previene la accion por defecto
      event.preventDefault();
      // Redirecciona a la url
      window.open(pathUrl, "_blank");
    };
    // Preguntas dinamicas
    const optionsSectionQuestion = options.map((option, index) => (
      <div key={index}>
        <div className="pt-2">
          <p className="text-white text-xl font-bold">{option.pregunta}</p>
        </div>
        <div className="pt-2">
          <button
            onClick={(event) => handleClick(event, option.button.url)}
            className={`hover:bg-blue-700 hover:text-white ${option.button.colorBtn} ${option.button.colorTxt}  font-bold py-2 px-4 rounded-full`}
          >
            {option.button.text}
          </button>
        </div>
      </div>
    ));
    return !this.state.loading ? (
      <div>
        <SkeletonTheme baseColor="#b1b1b1" highlightColor="#7d7d7d">
          <Skeleton count={1} height={35} />
          <Skeleton count={1} height={35} />
        </SkeletonTheme>
      </div>
    ) : (
      <div
        className={`${gradient} container-section-question grid grid-flow-row auto-rows-max p-4`}
      >
        {optionsSectionQuestion}
      </div>
    );
  }
}
