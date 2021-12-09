import "./General.scss";

import purify from "dompurify";

export const GeneralModal = ({
  title,
  texto,
  setShow,
}: {
  title: string;
  texto: string;
  setShow: any;
}) => {
  return (
    <div
      className="min-w-screen  h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className="animate__animated animate__flipInX w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
        <div className="container-general">
          <div className="text-center p-5 flex-auto justify-center">
            <h2 className="text-xl font-bold py-4 ">{title}</h2>
          </div>
          <div
            className="scroll-general"
            dangerouslySetInnerHTML={{ __html: texto }}
          />
          {/* <p></p> */}
          <div className="p-3  mt-2 text-center space-x-4 md:block">
            {/* CERRAR */}
            <button
              className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
              onClick={() => setShow(false)}
            >
              Cerrar
            </button>
            {/* CERRAR */}
          </div>
        </div>
      </div>
    </div>
  );
};
