import React from "react";
import { Container } from "react-bootstrap";

import Imgservice from "../assets/img/img_service.png";

export default function Service() {
    return (
        <Container>
          <div className="row mt-5 pt-5">
            <div className="col-md-6 text-center mt-5">
              <img src={Imgservice} className="img-fluid" alt="GambarOrang" />
            </div>
            <div className="col-md-6 mt-5">
              <h3 className="text-jutify mt-4">
                Best Car Rental for any kind of trip in (Lokasimu)!
              </h3>
              <p className="mt-4">
                Sewa mobil di (lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <ul className="list-group">
                <li className="list-group-item border-0">
                  <img src="/assets/centang.svg" alt="" /> Sewa Mobil Dengan
                  Supir di Bali 12 Jam
                </li>
                <li className="list-group-item border-0">
                  <img src="/assets/centang.svg" alt="" /> Sewa Mobil Lepas Kunci
                  di Bali 24 Jam
                </li>
                <li className="list-group-item border-0">
                  <img src="/assets/centang.svg" alt="" /> Sewa Mobil Jangka
                  Panjang Bulanan
                </li>
                <li className="list-group-item border-0">
                  <img src="/assets/centang.svg" alt="" /> Gratis Antar - Jemput
                  Mobil di Bandara
                </li>
                <li className="list-group-item border-0">
                  <img src="/assets/centang.svg" alt="" /> Layanan Airport
                  Transfer / Drop In Out
                </li>
              </ul>
            </div>
          </div>
        </Container>
    );

}