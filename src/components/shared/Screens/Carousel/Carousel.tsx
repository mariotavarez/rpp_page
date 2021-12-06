// Styles
import "./Carousel.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const CarouselComponent = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={5000}
      showArrows={true}
      transitionTime={2000}
      stopOnHover={true}
      swipeable={true}
    >
      <div>
        <img src="https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/avisos/cancelacion-hipoteca.png" />
      </div>
      <div>
        <img src="https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/avisos/copias-certificadas.png" />
      </div>
      <div>
        <img src="https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/avisos/aviso-oficial.jpg" />
      </div>
    </Carousel>
  );
};
