import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import {FaPlus} from "react-icons/fa"

const Driver_Management=()=>{
    const[show,setShow]=useState(false);

    const handleClose =()=>{
        setShow(false);
    }
    const handleShow =()=>{
        setShow(true);
    }
    return(
        <>
          <div className="d-flex justify-content-between customCardBody">
              <div className="d-flex">
                <Button
                  className="mb-2"
                  variant="outline-secondary"
                  onClick={handleShow}
                  title="Add Driver"
                >Add Driver &nbsp;
                  <FaPlus />
                </Button>
              </div>
              <div>
                <input type="text" className="form-control" placeholder="Search..." aria-describedby="addon-wrapping"
                //  onChange={handleChange} 
                 />
              </div>
            </div>
            <Modal size="lg" show={show} ErrorShow onHide={handleClose} backdrop="static">
              <Form
            //    onSubmit={onSubmit}
               >
                <Modal.Header closeButton>
                  {/* {editing === true ? (
                    <Modal.Title>Edit Driver</Modal.Title>
                  ) : (
                    <Modal.Title>Add Driver</Modal.Title>
                  )} */}
                </Modal.Header>
                <Modal.Body>
                  <div className="row">
                    <p className="text-danger">*Fields are required</p>
                    <div className="col-md-6">
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label> First Name<span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="text"
                          tabIndex="1"
                          name="first_name"
                        //   value={newDriver.first_name}
                          required
                        //   onChange={(e) => {
                        //     setNewDriver({ ...newDriver, first_name: e.target.value })
                        //     if (e.target.name === "first_name") {
                        //       let val = e.target.value;

                        //       if (val === "" || !containsChars(val)) {
                        //         setError({
                        //           ...error,
                        //           first_name: `Enter a valid First Name`,
                        //         });

                        //         return;
                        //       }
                        //       setError({ ...error, [e.target.name]: "" });
                        //     }
                        //   }}
                          placeholder="Enter First Name"
                        />
                        {/* {error.first_name ? (
                          <p className="text-danger">{error.first_name}</p>
                        ) : (
                          "")} */}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicName">
                        {/* <p className="text-danger">*Fields are required</p> */}
                        <Form.Label> Middle Name<span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="text"
                          name="middle_name"
                          required
                          tabIndex="3"
                        //   value={newDriver.middle_name}
                        //   onChange={(e) => {
                        //     setNewDriver({ ...newDriver, middle_name: e.target.value })

                        //     if (e.target.name === "middle_name") {
                        //       let val = e.target.value;

                        //       if (val === "" || !containsChars(val)) {
                        //         setError({
                        //           ...error,
                        //           middle_name: `Enter a valid Middle Name`,
                        //         });

                        //         return;
                        //       }
                        //       setError({ ...error, [e.target.name]: "" });
                        //     }
                        //   }
                        //   }
                          placeholder="Enter Middle Name"
                        />
                        {/* {error.middle_name ? (
                          <p className="text-danger">{error.middle_name}</p>
                        ) : (
                          "")} */}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        {/* <p className="text-danger">*Fields are required</p> */}
                        <Form.Label> Last Name<span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="text"
                          name="last_name"
                          required
                          tabIndex="5"
                        //   value={newDriver.last_name}
                        //   onChange={(e) => {
                        //     setNewDriver({ ...newDriver, last_name: e.target.value })
                        //     if (e.target.name === "last_name") {
                        //       let val = e.target.value;

                        //       if (val === "" || !containsChars(val)) {
                        //         setError({
                        //           ...error,
                        //           last_name: `Enter a valid Last Name`,
                        //         });

                        //         return;
                        //       }
                        //       setError({ ...error, [e.target.name]: "" });
                        //     }
                        //   }
                        //   }
                          placeholder="Enter Last Name"
                        />
                        {/* {error.last_name ? (
                          <p className="text-danger">{error.last_name}</p>
                        ) : (
                          "")} */}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label> Primary Mobile Number<span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="tel"
                          name="primary_mobile_number"
                          required
                          tabIndex="7"
                        //   value={newDriver.primary_mobile_number}
                        //   onChange={(e) => {
                        //     setNewDriver({ ...newDriver, primary_mobile_number: e.target.value })
                        //     if (e.target.name === "primary_mobile_number") {
                        //       // validate the email.
                        //       let val = e.target.value;
                        //       console.log("val", val);
                        //       if (val === "" || !validatePhone(val)) {
                        //         setError({
                        //           ...error,
                        //           primary_mobile_number: `Enter a valid Mobile number`,
                        //         });

                        //         return;
                        //       }
                        //       setError({ ...error, [e.target.name]: "" });
                        //     }
                        //   }}
                          placeholder="Enter Primary Mobile Number"
                        />
                        {/* {error.primary_mobile_number ? (
                          <p className="text-danger">{error.primary_mobile_number}</p>
                        ) : (
                          ""
                        )} */}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Secondary Mobile Number<span className="text-danger"></span></Form.Label>
                        <Form.Control
                          type="tel"
                          name="secondary_mobile_number"
                          tabIndex="9"
                        //   value={newDriver.secondary_mobile_number}
                        //   onChange={(e) => {
                        //     setNewDriver({ ...newDriver, secondary_mobile_number: e.target.value })
                        //     if (e.target.name === "secondary_mobile_number") {

                        //       let val = e.target.value;
                        //       console.log("val", val);
                        //       if (val === "" || !validatePhone(val)) {
                        //         setError({
                        //           ...error,
                        //           secondary_mobile_number: `Enter a valid Mobile number`,
                        //         });

                        //         return;
                        //       }
                        //       setError({ ...error, [e.target.name]: "" });
                        //     }
                        //   }}
                          placeholder="Enter Secondary Mobile Number"
                        />
                        {/* {error.secondary_mobile_number ? (
                          <p className="text-danger">{error.secondary_mobile_number}</p>
                        ) : (
                          ""
                        )} */}
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Date of Birth<span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="date"
                          name="date of birth"
                          required
                          tabIndex="2"
                        //   value={newDriver.date_of_birth}
                        //   onChange={(e) => {
                        //     setNewDriver({ ...newDriver, date_of_birth: e.target.value })
                        //   }}
                          placeholder="Enter Date of Birth"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>License Number<span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="text"
                          name="license"
                          required
                          tabIndex="4"
                        //   value={newDriver.license_number}
                        //   onChange={(e) => {
                        //     setNewDriver({ ...newDriver, license_number: e.target.value })
                        //   }}
                          placeholder="Enter License Number"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address<span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="text"
                          name="address"
                          required
                          tabIndex="6"
                        //   value={newDriver.address}
                        //   onChange={(e) => {
                        //     setNewDriver({ ...newDriver, address: e.target.value })
                        //   }}
                          placeholder="Enter Address"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>City<span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="text"
                          name="city"
                          required
                          tabIndex="8"
                        //   value={newDriver.city}
                        //   onChange={(e) => {
                        //     setNewDriver({ ...newDriver, city: e.target.value })
                        //   }}
                          placeholder="Enter City"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>PIN Code<span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="number"
                          name="pin"
                          required
                          tabIndex="10"
                        //   value={newDriver.pin}
                        //   onChange={(e) => {
                        //     setNewDriver({ ...newDriver, pin: e.target.value })
                        //     if (e.target.name === "pin") {
                        //       // validate the email.
                        //       let val = e.target.value;

                        //       if (val === "" || !validatePin(val)) {
                        //         setError({ ...error, pin: `Enter a valid Pin` });

                        //         return;
                        //       }
                        //       setError({ ...error, [e.target.name]: "" });
                        //     }
                        //   }}
                          placeholder="Enter PIN Code"
                        />
                        {/* {error.pin ? (
                          <p className="text-danger">{error.pin}</p>
                        ) : (
                          ""
                        )} */}
                      </Form.Group>
                      {/* <Form.Label> Select Driver Status<span className="text-danger">*</span></Form.Label>
                      <Form.Check
                          type="switch"
                          id="enabled-custom-switch"
                          checked={isActive}
                          onChange={handleSwitchChange}
                          label="Driver Status"
                        /> */}
                      <Form.Group className="mb-3" controlId="formBasicProfession">
                        <Form.Label>Select Status<span className="text-danger">*</span></Form.Label>
                        <Form.Select aria-label="Default select example"
                        //   value={newDriver.status}
                          required
                          tabIndex="12"
                        //   onChange={(e) =>
                        //     setNewDriver({ ...newDriver, status: e.target.value })
                        //   }
                          >
                            <option value="">Select Status</option>
                          <option value="Active">Active</option>
                          <option value="In Active">In Active</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  {/* {editing === true ? (
                    <Button variant="primary" type="submit"
                    //  disabled={!(containsChars(newDriver.first_name) && containsChars(newDriver.last_name) && containsChars(newDriver.last_name)  && validatePhone(newDriver.primary_mobile_number) &&validatePhone(newDriver.primary_mobile_number) && validatePin(newDriver.pin))}
                    >
                      Update
                    </Button>
                  ) : ( */}
                    <Button
                      variant="primary"
                      //  disabled={!(containsChars(newDriver.first_name) && containsChars(newDriver.last_name) && containsChars(newDriver.last_name)  && validatePhone(newDriver.primary_mobile_number) &&validatePhone(newDriver.primary_mobile_number) && validatePin(newDriver.pin))}
                      type="submit"
                    >
                      Submit
                    </Button>
                  {/* )} */}
                </Modal.Footer>
              </Form>
            </Modal>
        </>
    );
}

export default Driver_Management;