import React, { useState, useEffect, useMemo } from "react";
import "./style.css";
import { withRouter, useHistory } from "react-router-dom";
import { Col, Row, Jumbotron, Card  } from "react-bootstrap";
import Pagination from 'react-bootstrap/Pagination';
import formDataService from "../../services/formdata";
import "reactjs-popup/dist/index.css";
const Table = () => {
  const [Maid, setMaid] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  let PageSize = 10;
  const history = useHistory();
  useEffect(() => {
    getData();
  }, []);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return Maid.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  
  const getData = async () => {
    const response = await formDataService.getAll();
    setMaid(response.data);
  };

  
  const findData = async (id) => {
    try {
      console.log('findData',id)
      const responseData = await formDataService.getUser(id);
      const data = responseData.data;
      console.log(data.firstname);
      if (responseData) {
        setIsOpen(!isOpen);
      }
    } catch (err) {
      console.error(err);
    }
  };
const BookMaid = (id) => {
  // if(id){
  //   history.push("/Book")
  // }

}

  const renderHeader = () => {
    let headerElement = [
      "id",
      "firstname",
      "lastname",
      "email",
      "phone",
      "details",
      "Booking",
    ];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderBody = () => {
    return (
      Maid &&
      currentTableData.map(({ id, firstname, lastname, email, phone, imgUrl, work }) => {
        let img = imgUrl.split("c/")[1];

        console.log("image url", img);
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td className="opration">
              <button
                className="button"
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={() => findData(id)}
              >
                Details
              </button>
            </td>
            <td className="opration">
              <button
                className="button"
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={() => BookMaid(id)}
              >
                Book
              </button>
            </td>
          </tr>

    //       <div>
    //           <Row xs={1} md={2} className="g-4">
    //   {Maid.map((result, idx) => (
    //     <Col>
    //        <Card
    //           style={{ height: "200px", width: "600px", marginTop: "-5px" }}
    //         >
    //           <Row>
    //             <Col sm={1}>
    //               <img
    //                 src={img}
    //                 alt="name"
    //                 style={{ height: "150px", width: "150px" }}
    //               />
    //             </Col>
    //             <Col sm={11}>
    //               <div
    //                 style={{
    //                   display: "flex-start",
    //                   justifyContent: "center",
    //                   alignItems: "right",
    //                 }}
    //               >
    //                 <b>
    //                   Name:{result.firstname}
    //                   &nbsp;
    //                   {result.lastname}
    //                 </b>
    //               </div>
    //               <div
    //                 style={{
    //                   display: "flex-start",
    //                   justifyContent: "center",
    //                   alignItems: "right",
    //                 }}
    //               >
    //                 <b>Email:{result.email}</b>
    //               </div>
    //               <div
    //                 style={{
    //                   display: "flex-start",
    //                   justifyContent: "center",
    //                   alignItems: "right",
    //                 }}
    //               >
    //                 <b>Phone:{result.phone}</b>
    //               </div>
    //               <div
    //                 style={{
    //                   display: "flex-start",
    //                   justifyContent: "center",
    //                   alignItems: "right",
    //                 }}
    //               >
    //                 <b>Work:{result.work}</b>
    //               </div>

    //               <div style={{ marginLeft: "390px", fontSize: "20px" }}>
    //                 {" "}
    //                 <button
    //                   className="button"
    //                   data-toggle="modal"
    //                   data-target="#exampleModal"
    //                   onClick={() => history.push("/Book")}
    //                 >
    //                   Book
    //                 </button>
    //               </div>
    //             </Col>
    //           </Row>
    //         </Card>
    //     </Col>
    //   ))}
    // </Row>
    //         {/* <Card
    //           style={{ height: "200px", width: "600px", marginTop: "-5px" }}
    //         >
    //           <Row>
    //             <Col sm={1}>
    //               <img
    //                 src={img}
    //                 alt="name"
    //                 style={{ height: "150px", width: "150px" }}
    //               />
    //             </Col>
    //             <Col sm={11}>
    //               <div
    //                 style={{
    //                   display: "flex-start",
    //                   justifyContent: "center",
    //                   alignItems: "right",
    //                 }}
    //               >
    //                 <b>
    //                   Name:{firstname}
    //                   &nbsp;
    //                   {lastname}
    //                 </b>
    //               </div>
    //               <div
    //                 style={{
    //                   display: "flex-start",
    //                   justifyContent: "center",
    //                   alignItems: "right",
    //                 }}
    //               >
    //                 <b>Email:{email}</b>
    //               </div>
    //               <div
    //                 style={{
    //                   display: "flex-start",
    //                   justifyContent: "center",
    //                   alignItems: "right",
    //                 }}
    //               >
    //                 <b>Phone:{phone}</b>
    //               </div>
    //               <div
    //                 style={{
    //                   display: "flex-start",
    //                   justifyContent: "center",
    //                   alignItems: "right",
    //                 }}
    //               >
    //                 <b>Work:{work}</b>
    //               </div>

    //               <div style={{ marginLeft: "390px", fontSize: "20px" }}>
    //                 {" "}
    //                 <button
    //                   className="button"
    //                   data-toggle="modal"
    //                   data-target="#exampleModal"
    //                   onClick={() => history.push("/Book")}
    //                 >
    //                   Book
    //                 </button>
    //               </div>
    //             </Col>
    //           </Row>
    //         </Card> */}
    //       </div>
          
        );
      })
    );
  };

  return (
    <div>
      <Card>
        <h1 id="title">Maid</h1>
        <table id="employee">
          <thead>
            <tr>{renderHeader()}</tr>
          </thead>
          <tbody>{renderBody()}</tbody>
        </table>
        <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={currentTableData.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
      
      </Card>

      {/* <Jumbotron> {renderBody()}</Jumbotron> */}
    </div>
  );
};

export default withRouter(Table);
