import Tutors from "../Pages/tutors";

function TableRows({ rowsData, deleteTableRows, handleChange }) {
  return rowsData.map((data, index) => {
    const { fullName, age, school , students , sessions , payrate} = data;
    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            value={fullName}
            onChange={(evnt) => handleChange(index, evnt)}
            name="fullName"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={age}
            onChange={(evnt) => handleChange(index, evnt)}
            name="age"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={school}
            onChange={(evnt) => handleChange(index, evnt)}
            name="school"
            className="form-control"
          />{" "}
        </td>
        <td>
          <input
            type="text"
            value={students}
            onChange={(evnt) => handleChange(index, evnt)}
            name="students"
            className="form-control"
          />{" "}
        </td>
        <td>
          <input
            type="text"
            value={sessions}
            onChange={(evnt) => handleChange(index, evnt)}
            name="sessions"
            className="form-control"
          />{" "}
        </td>
        <td>
          <input
            type="text"
            value={payrate}
            onChange={(evnt) => handleChange(index, evnt)}
            name="payrate"
            className="form-control"
          />{" "}
        </td>
        <td>
          <button
            className="btn btn-outline-success"
            onClick={
                (evnt) => {
                    var arr =[]
                    let child = evnt.target.parentNode.parentNode.children
                    for(var i = 0; i < child.length; i++) {
                        console.log(child[i].firstChild.value)
                        arr.push(child[i].firstChild.value)
                    }
                }
            }
          >
            ✓
          </button>
        </td>
        <td>
          <button
            className="btn btn-outline-danger"
            onClick={(evnt) => deleteTableRows(index , evnt)}
          >
            x
          </button>
        </td>
      </tr>
    );
  });
}

export default TableRows;
