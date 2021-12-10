// Styles
import "./CardMap.scss";
// Models
import { SubdireccionesOrganizacionModel } from "./../../../models/organizacion/SubdireccionesOrganizacionModel";

export const CardMap = ({
  subdireccion,
  onChildClick,
  singleSubdireccion = false,
}: {
  subdireccion: SubdireccionesOrganizacionModel;
  onChildClick: any;
  singleSubdireccion: boolean;
}) => {
  return (
    <div
      onClick={onChildClick}
      className=" w-full h-full py-5 flex justify-center items-center"
    >
      <div className="relative pl-1 bg-gray-200 flex justify-center rounded-xl hover:scale-105 duration-500 transform transition cursor-pointer">
        <div
          onClick={onChildClick}
          className="top-0 left-0 mt-3 px-2 rounded-lg absolute z-30 bg-green-500  text-gray-100 text-lg md:text-lg font-bold md:block"
        >
          {singleSubdireccion ? <>Ver Subdirectores</> : <>Ver Subdirector</>}
        </div>
        <div className="top-0 left-0 h-2 md:h-3 mt-5 px-2 absolute z-20 bg-green-500"></div>
        <div className="top-0 left-0 h-2 md:h-3 mt-6 pl-5 rounded-3xl absolute z-0 bg-green-600"></div>
        <div className=" background-mapa-organizacion w-52 pb-2 bg-white rounded-xl shadow-xl z-10">
          <div className="relative">{subdireccion.src}</div>
          <div onClick={onChildClick} className="px-2 py-1">
            <div className="text-sm md:text-base text-white font-bold justify-center items-center">
              <p className="align-text-card">{subdireccion.subdireccion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
