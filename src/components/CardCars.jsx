import React from "react";
import { Container } from "react-bootstrap";

import Imgblue from "../assets/img/car21.min.jpg";
import Imgred from "../assets/img/car22.min.jpg";
import Imggrey from "../assets/img/car23.min.jpg";
export default function CardCar() {
    return (
        <Container>
            <div className="row row-cols-auto justify-content-center mt-4">
                <div className="col m-2 ">
                    <div className="card" style={{ width: "18rem", height: "550px" }}>
                        <img src={Imgblue} className="card-img-top img-fluid" alt="" style={{ height: "190px", objectFit: "cover" }} />
                        <div className="card-body" style={{ fontSize: "14px" }}>
                            <p className="card-title">BMW</p>
                            <p className="fw-bold">Rp. 900.000 / hari</p>
                            <p className="card-text" style={{ height: "90px" }}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias beatae natus alias, porro nisi quisquam, quidem, quisquam doloremque.
                            </p>
                            <div className="my-2">
                                <i className="bi bi-people me-2"></i>1 Orang
                            </div>
                            <div className="my-2">
                                <i className="bi bi-gear me-2"></i>Matic
                            </div>
                            <div className="my-2">
                                <i className="bi bi-calendar4 me-2"></i>29 Juni 2022
                            </div>
                            <a href="/cars" className="btn btn-success text-light w-100 mt-2 fw-bold mt-4" style={{ fontSize: "14px" }}>
                                Pilih Mobil
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col m-2">
                    <div className="card" style={{ width: "18rem", height: "550px" }}>
                        <img src={Imgred} className="card-img-top img-fluid" alt="" style={{ height: "190px", objectFit: "cover" }} />
                        <div className="card-body" style={{ fontSize: "14px" }}>
                            <p className="card-title">Chevrolet</p>
                            <p className="fw-bold">Rp. 600.000 / hari</p>
                            <p className="card-text" style={{ height: "90px" }}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias beatae natus alias, porro nisi quisquam, quidem, quisquam doloremque.
                            </p>
                            <div className="my-2">
                                <i className="bi bi-people me-2"></i>2 Orang
                            </div>
                            <div className="my-2">
                                <i className="bi bi-gear me-2"></i>Manual
                            </div>
                            <div className="my-2">
                                <i className="bi bi-calendar4 me-2"></i>14 Maret 2022
                            </div>
                            <a href="/cars" className="btn btn-success text-light w-100 mt-2 fw-bold mt-4" style={{ fontSize: "14px" }}>
                                Pilih Mobil
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col m-2">
                    <div className="card" style={{ width: "18rem", height: "550px" }}>
                        <img src={Imggrey} className="card-img-top img-fluid" alt="" style={{ height: "190px", objectFit: "cover" }} />
                        <div className="card-body" style={{ fontSize: "14px" }}>
                            <p className="card-title">McLaren</p>
                            <p className="fw-bold">Rp. 800.000 / hari</p>
                            <p className="card-text" style={{ height: "90px" }}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias beatae natus alias, porro nisi quisquam, quidem, quisquam doloremque.
                            </p>
                            <div className="my-2">
                                <i className="bi bi-people me-2"></i>2 Orang
                            </div>
                            <div className="my-2">
                                <i className="bi bi-gear me-2"></i>Manual
                            </div>
                            <div className="my-2">
                                <i className="bi bi-calendar4 me-2"></i>9 Mei 2022
                            </div>
                            <a href="/cars" className="btn btn-success text-light w-100 mt-2 fw-bold mt-4" style={{ fontSize: "14px" }}>
                                Pilih Mobil
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}