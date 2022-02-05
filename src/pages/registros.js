import React, { useState, useEffect } from "react"; /* Firebase */
import firebase from "../FirestoreConfig";

const Registros = () => {
  /** Init db */
  let db = firebase.firestore();
  db.settings({});
  var [data, setData] = useState([]);

  useEffect(() => {
    var ref = db
      .collection("requests")
      .orderBy("date", "desc")
      .onSnapshot((response) => {
        //setData([...data, response.docs]);
        let temp = [];
        response.docs.forEach((docs) => {
          //console.log(docs._document.proto.fields);
          temp.push(docs._document.proto.fields);
        });

        temp = temp.sort(function (a, b) {
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          return new Date(b.date) - new Date(a.date);
        });
        setData(temp);
        console.log(temp);
      });
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Email</th>
            <th scope="col">Número</th>
            <th scope="col">Ganancias</th>
            <th scope="col">Horas al Día</th>
            <th scope="col">Ingreso Principal</th>
            <th scope="col">Plataformas</th>
            <th scope="col">Servicios</th>
            <th scope="col">Días de las semana</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.email.stringValue}>
                <td>{item.date.timestampValue}</td>
                <td>{item.sureName.stringValue}</td>
                <td>{item.lastName.stringValue}</td>
                <td>{item.email.stringValue}</td>
                <td>{item.phoneNumber.stringValue}</td>
                <td>{item.earnings.stringValue}</td>
                <td>{item.hoursDay.stringValue}</td>
                <td>{item.mainSourceOfIncome?.stringValue}</td>
                <td>{item.platforms.stringValue}</td>
                <td>{item.services.stringValue}</td>
                <td>{item.weeksDays?.stringValue}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Registros;
