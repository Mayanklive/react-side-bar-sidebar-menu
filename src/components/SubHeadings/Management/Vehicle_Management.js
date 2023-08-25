import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import {FaPlus} from "react-icons/fa"
import { useState } from "react";

const Vehicle_Management=()=>{
    const[show,setShow]=useState(false);

    const handleClose=()=>{
        setShow(false);
    }

    const handleShow=()=>{
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
                title="Add Vehicle"
              >
                Add Vehicle &nbsp;
                <FaPlus />
              </Button>
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Username"
                aria-describedby="addon-wrapping"
                // onChange={handleChange}
              />
            </div>
          </div>
         <Modal size="xl" dialogClassName="modal-120w" show={show} onHide={handleClose} backdrop="static">
            <Form 
            // onSubmit={onSubmit}
            >
              <Modal.Header closeButton>
                {/* {editing === true ? (
                  <Modal.Title>Edit Vehicle</Modal.Title>
                ) : (
                  <Modal.Title>Add Vehicle</Modal.Title>
                )} */}
              </Modal.Header>
              <Modal.Body>
              <div className="row">
                   <div className="col-md-4">
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>  Vehicle Registration Number</Form.Label>
                  <Form.Control
                    type="text"
                    // value={newVehicle.vehicle_reg_number}
                    required
                    tabIndex="1"
                    // onChange={(e) =>
                    //   setNewVehicle({
                    //     ...newVehicle,
                    //     vehicle_reg_number: e.target.value,
                    //   })
                    // }
                    placeholder="Vehicle Registration Number"
                  />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label> Chassis Number</Form.Label>
                  <Form.Control
                    type="text"
                    // value={newVehicle.vehicle_chassis_number}
                    required
                    tabIndex="4"
                    // onChange={(e) =>
                    //   setNewVehicle({
                    //     ...newVehicle,
                    //     vehicle_chassis_number: e.target.value,
                    //   })
                    // }
                    placeholder="Enter Chassis Number"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label> Model</Form.Label>
                  <Form.Control
                    type="text"
                    // value={newVehicle?.vehicle_model}
                    required
                    tabIndex="7"
                    // onChange={(e) =>
                    //   setNewVehicle({
                    //     ...newVehicle,
                    //     vehicle_model: e.target.value,
                    //   })
                    // }
                    placeholder="Enter Model"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Manufacture Year</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    className="bg-white"
                    // value={newVehicle?.vehicle_mfg_year}
                    required
                    tabIndex="10"
                    // onChange={(e) =>
                    //   setNewVehicle({
                    //     ...newVehicle,
                    //     vehicle_mfg_year: e.target.value,
                    //   })
                    // }
                  >
                    <option>Select Manufacture Year</option>
                    {/* {Array.from(new Array(34), (v, i) => (
                      <option key={i} value={year - i}>
                        {year - i}
                      </option>
                    ))} */}
                  </Form.Select>
                </Form.Group>
                </div>
                   <div className="col-md-4">
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label> Make</Form.Label>
                  <Form.Control
                    type="text"
                    // value={newVehicle.vehicle_make}
                    required
                    tabIndex="2"
                    // onChange={(e) =>
                    //   setNewVehicle({
                    //     ...newVehicle,
                    //     vehicle_make: e.target.value,
                    //   })
                    // }
                    placeholder="Enter Make"
                  />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Model Code</Form.Label>
                  <Form.Control
                    type="text"
                    // value={newVehicle.vehicle_model_code}
                    required
                    tabIndex="5"
                    // onChange={(e) =>
                    //   setNewVehicle({
                    //     ...newVehicle,
                    //     vehicle_model_code: e.target.value,
                    //   })
                    // }
                    placeholder="Enter Model Code"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Purchase Date</Form.Label>
                  <Form.Control
                    type="date"
                    // value={newVehicle?.vehicle_purchase_date}
                    required
                    tabIndex="8"
                    // onChange={(e) =>
                    //   setNewVehicle({
                    //     ...newVehicle,
                    //     vehicle_purchase_date: e.target.value,
                    //   })
                    // }
                    placeholder="Enter Purchase Date"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label> Crub Weight (Kg)</Form.Label>
                  <Form.Control
                    type=""
                    // value={newVehicle.vehicle_curb_weight}
                    required
                    tabIndex="11"
                    // onChange={(e) =>
                    //   setNewVehicle({
                    //     ...newVehicle,
                    //     vehicle_curb_weight: e.target.value,
                    //   })
                    // }
                    placeholder="Enter Crub Weight"
                  />
                </Form.Group>
                </div>
                <div className="col-md-4">
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label> Vin Number</Form.Label>
                  <Form.Control
                    type="text"
                    // value={newVehicle.vehicle_vin_number}
                    required
                    tabIndex="3"
                    // onChange={(e) =>
                    //   setNewVehicle({
                    //     ...newVehicle,
                    //     vehicle_vin_number: e.target.value,
                    //   })
                    // }
                    placeholder="Enter Vehicle Vin Number"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label> Engine Number</Form.Label>
                  <Form.Control
                    type="text"
                    tabIndex="6"
                    // value={newVehicle.vehicle_engine_number}
                    required
                    // onChange={(e) =>
                    //   setNewVehicle({
                    //     ...newVehicle,
                    //     vehicle_engine_number: e.target.value,
                    //   })
                    // }
                    placeholder="Enter Engine Number"
                  />
                </Form.Group>
               
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Dealer Details</Form.Label>
                  <Form.Control
                    type="text"
                    // value={newVehicle.vehicle_purchase_dealer_details}
                    required
                    tabIndex="9"
                    // onChange={(e) =>
                    //   setNewVehicle({
                    //     ...newVehicle,
                    //     vehicle_purchase_dealer_details: e.target.value,
                    //   })
                    // }
                    placeholder="Enter Dealer Details"
                  />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Gross Weight (Kg)</Form.Label>
                  <Form.Control
                  className="number-input" 
                    type=""
                    // value={newVehicle.vehicle_gross_weight}
                    required
                    tabIndex="12"
                    // onChange={(e) =>
                    //   setNewVehicle({
                    //     ...newVehicle,
                    //     vehicle_gross_weight: e.target.value,
                    //   })
                    // }
                    placeholder="Enter Gross Weight"
                  />
                </Form.Group>
                 </div>
                </div>
                <div className="row">
                   <div className="col-md-4">
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Fuel Type</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    // value={newVehicle.vehicle_fuel_type}
                    required
                    tabIndex="13"
                    // onChange={(e) =>
                    //   setNewVehicle({
                    //     ...newVehicle,
                    //     vehicle_fuel_type: e.target.value,
                    //   })
                    // }
                  >
                    <option>select Fuel Type</option>
                    <option value="PETROL">PETROL</option>
                    <option value="DIESEL">DIESEL</option>
                    <option value="CNG">CNG</option>
                    <option value="EV">EV</option>
                  </Form.Select>
                  {/* <Form.Control
                      type="text"
                      value={newVehicle.vehicle_fuel_type}
                      required
                      onChange={(e) =>
                        setNewVehicle({ ...newVehicle, vehicle_fuel_type: e.target.value })
                      }
                      placeholder="Enter FirstName"
                    /> */}
                </Form.Group>
                </div>
                </div>
                
                
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                {/* {editing === true ? (
                  <Button variant="primary" type="submit">
                    Update
                  </Button>
                ) : ( */}
                  <Button
                    variant="primary"
                    // disabled={!newVehicle.vehicle_reg_number}
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

export default Vehicle_Management;