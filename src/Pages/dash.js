import Drawer from "../Components/drawer";
import "bootstrap/dist/css/bootstrap.min.css";
import TopHeader from "./topheader";
import "../style/dash.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Chart from "../Components/chart";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiPerson } from "react-icons/gi";
import { FaSchool } from "react-icons/fa";
import FrontCards from "../Components/cards";

export function Dashboard() {
  return (
    <>
      <Drawer />
      <TopHeader />

      <div className="main_body">
        <div className="main_page">
          <div className="container">
            <div className="body-upper">
              <div className="graph">
                {" "}
                <h5 className="session" >Number of Sessions</h5>
                <Chart />
              </div>
              <div className="display-cards">
                <FrontCards 
                  fillImage={<BsFillPeopleFill />}
                  total="Total Tutors"
                  quantity="120"
                />
                <FrontCards
                  fillImage={<GiPerson />}
                  total="Total Students"
                  quantity="2452"
                />
                <FrontCards
                  fillImage={<FaSchool />}
                  total="Total School"
                  quantity="75"
                />
              </div>
            </div>
            <div className="body-lower">
              {" "}
              <p> Table will show here </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
