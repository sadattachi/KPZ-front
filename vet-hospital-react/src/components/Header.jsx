import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

class NavComp extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <div className="ms-3 me-1 w-100 d-flex align-items-center">
          <Navbar.Brand href="/" className="me-auto p-2">
            Vet Hospital
          </Navbar.Brand>
          <Link className="btn btn-secondary me-2" to="/patients">
            Patients
          </Link>
          <Link className="btn btn-secondary me-2" to="/appointments">
            Appointments
          </Link>
        </div>
      </Navbar>
    );
  }
}

export default NavComp;
