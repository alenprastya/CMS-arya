import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const AddPrody = () => {
  const [prodi, setProdi] = useState("");

  const saveProdi = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/prodi", {
        prodi,
      })
      .then((res) => console.log("Posting Data", res))
      .catch((err) => console.log(err).setProdi(""));
  };

  return (
    <form>
      <div>
        <div className="card">
          <h1>Add Fakultas</h1>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nama Prodi</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nama Prodi"
              onChange={(e) => setProdi(e.target.value)}
              value={prodi}
            />
            <br />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={saveProdi}>
            Tambahkan
          </Button>
        </div>
        {prodi}
      </div>
    </form>
  );
};

export default AddPrody;
