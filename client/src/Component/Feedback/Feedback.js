import React from "react";
import "./feedback.css";
import feedbackService from "../../services/feedbackService";
class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
    };
  }
  handleInputValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "field must be required";
    }
    //phone
    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "fields must be required";
    }
    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "field must be required";
    }
    this.setState({ errors: errors });
    return formIsValid;
  }
  async feedbackSubmit(e) {
    e.preventDefault();

    if (this.handleInputValidation()) {
      const userResponse = await feedbackService.create(this.state.fields);
      console.log("User response", userResponse);
      if (userResponse.status === 200) {
        alert("Thank you for given a feedback.");
        this.handleReset();
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
      <div class="wrapper">
        <h2>Feedback Form</h2>

        <form id="myform" onSubmit={this.feedbackSubmit.bind(this)}>
          <div class="input_field">
            <input
              type="text"
              placeholder="Name"
              id="name"
              onChange={this.handleChange.bind(this, "name")}
              value={this.state.fields["name"]}
            />
            <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
            <br />
          </div>

          <div class="input_field">
            <input
              type="text"
              placeholder="Phone"
              id="phone"
              onChange={this.handleChange.bind(this, "phone")}
              value={this.state.fields["phone"]}
            />
            <span style={{ color: "red" }}>{this.state.errors["phone"]}</span>
            <br />
          </div>
          <div class="input_field">
            <input
              type="text"
              placeholder="Email"
              id="email"
              onChange={this.handleChange.bind(this, "email")}
              value={this.state.fields["email"]}
            />
            <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
            <br />
          </div>
          <div class="input_field">
            <textarea
              placeholder="Your Feedback"
              id="feedback"
              onChange={this.handleChange.bind(this, "feedback")}
              value={this.state.fields["feedback"]}
            />
          </div>
          <div class="btn">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Feedback;
