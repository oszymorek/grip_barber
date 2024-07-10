import React from "react";
import Popup from "reactjs-popup";
import "./PopupTeam.css";

function PopupTeam({ moreAbout, title, content }) {
  return (
    <Popup
      trigger={<button className="more-about">Więcej o {moreAbout}</button>}
      modal
      nested
    >
      {(close) => (
        <div className="flex flex-col items-center justify-center px-12 py-24">
          <button
            onClick={close}
            type="button"
            className="bg-white rounded-md p-2 inline-flex self-end text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span className="sr-only">Close</span>
            <svg
              className="h-6 w-6"
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
          <div className="text-gold font-raleway font-semibold text-xl tracking-wider uppercase sm:text-3xl sm:mb-2 flex items-center justify-center">
            {title}
          </div>
          <div className="w-20 h-0.5 bg-gold content-center mb-4"></div>
          <div className="modal-content max-h-[70vh] overflow-y-auto text-justify text-black font-raleway font-light text-base leading-5 tracking-wide gap-12 sm:text-2xl sm:leading-6 md:text-xl lg:flex lg:text-lg xl:text-xl 2xl:text-2xl 2xl:tracking-normal">
            {content}
          </div>
          <div className="actions mt-auto">
            <button
              onClick={() => {
                close();
              }}
              type="button"
              className="mt-4 bg-white rounded-md mb-4 p-2 inline-flex items-center justify-center text-gray-400 text-xl	 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-2xl sm:leading-6 md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl"
            >
              <span className="sr-only">Close</span>
              Zamknij
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default PopupTeam;
