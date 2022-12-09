import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function deletePatient(id) {
  console.log(id);
  if (id != null) {
    fetch("https://localhost:7162/patient?id=" + id, { method: "DELETE" }).then(
      () => window.location.reload(false)
    );
  }
}

class PatientsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    fetch("https://localhost:7162/patient", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ data: data });
      });
  }
  render() {
    return (
      <Container>
        <Link className="btn btn-secondary mt-3 mb-5" to="/create-patient">
          New Patient
        </Link>
        <Row className="d-flex justify-content-evenly">
          {this.state.data == null ? (
            <></>
          ) : (
            this.state.data.map((patient) => (
              <Card className="mb-2" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>
                    {patient.ownerLastname}'s {patient.type}
                  </Card.Title>
                  <Card.Subtitle className="mb-2">
                    Birth: {patient.birthDate}
                  </Card.Subtitle>
                  ID: {patient.patient_ID}
                  <br />
                  Diagnosis: {patient.diagnosis}
                  <br />
                  <Link
                    className="btn btn-secondary me-2"
                    to={{ pathname: "/update-patient/" + patient.patient_ID }}
                  >
                    Update
                  </Link>
                  <Button
                    variant="secondary"
                    onClick={(e) => deletePatient(patient.patient_ID)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            ))
          )}
        </Row>
      </Container>
    );
  }
}

export default PatientsPage;
