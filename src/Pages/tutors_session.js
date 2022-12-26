import Table from "react-bootstrap/Table";
import "../App.css";
import Drawer from "../Components/drawer";
import TutorsDrawer from "../Components/tutorsDrawer";
import "../style/tutors.css";
import TopHeader from "./topheader";
function Tutors_Session() {
  return (
<>
    <TutorsDrawer />
    <TopHeader />
    <div className="main_body">
      <div className="main_page">
        <div className="container">
          <div className="body_upper">
            <h3>All Sessions</h3>
          </div>
          <div className="body_bottom">
            <Table striped bordered hover>
              <thead>
                <tr className="heads">
                  <th>#</th>
                  <th>Session Name</th>
                  <th>Session Tutor</th>
                  <th>School Name</th>
                  <th>Number of Students</th>
                  <th>Session Days</th>
                  <th>Session Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>ABC Session</td>
                  <td>Mark</td>
                  <td>ABC School</td>
                  <td>150</td>
                  <td>Wednesday-Thursday</td>
                  <td>2:00pm - 3.00pm</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>ABC Session</td>
                  <td>Mark</td>
                  <td>ABC School</td>
                  <td>150</td>
                  <td>Wednesday-Thursday</td>
                  <td>2:00pm - 3.00pm</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>ABC Session</td>
                  <td>Mark</td>
                  <td>ABC School</td>
                  <td>150</td>
                  <td>Wednesday-Thursday</td>
                  <td>2:00pm - 3.00pm</td>
                </tr>
              
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Tutors_Session;
