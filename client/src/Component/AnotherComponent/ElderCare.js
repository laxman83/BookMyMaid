import React from "react";
import { Col, Row, Container, Button, Card, Badge } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardItem from "../Card/CardItem";
import "./CSS/Style.css";

class ElderCare extends React.Component {
  nextPath(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <h1>Elder Care Service</h1>
          </Container>
        </Jumbotron>

        <Container fluid>
          <Card className="CardBack">
            <Row>
              <Col xs={12} md={8}>
                <Card>
                  <b>
                    <h1>Home Caregivers to Obtain Optimum Care </h1>
                  </b>
                  <br />
                  <p style={{ textAlign: "justify" }}>
                    Hiring a home nurse is a less expensive option than making
                    an extended stay in the hospitals. It will help elderly
                    patients to stay in their own home getting necessary care
                    from a home nurse. Nowadays, due to the increased number of
                    nuclear families, it becomes impossible to offer the care
                    and attention required by your dear and near ones.
                    <br />
                  </p>
                </Card>
              </Col>
              <Col xs={5} md={4}>
                <Card>
                  <img
                    src="https://imagevars.gulfnews.com/2017/8/9/1_16a083d05a0.2071330_503887315_16a083d05a0_large.jpg"
                    alt="Cleaning"
                  />
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => this.nextPath("/BookNow")}
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
                    At certain times, you may come across situations where you
                    might be unable to render a complete support for your family
                    member who necessitates attention for the prolonged period
                    of time, which could be because all the members in a family
                    go for work or they don’t comprehend the requirements of a
                    bed ridden person that one a medical professional can able
                    to understand. In such time, it is quite beneficial to hire
                    a home nurse.
                    <br />
                    We help you hire a professional nurse if you need a special
                    attention to any of your bed-ridden family who has just
                    returned from the hospital after a prolonged treatment or
                    want to look after your elderly father or mother. We help
                    you search for the reputed and expertise nurses who will
                    work as an in-home caregiver in your home, taking care of
                    your physically or mentally challenged member in your
                    family. The home nurses will deliver you a customized
                    bedside care for the patients and will remain as a great
                    companion for the patients.
                  </p>
                </Card>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    );
  }
}

export default ElderCare;
