import "./SectionQuestion.scss";
// Models
import { SectionQuestionModel } from "./../../../models/sectionQuestion/SectionQuestionModel";

export const SectionQuestion = ({
  options,
  gradient,
}: {
  options: SectionQuestionModel[];
  gradient: string;
}) => {
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
  return (
    <div
      className={`${gradient} container-section-question grid grid-flow-row auto-rows-max p-4`}
    >
      {optionsSectionQuestion}
    </div>
  );
};
