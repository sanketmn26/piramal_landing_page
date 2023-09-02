import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "../App.css";

import call from "../assets/call.svg";
import security from "../assets/security.svg";
import ring from "../assets/ringing.svg";
import car from "../assets/car-parking.svg";
import meeting from "../assets/meeting.svg";
import ac from "../assets/ac.svg";
import shop from "../assets/shop.svg";
import swim from "../assets/swim.svg";
import massage from "../assets/massage.svg";
import gym_img from "../assets/gym-image.png";

const Section3 = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          paddingTop: "3rem",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#00E5A1",
            fontFamily: "Poppins",
            fontWeight: "700",
            fontSize: "20px",
          }}
        >
          ARANYA'S SERVICES
        </Typography>

        <Typography
          sx={{
            color: "#000",
            fontFamily: "Gabriela",
            fontWeight: "500",
            fontSize: "60px",
            lineHeight: "150%",
          }}
        >
          30+ PREMIUM AMENTIES
        </Typography>

        <Box sx={{ fontFamily: "Poppins", py: "4rem" }}>
          <Grid container spacing={2}>
            <Grid item sm={8} md={6} lg={4}>
              <div className="amenities-main-div">
                <div className="amenities-img">
                  <img src={call} />
                </div>
                <div>
                  <Typography className="amenities">RECEPTION</Typography>
                  <Typography className="amenities-sub">
                    6 area for receptionist serve 24/7
                  </Typography>
                </div>
              </div>
            </Grid>

            <Grid item sm={8} md={6} lg={4}>
              <div className="amenities-main-div">
                <div className="amenities-img">
                  <img src={security} />
                </div>
                <div>
                  <Typography className="amenities">SECURITY</Typography>
                  <Typography className="amenities-sub">
                    Security team with 24/7 camera system
                  </Typography>
                </div>
              </div>
            </Grid>

            <Grid item sm={8} md={6} lg={4}>
              <div className="amenities-main-div">
                <div className="amenities-img">
                  <img src={ring} />
                </div>
                <div>
                  <Typography className="amenities">FIRE ALARM</Typography>
                  <Typography className="amenities-sub">
                    Automatic fire extinguishing system
                  </Typography>
                </div>
              </div>
            </Grid>

            <Grid item sm={8} md={6} lg={4}>
              <div className="amenities-main-div">
                <div className="amenities-img">
                  <img src={car} />
                </div>
                <div>
                  <Typography className="amenities">PARKING</Typography>
                  <Typography className="amenities-sub">
                    Parking area with extra capacity
                  </Typography>
                </div>
              </div>
            </Grid>

            <Grid item sm={8} md={6} lg={4}>
              <div className="amenities-main-div">
                <div className="amenities-img">
                  <img src={meeting} />
                </div>
                <div>
                  <Typography className="amenities">CONFERENCE ROOM</Typography>
                  <Typography className="amenities-sub">
                    5 conference room setup in each block
                  </Typography>
                </div>
              </div>
            </Grid>

            <Grid item sm={8} md={6} lg={4}>
              <div className="amenities-main-div">
                <div className="amenities-img">
                  <img src={ac} />
                </div>
                <div>
                  <Typography className="amenities">CONDITIONING</Typography>
                  <Typography className="amenities-sub">
                    Ensure ventilation and air conditioning
                  </Typography>
                </div>
              </div>
            </Grid>

            <Grid item sm={8} md={6} lg={4}>
              <div className="amenities-main-div">
                <div className="amenities-img">
                  <img src={shop} />
                </div>
                <div>
                  <Typography className="amenities">SUPERMARKET</Typography>
                  <Typography className="amenities-sub">
                    5 supermarket in each block
                  </Typography>
                </div>
              </div>
            </Grid>

            <Grid item sm={8} md={6} lg={4}>
              <div className="amenities-main-div">
                <div className="amenities-img">
                  <img src={massage} />
                </div>
                <div>
                  <Typography className="amenities">SPA AND MASSAGE</Typography>
                  <Typography className="amenities-sub">
                    Spa and Massage service for better health
                  </Typography>
                </div>
              </div>
            </Grid>

            <Grid item sm={8} md={6} lg={4}>
              <div className="amenities-main-div">
                <div className="amenities-img">
                  <img src={swim} />
                </div>
                <div>
                  <Typography className="amenities">4 SEASON POOL</Typography>
                  <Typography className="amenities-sub">
                    5 star indoor swimming 4 seasons
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>

        <img
          src={gym_img}
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            objectPosition: "0px 70%",
            display:"block"
          }}
        />
      </div>
    </>
  );
};

export default Section3;
