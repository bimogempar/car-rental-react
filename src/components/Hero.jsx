import React from "react";
import { Container } from "react-bootstrap";
import ImgCar from "../assets/img/img_carr.png";


export default function Hero() {
    return (
        <Container>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row mb-5 mt-5">
              <div className="col-md m-auto">
                <h2 className="text-justify">
                  Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)
                </h2>
                <p>
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                <a className="btn btn-success" href="#">
                  Mulai Sewa Mobil
                </a>
              </div>
              <div className="col-md">
                <img src={ImgCar} className="img-fluid imgcar" alt="Mobil" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    )
}