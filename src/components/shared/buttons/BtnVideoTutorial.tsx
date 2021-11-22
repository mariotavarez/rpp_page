import React from "react";
import PropTypes from "prop-types";

export const BtnVideoTutorial = ({ urlVideo }: { urlVideo: string }) => {
  /**
   * @author Mario Tavarez
   * @date 18/11/2021
   * @description Redirige a la url del video tutorial
   * @param event
   */
  const handleClick = (event: any) => {
    event.preventDefault();
    window.open(urlVideo, "_blank");
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="glow-on-hover btn-portal btn-tutoriales hover:bg-gray-700  text-white font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <span>Video Tutorial</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-play-btn pl-2"
          viewBox="0 0 16 16"
        >
          <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
        </svg>
      </button>
    </div>
  );
};

BtnVideoTutorial.propTypes = {
  urlVideo: PropTypes.string.isRequired,
};
