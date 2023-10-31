import React from "react";
import Sidebar from "../Admin-section/Sidebar-section/Sidebar";

const DashboardAdmin = () => {
  return (
    <>
      <Sidebar />
      <div
        className="container"
        style={{ marginLeft: "190px", marginTop: "-520px" }}
      >
        <h1>Dash board</h1>
        <div className="cards  " style={{ display: "flex",   textAlign:'center', fontWeight:'600'}}>
          <div
            style={{
              height: "150px",
              width: "270px",
              backgroundColor: "lightblue",
              margin: "20px",
              borderRadius: "10px",
            }}
          >
            Tottal Sale
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
