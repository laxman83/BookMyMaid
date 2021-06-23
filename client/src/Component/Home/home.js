import React, { Component } from "react";
import Cards from "../Card/Card";
import HeroSection from "../HeroSection/HeroSection";

import Footer from "../Footer/Footer";
import UserService from "../../services/userServices";
import { Card } from "react-bootstrap";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <Cards />
        <br />

        <Footer />
      </div>
    );
  }
}
