import React, {useEffect, useState} from "react";
import { Button, Form, Container, Modal, Row, Col, Card } from "react-bootstrap";

import { FaPlus } from "react-icons/fa";


const Expense_Details=()=>{
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);

  };
  const handleShow = () => {
    // setEdit(false);
    setShow(true);
    // setNewVehicle(initCurrentVehicle);
  };
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
                {/* {editing === true ? ( */}
                  {/* <Modal.Title>Edit Vehicle</Modal.Title> */}
                {/* ) : ( */}
                  <Modal.Title>Add Vehicle</Modal.Title>
                {/* )} */}
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
                  <Form.Label> Toll Charge</Form.Label>
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
                    placeholder="Toll Charge"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label> Any Other Charges</Form.Label>
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
                    placeholder="Any Other Charges"
                  />
                </Form.Group>
               
                </div>
                   <div className="col-md-4">
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label> Driver Name</Form.Label>
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
                    placeholder="Driver Name"
                  />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>RTO Fines</Form.Label>
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
                    placeholder="RTO Fines"
                  />
                </Form.Group>
                
               
                </div>
                <div className="col-md-4">
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label> FastTag</Form.Label>
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
                    placeholder="FastTag"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label> Private Toll Charges</Form.Label>
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
                    placeholder="Private Toll Chargesr"
                  />
                </Form.Group>
               
               
                
               
                 </div>
                </div>
               
                {/* newVehicle.vehicle_fuel_type === "EV" ? ( */}
                 
                {/* ) : ( */}

                {/* )} */}
                
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

export default Expense_Details;