import logo from "../../../assets/img/logos/logo.png";
import logo_rpp from "../../../assets/img/logos/logo_rpp.png";

import "./Navbar.scss";
// Models
import { NavbarModel } from "./../../../models/navbar/navbarModel";
// Router Link
import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuOpciones } from "./../../shared/modals/Menu-optiones/MenuOpciones";
// Data
import { NAVBAR_OPTIONS } from "./../../../data/navbar";

export const NavbarPortal = () => {
  const [show, setShow] = useState(false);

  const navbarOptions: NavbarModel[] = NAVBAR_OPTIONS.slice();
  // Menu Desktop
  const navbarOptionsMenuDesktop = navbarOptions.map((option, index) =>
    option.isSubMenu ? (
      <a
        key={index}
        href={option.url}
        onClick={() => setShow(true)}
        className="font-bold text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-md font-semibold"
      >
        {option.nombre}
      </a>
    ) : (
      <Link
        key={index}
        className="font-bold text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-semibold"
        to={option.url}
      >
        {option.nombre}
      </Link>
    )
  );

  const hangleClickMenu = (event: any) => {
    event.preventDefault();
    alert(show);
    setShow(true);
  };
  // Menu Mobile
  const navbarOptionsMenuMobile = navbarOptions.map((option, index) => (
    <a
      key={index}
      href={option.url}
      className="font-bold text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-semibold"
    >
      {option.nombre}
    </a>
  ));

  return (
    <div>
      {show && <MenuOpciones setShow={setShow} />}

      <nav className="navbar-background">
        <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Abrir menú</span>
                <svg
                  className="block h-10 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-10 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-12 w-auto"
                  src={logo_rpp}
                  alt="RPP QRO"
                />
                <img
                  className="hidden lg:block h-12 w-auto"
                  src={logo_rpp}
                  alt="RPP QRO"
                />
              </div>
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-12 w-auto"
                  src={logo}
                  alt="QRO"
                />
                <img
                  className="hidden lg:block h-12 w-auto"
                  src={logo}
                  alt="QRO"
                />
              </div>
              <div className="hidden sm:block sm:ml-8 items-center">
                <div className="flex space-x-4">{navbarOptionsMenuDesktop}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-1 space-y-1">
            {navbarOptionsMenuMobile}
          </div>
        </div>
      </nav>
    </div>
  );
};
