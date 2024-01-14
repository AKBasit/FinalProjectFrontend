import React from "react";

export default function ImageGallery() {
  return (
    <div className="flex items-center justify-center h-90vh px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.unsplash.com/photo-1704137477371-bed38523c2eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="lg:pr-10">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19.363 2.38H4.637A2.259 2.259 0 0 0 2.38 4.637v14.726a2.259 2.259 0 0 0 2.257 2.257h14.726a2.259 2.259 0 0 0 2.257-2.257V4.637a2.259 2.259 0 0 0-2.257-2.257zm1.226 16.983a1.227 1.227 0 0 1-1.226 1.226H4.637a1.227 1.227 0 0 1-1.226-1.226v-1.624h17.178zm0-2.654H3.411V4.637a1.227 1.227 0 0 1 1.226-1.226h14.726a1.227 1.227 0 0 1 1.226 1.226z" />
              <path d="M15.413 8.111a.516.516 0 0 0-.791-.078l-3.011 2.984-2.23-1.734a.514.514 0 0 0-.7.064L4.9 13.6a.516.516 0 0 0 .771.685l3.46-3.891 2.206 1.716a.514.514 0 0 0 .679-.041l2.89-2.869 3.383 5.025a.515.515 0 1 0 .855-.576z" />
              <path d="M12 8.574A1.976 1.976 0 1 0 10.024 6.6 1.978 1.978 0 0 0 12 8.574zm0-2.92a.945.945 0 1 1-.945.944.945.945 0 0 1 .945-.944z" />
            </svg>
          </div>
          <div className="w-1/2 max-w-[800px] min-w-[600px] aspect-square border-[8px] border-slate-100 rounded-full absolute z-0 left-80 top-80 translate-x-[50%] translate-y-[50%]" />
          <h5 className="my-4 text-4xl font-extrabold leading-none">
            Image Library
          </h5>
          <p className="mb-6 text-gray-900">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae explicabo. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem totam rem aperiam, eaque ipsa quae explicabo.
          </p>
          <hr className="mb-5 border-gray-300" />
        </div>
      </div>
      <div className="w-1/2 max-w-[420px] min-w-[400px] aspect-square border-[8px] border-slate-50 rounded-full absolute z-0 left-20 top-64 " />
    </div>
  );
}
