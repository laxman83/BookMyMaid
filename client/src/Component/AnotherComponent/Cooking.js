import React from "react";
import { Col, Row, Container, Button, Card, Badge } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardItem from "../Card/CardItem";
import "./CSS/Style.css";
import AuthService from "../../services/authService";

class Cooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: undefined,
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    console.log(user);
    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }
  nextPath(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <h1>Cooking</h1>
          </Container>
        </Jumbotron>

        <Container fluid>
          <Card className="CardBack">
            <Row>
              <Col xs={12} md={8}>
                <Card>
                  <b>
                    <h1>Available Home Cook Maid Services </h1>
                  </b>
                  <p style={{ textAlign: "justify" }}>
                    Are you in need of professional assistance in cooking? Or
                    want someone to cook for you? Then, you have come to the
                    right place.
                    <br />
                    The best part of our home cook service is that we maintain
                    your kitchen in the top hygienic condition and are efficient
                    enough to maintain a clean and well ordered facility. We
                    also have managing skills and so, we can supervise assistant
                    staff members in specific cases.
                  </p>
                </Card>
              </Col>
              <Col xs={5} md={4}>
                <Card>
                  <img
                    src="https://www.calcuttayellowpages.com/cimage34/111191domestic_helper03.jpg"
                    alt="Cleaning"
                  />
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => this.state.currentUser ? this.nextPath("/BookNow") 
                  : this.nextPath("/login")}
                  >
                    Book Now
                  </Button>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col>
                <Card className="listClass">
                  <h3 style={{ textAlign: "left" }}>
                    <b>WHAT OUR HOME COOK SERVICES INCLUDE?</b>
                  </h3>
                  <br />
                  <ul>
                    <b>
                      <li>OUR RANGE OF HOME COOK SERVICES INCLUDE</li>
                      <li> PREPARING MEALS AS PER YOUR REQUIREMENT</li>
                      <li>
                        MAINTAINING AN ORGANIZED, CLEAN, NEAT AND WELL STOCKED
                        KITCHEN
                      </li>
                      <li>ORGANIZING EVENTS AND DINNER PARTIERS</li>
                    </b>
                  </ul>
                </Card>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Cooking;
