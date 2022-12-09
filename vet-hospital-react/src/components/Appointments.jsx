import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function deleteAppointment(id) {
  console.log(id);
  if (id != null) {
    fetch("https://localhost:7162/appointment?id=" + id, {
      method: "DELETE",
    }).then(() => window.location.reload(false));
  }
}

class AppointmentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    fetch("https://localhost:7162/appointment", {
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
        <Link className="btn btn-secondary mt-3 mb-5" to="/create-appointment">
          New Appointment
        </Link>
        <Row className="d-flex justify-content-evenly">
          {this.state.data == null ? (
            <></>
          ) : (
            this.state.data.map((appointment) => (
              <Card className="mb-2" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>
                    {appointment.patient.ownerLastname}'s{" "}
                    {appointment.patient.type}
                  </Card.Title>
                  Date: {appointment.date}
                  <br />
                  Time: {appointment.time}
                  <br />
                  <Link
                    className="btn btn-secondary me-2"
                    to={{
                      pathname:
                        "/update-appointment/" + appointment.appointment_ID,
                    }}
                  >
                    Update
                  </Link>
                  <Button
                    variant="secondary"
                    onClick={(e) =>
                      deleteAppointment(appointment.appointment_ID)
                    }
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

export default AppointmentsPage;
