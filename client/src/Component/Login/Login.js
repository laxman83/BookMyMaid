import React from "react";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import AuthService from "../../services/authService";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    AuthService.login(this.state.username, this.state.password).then(
      (responseData) => {
        if(responseData.status === 400) {
          alert(responseData.message);
          this.setState({
            username: '',
            password: ''
          })
        }
        if(responseData.status === 200) {
          this.props.history.push("/home");
          window.location.reload();
        }
       
      },
      (error) => {
        console.log("Error: " + error)
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: resMessage,
        });
      }
    );
  }

  render() {
    return (
      <div class="wrap">
        <Form
          class="login-form"
          onSubmit={this.handleLogin}
          ref={(c) => {
            this.form = c;
          }}
        >
          <div class="form-header">
            <h3>Login</h3>
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-input"
              placeholder="username"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>

          <div class="form-group">
            <input
              type="password"
              class="form-input"
              placeholder="password"
              value={this.state.password}
              onChange={this.onChangePassword}
            />

            <p className="forgot-password text-left">
              <Link to="/forgot">Forgot password?</Link>
            </p>
          </div>

          <div class="form-group">
            <button class="form-button" type="submit">
              Login
            </button>
          </div>
          <hr />
          <div class="form-footer">
            Don't have an account?
            <Link to={"/sign-up"}>Sign Up</Link>
          </div>
        </Form>
      </div>
    );
  }
}

export default Login;
