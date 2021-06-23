import React, { useState, useEffect } from "react";
import "./style.css";
import { withRouter, useHistory } from "react-router-dom";
import { Col, Row, Jumbotron, Card } from "react-bootstrap";
import formDataService from "../../services/formdata";
import "reactjs-popup/dist/index.css";
const Table = () => {
  const [Maid, setMaid] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await formDataService.getAll();

    console.log("response", response.data);

    setMaid(response.data);
  };

  const findData = async (id) => {
    try {
      const responseData = await formDataService.getUser(id);
      console.log("data ", responseData.data);
      const data = responseData.data;
      console.log(data.firstname);
      if (responseData) {
        setIsOpen(!isOpen);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const renderHeader = () => {
    let headerElement = [
      "id",
      "firstname",
      "lastname",
      "email",
      "phone",
      "details",
      "operation",
    ];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderBody = () => {
    return (
      Maid &&
      Maid.map(({ id, firstname, lastname, email, phone, imgUrl, work }) => {
        let img = imgUrl.split("c/")[1];

        console.log("image url", img);
        return (
          // <tr key={id}>
          //   <td>{id}</td>
          //   <td>{firstname}</td>
          //   <td>{lastname}</td>
          //   <td>{email}</td>
          //   <td>{phone}</td>
          //   <td className="opration">
          //     <button
          //       className="button"
          //       data-toggle="modal"
          //       data-target="#exampleModal"
          //       onClick={() => findData(id)}
          //     >
          //       Details
          //     </button>
          //   </td>
          //   <td className="opration">
          //     <button
          //       className="button"
          //       data-toggle="modal"
          //       data-target="#exampleModal"
          //       onClick={() => findData(id)}
          //     >
          //       Book
          //     </button>
          //   </td>
          // </tr>

          <div>
            <Card
              style={{ height: "200px", width: "600px", marginTop: "-5px" }}
            >
              <Row>
                <Col sm={1}>
                  <img
                    src={img}
                    alt="name"
                    style={{ height: "150px", width: "150px" }}
                  />
                </Col>
                <Col sm={11}>
                  <div
                    style={{
                      display: "flex-start",
                      justifyContent: "center",
                      alignItems: "right",
                    }}
                  >
                    <b>
                      Name:{firstname}
                      &nbsp;
                      {lastname}
                    </b>
                  </div>
                  <div
                    style={{
                      display: "flex-start",
                      justifyContent: "center",
                      alignItems: "right",
                    }}
                  >
                    <b>Email:{email}</b>
                  </div>
                  <div
                    style={{
                      display: "flex-start",
                      justifyContent: "center",
                      alignItems: "right",
                    }}
                  >
                    <b>Phone:{phone}</b>
                  </div>
                  <div
                    style={{
                      display: "flex-start",
                      justifyContent: "center",
                      alignItems: "right",
                    }}
                  >
                    <b>Work:{work}</b>
                  </div>

                  <div style={{ marginLeft: "390px", fontSize: "20px" }}>
                    {" "}
                    <button
                      className="button"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      onClick={() => history.push("/Book")}
                    >
                      Book
                    </button>
                  </div>
                </Col>
              </Row>
            </Card>
          </div>
        );
      })
    );
  };

  return (
    <div>
      {/* <Card>
        <h1 id="title">Maid</h1>
        <table id="employee">
          <thead>
            <tr>{renderHeader()}</tr>
          </thead>
          <tbody>{renderBody()}</tbody>
        </table>
      </Card> */}

      <Jumbotron> {renderBody()}</Jumbotron>
    </div>
  );
};

export default withRouter(Table);
