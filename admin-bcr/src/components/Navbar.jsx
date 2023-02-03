import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../utils/Auth";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Navbar</h1>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/list-orders">List Orders</Link>
        </li>
        <li>
          <Link to="/list-cars">List Cars</Link>
        </li>

        <li>
          <Link to="/car-rented-chart">Car Rented Chart</Link>
        </li>
        <li>
          <Link to="/payment">Payment Page</Link>
        </li>
        {Auth.isAuthorization() && (
          <li>
            <button type="button" onClick={() => Auth.logOut(navigate)}>
              LogOut
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
