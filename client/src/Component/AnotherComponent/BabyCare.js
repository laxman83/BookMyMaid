import React from "react";
import { Col, Row, Container, Button, Card, Badge } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardItem from "../Card/CardItem";
import AuthService from "../../services/authService";
import "./CSS/Style.css";

class BabyCare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: undefined,
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();
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
            <b>
              <h1 style={{ textDecorationLine: "underline" }}>Baby Care</h1>
            </b>
          </Container>
        </Jumbotron>

        <Container fluid>
          <Card className="CardBack">
            <b>
              <h1 style={{ textDecorationLine: "underline" }}>
                Seek Reliable Baby Care Services
              </h1>
            </b>
            <Row>
              <Col xs={12} md={8}>
                <Card>
                  <p style={{ textAlign: "justify" }}>
                    There is nothing which gives peace of mind to working moms
                    than having a more responsible baby care to look after their
                    kids with utmost care. In such scenarios, hiring a baby care
                    from a trusted service will provide great relief from the
                    awful feel of being away from the baby. You can check for
                    wonderful babysitters from our portal, who are extremely
                    willing, hold experience and certainly ready to work for
                    you. We will render you a list of all babysitters with
                    high-end employment history. You can also search for the
                    baby sitters services who are highly skilled in baby care.
                    They will make your children to get exposed to new talents
                    as well as concepts. We will source you the babysitters who
                    possess extraordinary child care skills.
                  </p>
                </Card>
              </Col>
              <Col xs={6} md={4}>
                <Card>
                  <img
                    src="https://timesofindia.indiatimes.com/thumb/msid-58658688,width-400,resizemode-4/58658688.jpg"
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
                  <p style={{ textAlign: "justify" }}>
                    Few moms would be keen to hire a babysitter who can speak
                    different language which she can teach to their children. Or
                    may check whether the baby sitter can sing or play music or
                    if she can expose their children to crafts and arts? We
                    obviously present you such additionally skilled babysitters
                    that you can choose from. No matter, the age of your
                    children, you can able to find out the most reliable baby
                    care professionals from us. We understand the sentiments and
                    emotions attached between a baby and a mom.
                  </p>{" "}
                </Card>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    );
  }
}

export default BabyCare;
