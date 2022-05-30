import React from "react";
import { Container } from "react-bootstrap";

export default function Rent() {
    return(
        <Container>
          <div className="row mt-5 pt-3">
            <div className="col-md mt-5 text-center ">
              <h3>Sewa Mobil di (Lokasimu) Sekarang</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                consectetur atque tempora dolorum porro.
              </p>
              <button className="btn btn-success">Mulai Sewa Mobil</button>
            </div>
          </div>
        </Container>
    )
}