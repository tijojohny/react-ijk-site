import React from "react";
import logo from "../images/logo.svg";
import home from "../images/home.png";

function Navbar() {
  return (
    <div>
      <div className="navbar-start">
        <img src={logo} alt="logo" />
        {/* <span className="homes"> */}
        <div style={{ paddingLeft: "18rem" }}>
          <p className="navbar-heading">HOME</p>
        </div>
        <p style={{ paddingLeft: "2rem" }} className="navbar-heading">
          PROFILE
        </p>{" "}
        <p style={{ paddingLeft: "2rem" }} className="navbar-heading">
          REPORTS
        </p>{" "}
        <p style={{ paddingLeft: "2rem" }} className="navbar-heading">
          {" "}
          INSIGHTS
        </p>
        {/* </span> */}
        <div style={{ display: "flex", paddingLeft: "15rem" }}>
          <button className="navbar-heading-btn">LOGIN</button>
          <div style={{ paddingLeft: "2rem" }}>
            <button className="navbar-heading-btn"> GET STARTED</button>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", paddingTop: "4rem" }}>
        <div>
          <p className="navbar-p-one">
            Buy your <p className="navbar-p-two">dream home </p>
            <p style={{ paddingRight: "4rem" }} className="">
              {" "}
              in Kyiv!
            </p>
          </p>
          <button className="navbar-btn">GET STARTED</button>
        </div>
        <div style={{ paddingLeft: "2rem" }}>
          <img
            src={home}
            alt="alt"
            style={{ height: "600px", width: "600px" }}
          ></img>
        </div>
      </div>
      <div>
        <p className="navbar-second">
          Senlling a property can be quite challenging If you don't have the
          right tools at your disposals.
        </p>
        <p className="navbar-second-one">
          We help our clients sell, buy or rent properties hassle free. Due to
          our unparalleled results, expertise and dedication, we rank amongst
          the top 6 agencies in Kyiv.We are very proud of the service we provide
          and what our guests have to say about us.
        </p>
      </div>
    </div>
  );
}

export default Navbar;
