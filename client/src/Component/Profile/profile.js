import { Component } from "react";
import AuthService from "../../services/authService";
import "./profile.css";
export default class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: AuthService.getCurrentUser(),
    };
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="container">
        <div class="container h-100">
          <div class="row h-100 align-items-center justify-content-center">
            <div class="main">
              <div class="info">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDGQO5-8CPA9Hzl5_wLkAf6VtlMw52q7IwRw&usqp=CAU"
                  class="prof rounded-circle img-fluid"
                  alt=""
                />
                <h1>Profile</h1>
                <hr />
              </div>
              <div class="body">
                <ul class="fa-ul">
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-heart"></i>
                    </span>
                    <b> Username:</b>
                    {currentUser.username}
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-heart"></i>
                    </span>
                    <b> Email:</b>
                    {currentUser.email}
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-heart"></i>
                    </span>
                    <b> Authorities:</b>
                    {currentUser.roles}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
