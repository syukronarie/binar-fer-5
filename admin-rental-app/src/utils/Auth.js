import Cookies from "js-cookie";

const Auth = {
  isAuthorization: () => {
    const token = Cookies.get("token");
    if (token) return true;
    return null;
  },
  getAccessToken: () => Cookies.get("token"),
  logOut: (navigate) => {
    Cookies.remove("token");
    navigate("/sign-in");
  },
  storeUserInfoToCookies: (token) => {
    if (token) Cookies.set("token", token);
    return null;
  },
};

export default Auth;
