import React from 'react';

const Card = () => {
  return (
    <div className="block rounded-lg bg-white shadow-md dark:bg-surface-dark">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img
          className="rounded-t-lg"
          src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
          alt="Card cover"
        />
        <a href="#!">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </a>
      </div>
      <div className="p-6 text-surface dark:text-white">
        <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
        <p className="mb-4 text-base">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button
          type="button"
          className="inline-block rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg dark:shadow-black/30 dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-lg"
        >
          Button
        </button>
      </div>
    </div>
  );
};

export default Card;
