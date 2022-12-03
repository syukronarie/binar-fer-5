import React, { useState } from "react";
import APICar from "../apis/customer/APICar";

// name
// category
// isRented
// minPrice
// maxPrice

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

		const result = await APICar.searchCar(payload);
		if (result.status === 200) {
			setCars(result.data.cars);
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
					<option value="TRUE">Disewa</option>
					<option value="FALSE">Tersedia</option>
				</select>
				<select name="price" id="isRented">
					<option value="cheap">&lt; Rp. 400.000</option>
					<option value="medium">Rp. 400.000 - Rp. 600.000</option>
					<option value="expensive">&gt; Rp. 600.000</option>
				</select>
				<button type="submit">Cari Mobil</button>
			</form>
			<div>
				{cars.map((car) => (
					<div key={car.id}>
						<h1>name: {car.name}</h1>
						<p>category: {car.category}</p>
						<p>price: {car.price}</p>
						<p>status: {car.status}</p>
						<img src={car.image} alt={car.name} />
					</div>
				))}
			</div>
		</div>
	);
};

export default SearchCarPage;
