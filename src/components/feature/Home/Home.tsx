// Styles
import "./Home.scss";
// Shared
import { Carousel } from "../../shared/Screens/Carousel/Carousel";
export const Home = () => {
  const data = [
    {
      image:
        "http://172.35.9.154/portal_assets/img/avisos/copias-certificadas.png",
      caption: `Copias Certificadas`,
    },
    {
      image:
        "https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/avisos/cancelacion-hipoteca.png",
      caption: `Cancelación Infonavit`,
    },
  ];

  const flickityOptions = {
    initialIndex: 2,
  };

  return (
    <div className="container-home">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
      />

      <Carousel />
    </div>
  );
};
