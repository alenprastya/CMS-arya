import React, { useState, useEffect, Fragment } from "react";
import "./style.css";
import { Table } from "react-bootstrap";
import axios from "axios";
const ListDaftarUser = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get("http://localhost:8000/users")
        .then((res) => {
          setPosts(res.data.data);
          setLoading(false);
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1500);
  }, []);
  return (
    <div className="card">
      {loading && (
        <Fragment>
          <div className="loader">Loading...</div>
        </Fragment>
      )}
      {!loading && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Alamat</th>
              <th>Asal Sekolah</th>
              <th>Fakultas diambil</th>
              <th>No Telephon</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.name}</td>
                <td>{post.email}</td>
                <td>{post.alamat}</td>
                <td>{post.asal_sekolah}</td>
                <td>{post.fakultas_diambil}</td>
                <td>{post.nomor_tlp}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ListDaftarUser;
