import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./Index.jsx";
import PatientsPage from "./Patients.jsx";
import AppointmentsPage from "./Appointments.jsx";
import CreatePatient from "./patients/CreatePatient.jsx";
import UpdatePatient from "./patients/UpdatePatient.jsx";
import CreateAppointment from "./appointments/CreateAppointment.jsx";
import UpdateAppointment from "./appointments/UpdateAppointment.jsx";

const Main = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<IndexPage />}></Route>
        <Route exact path="/patients" element={<PatientsPage />}></Route>
        <Route
          exact
          path="/appointments"
          element={<AppointmentsPage />}
        ></Route>
        <Route exact path="/create-patient" element={<CreatePatient />}></Route>
        <Route
          exact
          path="/update-patient/:id"
          element={<UpdatePatient />}
        ></Route>
        <Route
          exact
          path="/create-appointment"
          element={<CreateAppointment />}
        ></Route>
        <Route
          exact
          path="/update-appointment/:id"
          element={<UpdateAppointment />}
        ></Route>
      </Routes>
    </>
  );
};

export default Main;
