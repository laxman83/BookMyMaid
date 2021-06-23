import React from "react";

import "reactjs-popup/dist/index.css";
import ContactUsService from "../../services/contactus";
import "./ContactUs.css";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //username
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "field must be required";
    }
    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "field must be required";
    }
    //subject
    if (!fields["subject"]) {
      formIsValid = false;
      errors["subject"] = "field must be required";
    }
    //Message
    if (!fields["message"]) {
      formIsValid = false;
      errors["message"] = "Cannot be empty";
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  async contactSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      const userResponse = await ContactUsService.create(this.state.fields);
      console.log("User response", userResponse);
      if (userResponse.status === 200) {
        alert(
          "Thank you for contacting us. We are organizing to get in touch as soon as possible."
        );
      } else {
        alert("Something went wrong");
      }
    }
  }
  handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    this.setState({
      fields: {},
    });
  };
  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  render() {
    return (
      <div class="wrap">
        <form
          class="Registration-form"
          action=""
          onSubmit={this.contactSubmit.bind(this)}
        >
          <div class="form-header">
            <h3>
              <b>Contact Us</b>
              <b>
                <hr className="hr" />
              </b>
            </h3>
            Please drop us line if you've any query
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-input"
              placeholder="name"
              onChange={this.handleChange.bind(this, "name")}
              value={this.state.fields["name"]}
              required
            />
            <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
            <br />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-input"
              placeholder="email"
              onChange={this.handleChange.bind(this, "email")}
              value={this.state.fields["email"]}
              required
            />
            <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
            <br />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-input"
              placeholder="subject"
              onChange={this.handleChange.bind(this, "subject")}
              value={this.state.fields["subject"]}
              required
            />
            <span style={{ color: "red" }}>{this.state.errors["subject"]}</span>
            <br />
          </div>
          <div class="form-group">
            <textarea
              type="text-group"
              class="form-input"
              placeholder="message"
              onChange={this.handleChange.bind(this, "message")}
              value={this.state.fields["message"]}
            />
          </div>
          <div class="form-group">
            <button class="form-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactUs;
