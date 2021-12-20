// Styles
import "./Carousel.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";
// Hooks

export class CarouselComponent extends React.Component<
  {},
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
    return !this.state.loading ? (
      <div>
        <SkeletonTheme baseColor="#b1b1b1" highlightColor="#7d7d7d">
          <Skeleton count={5} height={30} />
          <div className="container-loading-carousel">
            <Skeleton count={1} width={100} />
            <Skeleton count={1} width={100} />
            <Skeleton count={1} width={100} />
          </div>
        </SkeletonTheme>
      </div>
    ) : (
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        showStatus={true}
        showArrows={true}
        axis={"horizontal"}
        showIndicators={true}
        autoFocus={true}
        showThumbs={true}
        useKeyboardArrows={true}
        transitionTime={2000}
        stopOnHover={true}
        swipeable={true}
      >
        <div>
          <img
            className="responsive-carousel"
            alt="AVISO 1"
            src="https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/avisos/aviso-oficial.png"
          />
        </div>
        <div>
          <img
            src="https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/avisos/copias-certificadas.png"
            alt="AVISO 2"
          />
        </div>
        <div>
          <img
            src="https://cerlin.ciasqro.gob.mx/app_assets/portal_assets/img/avisos/cancelacion-hipoteca.png"
            alt="AVISO 3"
          />
        </div>
      </Carousel>
    );
  }
}
