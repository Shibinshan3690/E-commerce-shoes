import React, { useContext } from "react";
import Sidebar from "../Admin-section/Sidebar-section/Sidebar";
import { userContext } from "../../App";

const DashboardAdmin = () => {
  // By Product

  const {  cart } = useContext(userContext);
  // Calculate the total cash
  const totalCash = cart.reduce(
    (total, item) => total + item.newPrice * item.quantity,
    0
  );

  return (
    <>
      <Sidebar />
      <div
        className="container"
        style={{ marginLeft: "190px", marginTop: "-520px" }}
      >
        <h1>Dash board</h1>
        <div
          className="cards  "
          style={{ display: "flex", textAlign: "center", fontWeight: "600" }}
        >
          <div
            style={{
              height: "150px",
              width: "270px",
              backgroundColor: "lightblue",
              margin: "20px",
              borderRadius: "10px",
            }}
          >
            Total Sale
            <tbody>
             
                <tr >
                  <p style={{ fontSize: "50px" }}>${totalCash}</p>
                </tr>
        
            </tbody>
          </div>
          <div
            style={{
              height: "150px",
              width: "270px",
              backgroundColor: "lightgrey",
              margin: "20px",
              borderRadius: "10px",
            }}
          >
            {" "}
            Visitor
          </div>
          <div
            style={{
              height: "150px",
              width: "270px",
              backgroundColor: "lightsalmon",
              margin: "20px",
              borderRadius: "10px",
            }}
          >
            {" "}
            Revenue
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAdmin;
