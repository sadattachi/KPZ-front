import React, { Component } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

class UpdatePatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      ownerLastname: "",
      birthDate: "",
      diagnosis: "",
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

  updatePatient() {
    const { navigate } = this.props;

    fetch(
      "https://localhost:7162/patient?id=" + window.location.pathname.slice(16),
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          type: this.state.type,
          ownerLastname: this.state.ownerLastname,
          birthDate: this.state.birthDate,
          diagnosis: this.state.diagnosis,
        }),
      }
    ).then((res) => {
      navigate("/patients");
      window.location.reload(false);
    });
  }
  render() {
    return (
      <Form className="p-2 w-25">
        <FormControl
          id="type"
          name="type"
          placeholder="Type"
          value={this.state.type}
          className="mb-2"
          onChange={this.handleInputChange}
        />
        <FormControl
          id="ownerLastname"
          name="ownerLastname"
          placeholder="Owner Lastname"
          value={this.state.ownerLastname}
          className="mb-2"
          onChange={this.handleInputChange}
        />
        <FormControl
          id="birthDate"
          name="birthDate"
          placeholder="Birth Date"
          value={this.state.birthDate}
          className="mb-2"
          onChange={this.handleInputChange}
        />
        <FormControl
          id="diagnosis"
          name="diagnosis"
          placeholder="Diagnosis"
          value={this.state.diagnosis}
          className="mb-2"
          onChange={this.handleInputChange}
        />
        <Button variant="outline-success" onClick={() => this.updatePatient()}>
          Update
        </Button>
      </Form>
    );
  }
}

export default function (props) {
  const navigate = useNavigate();

  return <UpdatePatient navigate={navigate} />;
}
