import React from "react";

import Imgpeople from '../assets/img/people.svg';

export default function SearchCar(){
    return (
        <div>
        <div class="container bg-secondary">
          <div class="rounded p-3 row justify-content-evenly bg-light">
            <div class="col-md-2 mb-3">
              <label for="" class="form-label">
                Tipe Driver
              </label>
              <select id="tipedriver" class="form-select">
                <option value="" selected disabled>
                  Pilih tipe driver
                </option>
                <option value="1">Dengan Sopir</option>
                <option value="2">Tanpa Sopir</option>
              </select>
            </div>
            <div class="col-md-2 mb-3">
              <label for="date" class="form-label">
                Tanggal
              </label>
              <input
                type="date"
                class="form-control"
                id="dateSelect"
                placeholder="Pilih Tanggal"
              />
            </div>
            <div class="col-md-2 mb-3">
              <label for="" class="form-label">
                Waktu Jemput/Ambil
              </label>
              <input
                type="time"
                class="form-control"
                id="timeSelect"
                placeholder="Pilih Waktu"
              />
            </div>
            <div class="col-md-2 mb-3">
              <label for="" class="form-label">
                Jumlah Penumpang
              </label>
              <div class="input-group">
                <input
                  type="number"
                  class="form-control"
                  id="searchCapacity"
                  placeholder="Jumlah Penumpang"
                />
                <span class="input-group-text bg-light">
                  <img src={Imgpeople} alt="people" />
                </span>
              </div>
            </div>
            <div class="col-md-2 mt-auto">
              <button
                id="buttonSearch"
                class="btn btn-success mb-3"
                type="submit"
              >
                Cari Mobil
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}