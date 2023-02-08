import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCarData } from "../store/features/rentSlice";
import { fetchSearchCars, searchPayloadSearchCars, selectSearchCars, setPayload } from "../store/features/searchCarsSlice";
import useDebounce from "../hooks/useDebounce";

export default function ListCarsPage() {
  const dispatch = useDispatch();
  const searchCarsData = useSelector(selectSearchCars);
  const { payload } = useSelector(searchPayloadSearchCars);

  const [_searchByName, setSearchValue] = useState("");
  const searchByName = useDebounce(_searchByName, 1000);

  const handleRent = (carData) => {
    dispatch(setCarData(carData));
  };

  useEffect(() => {
    dispatch(setPayload({ name: searchByName }));
  }, [searchByName, dispatch]);

  useEffect(() => {
    if (payload) {
      dispatch(fetchSearchCars({ ...payload }));
    } else {
      dispatch(fetchSearchCars());
    }
  }, [payload, dispatch]);

  return (
    <div>
      <h1>ListCars</h1>
      <input type="text" onChange={(e) => setSearchValue(e.target.value)} placeholder="Enter a keyword" />
      <div>
        {searchCarsData.data?.cars.map((car) => (
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
