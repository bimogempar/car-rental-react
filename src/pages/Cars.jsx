import React from "react";
import MyLayout from "../components/MyLayout";
import SearchCar from "../components/SearchCar";
import Hero from "../components/Hero";
import CardCars from "../components/CardCars";

export default function Cars() {
  return (
      <MyLayout>
        <Hero />
        <SearchCar />
        <CardCars />
      </MyLayout>
  );
}
