import React from "react";

const HeaderComponent = () => {
  return (
    <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-1 text-white">
          ¿Necesitas asesoría jurídica en asuntos laborales?
        </h1>
        <h3 className="mb-5">
          <em></em>
        </h3>
        <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">
          Más Información
        </a>
      </div>
      <div className="overlay"></div>
    </header>
  );
};

export default HeaderComponent;
