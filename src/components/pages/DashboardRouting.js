import {Routes, Route, Outlet} from "react-router-dom";
import React from "react";
import SideBar from "../Sidebar/SideBar";
import Upload_Ola_Data from "../SubHeadings/BillingModule/Upload_Ola_Data";
import Upload_Uber_Data from "../SubHeadings/BillingModule/Upload_Uber_Data";
import Expense_Details from "../SubHeadings/BillingModule/Expense_Details";
import Payment_Advises from "../SubHeadings/BillingModule/Payment_Advises";
import Driver_Management from "../SubHeadings/Management/Driver_Management";
import Vehicle_Management from "../SubHeadings/Management/Vehicle_Management";
import Driver_Vehicle_Mapping from "../SubHeadings/Management/Driver_Vehicle_Mapping";
import User_Management from "../SubHeadings/Management/User_Management";
import Driver_Wise_Revenue from "../SubHeadings/Report/Driver_Wise_Revenue";
import Vehicle_Utilization from "../SubHeadings/Report/Vehicle_Utilization";
import Vehicle_Maintenance from "../SubHeadings/Report/Vehicle_Maintenance";
import Business_Model from "../SubHeadings/Business_Logic/Business_Model";
import Incentive_Program from "../SubHeadings/Business_Logic/Incentive_Program";
import User_Profile from "../SubHeadings/Profile/User_Profile";
import Reset_password from "../SubHeadings/Profile/Reset_password";
import MainDashBoard from "../SubHeadings/DashBoard/MainDashBoard";

const DashboardRouting=()=>{
    return(
    <>
     <SideBar>
        <Routes>
        <Route  path="dashboard" element={<MainDashBoard />} />
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
      <Outlet />
    </>
    );

}

export default DashboardRouting;