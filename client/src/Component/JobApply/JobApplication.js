import React from "react";
import formDataService from "../../services/formdata";
import "./style.css";

class JobApplication extends React.Component {
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
    //Email
    if (!fields["message"]) {
      formIsValid = false;
      errors["message"] = "Cannot be empty";
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  async applicationSubmit(e) {
    e.preventDefault();
    console.log("inside  application");
    if (!this.handleValidation()) {
      console.log("inside  application if", e);
      const userResponse = await formDataService.create(this.state.fields);
      console.log("User response", userResponse);
      if (userResponse.status === 200) {
        alert("Application submitted");
      } else {
        alert("Something went wrong");
      }
    }
  }
  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    console.log("inside handle", fields);
    this.setState({ fields });
  }
  render() {
    return (
      <div class="wrap">
        <form
          class="Registration-form"
          method="post"
          enctype="multipart/form-data"
          onSubmit={this.applicationSubmit.bind(this)}
        >
          <div class="form-header">
            <h3>
              <b>Application</b>
              <b>
                <hr className="hr" />
              </b>
            </h3>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-input"
              placeholder="name"
              onChange={this.handleChange.bind(this, "name")}
              value={this.state.fields["name"]}
            />
            <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
            <br />
          </div>
          <div class="form-group">
            <textarea
              type="text"
              class="form-input"
              placeholder="address"
              onChange={this.handleChange.bind(this, "address")}
              value={this.state.fields["address"]}
            />
            <span style={{ color: "red" }}>
              {this.state.errors["username"]}
            </span>
            <br />
          </div>
          <div class="form-group">
            <input
              type="number"
              class="form-input"
              placeholder="mobileno"
              onChange={this.handleChange.bind(this, "mobileno")}
              value={this.state.fields["mobileno"]}
            />
            <span style={{ color: "red" }}>
              {this.state.errors["username"]}
            </span>
            <br />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-input"
              placeholder="email"
              onChange={this.handleChange.bind(this, "email")}
              value={this.state.fields["email"]}
            />
            <span style={{ color: "red" }}>
              {this.state.errors["username"]}
            </span>
            <br />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-input"
              placeholder="work"
              onChange={this.handleChange.bind(this, "work")}
              value={this.state.fields["work"]}
            />
            <span style={{ color: "red" }}>
              {this.state.errors["username"]}
            </span>
            <br />
          </div>
          <div class="form-group">
            <input
              type="file"
              name="file"
              class="form-input"
              onChange={this.handleChange.bind(this, "file")}
              value={this.state.fields["file"]}
            />
            <span style={{ color: "red" }}>
              {this.state.errors["username"]}
            </span>
            <br />
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

export default JobApplication;
