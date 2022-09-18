import React from "react";
import { Col, Row, Container, Button, Card, Badge } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardItem from "../Card/CardItem";
import "./CSS/Style.css";
import AuthService from "../../services/authService";

class WardBoy extends React.Component {
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
            <h1>WardBoy</h1>
          </Container>
        </Jumbotron>

        <Container fluid>
          <Card className="CardBack">
            <Row>
              <Col xs={12} md={8}>
                <Card>
                  <b>
                    <h1>Role of Ward Boys in Hospitals </h1>
                  </b>
                  <p style={{ textAlign: "justify" }}>
                    Ward boys help related health professionals and other staff
                    in hospitals and healthcare establishments, taking care of
                    etc.
                    <br />
                    Ward boys hold the important role in the hospitals. They
                    perform myriad of tasks right from ensuring that a
                    sufficient supply of linen and clean clothing is available
                    for patients to assisting in patient restraint and
                    emergencies. Ward boys also help in maintaining the stocks
                    of non-medical supplies. They clean rooms like bathrooms,
                    utility rooms, showers and also clean the interior windows.
                  </p>
                </Card>
                <Row></Row>
              </Col>
              <Col xs={5} md={4}>
                <Card>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx7km1CcDv-ViieFg2pNoDf-aEyZk2cnduLw&usqp=CAU"
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
                    Ward boys are the specialized porters and theatre
                    attendants. A porter in hospitals transports and collects
                    medical supplies and equipment like surgical tools and clean
                    linen. They perform different cleaning duties as well as
                    physical works like shifting gas cylinders, furniture and
                    other heavy materials. You can hire from us a reliable
                    theatre attendant who will sterilize the instruments and
                    also check whether the machineries and operating theatre
                    lights are working properly. They shift patients from and to
                    operation theatres and may help with minor chores during the
                    operations. The ward assistants work in shifts including
                    weekend and night. In the large hospitals, ward assistants
                    work in a specific departments like maternity or
                    outpatients. In the smaller organizations, they may help in
                    many or all departments.
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

export default WardBoy;
