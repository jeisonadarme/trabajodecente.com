import React from "react";

const InfoComponent = () => {
  return (
    <>
      <section className="content-section bg-light" id="about">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2>¿Qué es trabajodecente.com?</h2>
              <p className="lead mb-5">
                Es la primera página web de asesoría jurídico legal en Derecho
                Laboral Colombiano que se enfoca en atender las situaciones de
                sus visitantes con el fin de propender en favor estos por el
                reconocimiento de un trabajo decente ante la creciente
                precarización de las condiciones en las que se desarrollan los
                trabajos en la actualidad a causa del fenómeno mundial de la{" "}
                <i>On Demand Economy</i>, también denominada en términos amplios
                como:
                <i>Economía Colaborativa o Sharing Economy.</i>
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
                  proporciona su principal fuente de ingresos? <br /> Sin
                  embargo, aunque usted se esfuerza y siempre busca las cinco
                  estrellas, lo ganado no es suficiente para ser cotizante en el
                  sistema de seguridad social? ¿No cuenta con más protección que
                  el seguro obligatorio del vehículo o motocicleta (SOAT)
                  porque, sino hay la posibilidad de cotizar a pensiones
                  (Colpensiones o AFP) y realizar los aportes a salud (EPS),
                  mucho menos alcanza para pagar una aseguradora de riesgos
                  profesionales (ARL)? Estas y otras circunstancias que usted
                  vive son las que nos hacen reflexionar si usted goza de un
                  trabajo decente, a fin de buscar reconocimiento.
                  <br />
                  Trabajo decente es un concepto asumido por la Organización
                  Internacional del Trabajo (OIT) como un principio superior en
                  la declaración de Filadelfia de 1944.
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
