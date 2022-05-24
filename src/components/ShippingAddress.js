import React from "react";
import { Row, Col } from "react-bootstrap";


const ShippingAddress = () => {
  return (
    <div className="mt-4">
      <form>
        <Row>
          <h5>Shipping Address</h5>
          <hr />
          <Col lg={12}>
            <label htmlFor="">Address Line 1</label> <br />
            <input
              type="text"
              className="form-control"
              placeholder="456 pilician street"
            />
          </Col>
          <Col lg={12}>
            <label htmlFor="">Address Line 2</label> <br />
            <input
              type="text"
              className="form-control"
              placeholder="4th main cross"
            />
          </Col>
          <Col lg={6}>
            <label htmlFor="">Zip code</label> <br />
            <input type="number" className="form-control" placeholder="1234" />
          </Col>
          <Col lg={6}>
            <label htmlFor="">City</label> <br />
            <input
              type="text"
              className="form-control"
              placeholder="Alltown Store LLC"
            />
          </Col>
          <Col lg={6}>
            <label htmlFor="">State</label> <br />
            <select name="" id="" className="form-control dropdown">
              <option value="">Romania</option>
              <option value="">London</option>
            </select>
          </Col>
          <Col lg={6}>
            <label htmlFor="">Country</label> <br />
            <input
              type="text"
              className="form-control"
              placeholder="United State of America"
            />
          </Col>
          <Col lg={12}>
            <label htmlFor="">Phone Number: </label> <br />
            <input
              type="number"
              className="form-control"
              placeholder=""
            />
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default ShippingAddress;
