import Table from "react-bootstrap/Table";
import "../App.css";
import Drawer from "../Components/drawer";
import TutorsDrawer from "../Components/tutorsDrawer";
import "../style/tutors.css";
import TopHeader from "./topheader";
function Tutors_Students() {
  return (
<>
    <TutorsDrawer />
    <TopHeader />
    <div className="main_body">
      <div className="main_page">
        <div className="container">
          <div className="body_upper">
            <h3>All Students</h3>
          </div>
          <div className="body_bottom">
            <Table striped bordered hover>
              <thead>
                <tr className="heads">
                  <th>#</th>
                  <th>Student name</th>
                  <th>Age</th>
                  <th>School name</th>
                  <th>Session name</th>
                  <th>Tutor Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark </td>
                  <td>20</td>
                  <td>ABC School</td>
                  <td>ABC Session</td>
                  <td>John</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Mark </td>
                  <td>20</td>
                  <td>ABC School</td>
                  <td>ABC Session</td>
                  <td>John</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mark </td>
                  <td>20</td>
                  <td>ABC School</td>
                  <td>ABC Session</td>
                  <td>John</td>
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

export default Tutors_Students;
