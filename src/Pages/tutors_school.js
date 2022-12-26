import Table from "react-bootstrap/Table";
import "../App.css";
import Drawer from "../Components/drawer";
import TutorsDrawer from "../Components/tutorsDrawer";
import "../style/tutors.css";
import TopHeader from "./topheader";
function Tutors_School() {
  return (
<>
    <TutorsDrawer />
    <TopHeader />
    <div className="main_body">
      <div className="main_page">
        <div className="container">
          <div className="body_upper">
            <h3>All Schools</h3>
          </div>
          <div className="body_bottom">
            <Table striped bordered hover>
              <thead>
                <tr className="heads">
                  <th>#</th>
                  <th>School Name</th>
                  <th>School Email</th>
                  <th>Number of Sessions</th>
                  <th>Tutor Assigned</th>
                  <th>Number of Students</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>ABC School</td>
                  <td>ABC@gmail.com</td>
                  <td>5</td>
                  <td>3</td>
                  <td>150</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>ABC School</td>
                  <td>ABC@gmail.com</td>
                  <td>5</td>
                  <td>3</td>
                  <td>150</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>ABC School</td>
                  <td>ABC@gmail.com</td>
                  <td>5</td>
                  <td>3</td>
                  <td>150</td>
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

export default Tutors_School;
