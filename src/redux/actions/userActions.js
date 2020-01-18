import { SET_UNAUTEHNTICATED, LOADING_UI, SET_USER } from "../types";

/* Firebase */
import firebase from "../../FirestoreConfig";

export const loginUser = (userData, history) => dispatch => {
  dispatch({ type: LOADING_UI });
  firebase
    .auth()
    .signInWithEmailAndPassword(userData.email, userData.password)
    .then(snapshot => {
      console.log(snapshot);
      dispatch({
        type: SET_USER,
        payload: snapshot
      });
      history.push("/dashboard");
    })
    .catch(err => console.log(err));
};

export const logoutUser = () => dispatch => {
  firebase
    .auth()
    .signOut()
    .then(function() {
      dispatch({ type: SET_UNAUTEHNTICATED });
    })
    .catch(err => console.log(err));
};
