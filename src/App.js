import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import BillingModule from './components/pages/BillingModule';
import DashBoard from './components/pages/DashBoard';
import Profile from './components/pages/Profile';
import Report from './components/pages/Report';
import Management from './components/pages/Management';
import Business from './components/pages/Business';
import MainDashBoard from "./components/SubHeadings/DashBoard/MainDashBoard"
import Expense_Details from "./components/SubHeadings/BillingModule/Expense_Details";
import Upload_Ola_Data from "./components/SubHeadings/BillingModule/Upload_Ola_Data";
import Upload_Uber_Data from "./components/SubHeadings/BillingModule/Upload_Uber_Data";
import Payment_Advises from "./components/SubHeadings/BillingModule/Payment_Advises";

import Driver_Management from "./components/SubHeadings/Management/Driver_Management"
import Driver_Vehicle_Mapping from "./components/SubHeadings/Management/Driver_Vehicle_Mapping"
import User_Management from "./components/SubHeadings/Management/User_Management"
import Vehicle_Management from "./components/SubHeadings/Management/Vehicle_Management"

import Driver_Wise_Revenue from "./components/SubHeadings/Report/Driver_Wise_Revenue";
import Vehicle_Utilization from "./components/SubHeadings/Report/Vehicle_Utilization"
import Vehicle_Maintenance from "./components/SubHeadings/Report/Vehicle_Maintenance"

import Business_Model from "./components/SubHeadings/Business_Logic/Business_Model"
import Incentive_Program from "./components/SubHeadings/Business_Logic/Incentive_Program"

import User_Profile from "./components/SubHeadings/Profile/User_Profile"
import Reset_password from "./components/SubHeadings/Profile/Reset_password";





function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
        <Route exact path="/" element={<MainDashBoard />} />
          <Route path="/billing_module">
            <Route path="up_ola-data" element={<Upload_Ola_Data />} />
            <Route path="up_uber-data" element={<Upload_Uber_Data />} />
            <Route path="expense_details" element={<Expense_Details />} />
            <Route path="payment_advises" element={<Payment_Advises />} />
          </Route>
          <Route path="/management">
            <Route path="driver_management" element={<Driver_Management />} />
            <Route path="vehicle_management" element={<Vehicle_Management />} />
            <Route path="mapping" element={<Driver_Vehicle_Mapping />} />
            <Route path="user_management" element={<User_Management />} />
          </Route>
          <Route path="/report">
            <Route path="driver_revenue" element={<Driver_Wise_Revenue />} />
            <Route path="utilization" element={<Vehicle_Utilization />} />
            <Route path="maintenance" element={<Vehicle_Maintenance />} />
          </Route>
          <Route path="/business_logic">
            <Route path="model" element={<Business_Model />} />
            <Route path="incentive_program" element={<Incentive_Program />} />
          </Route>
          <Route path="/profile">
            <Route path="user_profile" element={<User_Profile />} />
            <Route path="reset_profile" element={<Reset_password />} />
          </Route>

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
