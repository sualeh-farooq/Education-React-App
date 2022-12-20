import "../App.css";
import React from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
import logo from "../assets/Logo.jpg";

export default function Drawer() {
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
              <nav className="sidebar-menu">
                <span className="dropdown">
                  <select onChange={(e)=>console.log(e.target.value)} >
                    <option value="tutor">Tutor</option>
                    <option value="admin">Admin</option>
                  </select>
                </span>
                <button type="button">
                  <span>Tutor</span>
                </button>
                <button type="button">
                  <span>School</span>
                </button>
                <button type="button">
                  <span>Students</span>
                </button>
                <button type="button">
                  <span>Sessions</span>
                </button>
                <button type="button">
                  <span>Calender</span>
                </button>
                <button type="button">
                  <span>Invoices</span>
                </button>
              </nav>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}


