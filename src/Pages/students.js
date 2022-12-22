import TableRows from "../Components/studenttablerow";
import "../style/tutors.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Drawer from "../Components/drawer";
import TopHeader from "./topheader";
import { Button } from "react-bootstrap";
import TableChart from "../Components/table";
import TutorsTable from "../Components/tutorsTable";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { MyTimer } from "../Components/timer";
import swal from "sweetalert";

export default function Students() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [rowsData, setRowsData] = useState([]);
  const addTableRows = () => {
    const rowsInput = {
      fullName: "",
      age: "",
      school: "",
      students: "",
      sessions: "",
      rate: " ",
    };
    setRowsData([...rowsData, rowsInput]);
  };
  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  }
  
  
  ;

  return (
    <>
      <Drawer />
      <TopHeader />
      
      <div className="main_body">
        <div className="main_page">
          <div className="container">
            <div className="body_upper">
              <h3>All Students</h3>
              <Button className="btn-custom" onClick={addTableRows}>
                Add Schools
              </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Tutor</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="tutor_form">
                  <input placeholder="Tutor Name" type="text"></input>
                  <br />
                  <input placeholder="School Name" type="text"></input>
                  <br />
                  <input placeholder="Number of Students" type="text"></input>
                  <br />
                  <input placeholder="Session Status" type="text"></input>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  className="btn-custom"
                  variant="primary"
                >
                  Add Tutor
                </Button>
              </Modal.Footer>
            </Modal>

            <div className="body_bottom">
              <br />
              <div>
                <div className="row">
                  <div className="col-sm-8 col-lg-12">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>School Name</th>
                          <th>School Email</th>
                          <th>Number of Sessions</th>
                          <th>Tutor Assigned</th>
                          <th>Number of Students</th>
                        </tr>
                      </thead>
                      <tbody> {
                        console.log()
                        }
                        <TableRows
                          rowsData={rowsData}
                          deleteTableRows={deleteTableRows}
                          handleChange={handleChange}
                        />
                      </tbody>
                    </table>
                  </div>
                  <div className="col-sm-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
