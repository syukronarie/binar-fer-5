import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/features/cartSlicing";
import { fetchProducts } from "../store/features/productsSlicing";

const checkProductsExist = () => {
	const pRoot = localStorage.getItem("persist:root");
	if (pRoot) {
		const data = JSON.parse(pRoot);
		if (data.products.length > 0) return true;
		return null;
	}
	return null;
};

const Products = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);

	React.useEffect(() => {
		const dataPersist = checkProductsExist();
		if (!dataPersist) dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<div className="product-container">
			{products.loading === "pending" ? (
				<p>Loading...</p>
			) : (
				products.data?.products.map((product) => (
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
				))
			)}
		</div>
	);
};

export default Products;
