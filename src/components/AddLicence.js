import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AddLicence = () => {
  return (
    <>
      <h5>Licence Details</h5>
      <button
        type="button"
        className="btn btn-primary mt-4"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Upload Documents
      </button>

      <div
        className="modal modal-dialog modal-dialog-scrollable"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Licence Details
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Container>
                <Row>
                  <Col lg={12}>
                    <label htmlFor="">Select category</label> <br />
                    <select name="" id="" className="form-control dropdown">
                      <option value="">Tobacoo</option>
                      <option value="">Hemp</option>
                    </select>
                  </Col>
                  <Col lg={12}>
                    <label htmlFor="">Licence Number</label> <br />
                    <input type="text" className="form-control" />
                  </Col>
                  <Col lg={12}>
                    <label htmlFor="">Expiary Number</label> <br />
                    <input type="text" className="form-control" />
                  </Col>
                  <Col className="mt-2">
                    <button className="btn btn-primary">Upload Document</button>
                  </Col>
                  <Col lg={12} className="mt-4">
                    <button className="btn btn-outline-primary me-5">
                      Cancel
                    </button>
                    <button className="btn btn-primary">Submit</button>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddLicence;
