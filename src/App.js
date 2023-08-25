import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import BillingModule from './components/pages/BillingModule';
// import DashBoard from './components/pages/DashBoard';
// import Profile from './components/pages/Profile';
// import Report from './components/pages/Report';
// import Management from './components/pages/Management';
// import Business from './components/pages/Business';
// import MainDashBoard from "./components/SubHeadings/DashBoard/MainDashBoard"
// import Expense_Details from "./components/SubHeadings/BillingModule/Expense_Details";
// import Upload_Ola_Data from "./components/SubHeadings/BillingModule/Upload_Ola_Data";
// import Upload_Uber_Data from "./components/SubHeadings/BillingModule/Upload_Uber_Data";
// import Payment_Advises from "./components/SubHeadings/BillingModule/Payment_Advises";

// import Driver_Management from "./components/SubHeadings/Management/Driver_Management"
// import Driver_Vehicle_Mapping from "./components/SubHeadings/Management/Driver_Vehicle_Mapping"
// import User_Management from "./components/SubHeadings/Management/User_Management"
// import Vehicle_Management from "./components/SubHeadings/Management/Vehicle_Management"

// import Driver_Wise_Revenue from "./components/SubHeadings/Report/Driver_Wise_Revenue";
// import Vehicle_Utilization from "./components/SubHeadings/Report/Vehicle_Utilization"
// import Vehicle_Maintenance from "./components/SubHeadings/Report/Vehicle_Maintenance"

// import Business_Model from "./components/SubHeadings/Business_Logic/Business_Model"
// import Incentive_Program from "./components/SubHeadings/Business_Logic/Incentive_Program"

// import User_Profile from "./components/SubHeadings/Profile/User_Profile"
// import Reset_password from "./components/SubHeadings/Profile/Reset_password";

import AdminLogin from "./components/pages/AdminLogin";
import NotFound from "./components/pages/NotFound";
import DashboardRouting from "./components/pages/DashboardRouting";







function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/user/*" element={<DashboardRouting />} />
      </Routes>
     
      {/* <Routes>
      <Route path="/login" element={<AdminLogin />} />
      </Routes> */}
      
    </Router>
  );
}

export default App;
