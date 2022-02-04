import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import './App.css';
import dataItems from './App.js'

function QuotationTable({ data, setDataItems }) {
  const [dataRows, setDataRows] = useState();
  const [total, setTotal] = useState(0);
  

  useEffect(() => {

    let gpa = 0;
    const z = data.map((v, i) => {
      var sum = parseFloat(sum) + parseFloat(v.wei);
      gpa = sum / data.length + 1;
      
      
    



      
      return (
        <tr key={i}>
          <td>{v.title}</td>
          <td>{v.item}</td>
          <td>{v.wei}</td>
          <td>{v.sem}</td>
          <td>{v.year}</td>
        </tr>
      );
    });

    setDataRows(z);
    setTotal(gpa);
  }, [data]);




  const clearTable = () => {
    setDataItems([]);
    setDataRows([]);
  };

  return (
    <div>
      <h1>Subject list</h1>
      <Button onClick={clearTable} variant="outline-dark">
        Clear
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="table-header">Subject</th>
            <th className="table-header-item">Grade</th>
            <th className="table-header">Weight</th>
            <th className="table-header">Semester</th>
            <th className="table-header">Year</th>
          </tr>
        </thead>
        <tbody>{dataRows}</tbody>
        <tfoot>
          <tr>
            <td>
              Total
            </td>
            <td>{total}</td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}

export default QuotationTable;
