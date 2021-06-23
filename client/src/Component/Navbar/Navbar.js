import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./Navbar.css";
import Submenu from "./Submenu/Submenu";
import AuthService from "../../services/authService";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.logOut = this.logOut.bind(this);
    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      click: false,
      setDropdown: false,
    };
  }
  nextPath(path) {
    this.props.history.push(path);
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
    window.localStorage.clear();
    AuthService.logout();
  }

  handleClick = () => {
    this.setState({
      click: true,
    });
  };
  closeMobileMenu = () => {
    this.setState({
      click: false,
    });
  };
  onMouseEnter = () => {
    if (window.innerWidth < 900) {
      this.setState({
        setDropdown: false,
      });
    } else {
      this.setState({
        setDropdown: true,
      });
    }
  };
  onMouseLeave = () => {
    if (window.innerWidth < 900) {
      this.setState({
        setDropdown: false,
      });
    } else {
      this.setState({
        setDropdown: false,
      });
    }
  };

  onHandleClick = () => {
    return this.props.history.push("/BookNow");
  };
  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
    return (
      <>
        <nav className="navbar">
          <Link to="/" className="navbar-logo" onClick={this.closeMobileMenu}>
            BookMyMaid
            <i className="fab fa-firstdraft" />
          </Link>
          <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={this.click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={this.closeMobileMenu}>
                Home
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
            >
              <Submenu />
            </li>
            <li className="nav-item">
              <Link
                to="/Application"
                className="nav-links"
                onClick={this.closeMobileMenu}
              >
                Job Apply
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ContactUs"
                className="nav-links"
                onClick={this.closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser ? (
              <nav className="navbar1">
                <li className="nav-item">
                  <Link to={"/profile"} className="p">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="p" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </nav>
            ) : (
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-links"
                  onClick={this.closeMobileMenu}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <div>
          <button
            aria-label="Feedback"
            type="submit"
            className="wpcs_tab_1343"
            onClick={() => this.nextPath("/Feedback")}
          >
            Feedback
          </button>
        </div>
        <div id="mybutton">
          <button
            type="submit"
            class="feedback"
            onClick={() => this.nextPath("/BookNow")}
          >
            Book Now
          </button>
        </div>
      </>
    );
  }
}

export default withRouter(Navbar);
