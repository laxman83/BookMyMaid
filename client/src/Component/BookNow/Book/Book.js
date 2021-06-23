import React from "react";
import { Link } from "react-router-dom";
import maidBookService from "../../../services/maidBook";
import "reactjs-popup/dist/index.css";
import "./book.css";

class Book extends React.Component {
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

    if (!fields["name"]) {
      formIsValid = false;
      console.log("inside  fiels ", formIsValid);
      errors["name"] = "field must be required";
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      console.log("inside  fiels ", formIsValid);
      errors["email"] = "field must be required";
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
        console.log("inside  fiels ", formIsValid);
        errors["email"] = "Email is not valid";
      }
    }
    //Address
    if (!fields["address"]) {
      formIsValid = false;
      console.log("inside  fiels ", formIsValid);
      errors["address"] = "field must be required";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  async bookMaidSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      const userResponse = await maidBookService.maidBook(this.state.fields);
      console.log("User response", userResponse);
      if (userResponse.status === 200) {
        this.props.history.push("/home");
        alert("Maid has booked");
      } else {
        alert("Something went wrong");
      }
    }
  }
  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <div class="container">
        <form className="contactform" onSubmit={this.bookMaidSubmit.bind(this)}>
          <h2 class="text-center">Booking Details</h2>
          <div class="row jumbotron">
            <div class="col-sm-6 form-group">
              Name:{" "}
              <input
                type="text"
                class="form-control"
                name="name"
                id="name-f"
                placeholder="Enter your name."
                onChange={this.handleChange.bind(this, "name")}
                value={this.state.fields["name"]}
              />
              <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
              <br />
            </div>
            <div class="col-sm-6 form-group">
              Email
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="Enter your email."
                onChange={this.handleChange.bind(this, "email")}
                value={this.state.fields["email"]}
              />
              <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
              <br />
            </div>
            <div class="col-sm-6 form-group">
              Phone
              <input
                type="text"
                name="phone"
                class="form-control"
                id="tel"
                placeholder="Enter Your Contact Number."
                onChange={this.handleChange.bind(this, "phone")}
                value={this.state.fields["phone"]}
              />
              <span style={{ color: "red" }}>{this.state.errors["phone"]}</span>
              <br />
            </div>
            <div class="col-sm-6 form-group">
              Address
              <input
                type="address"
                class="form-control"
                name="address"
                id="address"
                placeholder="address"
                onChange={this.handleChange.bind(this, "address")}
                value={this.state.fields["address"]}
              />
              <span style={{ color: "red" }}>
                {this.state.errors["address"]}
              </span>
              <br />
            </div>
            <div class="col-sm-6 form-group">
              Date
              <input
                type="date"
                name="date"
                class="form-control"
                id="Date"
                placeholder=""
                onChange={this.handleChange.bind(this, "date")}
                value={this.state.fields["dob"]}
              />
              <span style={{ color: "red" }}>{this.state.errors["date"]}</span>
              <br />
            </div>
            <div class="col-sm-6 form-group">
              Session
              <select
                class="form-control custom-select browser-default"
                id="list"
                name="session"
                onChange={this.handleChange.bind(this, "session")}
                value={this.state.fields[this.value]}
              >
                <option value="select">Select session</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>
            </div>

            <div class="col-sm-12 form-group mb-0">
              <button class="btn btn-primary float-left">Submit</button>
            </div>
            <div
              class="col-sm-12 form-group mb-0"
              style={{ marginLeft: "110px", marginTop: "-38px" }}
            >
              <Link to="/BookNow">
                <button
                  class="btn btn-primary float-left"
                  style={{ backgroundColor: "#475564b3" }}
                >
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Book;
