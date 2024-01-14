import React from "react";

export default function WebDesignGallery() {
  return (
    <div className="flex items-center justify-center h-90vh px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <div className="flex items-center justify-center w-11 h-11 rounded-full bg-zinc-50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <g data-name="21-web designer">
                <path d="M43 48H5a5.006 5.006 0 0 1-5-5 1 1 0 0 1 1-1h46a1 1 0 0 1 1 1 5.006 5.006 0 0 1-5 5zM2.171 44A3.006 3.006 0 0 0 5 46h38a3.006 3.006 0 0 0 2.829-2z" />
                <path d="M19 43h10v2H19zM46 43h-2V14a1 1 0 0 0-1-1h-4v-2h4a3 3 0 0 1 3 3zM4 43H2V14a3 3 0 0 1 3-3h4v2H5a1 1 0 0 0-1 1z" />
                <path d="M6 36h37v2H6z" />
                <path d="M10 37H8V3a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v3h-2V3a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1z" />
                <path d="M9 8h27v2H9z" />
                <path d="M26.648 25.176a1 1 0 0 1-.707-.293l-2.824-2.823a1 1 0 0 1 0-1.414L42.884.878a3.068 3.068 0 0 1 4.239 0 3 3 0 0 1 0 4.238L27.355 24.883a1 1 0 0 1-.707.293zm-1.41-3.823 1.41 1.409L45.708 3.7a1 1 0 0 0 0-1.41 1.019 1.019 0 0 0-1.409 0z" />
                <path d="M21 28a1 1 0 0 1-.895-1.447l2.824-5.648 1.789.895-1.482 2.964 2.964-1.483.9 1.789-5.653 2.83A1 1 0 0 1 21 28zM37.237 7.94l1.414-1.415 2.824 2.824-1.414 1.414zM38 12h2v25h-2zM12 4h2v2h-2zM16 4h2v2h-2zM20 4h2v2h-2zM17 22a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3z" />
                <path d="m19.293 19.707 1.414-1.414 3 3-1.413 1.415z" />
                <path d="M32 32H17a1 1 0 0 1-1-1V21h2v9h11.586l-4.295-4.3 1.414-1.414 6 6A1 1 0 0 1 32 32zM34 30h2v2h-2zM12 30h2v2h-2z" />
              </g>
            </svg>
          </div>
          <h5 className="my-4 text-4xl font-extrabold leading-none">
            Web Design Inspiration
          </h5>
          <p className="mb-6 text-gray-900">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae explicabo. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem totam rem aperiam, eaque ipsa quae explicabo.
          </p>
          <hr className="mb-5 border-gray-300" />
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://minimal.gallery/wp-content/uploads/2023/07/Screenshot-2023-07-10-at-22.52.35-900x490.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
