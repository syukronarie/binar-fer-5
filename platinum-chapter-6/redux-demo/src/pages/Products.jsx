import axios from "axios";
import React, { useState } from "react";

const Products = () => {
	const [data, setData] = useState({ success: false });

	React.useEffect(() => {
		const fetchProducts = () => axios.get("https://dummyjson.com/products");
		(async () => {
			try {
				const response = await fetchProducts();
				setData({ success: true, ...response.data });
			} catch (error) {
				setData({ success: false, error });
			}
		})();
	}, []);

	return (
		<div className="product-container">
			{data.products?.map((val) => (
				<figure className="product-item" key={val.id}>
					<h2>{val.title}</h2>
					<img src={val.images[0]} alt={val.title} />
					<figcaption>{val.description}</figcaption>
					<p>
						<strong>PRICE ${val.price}</strong>
					</p>
					<button>Add to Cart</button>
				</figure>
			))}
		</div>
	);
};

export default Products;
