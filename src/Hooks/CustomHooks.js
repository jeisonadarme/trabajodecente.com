import { useState } from "react";

const useSendForm = (callback) => {
  const [inputs, setImputs] = useState({});
  const [weekDays, setWeekDays] = useState(new Map());
  const [platforms, setPlatforms] = useState(new Map());
  const [services, setServices] = useState(new Map());

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const handleInputChange = (event) => {
    event.persist();
    if (
      (event.target.name === "sureName" || event.target.name === "lastName") &&
      event.target.value !== ""
    ) {
      if (!/^[A-Za-záéíóúÁÉÍÓÚ ]+$/.test(event.target.value)) {
        return;
      }
    }

    if (event.target.name === "email" && event.target.value !== "") {
      if (!/^[0-9A-Za-záéíóúÁÉÍÓÚ@.]+$/.test(event.target.value)) {
        return;
      }
    }

    if (event.target.name === "phoneNumber" && event.target.value !== "") {
      if (/\D/.test(event.target.value) || event.target.value.length > 10) {
        return;
      }
    }

    setImputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleWeekDaysCheckboxChange = (event) => {
    setWeekDays(weekDays.set(event.target.value, event.target.checked));
  };

  const handlePlatformsCheckboxChange = (event, showPlatformTextbox) => {
    if (event.target.name === "other") {
      showPlatformTextbox(event.target.checked);
    }

    setPlatforms(platforms.set(event.target.value, event.target.checked));
  };

  const handleServicesCheckboxChange = (event, showServiceTextbox) => {
    if (event.target.name === "other") {
      showServiceTextbox(event.target.checked);
    }

    setServices(services.set(event.target.value, event.target.checked));
  };

  const cleanState = () => {
    setImputs({});
    setWeekDays(new Map());
    setPlatforms(new Map());
    setServices(new Map());
  };

  return {
    handleSubmit,
    handleInputChange,
    handleWeekDaysCheckboxChange,
    handlePlatformsCheckboxChange,
    handleServicesCheckboxChange,
    inputs,
    weekDays,
    platforms,
    services,
    cleanState,
  };
};

export default useSendForm;
