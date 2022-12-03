import React, { useState } from "react";
import { Link } from "react-router-dom";
import APICar from "../apis/admin/APICar";

const SearchCarPage = () => {
	const [cars, setCars] = useState([]);

	const handleSearchCar = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const name = formData.get("name");
		const category = formData.get("category");
		const isRented = formData.get("isRented") === "TRUE" ? true : false;
		const price = formData.get("price");

		let minPrice = 0;
		let maxPrice = 0;

		if (price === "cheap") {
			minPrice = 0;
			maxPrice = 400000;
		}

		if (price === "medium") {
			minPrice = 400000;
			maxPrice = 600000;
		}

		if (price === "expensive") {
			minPrice = 600000;
			maxPrice = 10000000;
		}

		const payload = {
			name,
			category,
			isRented,
			minPrice,
			maxPrice,
		};

		try {
			const result = await APICar.searchCar(payload);
			if (result.data) setCars(result.data);
		} catch (error) {
			alert("Ups ada yg error dari server");
		}
	};

	return (
		<div>
			<h1>SearchCarPage</h1>
			<form onSubmit={handleSearchCar}>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Tulis Nama Mobil"
				/>
				<select name="category" id="category">
					<option value="small">2 - 4 Orang</option>
					<option value="medium">4 - 6 Orang</option>
					<option value="large">6 - 8 Orang</option>
				</select>
				<select name="isRented" id="isRented">
					<option value="FALSE">Tersedia</option>
					<option value="TRUE">Disewa</option>
				</select>
				<select name="price" id="isRented">
					<option value="cheap">&lt; Rp. 400.000</option>
					<option value="medium">Rp. 400.000 - Rp. 600.000</option>
					<option value="expensive">&gt; Rp. 600.000</option>
				</select>
				<button type="submit">Cari Mobil</button>
			</form>
			<div className="cars">
				{cars.map((car) => (
					<div className="car" key={car.id}>
						<Link to={`/car/${car.id}`}>
							<h4>name: {car.name}</h4>
						</Link>
						<p>category: {car.category}</p>
						<p>price: {car.price}</p>
						<p>status: {car.status ? "Sedang disewa" : "Tersedia"}</p>
						<img src={car.image} alt={car.name} />
					</div>
				))}
			</div>
		</div>
	);
};

export default SearchCarPage;
