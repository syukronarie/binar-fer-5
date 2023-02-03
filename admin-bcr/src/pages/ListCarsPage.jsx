import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCarData } from "../store/features/rentSlice";
import APICar from "../apis/APICar";

export default function ListCarsPage() {
  const [dataGetCars, setDataGetCars] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    APICar.getCars()
      .then((data) => setDataGetCars(data))
      .catch((err) => console.error(err));
  }, []);

  const handleRent = (carData) => {
    dispatch(setCarData(carData));
  };

  return (
    <div>
      <h1>ListCars</h1>
      <div>
        {dataGetCars?.cars.map((car) => (
          <div key={car.id}>
            <p>{car.name}</p>
            <p>{car.price}</p>
            <button type="button" onClick={() => handleRent(car)}>
              <Link to="/payment">Rent</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
