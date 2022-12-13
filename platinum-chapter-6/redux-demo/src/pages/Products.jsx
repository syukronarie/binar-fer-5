import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/features/cartSlicing";

const Products = () => {
	const [data, setData] = useState({ success: false });

	const dispatch = useDispatch();

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
			{data.products?.map((product) => (
				<figure className="product-item" key={product.id}>
					<h2>{product.title}</h2>
					<img src={product.images[0]} alt={product.title} />
					<figcaption>{product.description}</figcaption>
					<p>
						<strong>PRICE ${product.price}</strong>
					</p>
					<button
						onClick={() => {
							const { id, title, description, price } = product;
							dispatch(
								addToCart({
									id,
									title,
									description,
									price,
									image: product.images[0],
								})
							);
						}}
					>
						Add to Cart
					</button>
				</figure>
			))}
		</div>
	);
};

export default Products;
