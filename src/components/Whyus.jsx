import React from "react";
import { Container } from "react-bootstrap";

import Iconthumb from "../assets/img/icon_complete.png";
import Iconprice from "../assets/img/icon_price.png";
import Iconhour from "../assets/img/icon_24hrs.png";
import Iconprofessional from "../assets/img/icon_professional.png";



export default function Whyus() {
    return (
        <Container>
        <div className="container">
          <div className="row mt-5 pt-3">
            <div className="col-md mt-5">
              <h2>Why Us</h2>
              <p className="mt-3">Mengapa harus pilih Binar Car Rental?</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md mb-3">
              <div className="card p-3">
                <div className="card-body">
                  <img src={Iconthumb} alt="thumbs" />
                  <h5 className="card-title mt-3">Mobil Lengkap</h5>
                  <p className="card-text mt-3">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bagus,
                    terjamin, bersih dan terawat.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md mb-3">
              <div className="card p-3">
                <div className="card-body">
                  <img src={Iconprice} alt="price" />
                  <h5 className="card-title mt-3">Harga Murah</h5>
                  <p className="card-text mt-3">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md mb-3">
              <div className="card p-3">
                <div className="card-body">
                  <img src={Iconhour} alt="hour" />
                  <h5 className="card-title mt-3">Layanan 24 Jam</h5>
                  <p className="card-text mt-3">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    tersedia di akhir minggu.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md mb-3">
              <div className="card p-3">
                <div className="card-body">
                  <img src={Iconprofessional} alt="professional" />
                  <h5 className="card-title mt-3">Sopir Profesional</h5>
                  <p className="card-text mt-3">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Container>
    )
}