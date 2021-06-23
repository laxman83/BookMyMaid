import React from "react";
import "./index.css";
import UploadService from "../../services/fileUploadService";
import formDataService from "../../services/formdata";
import { Link } from "react-router-dom";
class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
      currentFile: undefined,
      previewImage: undefined,
      progress: 0,
      message: "",
      userId: undefined,
      imageInfos: [],
    };
  }

  handleClick = () => {
    this.setState({ portfolioActive: !this.state.login });
  };

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["firstname"]) {
      formIsValid = false;
      console.log("inside  fiels ", formIsValid);
      errors["firstname"] = "field must be required";
    }

    if (typeof fields["firstname"] !== "undefined") {
      if (!fields["firstname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        console.log("inside  fiels ", formIsValid);
        errors["firstname"] = "Only letters";
      }
    }

    //last Name
    if (!fields["lastname"]) {
      formIsValid = false;
      console.log("inside  fiels ", formIsValid);
      errors["lastname"] = "field must be required";
    }

    if (typeof fields["lastname"] !== "undefined") {
      if (!fields["lastname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        console.log("inside  fiels ", formIsValid);
        errors["lastname"] = "Only letters";
      }
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

    //DOB
    if (!fields["dob"]) {
      formIsValid = false;
      console.log("inside  fiels ", formIsValid);
      errors["dob"] = "field must be required";
    }
    //phone
    if (!fields["phone"]) {
      formIsValid = false;
      console.log("inside  fiels ", formIsValid);
      errors["phone"] = "field must be required";
    }

    if (typeof fields["phone"] !== "undefined") {
      if (!fields["phone"].match(/^[0-9]+$/)) {
        formIsValid = false;
        console.log("inside  fiels ", formIsValid);
        errors["lastname"] = "Only numbers";
      }
    }
    //uid
    if (!fields["uid"]) {
      formIsValid = false;
      console.log("inside  fiels ", formIsValid);
      errors["udi"] = "field must be required";
    }

    if (typeof fields["uid"] !== "undefined") {
      if (!fields["phone"].match(/^[0-9]+$/)) {
        formIsValid = false;
        console.log("inside  fiels ", formIsValid);
        errors["uid"] = "Only numbers";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  selectFile(event) {
    this.setState({
      currentFile: event.target.files[0],
      previewImage: URL.createObjectURL(event.target.files[0]),
      progress: 0,
      message: "",
    });
  }

  async applicationSubmit(e) {
    e.preventDefault();
    try {
      if (this.handleValidation()) {
        const userResponse = await formDataService.create(this.state.fields);
        if (userResponse) {
          this.setState({ userId: userResponse.data.data.id });
          const uploadResponse = await UploadService.upload(
            this.state.currentFile,
            this.state.userId
          );
          alert("Application submitted successfully");
          if (!uploadResponse) return alert("something went wrong");
          this.setState({
            message: uploadResponse.data.message,
          });
          return UploadService.getFiles();
        }
      }
    } catch (err) {
      console.error("user adding error ", err);
      this.setState({
        progress: 0,
        message: "Could not upload the image!",
        currentFile: undefined,
      });
    }
  }
  handleReset = () => {
    console.log("Inside hadleReset ");
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
    console.log("fields", fields[field]);
    this.setState({ fields });
  }

  render() {
    return (
      <div class="container">
        <form
          className="contactform"
          onSubmit={this.applicationSubmit.bind(this)}
        >
          <h2 class="text-center">Join Our Maid Network</h2>
          <div class="row jumbotron">
            <div class="col-sm-6 form-group">
              First Name:{" "}
              <input
                type="text"
                class="form-control"
                name="firstname"
                id="name-f"
                placeholder="Enter your first name."
                onChange={this.handleChange.bind(this, "firstname")}
                value={this.state.fields["firstname"]}
              />
              <span style={{ color: "red" }}>
                {this.state.errors["firstname"]}
              </span>
              <br />
            </div>
            <div class="col-sm-6 form-group">
              Last name
              <input
                type="text"
                class="form-control"
                name="lastname"
                id="name-l"
                placeholder="Enter your last name."
                onChange={this.handleChange.bind(this, "lastname")}
                value={this.state.fields["lastname"]}
              />
              <span style={{ color: "red" }}>
                {this.state.errors["lastname"]}
              </span>
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
              Date Of Birth
              <input
                type="Date"
                name="dob"
                class="form-control"
                id="Date"
                placeholder=""
                onChange={this.handleChange.bind(this, "dob")}
                value={this.state.fields["dob"]}
              />
              <span style={{ color: "red" }}>{this.state.errors["dob"]}</span>
              <br />
            </div>
            <div class="col-sm-6 form-group">
              Gender
              <select
                id="sex"
                name="gender"
                class="form-control browser-default custom-select"
                onChange={this.handleChange.bind(this, "gender")}
                value={this.state.fields[this.value]}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unspesified">Unspecified</option>
              </select>
            </div>
            <div class="col-sm-6 form-group">
              Work Category
              <select
                class="form-control custom-select browser-default"
                id="list"
                name="work"
                onChange={this.handleChange.bind(this, "work")}
                value={this.state.fields[this.value]}
              >
                <option value="Cleaning">Cleaning</option>/
                <option value="Cooking">Cooking</option>/
                <option value="Elder Care">Elder Care</option>/
                <option value="Baby sitting">Baby sitting</option>/
                <option value="WardBoy">WardBoy</option>/
              </select>
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
              UID NO
              <input
                type="text"
                name="uid"
                class="form-control"
                placeholder="Enter Your Contact Number."
                onChange={this.handleChange.bind(this, "uid")}
                value={this.state.fields["uid"]}
              />
              <span style={{ color: "red" }}>{this.state.errors["uid"]}</span>
              <br />
            </div>
            <div style={{ paddingTop: "15px", paddingLeft: "10px" }}>
              <label className="btn btn-default p-0">
                <input
                  type="file"
                  accept="image/*"
                  class="form-control"
                  onChange={this.selectFile.bind(this)}
                />
              </label>
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

export default Application;
