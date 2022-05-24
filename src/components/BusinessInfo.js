import React from "react";
import { Row, Col } from "react-bootstrap";
// Imported useForm Hook from the react-hook-form package
import { useForm } from "react-hook-form";
import AddLicence from "./AddLicence";
import ShippingAddress from "./ShippingAddress";

  // Form validation is did with the help of react-hook-form library


const BusinessInfo = () => {
  // Thid useForm hook returns some object with the help of this we are making validation possible
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="container mt-5 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Add store</h2>
        <Row className="mt-3">
          <h5>Business Information</h5>
          <hr />
          <Col lg={6} className="mb-2">
            <label htmlFor="">Nick name</label> <br />
            <input
              type="text"
              className="form-control"
              {...register("name", { required: "Name is Required" })}
              onKeyUp={() => {
                trigger("name");
              }}
              placeholder="Alltown Store LLC"
            />
            {errors.name && (
              <small className="text-danger">{errors.name.message}</small>
            )}
          </Col>
          <Col lg={6} className="mb-2">
            <label htmlFor="">Legal name</label> <br />
            <input
              type="text"
              className="form-control"
              {...register("legal", { required: "Leagal Name is Required" })}
              onKeyUp={() => {
                trigger("legal");
              }}
              placeholder="Alltown Store LLC"
            />
            {errors.name && (
              <small className="text-danger">{errors.name.message}</small>
            )}
          </Col>
          <Col lg={6} className="mb-2">
            <label htmlFor="">Federal Tax ID</label> <br />
            <input type="text" className="form-control" placeholder="ABC1234" />
          </Col>
          <Col lg={6} className="mb-2">
            <label htmlFor="">Business Email</label> <br />
            <input type="text" className="form-control" />
          </Col>
        </Row>

        <Row>
          <Col lg={6} className="mb-2">
            <label htmlFor="">Federal Tax ID</label> <br />
            <input type="text" className="form-control" placeholder="ABC1234" />
          </Col>
          <Col lg={6} className="mb-2">
            <label htmlFor="">Business Email</label> <br />
            <input type="text" className="form-control" />
          </Col>
        </Row>

        {/* Rendering ShippingAddress component */}
        <ShippingAddress />
        <hr />
        {/* Renering AddLicence component */}
        <AddLicence />
        <hr />
        <Col className="d-flex flex-row-reverse">
          <button className="btn btn-outline-danger">Cancel</button>
          <button className="btn btn-primary me-3">Save</button>
        </Col>
      </form>
    </div>
  );
};

export default BusinessInfo;
