import "./Home.scss";
import "../../../assets/scss/fickity.scss";

import Flickity from "react-flickity-component";

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
      {/* CONTENT HOME */}
      <div className="content-home">
        {/* <div className="img-home">
          <img
            src="https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/dibujos/megafono.gif"
            alt=""
          />
        </div> */}
        {/* CAROUSEL AVISOS HOME */}
        <div className="carousel-avisos-home">
          <Flickity
            className={"carousel"}
            elementType={"div"}
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
          >
            <img src="http://172.34.9.154/portal_assets/img/avisos/copias-certificadas.png" />
            <img src="https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/avisos/cancelacion-hipoteca.png" />
          </Flickity>
        </div>
        {/* CAROUSEL AVISOS HOME */}
      </div>
      {/* CONTENT HOME */}
    </div>
  );
};
