import { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useLocalStorage } from "react-use";
import QuotationTable from "./QuotationTable";
import "./App.css";

function App() {
  const subjectRef = useRef();
  const gradeRef = useRef();
  const weightRef = useRef();
  const semesterRef = useRef();
  const yearRef = useRef();

  const [dataItems, setDataItems] = useLocalStorage("dataItems", []);
  

  const dummyGrades = [
    { id: "011", name: "--Select--", weight: 0 },
    { id: "02", name: "A", weight: 4 },
    { id: "01", name: "A-", weight: 3.75 },
    { id: "03", name: "B+", weight: 3.25 },
    { id: "04", name: "B", weight: 3 },
    { id: "05", name: "B-", weight: 2.75 },
    { id: "06", name: "C+", weight: 2.25 },
    { id: "07", name: "C", weight: 2 },
    { id: "08", name: "C-", weight: 1.75 },
    { id: "09", name: "D", weight: 1 },
    { id: "10", name: "F", weight: 0 },
  ];

  const dummySubjects = [
    {
      id: "01",
      code: "BG 1001",
      name: "English I",
    },
    {
      id: "02",
      code: "BG 1002",
      name: "English II",
    },
    {
      id: "03",
      code: "BG 2000",
      name: "English III",
    },
    {
      id: "04",
      code: "BG 2001",
      name: "English IV",
    },
  ];

  const addItem = () => {
    // if (parseFloat(dscRef.current.value) > parseFloat(ppuRef.current.value)) {
    //   alert("Discount exceeds amount: Please try again!");
    //   return;
    // }

    // if (
    //   qtyRef.current.value === "0" ||
    //   qtyRef.current.value === "" ||
    //   qtyRef.current.value === " "
    // ) {
    //   alert("Cannot log empty quantity");
    //   return;
    // }

    const gid = gradeRef.current.value;
    const grade = dummyGrades.find((e) => e.id === gid);
    const sid = subjectRef.current.value;
    const subject = dummySubjects.find((s) => s.id === sid);
    

    // if (Object.keys(dataItems).length > 0) {
    //   for (var key in dataItems) {
    //     if (
    //       product.name !== dataItems[key].item &&
    //       product.price !== dataItems[key].price
    //     ) {
    //       dataItems[key].qty =
    //         parseFloat(qtyRef.current.value) + parseFloat(dataItems[key].qty);
    //       dataItems[key].dsc =
    //         parseFloat(dscRef.current.value) + parseFloat(dataItems[key].dsc);
    //       setDataItems([...dataItems]);
    //     } else {
    //       setDupDataItems([...dupDataItems]);
    //     }
    //   }
    // }

    var gradeObj = {
      title: subject.name + ": " + subject.code,
      item: grade.name,
      wei: parseFloat(weightRef.current.value),
      sem: semesterRef.current.value,
      year: yearRef.current.value,
    };

    dataItems.push(gradeObj);
    setDataItems([...dataItems]);
    console.log(dataItems[1].item);
    console.log(gradeRef.current.value);
    console.log(dataItems);
  };
  //////////////////////////////////////////////////////////////////grade
  const productChange = (e) => {
    const gid = gradeRef.current.value;
    const score = dummyGrades.find((e) => e.id === gid);
    weightRef.current.value = parseFloat(score.weight);
  };

  const options = dummyGrades.map((v) => {
    return <option value={v.id}>{v.name}</option>;
  });
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////subject

  const subjectChange = (s) => {
    const sid = subjectRef.current.value;
    const score = dummySubjects.find((s) => s.id === sid);
    weightRef.current.value = score.weight;
  };

  const selections = dummySubjects.map((x) => {
    return <option value={x.id}>{x.code}: {x.name}</option>;
  });

  /////////////////////////////////////////////////////////////////

  return (
    <Container style={{ width: "70%", margin: "30px" }}>
      <Row>
        <h1>Morgan 6135229</h1>
        <Col>
          <Row>
            <Col>
              Subject
              <Form.Select ref={subjectRef} onChange={subjectChange}>
                {selections}
              </Form.Select>
            </Col>
          </Row>

          <Row>
            <Col>
              Grade
              <Form.Select ref={gradeRef} onChange={productChange}>
                {options}
              </Form.Select>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="app-label">Weight</Form.Label>
              <Form.Control disabled={false} type="number" ref={weightRef} />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="app-label">Semester</Form.Label>
              <Form.Control type="number" ref={semesterRef} defaultValue={1} />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label className="app-label">Year</Form.Label>
              <Form.Control type="number" ref={yearRef} defaultValue={2020} />
            </Col>
          </Row>

          <div className="d-grid gap-2">
            <Button variant="primary" onClick={addItem}>
              Add
            </Button>
          </div>

          {/* {JSON.stringify(dataItems)} */}
        </Col>
        <Col md={8}>
          <QuotationTable data={dataItems} setDataItems={setDataItems} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
