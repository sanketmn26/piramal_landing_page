import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../App.css";

import home from "../assets/home.svg";
import location from "../assets/location.svg";
import rupee from "../assets/rupee.svg";
import search from "../assets/search.svg";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.png";

const Section2 = () => {
  return (
    <>
      <div
        style={{
          background: "#1A2440",
          height: "auto",
          width: "100%",
          paddingTop: "22%",
          display: "block",
        }}
      >
        {/* Search bar section starts */}
        <div
          style={{
            position: "relative",
            width: "70%",
            height: "120px",
            margin: "auto",
          }}
        >
          <Typography color={"white"}>Search Your Configuration</Typography>

          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "70px",
              background: "#fff",
              borderRadius: "8px",
              bottom: 0,
              display: "flex",
              alignItem: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="search-div">
              <img height="50px" src={location} />
              <div className="search-div2">
                <div className="search-div3">location</div>
                <select className="search-select">
                  <option>South Mumbai</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>

            <div className="search-div">
              <img height="50px" src={home} />
              <div className="search-div2">
                <div className="search-div3">Property Type</div>
                <select className="search-select">
                  <option>2 BHK</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>

            <div className="search-div">
              <img height="50px" src={rupee} />
              <div className="search-div2">
                <div className="search-div3">Budget</div>
                <select className="search-select">
                  <option>90 L - 1.5 Cr</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>

            <div className="search-div">
              <Button
                variant="contained"
                sx={{
                  m: "10px",
                  width: "50px",
                  height: "50px",
                  background: "#0EA57A",
                  borderRadius: "8px",
                  "&:hover": {
                    background: "#0ea57a",
                  },
                }}
              >
                <img src={search} />
              </Button>
            </div>
          </div>
        </div>
        {/* Search bar section ends */}

        {/* Properties display section starts  */}
        <div
          style={{
            width: "90%",
            height: "auto",
            margin: "auto",
            marginTop: "10%",
          }}
        >
          {/* first row  */}
          <div className="property-display">
            <div className="property-display-img">
              {/* image 1 */}
              <div className="property-display-img1">
                <img src={image1} />
              </div>

              {/* image 2 */}
              <div className="property-display-img2">
                <img src={image2} />
              </div>
            </div>

            <div className="property-display-text">
              <div>
                <Typography className="property-display-text1">
                  MUMBAI
                </Typography>

                <Typography className="property-display-text2">
                  OUR APARTMENTS
                </Typography>

                <Typography className="property-display-text3">
                  Presenting Piramal Aranya, a high rise gated sanctuary that
                  offers luxuriant 2, 3 & 4 BHK homes inclusive of advanced
                  wellness technologies, dual-aspect blue and green views and a
                  world-class lifestyle crafted alongside the world’s leading
                  partners at Rani Baug, Byculla, South Mumbai.
                </Typography>
              </div>
            </div>
          </div>
          {/* First row ends */}

          {/* second row */}
          <div className="property-display">
            <div
              className="property-display-text"
              style={{
                marginLeft: "5%",
              }}
            >
              <div>
                <Typography className="property-display-text1">
                  2 BED EXCLUSIVE RESIDENCES
                </Typography>

                <Typography className="property-display-text2">
                  2BHK - EAST WING
                </Typography>

                <Typography className="property-display-text3">
                  • All bedrooms with en-suite bathrooms <br />
                  • Apartments with harbour views <br />• Master bedroom with
                  corner windows offering panoramic views <br />
                  • All shafts on the external face <br />
                  • Kitchen with dry balcony <br />
                  • Ease of combining apartments to create exclusive wing
                  apartment with expansive living & dining area <br />
                </Typography>
              </div>
            </div>

            <div className="property-display-img">
              {/* image 3 */}
              <div className="property-display-img1">
                <img src={image3} />
              </div>

              {/* image 4 */}
              <div className="property-display-img2">
                <img src={image4} />
              </div>
            </div>
          </div>
          {/* Second Row ends */}
        </div>
        {/* Property display section ends */}

        <hr
          style={{
            margin: "auto",
            width: "90%",
            borderTop: "1px solid #a5a5a5",
            borderBottom: "none",
          }}
        />

        <div
          style={{
            width: "90%",
            display: "flex",
            paddingTop: "7%",
            paddingBottom: "7%",
            margin: "auto",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography className="specs1">50+</Typography>
            <Typography className="specs2">AMENITIES</Typography>
          </div>

          <div>
            <Typography className="specs1">250</Typography>
            <Typography className="specs2">APARTMENTS</Typography>
          </div>

          <div>
            <Typography className="specs1">
              9290
              <span style={{ fontSize: "15px", lineHeight: "1rem" }}>SQMT</span>
            </Typography>
            <Typography className="specs2">RECREATIONAL SPACE</Typography>
          </div>

          <div>
            <Typography className="specs1">1200</Typography>
            <Typography className="specs2">SLOT CAR PARKING</Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
