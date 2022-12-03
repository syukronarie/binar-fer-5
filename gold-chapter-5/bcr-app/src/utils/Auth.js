import Cookies from "js-cookie";

const Auth = {
	isAuthorization: () => (!!Cookies.get("accessToken") ? true : false),
	getToken: () => Cookies.get("accessToken"),
	logout: (navigate) => {
		Cookies.remove("accessToken");
		navigate("/login");
	},
};

export default Auth;
