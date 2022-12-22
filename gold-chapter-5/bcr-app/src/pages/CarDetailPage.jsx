import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import APICar from "../apis/admin/APICar";

const CarDetail = () => {
	const [car, setCar] = useState();
	const params = useParams();

	React.useEffect(() => {
		(async () => {
			try {
				const res = await APICar.findCarById(params.carId);
				setCar(res.data);
			} catch (error) {
				alert("ups ada yg error dari server");
			}
		})();
	}, []);

	return (
		<div>
			<h1>CarDetail</h1>
			{car ? (
				<div className="car" key={car.id}>
					<h4>name: {car.name}</h4>
					<p>category: {car.category}</p>
					<p>price: {car.price}</p>
					<p>status: {car.status ? "Sedang disewa" : "Tersedia"}</p>
					<img src={car.image} alt={car.name} />
				</div>
			) : (
				<p>loading..</p>
			)}

			<Link to="/">Back to Home</Link>
		</div>
	);
};

export default CarDetail;
