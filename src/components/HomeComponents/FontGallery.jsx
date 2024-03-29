import React from "react";
import espinosa from "../../../public/Espinosa.png";

export default function FontGallery() {
  return (
    <div className="flex items-center justify-center h-90vh px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <div className="flex items-center justify-center w-11 h-11 rounded-full bg-zinc-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 123.94 122"
              style={{ fillRule: "evenodd", clipRule: "evenodd" }}
            >
              <defs>
                <style>{`.cls-1{fill:#333}.cls-2{fill:none;stroke:#333;stroke-linecap:round;stroke-miterlimit:10;stroke-width:4px}`}</style>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="General_-_Text" data-name="General - Text">
                  <g id="General_-_Text-2" data-name="General - Text">
                    <path
                      className="cls-1"
                      d="M29.54 68.05H10a1.43 1.43 0 0 0-1.26.75L2.28 80.89a1.41 1.41 0 0 1-1.28.75H0l23.92-44.73a1.42 1.42 0 0 1 1.23-.75 1.43 1.43 0 0 1 1.42 1.16l8.34 43.34a.83.83 0 0 1-.81 1H34a.83.83 0 0 1-.81-.67l-2.25-11.78a1.43 1.43 0 0 0-1.4-1.16zm-17.13-1.69h16.25a1.42 1.42 0 0 0 1.4-1.68l-4.19-22.44a1.43 1.43 0 0 0-2.66-.41l-12 22.44a1.41 1.41 0 0 0 1.2 2.09zM54.41 82.27a12.38 12.38 0 0 1-6.21-1.53 9.32 9.32 0 0 1-2.94-2.6.82.82 0 0 0-1.47.34L43.34 81a.82.82 0 0 1-.81.67.82.82 0 0 1-.81-1l8-46.35a.84.84 0 0 1 .82-.69.83.83 0 0 1 .81 1L48.42 51a.82.82 0 0 0 1.4.71A15.44 15.44 0 0 1 53.36 49a13.63 13.63 0 0 1 6.76-1.75 9.51 9.51 0 0 1 5.6 1.62 9.32 9.32 0 0 1 3.39 4.77 19.13 19.13 0 0 1 1 6.95 35.46 35.46 0 0 1-.37 3.84l-.41 2.07A24.44 24.44 0 0 1 63.72 78a12.32 12.32 0 0 1-9.31 4.27zm13.53-17.88.37-3.34a17.8 17.8 0 0 0-.58-6.31A8 8 0 0 0 65 50.36a7.74 7.74 0 0 0-4.79-1.47 13.7 13.7 0 0 0-7.83 2.5 12.16 12.16 0 0 0-4.9 6.12.83.83 0 0 0 0 .15l-2.82 15.25a1 1 0 0 0 0 .35A8.84 8.84 0 0 0 48 78.64a10.43 10.43 0 0 0 6.43 1.94 10.79 10.79 0 0 0 8.53-4.14q3.5-4.14 4.87-11.39zM87.34 80.58a12.21 12.21 0 0 0 7.71-2.53 12 12 0 0 0 4.18-6 .83.83 0 0 1 .79-.59.82.82 0 0 1 .8 1 13.61 13.61 0 0 1-4.63 6.81 13.77 13.77 0 0 1-8.81 3 10.18 10.18 0 0 1-7.55-2.89 13.09 13.09 0 0 1-3.49-8 23 23 0 0 1 .1-6l.18-1.31a25.9 25.9 0 0 1 3.11-8.9 16.75 16.75 0 0 1 5.57-6 13.46 13.46 0 0 1 7.2-2 10.14 10.14 0 0 1 8 3.31 10.8 10.8 0 0 1 2.58 7.67.83.83 0 0 1-.83.8.83.83 0 0 1-.82-.88 8.93 8.93 0 0 0-2.13-6.42 8.63 8.63 0 0 0-6.77-2.8 12.1 12.1 0 0 0-9.81 4.83Q78.81 58.55 78 66.64l-.12 2.25a.2.2 0 0 0 0 .07q0 5.48 2.47 8.54a8.48 8.48 0 0 0 6.99 3.08z"
                      style={{ fill: "#333", fillRule: "nonzero" }}
                    />
                    <path
                      className="cls-2"
                      d="M108.94 7.5v107M108.94 112c0 4.42 7.47 8 13 8M108.94 112c0 4.42-7.48 8-13 8M108.94 10c0-4.42 7.47-8 13-8M108.94 10c0-4.42-7.48-8-13-8"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <h5 className="my-4 text-4xl font-extrabold leading-none text-stone-800">
            Font Tool
          </h5>
          <p className="mb-6 text-xl tracking-wide text-stone-600">
            Transform your designs with our Font Showcase! Explore an extensive
            collection of fonts to elevate your typography game. Visit [Your
            Website] to discover unique typefaces, unlock exclusive resources,
            and redefine your creative expressions!
          </p>
          <hr className="mb-5 border-gray-300" />
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={espinosa}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
