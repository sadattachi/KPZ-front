import React, { Component } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

class UpdateAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      time: "",
      patient_ID: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  updateAppointment() {
    const { navigate } = this.props;

    fetch(
      "https://localhost:7162/appointment?id=" +
        window.location.pathname.slice(20),
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          date: this.state.date,
          time: this.state.time,
          patient_ID: this.state.patient_ID,
        }),
      }
    ).then((res) => {
      navigate("/appointments");
      window.location.reload(false);
    });
  }
  render() {
    return (
      <Form className="p-2 w-25">
        <FormControl
          id="date"
          name="date"
          placeholder="Date"
          value={this.state.date}
          className="mb-2"
          onChange={this.handleInputChange}
        />
        <FormControl
          id="time"
          name="time"
          placeholder="Time"
          value={this.state.time}
          className="mb-2"
          onChange={this.handleInputChange}
        />
        <FormControl
          id="patient_ID"
          name="patient_ID"
          placeholder="Patient ID"
          value={this.state.patient_ID}
          className="mb-2"
          onChange={this.handleInputChange}
        />
        <Button
          variant="outline-success"
          onClick={() => this.updateAppointment()}
        >
          Update
        </Button>
      </Form>
    );
  }
}

export default function (props) {
  const navigate = useNavigate();

  return <UpdateAppointment navigate={navigate} />;
}
