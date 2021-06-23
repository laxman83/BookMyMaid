import React from "react";
import { Col, Row, Container, Button, Card, Badge } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardItem from "../Card/CardItem";
import "./CSS/Style.css";

class Cleaning extends React.Component {
  nextPath(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <div>
        <Jumbotron style={{ height: "120" }}>
          <Container>
            <h1>Cleaning</h1>
          </Container>
        </Jumbotron>

        <Container fluid>
          <Card className="CardBack">
            <Row>
              <Col xs={12} md={8}>
                <Card>
                  <b>
                    <h1>Housekeeping By Hiring Book My Maids</h1>
                  </b>
                  The ambience of your workplace reveals out the attitude of the
                  organization. With a good interior, you can boost the
                  reputation and image of your company. With our House Keeping
                  Services in Mumbai, your company feels and looks clean, tidy
                  and fresh. Since the establishment of our company in Mumbai,
                  we have been providing commercial house cleaning services to
                  the variety of businesses. Today, we have a lot of customers
                  in Mumbai who have been enjoying housekeeping services at
                  competitive prices.
                </Card>
              </Col>
              <Col xs={6} md={4}>
                <Card>
                  <img
                    src="https://3.imimg.com/data3/LA/YB/MY-8999223/maid-placement-services-500x500.jpg"
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
                  <h3 style={{ textAlign: "left" }}>
                    <b>WHAT OUR CLEANING SERVICES INCLUDE?</b>
                  </h3>
                  <br />
                  <ul>
                    <b>
                      <li>COMMERCIAL HOUSEKEEPING</li>

                      <li> DAILY OFFICE CLEANING</li>

                      <li>CARPET CLEANING</li>

                      <li> WASHROOM DEEP CLEANING</li>
                    </b>
                  </ul>
                  <ul>
                    <li>
                      We have launched our services for offices, factories,
                      companies and industrial sectors. Our team of housekeepers
                      strive themselves to ensure 100% satisfaction and promise
                      to maintain your office premises sparkling and clean.
                    </li>
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

export default Cleaning;
