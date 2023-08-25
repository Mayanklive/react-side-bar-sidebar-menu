import { NavLink } from "react-router-dom";
import { MdDashboard, MdBusinessCenter } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";

import {MdManageAccounts} from "react-icons/md"
import { AiFillFile, AiFillProfile } from "react-icons/ai";


import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import NavBar from "./NavBar";
const routes = [
  {
    path:'/dashboard',
    name:"DashBoard",
    icon:<MdDashboard />,
    subRoutes:[
      {
      path:"/user/dashboard",
      name:"Main Dashboard"
    }
  ]
  },
  {
    path:"/billing_module",
    name:"Billing Module",
    icon:<FaMoneyBillAlt />,
    subRoutes:[
      {
        path:"/user/billing_module/up_ola-data",
        name:"Upload Ola-Data"
      },
      {
        path:"/user/billing_module/up_uber-data",
        name:"Upload Uber-Data"
      },
      {
        path:"/user/billing_module/expense_details",
        name:"Expense Details"
      },
      {
        path:"/user/billing_module/payment_advises",
        name:"Payment Advises"
      }
    ]
  },
  {
    path:"/management",
    name:"Management",
    icon:<MdManageAccounts />,
    subRoutes:[
      {
        path:"/user/management/driver_management",
        name:"Driver Management"
      },
      {
        path:"/user/management/vehicle_management",
        name:"Vehicle Management"
      },
      {
        path:"/user/management/mapping",
        name:"Driver-Vehicle Mapping"
      },
      {
        path:"/user/management/user_management",
        name:"User Management"
      }
    ]
  },
  {
    path:"/report",
    name:"Report",
    icon:<AiFillFile />,
    subRoutes:[
      {
        path:"/user/report/driver_revenue",
        name:"Driver Wise Revenue"
      },
      {
        path:"/user/report/utilization",
        name:"Vehicle Utilization"
      },
      {
        path:"/user/report/maintenance",
        name:"Vehicle Maintenance"
      }
    ]
  },
  {
    path:"/business_logic",
    name:"Business Logic",
    icon:<MdBusinessCenter />,
    subRoutes:[
      {
        path:"/user/business_logic/model",
        name:"Business Model"
      },
      {
        path:"/user/business_logic/incentive_program",
        name:"Incentive Program"
      }
    ]
  },
  {
    path:"/profile",
    name:"Profile",
    icon:<AiFillProfile />,
    subRoutes:[
      {
        path:"/user/profile/user_profile",
        name:"User Profile"
      },
      {
        path:"/user/profile/reset_profile",
        name:"Reset Profile"
      }
    ]
  }
];

const SideBar = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
    <NavBar isToggle={toggle} />
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
