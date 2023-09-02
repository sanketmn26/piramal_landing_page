import React from "react";
import callus from "../assets/callus.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import logo1 from "../assets/logo1.png";

const Section5 = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "#F3F4F9",
          padding: "5rem 0 3rem 0",
          textAlign: "center",
        }}
      >
        <div
          style={{
            margin: "auto",
            width: "7rem",
            height: "7rem",
            background: "#1A2541",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={callus} />
        </div>

        <div
          style={{
            width: "50%",
            margin: "auto",
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          <span id="h2-1"> + 022 </span> <span id="h2-2"> 506 47538 </span>
        </div>

        <div
          style={{
            width: "50%",
            margin: "auto",
            textAlign: "center",
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="social-icons">
            <img src={twitter} />
          </div>
          <div className="social-icons">
            <img src={facebook} />
          </div>
          <div className="social-icons">
            <img src={instagram} />
          </div>
        </div>

        <div
          style={{ display: "flex", justifyContent: "center", margin: "4rem" }}
        >
          <img src={logo1} />
        </div>
        <p style={{ color: "#000", fontFamily: "Poppins", fontSize: "20px" }}>
          © 2023<span style={{ fontWeight: 700 }}>Piramal.</span>ALL RIGHTS
          RESERVED.
        </p>
      </div>
    </>
  );
};

export default Section5;
