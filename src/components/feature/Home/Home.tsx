// Styles
import "./Home.scss";
// Shared
import { CarouselComponent } from "../../shared/Screens/Carousel/Carousel";
export const Home = () => {
  return (
    <div className="container-home">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
      />

      <CarouselComponent />
    </div>
  );
};

export default Home;
