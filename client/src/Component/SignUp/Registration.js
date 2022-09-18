import React from "react";
import { Link } from "react-router-dom";
import "./Registration.css";
import UserDataService from "../../services/userServices";

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false,
      fields: {},
      errors: {},
    };
  }

  handleClick = () => {
    this.setState({ portfolioActive: !this.state.login });
  };

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //username
    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "Cannot be empty";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["username"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  async contactSubmit(e) {
    console.log("contactSubmit called", this.handleValidation());
    e.preventDefault();
    if (this.handleValidation()) {
      const userResponse = await UserDataService.create(this.state.fields);
      console.log(userResponse.data)
      if (userResponse.data.status !==200) {
       
        alert(userResponse.data.message);
      }else{
        alert("User register successfully");
        return this.props.history.push("/login");
      } 
    } else {
      alert("Form has errors.");
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
            <h3>Sign Up</h3>
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-input"
              placeholder="username"
              onChange={this.handleChange.bind(this, "username")}
              value={this.state.fields["username"]}
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
              placeholder="email"
              onChange={this.handleChange.bind(this, "email")}
              value={this.state.fields["email"]}
            />
            <span style={{ color: "red" }}>
              {this.state.errors["email"]}
            </span>
            <br />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-input"
              placeholder="password"
              onChange={this.handleChange.bind(this, "password")}
              value={this.state.fields["password"]}
            />
            <span style={{ color: "red" }}>
              {this.state.errors["password"]}
            </span>
            <br />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-input"
              placeholder="cpassword"
              onChange={this.handleChange.bind(this, "cpassword")}
              value={this.state.fields["password"]}
            />
            <span style={{ color: "red" }}>
              {this.state.errors["cpassword"]}
            </span>
            <br />
          </div>
          <div class="form-group">
            <button class="form-button" type="submit">
              Sign up
            </button>
          </div>
          <div class="form-footer">
            already have an account?{" "}
            <Link to={"/login"} style={{}}>
              Sign-in
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Registration;
