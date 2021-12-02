// Styles
import "./Carousel.scss";

export const Carousel = () => {
  return (
    <div className="carousel relative rounded relative overflow-hidden shadow-xl">
      <div className="carousel-inner relative overflow-hidden w-full">
        <input
          className="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          hidden={true}
          aria-hidden="true"
          checked={true}
        />
        <div className="carousel-item absolute opacity-0 bg-center img-1"></div>
        <label
          htmlFor="carousel-3"
          className="
        control-1
        w-10
        h-10
        ml-2
        md:ml-10
        absolute
        cursor-pointer
        hidden
        font-bold
        text-black
        hover:text-white
        rounded-full
        bg-white
        hover:bg-blue-700
        leading-tight
        text-center
        z-10
        inset-y-0
        left-0
        my-auto
        flex
        justify-center
        content-center
      "
        >
          <i className="fas fa-angle-left mt-3"></i>
        </label>
        <label
          htmlFor="carousel-2"
          className="
        next
        control-1
        w-10
        h-10
        mr-2
        md:mr-10
        absolute
        cursor-pointer
        hidden
        font-bold
        text-black
        hover:text-white
        rounded-full
        bg-white
        hover:bg-blue-700
        leading-tight
        text-center
        z-10
        inset-y-0
        right-0
        my-auto
      "
        >
          <i className="fas fa-angle-right mt-3"></i>
        </label>

        <input
          className="carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          hidden={true}
          aria-hidden="true"
        />
        <div className="carousel-item absolute opacity-0 bg-center img-2"></div>
        <label
          htmlFor="carousel-1"
          className="
        control-2
        w-10
        h-10
        ml-2
        md:ml-10
        absolute
        cursor-pointer
        hidden
        font-bold
        text-black
        hover:text-white
        rounded-full
        bg-white
        hover:bg-blue-700
        leading-tight
        text-center
        z-10
        inset-y-0
        left-0
        my-auto
      "
        >
          <i className="fas fa-angle-left mt-3"></i>
        </label>
        <label
          htmlFor="carousel-3"
          className="
        next
        control-2
        w-10
        h-10
        mr-2
        md:mr-10
        absolute
        cursor-pointer
        hidden
        font-bold
        text-black
        hover:text-white
        rounded-full
        bg-white
        hover:bg-blue-700
        leading-tight
        text-center
        z-10
        inset-y-0
        right-0
        my-auto
      "
        >
          <i className="fas fa-angle-right mt-3"></i>
        </label>

        <ol className="carousel-indicators">
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-1"
              className="
            carousel-bullet
            cursor-pointer
            block
            text-4xl text-white
            hover:text-blue-700
          "
            >
              •
            </label>
          </li>
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-2"
              className="
            carousel-bullet
            cursor-pointer
            block
            text-4xl text-white
            hover:text-blue-700
          "
            >
              •
            </label>
          </li>
        </ol>
      </div>
    </div>
  );
};
