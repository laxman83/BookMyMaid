import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Component/Login/Login";
import Registration from "./Component/SignUp/Registration";
import Forgot from "./Component/Forgot/Forgot";
import AuthService from "./services/authService";
import Home from "./Component/Home/home";
import Profile from "./Component/Profile/profile";
import BoardUser from "./Component/AnotherComponent/boardUser";
import ContactUs from "./Component/ContactUs/ContactUs";
import Application from "./Component/JobApply/Application";
import Cleaning from "./Component/AnotherComponent/Cleaning";
import BabyCare from "./Component/AnotherComponent/BabyCare";
import Cooking from "./Component/AnotherComponent/Cooking";
import ElderCare from "./Component/AnotherComponent/ElderCare";
import WardBoy from "./Component/AnotherComponent/WardBoy";
import Navbar from "./Component/Navbar/Navbar";
import FileUpload from "./Component/CustomFileUploader/FileUploader";
import BookNow from "./Component/BookNow/BookNow";
import Book from "./Component/BookNow/Book/Book";
import Feedback from "./Component/Feedback/Feedback";
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
    localStorage.clear();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/sign-up" component={Registration} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/Application" component={Application} />
            <Route path="/ContactUs" component={ContactUs} />
            <Route path="/Cleaning" component={Cleaning} />
            <Route path="/BabyCare" component={BabyCare} />
            <Route path="/Cooking" component={Cooking} />
            <Route path="/ElderCare" component={ElderCare} />
            <Route path="/WardBoy" component={WardBoy} />
            <Route path="/FileUpload" component={FileUpload} />
            <Route path="/BookNow" component={BookNow} />
            <Route path="/Book" component={Book} />
            <Route path="/Feedback" component={Feedback} />
          </Switch>
        </div>
        <Router>
          <div className="auth-inner">
            <Switch>
              {/* <Route path="/sign-up" component={Registration} /> */}
              <Route path="/forgot" component={Forgot} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
