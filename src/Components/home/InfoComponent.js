import React from "react";

const InfoComponent = () => {
  return (
    <>
      <section className="content-section bg-light" id="about">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2>¿Qué es trabajodecente.com?</h2>
              <br />
              <p className="lead mb-5">
                Es la primera página web de asesoría jurídico legal en Colombia
                que se enfoca en el estudio de las nuevas formas de trabajo, la
                lucha contra precarización laboral y la informalidad que ha
                generado el fenómeno mundial de la llamada "Economía
                Colaborativa" o "Sharing Economy" y "las plataformas digitales"
                como Uber, Uber Eats, Rappi, Deliverloo, Domicilios.com y
                similares, en las relaciones de trabajo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="content-section bg-primary text-white text-center"
        id="services"
      >
        <div className="container text-center">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h2>¿Usted tiene un ‘trabajo decente’?</h2>
                <br />
                <p className="lead mb-5">
                  ¿Cuántos días trabaja a la semana? ¿Es en su propio negocio o
                  está vinculado a una plataforma que le dicta las instrucciones
                  que debe seguir? ¿De pronto se encarga de prestar un excelente
                  servicio como transportador de personas que solicitan el
                  servicio a través de una app móvil o quizá solo se encarga de
                  atender un gran número de órdenes de domicilios o en hacer
                  mandados especiales de otras personas que no tienen el tiempo
                  para realizarlos por sí mismos? ¿En ocasiones son cuatro, seis
                  ocho o más horas al servicio de una plataforma que a su vez le
                  proporciona su principal fuente de ingresos? <br /> <br />
                  Sin embargo, aunque usted se esfuerza y siempre busca las
                  cinco estrellas, lo ganado no es suficiente para ser cotizante
                  en el sistema de seguridad social? ¿No cuenta con más
                  protección que el seguro obligatorio del vehículo o
                  motocicleta (SOAT) porque, sino hay la posibilidad de cotizar
                  a pensiones (Colpensiones o AFP) y realizar los aportes a
                  salud (EPS), mucho menos alcanza para pagar una aseguradora de
                  riesgos profesionales (ARL)?
                  <br />
                  <br />
                  Estas y otras circunstancias que usted vive son las que nos
                  hacen reflexionar si usted goza de un trabajo decente, a fin
                  de buscar reconocimiento. Trabajo decente es un concepto
                  asumido por la Organización Internacional del Trabajo (OIT)
                  como un principio superior en la declaración de Filadelfia de
                  1944.
                </p>
                <button
                  className="btn btn-light btn-xl"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Realizar Consulta
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoComponent;
