import { Button } from 'react-bootstrap';
import React from 'react';

import "./NavBar.css"



const NavBar=(props)=>{
    return(
        <>
        {/* <nav className="navbar navbar-expand navbar-dark bg-dark px-2">
    <div className="side-nav-button p-2 me-3 text-light">
        <i className="fa-solid fa-bars"></i>
    </div>
    <a className="navbar-brand px-4" href="#">CRMS</a>

    <form className="d-flex ms-auto me-3">
        <input className="form-control me-2" type="search" placeholder="Search" />
        <button className="btn btn-primary" type="submit">Search</button>
    </form>
    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li style="margin-left: 10%; color: blue;"><i className="fas fa-user fa-fw"></i> UserName</li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li style="margin-left: 10%;"><button type="button" className="dropdown-item btn btn-primary"
                        style="color: red;">Logout</button></li>
            </ul>
        </li>
    </ul>
</nav> */}
       {/* <nav className="navbar bg-body-tertiary sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand">Navbar</a>
    <div classNameName="bars">
    <FaBars />

    </div>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
   
  </div>
</nav> */}

<nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark sticky-top">
          {/* <!-- Navbar Brand--> */}
          <div className="navbar-brand ps-3">
          <h1 className="mt-4">
                  {/* <img
                    style={{ width: 160, marginBottom:18}}
                    src="https://img1.wsimg.com/isteam/ip/d551883b-5975-4717-ad24-ddbb0dd7f2af/blob-a7b9033.png/:/rs=w:529,h:200,cg:true,m/cr=w:529,h:200/qt=q:95"
                    alt=""
                  /> */}
                </h1>
          </div>
          {/* <!-- Sidebar Toggle--> */}
          <button
            className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
            id="sidebarToggle"
            onClick={props.isToggle}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* <!-- Navbar Search--> */}
          <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search for..."
                aria-label="Search for..."
                aria-describedby="btnNavbarSearch"
              />
              <Button
                className="btn btn-primary"
                id="btnNavbarSearch"
                type="button"
              >
                <i className="fas fa-search"></i>
              </Button>
            </div>
          </form>
          {/* <!-- Navbar--> */}
          <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user fa-fw"></i>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li style={{ marginLeft: "10%", color: "blue" }}>
                  <i className="fas fa-user fa-fw"></i>{" "}
                  {/* {localStorage.getItem("biq_name")} */}
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li style={{ marginLeft: "10%" }}>
                  <Button
                    style={{ color: "red" }}
                    className="dropdown-item"
                    // onClick={() => logout()}
                  >
                    Logout
                  </Button>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        </>
    )

}

export default NavBar;