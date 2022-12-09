import React, { Component } from "react";
import { Link } from "react-router-dom";

class IndexPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="center d-flex justify-content-around mt-5">
        <Link className="btn btn-secondary custom-button" to="/patients">
          Patients
        </Link>
        <Link className="btn btn-secondary custom-button" to="/appointments">
          Appointments
        </Link>
      </div>
    );
  }
}

export default IndexPage;
