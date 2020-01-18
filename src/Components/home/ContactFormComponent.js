import React, { useState } from "react";
import useSendForm from "../../Hooks/CustomHooks";
import CheckboxComponent from "../shared/CheckboxComponent";
import RadioButtonComponent from "../shared/RadioButtonComponent";
import { useAlert } from "react-alert";

/* checkboxs */
import WeekDays from "../../staticData/WeekDays";
import Platforms from "../../staticData/Platforms";
import Services from "../../staticData/Services";

/* radios */
import HoursADay from "../../staticData/HoursADay";
import Earnings from "../../staticData/Earnings";
import ExternalIncome from "../../staticData/ExternalIncome";

/* Firebase */
import firebase from "../../FirestoreConfig";

const ContactFormComponent = () => {
  /** Init db */
  let db = firebase.firestore();
  db.settings({});

  const alert = useAlert();
  var [buttonDisable, setButtonDisable] = useState(false);
  var [showPlatformTextbox, setShowPlatformTextbox] = useState(false);
  var [showServiceTextbox, setShowServiceTextbox] = useState(false);
  var [authorizationData, setAuthorizationData] = useState(false);

  var ref = db.collection("requests");

  const sendForm = () => {
    var request = {
      ...inputs,
      weeksDays: [...weekDays.keys()].join(),
      platforms: [...platforms.keys()].join(),
      services: [...services.keys()].join(),
      date: new Date()
    };

    //button loading
    setButtonDisable(true);

    if (isFormValid()) {
      ref
        .doc(inputs.email)
        .get()
        .then(doc => {
          if (doc.exists) {
            alert.error(
              "Ya se encuentra registrada una consulta con este email."
            );
            return;
          } else {
            ref
              .doc(inputs.email)
              .set(request)
              .then(() => {
                cleanState();
                setAuthorizationData(false);
                setButtonDisable(false);
                alert.success(
                  "Consulta registrada, en breve nos contactaremos con usted."
                );
              })
              .catch(err => {
                setButtonDisable(false);
                alert.error(
                  "Oh! ha ocurrido un error por favor intenta de nuevo mas tarde."
                );
              });
          }
        });
    } else {
      setButtonDisable(false);
    }
  };

  const isFormValid = () => {
    if (!inputs.sureName || inputs.sureName === "") {
      alert.error("Por favor ingrese su nombre(s).");
      return false;
    }

    if (!inputs.lastName || inputs.lastName === "") {
      alert.error("Por favor ingrese sus apellidos.");
      return false;
    }

    if (!inputs.email || inputs.email === "") {
      alert.error("Por favor ingrese su email.");
      return false;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs.email)) {
      alert.error("Por favor ingrese un email valido.");
      return false;
    }

    if (!inputs.phoneNumber || inputs.phoneNumber === "") {
      alert.error("Por favor ingrese su número de celular.");
      return false;
    }

    if (platforms.size === 0) {
      alert.error("Por favor seleccione las plataforma con las que trabaja.");
      return false;
    }

    if (weekDays.size === 0) {
      alert.error(
        "Por favor seleccione que días de la semana suele estar disponible."
      );
      return false;
    }

    if (!inputs.hoursDay || inputs.hoursDay === "") {
      alert.error("Por favor seleccione las horas que trabaja por día.");
      return false;
    }

    if (!inputs.earnings || inputs.earnings === "") {
      alert.error(
        "Por favor seleccione su ingreso diario promedio de ganancias."
      );
      return false;
    }

    if (services.size === 0) {
      alert.error("Por favor seleccione que tipo de sercios presta.");
      return false;
    }

    if (!inputs.mainSourceOfIncome || inputs.mainSourceOfIncome === "") {
      alert.error(
        "Por favor seleccione si la plataforma(s) es su principal fuente de ingreso."
      );
      return false;
    }

    if (!authorizationData) {
      alert.error("Debes aceptar el uso de tu información.");
      return false;
    }

    return true;
  };

  const {
    inputs,
    handleInputChange,
    handleSubmit,
    handleWeekDaysCheckboxChange,
    weekDays,
    handlePlatformsCheckboxChange,
    platforms,
    handleServicesCheckboxChange,
    services,
    cleanState
  } = useSendForm(sendForm);

  return (
    <form onSubmit={handleSubmit} className="modal-content">
      <div className="modal-body">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="form-contact contact_form">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Nombre(s)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="sureName"
                    name="sureName"
                    onChange={handleInputChange}
                    value={inputs.sureName || ""}
                    placeholder=""
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Apellidos</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    name="lastName"
                    onChange={handleInputChange}
                    value={inputs.lastName || ""}
                    placeholder=""
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    name="email"
                    onChange={handleInputChange}
                    value={inputs.email || ""}
                    placeholder=""
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Número Celular</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputEmail4"
                    name="phoneNumber"
                    onChange={handleInputChange}
                    value={inputs.phoneNumber || ""}
                    placeholder=""
                    maxLength={10}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Plataforma(s) para las que trabaja:</label>
                  {Platforms.map(item => {
                    return (
                      <div className="form-check" key={item.key}>
                        <CheckboxComponent
                          name={item.name}
                          checked={platforms.get(item.label)}
                          onChange={e =>
                            handlePlatformsCheckboxChange(
                              e,
                              setShowPlatformTextbox
                            )
                          }
                          value={item.label}
                        />
                        <label className="form-check-label">{item.label}</label>
                      </div>
                    );
                  })}

                  {showPlatformTextbox ? (
                    <input
                      type="text"
                      className="form-control"
                      id="otherPlaform"
                      name="otherPlaform"
                      onChange={handleInputChange}
                      value={inputs.otherPlaform || ""}
                      placeholder="¿Con que otra plataforma trabaja?"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group col-md-6">
                  <label>Días de la semana que suele estar disponible:</label>
                  {WeekDays.map(item => (
                    <div className="form-check" key={item.key}>
                      <CheckboxComponent
                        name={item.name}
                        checked={weekDays.get(item.label)}
                        onChange={handleWeekDaysCheckboxChange}
                        value={item.label}
                      />
                      <label className="form-check-label">{item.label}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Horas que trabaja por día:</label>
                  {HoursADay.map(item => (
                    <div className="custom-control custom-radio" key={item.key}>
                      <RadioButtonComponent
                        name="hoursDay"
                        onChange={handleInputChange}
                        id={item.name}
                        label={item.label}
                        checked={item.label === inputs.hoursDay}
                      />
                      <label className="form-check-label">{item.label}</label>
                    </div>
                  ))}
                </div>
                <div className="form-group col-md-6">
                  <label>Ingreso diario promedio de ganancias:</label>
                  {Earnings.map(item => (
                    <div className="custom-control custom-radio" key={item.key}>
                      <RadioButtonComponent
                        name="earnings"
                        onChange={handleInputChange}
                        id={item.name}
                        label={item.label}
                        checked={item.label === inputs.earnings}
                      />
                      <label className="form-check-label">{item.label}</label>
                    </div>
                  ))}
                  <label>Valores estimados en pesos colombianos.</label>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Qué tipo de servicios presta:</label>
                  {Services.map(item => (
                    <div className="form-check" key={item.key}>
                      <CheckboxComponent
                        name={item.name}
                        checked={services.get(item.label)}
                        onChange={e =>
                          handleServicesCheckboxChange(e, setShowServiceTextbox)
                        }
                        value={item.label}
                      />
                      <label className="form-check-label">{item.label}</label>
                    </div>
                  ))}

                  {showServiceTextbox ? (
                    <input
                      type="text"
                      className="form-control"
                      id="otherService"
                      name="otherService"
                      onChange={handleInputChange}
                      value={inputs.otherService || ""}
                      placeholder="¿Qué otro servicio presta?"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group col-md-6">
                  <label>
                    ¿Los ingresos obtenidos en la(s) plataforma(s) consituyen su
                    principal fuente de ingresos?
                  </label>
                  {ExternalIncome.map(item => (
                    <div className="custom-control custom-radio" key={item.key}>
                      <RadioButtonComponent
                        name="mainSourceOfIncome"
                        onChange={handleInputChange}
                        id={item.name}
                        label={item.label}
                        checked={item.label === inputs.mainSourceOfIncome}
                      />
                      <label className="form-check-label">{item.label}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <p className="termcondicions">
                    Con el suministro y envío de la información consignada,
                    incluidos mis datos personales y de contacto, autorizo de
                    manera libre y voluntaria para que el recolector de la
                    información almacene, use y analice dicha información para
                    los fines de asesoría legal, conforme a lo establecido en la
                    Ley 1266 de 2008 y 1581 de 2012.
                  </p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                      name="terms"
                      checked={authorizationData}
                      onChange={event =>
                        setAuthorizationData(event.target.checked)
                      }
                    />
                    <label className="form-check-label">
                      Autorizo el uso de mi informacíon.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
          disabled={buttonDisable}
        >
          Cancelar
        </button>
        <button type="submit" className="btn btn-primary">
          {!buttonDisable ? (
            "Enviar"
          ) : (
            <div
              className="spinner-border spinner-border-sm text-light"
              role="status"
            >
              <span className="sr-only">Enviando...</span>
            </div>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactFormComponent;
