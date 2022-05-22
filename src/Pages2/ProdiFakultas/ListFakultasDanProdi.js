import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
export default class ListFakultasDanProdi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fakultas_dan_prodi: [
        {
          namaFakultas: "Teknoloogi Komunikasi dan Informatika",
          prodi1: "Teknologi Informatika",
          prodi2: "Sistem Informasi",
        },
        {
          namaFakultas: "Fakultas Ekonomi",
          prodi1: "Perhotelan",
          prodi2: "Manajement",
          prodi3: "Akuntansi",
          prodi4: "Pariwisata",
        },
        {
          namaFakultas: "Fakultas Ilmu Sosial Ilmu Politik",
          prodi1: "Hubungan Internasional",
          prodi2: "Ilmu Politik",
          prodi3: "Ilmu Administrasi",
          prodi4: "Ilmu Hukum",
        },
        {
          namaFakultas: "Fakultas Sastra",
          prodi1: "Sastra & Bahasa Asing",
          prodi2: "Sastra Indonesia",
          prodi3: "Sastra Inggris",
        },
        {
          namaFakultas: "Fakultas Teknik dan Sains",
          prodi1: "Ilmu Teknik",
          prodi2: "Teknik Electro",
          prodi3: "Teknik Mesin",
          prodi4: "Fisika",
        },
        {
          namaFakultas: "Fakultas Ilmu Kesehatan",
          prodi1: "Kebidanan",
          prodi2: "Ilmu Keperawatan",
        },
      ],
    };
  }

  render() {
    const { fakultas_dan_prodi } = this.state;
    return (
      <div>
        <div className="card">
          <div className="row">
            {fakultas_dan_prodi.map((fakultas) => (
              <div className="col-md-3 mt-4">
                <ListGroup style={{ width: "400px" }} as="ul">
                  <ListGroup.Item as="li" active>
                    <strong>{fakultas.namaFakultas}</strong>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">{fakultas.prodi1}</ListGroup.Item>
                  <ListGroup.Item as="li">{fakultas.prodi2}</ListGroup.Item>
                  <ListGroup.Item as="li">{fakultas.prodi3}</ListGroup.Item>
                  <ListGroup.Item as="li">{fakultas.prodi4}</ListGroup.Item>
                </ListGroup>
              </div>
            ))}
            <div className="col-md-3 mt-4">
              <ListGroup style={{ width: "400px" }} as="ul">
                <ListGroup.Item as="li" active>
                  <strong>Fakultas Biologi</strong>
                </ListGroup.Item>
                <ListGroup.Item as="li">Biologi</ListGroup.Item>
              </ListGroup>
            </div>
            <div className="col-md-3 mt-4">
              <ListGroup style={{ width: "400px" }} as="ul">
                <ListGroup.Item as="li" active>
                  <strong>Fakultas Pertanian</strong>
                </ListGroup.Item>
                <ListGroup.Item as="li">Agroteknologi</ListGroup.Item>
              </ListGroup>
            </div>
            <div className="col-md-3 mt-4">
              <ListGroup style={{ width: "400px" }} as="ul">
                <ListGroup.Item as="li" active>
                  <strong>Fakultas Hukum</strong>
                </ListGroup.Item>
                <ListGroup.Item as="li">Ilmu Hukum</ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
