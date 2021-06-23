import React from "react";
//import Form from "react-bootstrap/Form";
import "./forgot.css";
class Forgot extends React.Component {
  render() {
    return (
      <div class="wrap">
        <form class="forgot-form" action="">
          <div class="form-header">
            <h3>Forgat password</h3>
          </div>

          <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-input" placeholder="Email" />
          </div>
          <div class="form-group">
            <button class="form-button" type="submit">
              Forgat
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Forgot;
