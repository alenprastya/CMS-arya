import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";

const AddFakultas = () => {
  const [id, setId] = useState("");
  const [fakultas, setFakultas] = useState("");
  const [loading, setLoading] = useState(false);

  const saveFakultas = async (e) => {
    await axios.post("http://localhost:8000/prodi/fakultas", {
      id: id,
      fakultas: fakultas,
    });
    setLoading(true);
  };
  return (
    <div className="card">
      <h1>Add Fakultas</h1>
      <Form onSubmit={saveFakultas}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Id Prodi</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan Id Prodi"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nama Fakultas</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nama Fakultas"
            value={fakultas}
            onChange={(e) => setFakultas(e.target.value)}
          />
          <br />
          {loading ? (
            saveFakultas
          ) : (
            <Spinner animation="border" variant="warning" />
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Tambahkan
        </Button>
      </Form>
    </div>
  );
};

export default AddFakultas;
