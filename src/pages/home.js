import React from "react";

/** Components */
import HeaderComponent from "../Components/home/HeaderComponent";
import NavComponent from "../Components/home/NavComponent";
import InfoComponent from "../Components/home/InfoComponent";
import FooterComponent from "../Components/home/FooterComponent";
import ModalComponent from "../Components/home/ModalComponent";

const Home = () => {
  return (
    <>
      <NavComponent />
      <HeaderComponent />
      <InfoComponent />
      <FooterComponent />
      <ModalComponent />
    </>
  );
};

export default Home;

/**
 *
 */
