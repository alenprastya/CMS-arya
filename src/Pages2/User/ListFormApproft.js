import axios from "axios";
import "./style.css";
import React, { useState, useEffect, Fragment } from "react";
import { Table, Button } from "react-bootstrap";

const ListFormApproft = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios.get("http://localhost:8000/nilai").then((res) => {
        setPosts(res.data.data);
        setLoading(false);
        console.log(res.data.data);
      });
      setLoading(true).catch((err) => {
        console.log(err);
      });
    }, 1500);
  }, []);

  return (
    <>
      <div className="card" style={{ width: "600px" }}>
        {loading && (
          <Fragment>
            <div className="loader">Loading...</div>
          </Fragment>
        )}
        {!loading && (
          <>
            <Table striped bordered hover>
              <thead>
                <tr style={{ fontSize: "17px" }}>
                  <th>No</th>
                  <th>Nilai Rata-rata Ujian Sekolah</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id} className="table">
                    <td>{post.id}</td>
                    <td>{post.nilai_rata_ujiskolah}</td>
                    <td>
                      <Button variant="warning">Approve</Button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}
      </div>
    </>
  );
};

export default ListFormApproft;
