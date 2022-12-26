import "../App.css";
import React, { useState } from "react";
import logo from "../assets/Logo.jpg";
import { Link } from "react-router-dom";

export default function Drawer() {
  let role = "admin";
  let [current_role, update_role] = useState(true);

  return (
    <>
      <div className="main">
        <div className="container">
          <nav class="sidebar">
            <span className="logo_space">
              <img className="logo" src={logo} alt="" />
            </span>
            <div class="sidebar-inner">
              <button type="button" className="sidebar-burger"></button>

              {current_role ? (
                <nav className="sidebar-menu">
                  <span className="dropdown">
                    {/* {console.log(role)} */}
                    <select
                      onChange={(e) => {
                        role = e.target.selectedOptions[0].value;
                        role === "tutor"
                          ? update_role(!current_role)
                          : update_role(current_role);
                      }}
                    >
                      <option  value="admin">
                        Admin
                      </option>
                      <option value="tutor">Tutor</option>
                    </select>
                  </span>
                  <button type="button">
                   <span> <Link className="link"  to='/home'> Dashboard</Link></span>
                  </button>
                  <button type="button">
                   <span> <Link className="link"  to='/admin//tutors'> Tutor</Link></span>
                  </button>
                  <button type="button">
                  <span> <Link className="link"  to='/admin/schools'> Schools</Link></span>
                  </button>
                  <button type="button">
                  <span> <Link className="link"  to='/admin/students'> Students</Link></span>
                  </button>
                  <button type="button">
                  <span> <Link className="link"  to='/admin/sessions'> Sessions</Link></span>
                  </button>
                </nav>
              ) : (
                <nav className="sidebar-menu">
                  <span className="dropdown">
                    {/* {console.log(role)} */}
                    <select
                      onChange={(e) => {
                        role = e.target.selectedOptions[0].value;
                        role === "admin"
                          ? update_role(!current_role)
                          : update_role(current_role);
                      }}
                    >
                      <option  value="admin">
                        Admin
                      </option>
                      <option  value="tutor">Tutor</option>
                    </select>
                  </span>
                  <button type="button">
                  <span> <Link className="link"  to='/home'> Dashboard</Link></span>
                  </button>
                  <button type="button">
                  <span> <Link className="link"  to='/tutors/schools'> School</Link></span>
                  </button>
                  <button type="button">
                  <span> <Link className="link"  to='/tutors/sessions'> Sessions</Link></span>
                  </button>
                  <button type="button">
                  <span> <Link className="link"  to='/tutors/students'> Students</Link></span>
                  </button>
                </nav>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
