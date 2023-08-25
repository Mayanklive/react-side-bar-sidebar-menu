import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal,Form } from "react-bootstrap";
import {FaPlus} from "react-icons/fa"

const User_Management=()=>{
    const [show, setShow] = useState(false);
    // const handleChange = (e) => {
    //     setsearchField(e.target.value);
    //   };
      const handleClose = () => {
        setShow(false);
        // setNewUser(initCurrentUser);
      };
      const handleShow = () => {
        // setError({
        //   middle_name: "",
        //   primary_mobile_number: "",
        //   firstName: "",
        //   lastName: "",
        //   secondary_mobile_number: "",
        //   pin: "",
        // });
        // setEdit(false);
        setShow(true);
        // setNewUser(initCurrentUser);
      };    

    return(
        <>
        <div className="d-flex justify-content-between customCardBody">
              <div className="d-flex">
                <Button
                  className="mb-2"
                  variant="outline-secondary"
                  onClick={handleShow}
                  title="Add User"
                >
                  Add User &nbsp;
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
                //   onChange={handleChange}
                />
              </div>
            </div>
            <Modal size="lg" show={show} onHide={handleClose} backdrop="static">
              <Form 
            //   onSubmit={onSubmit}
              >
                <Modal.Header closeButton>
                  {/* {editing === true ? (
                    <Modal.Title>Edit User</Modal.Title>
                  ) : ( */}
                    <Modal.Title>Add User</Modal.Title>
                  {/* )} */}
                </Modal.Header>
                <Modal.Body>
                  <p className="text-danger">*Fields are required</p>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>
                          {" "}
                          First Name <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          tabIndex="1"
                        //   value={newUser.first_name}
                          required
                        //   onChange={(e) => {
                        //     setNewUser({
                        //       ...newUser,
                        //       first_name: e.target.value,
                        //     });
                        //     if (e.target.name === "firstName") {
                        //       // validate the email.
                        //       let val = e.target.value;

                        //       if (val === "" || !containsChars(val)) {
                        //         setError({
                        //           ...error,
                        //           firstName: `Enter a valid First Name`,
                        //         });

                        //         return;
                        //       }
                        //       setError({ ...error, [e.target.name]: "" });
                        //     }
                        //   }}
                          placeholder="Enter First Name"
                        />
                        {/* {error.firstName ? (
                          <p className="text-danger">{error.firstName}</p>
                        ) : (
                          ""
                        )} */}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>
                          Mobile Number <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type=""
                          name="mobileNum"
                          tabIndex="3"
                          required
                        //   value={newUser.mobile_number}
                        //   onChange={(e) => {
                        //     setNewUser({
                        //       ...newUser,
                        //       mobile_number: e.target.value,
                        //     });
                        //     if (e.target.name === "mobileNum") {
                        //       // validate the email.
                        //       let val = e.target.value;
                        //       console.log("val", val);
                        //       console.log("line 132 val", newUser.password);
                        //       if (val === "" || !validatePhone(val)) {
                        //         setError({
                        //           ...error,
                        //           mobileNum: `Enter a valid Mobile number`,
                        //         });

                        //         return;
                        //       }
                        //       setError({ ...error, [e.target.name]: "" });
                        //     }
                        //   }}
                          placeholder="Enter Mobile Number"
                        />
                        {/* {error.mobileNum ? (
                          <p className="text-danger">{error.mobileNum}</p>
                        ) : (
                          ""
                        )} */}
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicProfession"
                      >
                        <Form.Label>
                          City <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          tabIndex="5"
                        //   value={newUser.city}
                        //   onChange={(e) =>
                        //     setNewUser({ ...newUser, city: e.target.value })
                        //   }
                          placeholder="Enter City"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicProfession"
                      >
                        <Form.Label>
                          Password <span className="text-danger">*</span>
                        </Form.Label>
                        <div className=" d-flex password-input">
                          <Form.Control
                            className="border-0"
                            type=
                            // {showPassword ? "text" : 
                            "password"
                        // }
                            name="password"
                            tabIndex="7"
                            // value={newUser.password}
                            // onChange={(e) => {
                            //   setNewUser({
                            //     ...newUser,
                            //     password: e.target.value,
                            //   });
                            //   if (e.target.name === "password") {
                            //     // validate the email.
                            //     let val = e.target.value;
                            //     console.log("val", val);
                            //     console.log("line 132 val", newUser.password);
                            //     if (val === "" || !validatePassword(val)) {
                            //       setError({
                            //         ...error,
                            //         password: `Passwords should have a minimum length of at least Five characters \n  Passwords should have a atleast 1 upper case Passwords should have atleast 1 number Passwords should have atleast 1 special character`,
                            //       });
                            //       console.log("pass1");

                            //       return;
                            //     }
                            //     setError({ ...error, [e.target.name]: "" });
                            //   }
                            // }}
                            placeholder="Enter Password"
                            required
                          />
                          <button
                            className="border-0"
                            // onClick={toggleShowPassword}
                          >
                            {/* {showPassword ? (
                              <i className="fas fa-eye-slash"></i>
                            ) : (
                              <i className="fas fa-eye"></i>
                            )} */}
                          </button>
                        </div>
                      </Form.Group>
                      {/* {error.password ? (
                        <div className="text-danger">
                          <h5 className="fw-bold pt-1">Weak Password!</h5>
                          <ul className="text-danger fw-bold">
                            <li>Use at least 5 character</li>
                            <li>Use upper and lower case character</li>
                            <li>Use one or more numbers</li>
                            <li>Use one or more special character</li>
                          </ul>
                        </div>
                      ) : (
                        ""
                      )} */}
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicProfession"
                      >
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          as="textarea"
                          type="textarea"
                          tabIndex="9"
                        //   value={newUser.address}
                        //   onChange={(e) =>
                        //     setNewUser({ ...newUser, address: e.target.value })
                        //   }
                          placeholder="Enter Address"
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>
                          {" "}
                          Last Name <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          name="lastName"
                          tabIndex="2"
                          type="text"
                        //   value={newUser.last_name}
                          required
                        //   onChange={(e) => {
                        //     setNewUser({
                        //       ...newUser,
                        //       last_name: e.target.value,
                        //     });
                        //     if (e.target.name === "lastName") {
                        //       // validate the email.
                        //       let val = e.target.value;

                        //       if (val === "" || !containsChars(val)) {
                        //         setError({
                        //           ...error,
                        //           lastName: `Enter a valid Last Name`,
                        //         });

                        //         return;
                        //       }
                        //       setError({ ...error, [e.target.name]: "" });
                        //     }
                        //   }}
                          placeholder="Enter Last Name"
                        />
                        {/* {error.lastName ? (
                          <p className="text-danger">{error.lastName}</p>
                        ) : (
                          ""
                        )} */}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Label>
                          Email-ID <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          tabIndex="4"
                        //   value={newUser.email}
                        //   onChange={(e) => {
                        //     setNewUser({ ...newUser, email: e.target.value });
                        //     if (e.target.name === "email") {
                        //       // validate the email.
                        //       let val = e.target.value;

                        //       if (val === "" || !emailValidation(val)) {
                        //         setError({
                        //           ...error,
                        //           email: `Enter a valid email`,
                        //         });

                        //         return;
                        //       }
                        //       setError({ ...error, [e.target.name]: "" });
                        //     }
                        //   }}
                          placeholder="Enter Email-ID"
                          required
                        />
                        {/* {error.email ? (
                          <p className="text-danger">{error.email}</p>
                        ) : (
                          ""
                        )} */}
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicProfession"
                      >
                        <Form.Label>
                          Pin Code <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type=""
                          name="pin"
                          tabIndex="6"
                        //   value={newUser.pin}
                        //   onChange={(e) => {
                        //     setNewUser({ ...newUser, pin: e.target.value });
                        //     if (e.target.name === "pin") {
                        //       // validate the email.
                        //       let val = e.target.value;

                        //       if (val === "" || !validatePin(val)) {
                        //         setError({
                        //           ...error,
                        //           pin: `Enter a valid Pin Code`,
                        //         });

                        //         return;
                        //       }
                        //       setError({ ...error, [e.target.name]: "" });
                        //     }
                        //   }}
                          placeholder="Enter Pin Code"
                          required
                        />
                        {/* {error.pin ? (
                          <p className="text-danger">{error.pin}</p>
                        ) : (
                          ""
                        )} */}
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicProfession"
                      >
                        <Form.Label>Select Role</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                        //   value={newUser.role}
                          tabIndex={8}
                          required
                        //   onChange={(e) =>
                        //     setNewUser({ ...newUser, role: e.target.value })
                        //   }
                        >
                          {/* <option>Select Role</option> */}
                          <option value="User">User</option>
                          {/* {localStorage.getItem("biq_role") ===
                            "superAdmin" && (
                            <>
                              <option value="superAdmin">Super Admin</option>
                              <option value="Admin">Admin</option>
                            </>
                          )} */}
                        </Form.Select>
                      </Form.Group>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  {/* {editing === true ? (
                    <Button
                      variant="primary"
                      type="submit"
                      disabled={
                        !(
                          containsChars(newUser.first_name) &&
                          containsChars(newUser.last_name) &&
                          emailValidation(newUser.email) &&
                          validatePassword(newUser.password) &&
                          validatePhone(newUser.mobile_number) &&
                          validatePin(newUser.pin)
                        )
                      }
                    >
                      Update
                    </Button>
                  ) : ( */}
                    <Button
                      variant="primary"
                    //   disabled={
                    //     !(
                    //       containsChars(newUser.first_name) &&
                    //       containsChars(newUser.last_name) &&
                    //       emailValidation(newUser.email) &&
                    //       validatePassword(newUser.password) &&
                    //       validatePhone(newUser.mobile_number) &&
                    //       validatePin(newUser.pin)
                    //     )
                    //   }
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

export default User_Management;