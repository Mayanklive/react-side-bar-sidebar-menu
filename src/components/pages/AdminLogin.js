// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./AdminLogin.css";

// const AdminLogin = () => {
//   const navigate = useNavigate(); // Hook for programmatic navigation
//   const [email, setEmail] = useState(""); // State for email input
//   const [password, setPassword] = useState(""); // State for password input
//   const [error, setError] = useState(""); // State for error message

//   // Simulated authentication logic
//   const handleLogin = () => {
//     // Replace this with your actual authentication logic
//     if (email === "admin@example.com" && password === "password") {
//       // Successful login, navigate to dashboard
//       navigate("/user");
//     } else {
//       // Failed login, show an error message
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="bg-primary">
//       {/* ...Your existing JSX code */}
//       <div className="form-floating mb-3">
//         <input
//           className="form-control"
//           id="inputEmail"
//           type="email"
//           placeholder="name@example.com"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label htmlFor="inputEmail">Email address</label>
//       </div>
//       <div className="form-floating mb-3 d-flex password-input">
//         <input
//           className="form-control border-0"
//           id="inputPassword"
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button className="border-0">
//           <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>
//         </button>
//         <label htmlFor="inputPassword">Password</label>
//       </div>
//       {error && <p className="text-danger">{error}</p>}
//       <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
//         <a className="small" to="/forgotPassword">
//           Forgot Password?
//         </a>
//         <button className="btn btn-primary" onClick={handleLogin}>
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;

import React from "react";
import "./AdminLogin.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AdminLogin=()=>{
     const navigate = useNavigate(); // Hook for programmatic navigation
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [error, setError] = useState(""); // State for error message

  // Simulated authentication logic
  const handleLogin = () => {
    // Replace this with your actual authentication logic
    if (email === "mycutie@gmail.com" && password === "password") {
      // Successful login, navigate to dashboard
      navigate("/user");
    } else {
      // Failed login, show an error message
      setError("Invalid email or password");
    }
  };

    return(
        <>
        <div className='bg-primary'>
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container"style={{marginTop:"5%"}}>
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="text-center">
                  {/* <img
                    style={{ width: 200 }}
                    src="https://img1.wsimg.com/isteam/ip/d551883b-5975-4717-ad24-ddbb0dd7f2af/blob-a7b9033.png/:/rs=w:529,h:200,cg:true,m/cr=w:529,h:200/qt=q:95"
                    alt=""
                  /> */}
                  </div>
                    <div className="card-header"><h3 className="text-center font-weight-light my-2"style={{color:'blue'}}>Login</h3></div>
                    <div className="card-body">
                      <form>
                        <div className="form-floating mb-3">
                          <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com"
                            name='email' value={email} onChange={(e) => setEmail(e.target.value)}
                    

                          />
                          {/* {error.email ? <p className="text-danger">{error.email}</p> : ""} */}

                          <label htmlFor="inputEmail">Email address</label>
                        </div>
                        <div className="form-floating mb-3 d-flex password-input">
                          <input className="form-control border-0" id="inputPassword"  placeholder="Password" name='password'
                           value={password}
                                     onChange={(e) => setPassword(e.target.value)} />
                          <button className='border-0'>
                        <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>
                          </button>
                          <label htmlFor="inputPassword">Password</label>
                        </div>
                        {error && <p className="text-danger">{error}</p>}
                        {/* <div className=htmlForrm-check mb-3">
                          <input className=htmlForrm-check-input" id="inputRememberPassword" type="checkbox" value="" />
                          <label className=htmlForrm-check-label" for="inputRememberPassword">Remember Password</label>
                        </div> */}
                        <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                          <a className="small" to='/forgotPassword'>Forgot Password?</a>
                          <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center py-3">
                      {/* <div className="small"><Link to="/signUp">Need an account? Sign up!</Link></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div id="layoutAuthentication_footer">
          <footer className="py-4 bg-light h-25">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Copyright &copy; Your Website 2022</div>
                <div>
                  <a href="#">Privacy Policy</a>
                  &middot;
                  <a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      {/* <Outlet /> */}
    </div>
        </>

    );

}

export default AdminLogin;