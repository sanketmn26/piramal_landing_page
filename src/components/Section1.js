import React from "react";
import bridge from "../assets/bridge.jpg";
import vectorSvg from "../assets/vector-svg.svg";
import arrowSvg from "../assets/arrow-svg.svg";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";


const Section1 = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "150vh",
          backgroundImage: `url(${bridge})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "105%",
          backgroundPosition: "0% 100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ marginTop: "25%", textAlign: "center" }}>
          <Button
            variant="outlined"
            sx={{
              margin: "auto",
              border: "1px solid white",
              width: "13rem",
              height: "4rem",
              boxShadow: "none",
              borderRadius: "8px",
              fontSize: "14px",
              my: 2,
              color: "white",
              display: "block",

              "&:hover": {
                border: "1px solid white",
              },
            }}
          >
            MUMBAI
          </Button>

          <Box
            sx={{
              color: "#fff",
              mt: "6rem",
              fontSize: "160px",
              fontWeight: 500,
              fontStyle: "normal",
              lineHeight: "normal",
              fontFamily: "Gabriela",
            }}
          >
            PROJECT
          </Box>
          <Box
            sx={{
              color: "#fff",
              fontFamily: "Gabriela",
              fontSize: "120px",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "normal",
            }}
          >
            ARANYA
          </Box>
          <Box
            sx={{
              color: "#00E5A1",
              fontFamily: "Sharpe PERSONAL",
              fontSize: "30px",
              fontStyle: "normal",
              fontWeight: 100,
              lineHeight: "normal",
            }}
          >
            Piramal Groups
          </Box>

          <Box
            mt={"4rem"}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "160px",
              position: "relative",
            }}
          >
            <img src={vectorSvg} />
            <img
              src={arrowSvg}
              style={{
                position: "absolute",
                left: "22%",
                top: "20%",
              }}
            />
          </Box>
        </div>
      </div>
    </>
  );
};

export default Section1;
