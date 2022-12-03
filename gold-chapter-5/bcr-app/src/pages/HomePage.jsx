import React from "react";
import { Link } from "react-router-dom";
// import Auth from "../utils/Auth";

const HomePage = () => {
	// const navigate = useNavigate();

	return (
		<div>
			{/* {Auth.isAuthorization() && (
				<button onClick={() => Auth.logout(navigate)}>Logout</button>
			)} */}

			<h1>HomePage</h1>
			<Link to="/search-car">Go To Halaman Cari Mobil</Link>
			<Link to="/login">Go to Login Page</Link>
		</div>
	);
};

export default HomePage;
