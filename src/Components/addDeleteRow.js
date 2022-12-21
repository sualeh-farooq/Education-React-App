import { useState } from "react";
import TableRows from "./tablerow";
function AddDeleteTableRows(){


    const [rowsData, setRowsData] = useState([]);
 
 const addTableRows = ()=>{
  
        const rowsInput={
            fullName:'',
            age:'',
            school:'' ,
            students: '' ,
            sessions : '' ,
            rate : ' ' 
            
        } 
        setRowsData([...rowsData, rowsInput])
      
    }
   const deleteTableRows = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
   }
 
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  
 
 
}
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-8">

                <table className="table">
                    <thead>
                      <tr>
                          <th>Tutor Name</th>
                          <th>Age</th>
                          <th>School</th>
                          <th>Number of Students</th>
                          <th>Session Status</th>
                          <th>Hourly Pay Rate</th>
                          <th><button className="btn btn-outline-success" onClick={addTableRows} >+</button></th>
                      </tr>

                    </thead>
                   <tbody>

                   <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />

                   </tbody> 
                </table>

                </div>
                <div className="col-sm-4">

                </div>
            </div>
        </div>
    )

}
export default AddDeleteTableRows