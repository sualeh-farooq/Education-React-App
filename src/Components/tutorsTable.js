import Table from "react-bootstrap/Table";
import '../App.css'
function TutorsTable(TutorName , Age , SchoolName , Students , Sessions ,) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr className="heads" >
          <th>#</th>
          <th>Tutor Name</th>
          <th>School Name</th>
          <th>Number of Students</th>
          <th>Session Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Giacomo Guilizzoni</td>
          <td>ABC School</td>
          <td>40</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Marcon Botton</td>
          <td>ABC School</td>
          <td>38</td>
          <td>Ongoing</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Mariah Maclachian</td>
          <td>ABC School</td>
          <td>41</td>
          <td>On Going</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Valerie Liberty</td>
          <td>ABC School</td>
          <td>30</td>
          <td>Ended</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TutorsTable;
